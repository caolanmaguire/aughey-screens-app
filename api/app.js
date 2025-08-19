// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB_HOST='146.190.154.157'
// DB_USER='remote_user'
// DB_NAME='app'
// DB_PORT=3306

// Database configuration
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
async function testConnection() {
  try {
    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database successfully');
    connection.release();
  } catch (error) {
    console.error('❌ Error connecting to MySQL database:', error.message);
    process.exit(1);
  }
}

// Basic routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Aughey Screens MySQL API',
    status: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Health check endpoint
app.get('/health', async (req, res) => {
  try {
    await pool.execute('SELECT 1');
    res.json({
      status: 'healthy',
      database: 'connected',
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    res.status(500).json({
      status: 'unhealthy',
      database: 'disconnected',
      error: error.message
    });
  }
});

// GET all users (excludes PIN codes for security)
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT id, email, created_at, updated_at FROM users');
    res.json({
      success: true,
      data: rows
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
});

// GET user by ID (excludes PIN code for security)
app.get('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID is a number
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID'
      });
    }
    
    const [rows] = await pool.execute(
      'SELECT id, email, created_at, updated_at FROM users WHERE id = ?', 
      [id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    res.json({
      success: true,
      data: rows[0]
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
});

// POST - Create new user
app.post('/api/users', async (req, res) => {
  try {
    const { email, pin_code } = req.body;
    
    // Basic validation
    if (!email || !pin_code) {
      return res.status(400).json({
        success: false,
        message: 'Email and pin_code are required'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    // Validate PIN code (4 digits)
    const pinRegex = /^\d{4}$/;
    if (!pinRegex.test(pin_code)) {
      return res.status(400).json({
        success: false,
        message: 'PIN code must be exactly 4 digits'
      });
    }
    
    const [result] = await pool.execute(
      'INSERT INTO users (email, pin_code) VALUES (?, ?)',
      [email, pin_code]
    );
    
    res.status(201).json({
      success: true,
      message: 'User created successfully',
      data: {
        id: result.insertId,
        email,
        // Don't return PIN in response for security
        created_at: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error creating user:', error);
    
    // Handle duplicate email error
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error creating user',
      error: error.message
    });
  }
});

// PUT - Update user
app.put('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email, pin_code } = req.body;
    
    // Validate ID is a number
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID'
      });
    }
    
    // Build dynamic update query
    let updateFields = [];
    let values = [];
    
    if (email) {
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email format'
        });
      }
      updateFields.push('email = ?');
      values.push(email);
    }
    
    if (pin_code) {
      // Validate PIN code (4 digits)
      const pinRegex = /^\d{4}$/;
      if (!pinRegex.test(pin_code)) {
        return res.status(400).json({
          success: false,
          message: 'PIN code must be exactly 4 digits'
        });
      }
      updateFields.push('pin_code = ?');
      values.push(pin_code);
    }
    
    if (updateFields.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'No fields to update (email or pin_code required)'
      });
    }
    
    // Add updated_at timestamp and user ID
    updateFields.push('updated_at = NOW()');
    values.push(id);
    
    const query = `UPDATE users SET ${updateFields.join(', ')} WHERE id = ?`;
    const [result] = await pool.execute(query, values);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    res.json({
      success: true,
      message: 'User updated successfully'
    });
  } catch (error) {
    console.error('Error updating user:', error);
    
    // Handle duplicate email error
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({
        success: false,
        message: 'Email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Error updating user',
      error: error.message
    });
  }
});

// DELETE - Delete user
app.delete('/api/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate ID is a number
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid user ID'
      });
    }
    
    const [result] = await pool.execute('DELETE FROM users WHERE id = ?', [id]);
    
    if (result.affectedRows === 0) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }
    
    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message
    });
  }
});

// BONUS: Login endpoint using email and PIN
app.post('/api/login', async (req, res) => {
  try {
    const { email, pin_code } = req.body;
    
    if (!email || !pin_code) {
      return res.status(400).json({
        success: false,
        message: 'Email and pin_code are required'
      });
    }
    
    const [rows] = await pool.execute(
      'SELECT id, email FROM users WHERE email = ? AND pin_code = ?',
      [email, pin_code]
    );
    
    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or PIN code'
      });
    }
    
    res.json({
      success: true,
      message: 'Login successful',
      data: {
        id: rows[0].id,
        email: rows[0].email
      }
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({
      success: false,
      message: 'Error during login',
      error: error.message
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
async function startServer() {
  await testConnection();
  app.listen(PORT, () => {
    consol
    e.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

startServer().catch(console.error);