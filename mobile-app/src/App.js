// src/App.js
import React, { useState } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style/material.css';
import './style/style.css';

import FullWidthSlider from './components/FullWidthSlider';
import TileButton from './components/AugheyTile';
import AppHeader from './components/AppHeader';
import TabBar from './components/TabBar';
import SalesEnquiryComponent from './components/SalesEnquiryComponent';

// Images
import homeArchImage from './img/home-arch.jpg';
import homeWovenImage from './img/home-woven.jpg';
import ImgSnowWide from './img/img_snow_wide.jpg';

// Slide-in Menu Component from the right
const SlideInMenu = ({ isVisible, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 998,
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease-in-out, visibility 0.3s ease-in-out'
        }}
        onClick={onClose}
      />
      
      {/* Slide-in menu */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          maxWidth: '80vw',
          backgroundColor: 'white',
          boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
          zIndex: 999,
          transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Menu Header */}
        <div style={{
          backgroundColor: '#6200ea',
          color: 'white',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>
            Menu
          </h3>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>
        
        {/* Menu Items */}
        <div style={{ flex: 1, overflow: 'auto' }}>
          <div style={{ padding: '8px 0' }}>
            
            {/* Profile Section */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#6200ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold'
              }}>
                U
              </div>
              <div>
                <div style={{ fontWeight: '500', fontSize: '16px' }}>User Name</div>
                <div style={{ color: '#666', fontSize: '14px' }}>user@example.com</div>
              </div>
            </div>

            {/* Menu Items */}
            <MenuItem icon="🏠" label="Home" onClick={onClose} />
            <MenuItem icon="👤" label="My Account" onClick={onClose} />
            <MenuItem icon="📋" label="Order History" onClick={onClose} />
            <MenuItem icon="❤️" label="Favorites" onClick={onClose} />
            <MenuItem icon="🔔" label="Notifications" onClick={onClose} />
            <MenuItem icon="⚙️" label="Settings" onClick={onClose} />
            
            <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '8px 0' }} />
            
            <MenuItem icon="📞" label="Support" onClick={onClose} />
            <MenuItem icon="📝" label="Feedback" onClick={onClose} />
            <MenuItem icon="ℹ️" label="About" onClick={onClose} />
            
            <div style={{ height: '1px', backgroundColor: '#f0f0f0', margin: '8px 0' }} />
            
            <MenuItem icon="🚪" label="Sign Out" onClick={onClose} color="#d32f2f" />
          </div>
        </div>
      </div>
    </>
  );
};

// Menu Item Component
const MenuItem = ({ icon, label, onClick, color = '#333' }) => {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 20px',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        fontSize: '16px',
        color: color,
        textAlign: 'left',
        transition: 'background-color 0.2s ease'
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'}
      onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
    >
      <span style={{ fontSize: '20px', minWidth: '24px' }}>{icon}</span>
      <span>{label}</span>
    </button>
  );
};

// Full Page Slide-up Component with its own toolbar
const FullPageSlideUp = ({ isVisible, onClose, title, children }) => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 1000,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Page Toolbar */}
      <div style={{
        backgroundColor: '#6200ea',
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        minHeight: '64px'
      }}>
        <button 
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '16px'
          }}
        >
          ←
        </button>
        <h1 style={{ 
          margin: 0, 
          fontSize: '20px', 
          fontWeight: '500',
          flex: 1
        }}>
          {title}
        </h1>
        
        {/* Optional toolbar actions */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            ⋮
          </button>
        </div>
      </div>
      
      {/* Scrollable Content */}
      <div style={{ 
        flex: 1, 
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle tab clicks to show full pages
  const handleTabClick = (tabName) => {
    if (tabName !== 'home') {
      setCurrentPage(tabName);
    }
    setActiveTab(tabName);
  };

  const closePage = () => {
    setCurrentPage(null);
    setActiveTab('home');
  };

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Your slides data
  const yourSlides = [
    {
      id: 1,
      type: 'image',
      src: homeArchImage,
      overlay: true,
      overlayPosition: 'center-left'
    },
    {
      id: 2,
      type: 'image',
      src: homeWovenImage,
      overlay: true,
      overlayPosition: 'center-right'
    },
    {
      id: 3,
      type: 'image',
      src: ImgSnowWide,
      content: (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: 'white',
          textAlign: 'center',
          padding: '40px'
        }}>
          <div>
            <h2 style={{ fontSize: '36px', margin: '0 0 16px 0' }}>
              Get Your Quote
            </h2>
            <p style={{ fontSize: '18px', margin: '0 0 24px 0' }}>
              Contact us today for professional installation
            </p>
            <button style={{
              background: '#03dac6',
              color: '#000',
              border: 'none',
              padding: '16px 32px',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}>
              Contact Us
            </button>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      <AppHeader onMenuClick={toggleMenu} />
      
      {/* Main scrollable content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '80px' // Add space for TabBar
      }}>
        <FullWidthSlider
          slides={yourSlides}
          height="300px"
          autoPlay={true}
          autoPlayInterval={5000}
          showControls={true}
          showDots={true}
          showCounter={true}
          pauseOnHover={true}
        />

        <SalesEnquiryComponent />

        <div style={{ padding: '16px' }}>
          <h2>Catalogue</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px',
            marginBottom: '16px'
          }}>
            <TileButton />
            <TileButton />
            <TileButton />
            <TileButton />
          </div>
        </div>
      </div>

      {/* Fixed TabBar at bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <TabBar 
          activeTab={activeTab} 
          onTabClick={handleTabClick}
        />
      </div>

      {/* Full Page Slide-ups */}
      <FullPageSlideUp 
        isVisible={currentPage === 'products'} 
        onClose={closePage}
        title="Products"
      >
        <div style={{ padding: '20px' }}>
          <h2>Our Products</h2>
          <p>This is the full products page with its own toolbar.</p>
          <p>Add your product listings, categories, and details here.</p>
          
          {/* Example content */}
          <div style={{ marginTop: '24px' }}>
            <h3>Product Categories</h3>
            <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                backgroundColor: '#f5f5f5'
              }}>
                Category 1
              </div>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                backgroundColor: '#f5f5f5'
              }}>
                Category 2
              </div>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px',
                backgroundColor: '#f5f5f5'
              }}>
                Category 3
              </div>
            </div>
          </div>
        </div>
      </FullPageSlideUp>

      <FullPageSlideUp 
        isVisible={currentPage === 'services'} 
        onClose={closePage}
        title="Services"
      >
        <div style={{ padding: '20px' }}>
          <h2>Our Services</h2>
          <p>This is the full services page with its own toolbar.</p>
          <p>List your services, pricing, and booking options here.</p>
          
          {/* Example content */}
          <div style={{ marginTop: '24px' }}>
            <h3>Available Services</h3>
            <div style={{ display: 'grid', gap: '16px', marginTop: '16px' }}>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Installation Service</h4>
                <p style={{ margin: 0, color: '#666' }}>Professional installation by certified technicians</p>
              </div>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Maintenance Service</h4>
                <p style={{ margin: 0, color: '#666' }}>Regular maintenance and support services</p>
              </div>
              <div style={{ 
                padding: '16px', 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px'
              }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Consultation Service</h4>
                <p style={{ margin: 0, color: '#666' }}>Expert advice and project planning</p>
              </div>
            </div>
          </div>
        </div>
      </FullPageSlideUp>

      <FullPageSlideUp 
        isVisible={currentPage === 'contact'} 
        onClose={closePage}
        title="Contact Us"
      >
        <div style={{ padding: '20px' }}>
          <h2>Get In Touch</h2>
          <p>This is the full contact page with its own toolbar.</p>
          
          {/* Example contact form */}
          <div style={{ marginTop: '24px' }}>
            <h3>Contact Information</h3>
            <div style={{ marginTop: '16px', lineHeight: '1.6' }}>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Email:</strong> info@company.com</p>
              <p><strong>Address:</strong> 123 Business St, City, State 12345</p>
            </div>
            
            <h3 style={{ marginTop: '32px' }}>Send us a message</h3>
            <div style={{ marginTop: '16px' }}>
              <input 
                type="text" 
                placeholder="Your Name"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
              <input 
                type="email" 
                placeholder="Your Email"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px'
                }}
              />
              <textarea 
                placeholder="Your Message"
                rows="4"
                style={{ 
                  width: '100%', 
                  padding: '12px', 
                  marginBottom: '16px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
              />
              <button style={{
                backgroundColor: '#6200ea',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '4px',
                fontSize: '16px',
                cursor: 'pointer'
              }}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </FullPageSlideUp>

      <FullPageSlideUp 
        isVisible={currentPage === 'about'} 
        onClose={closePage}
        title="About Us"
      >
        <div style={{ padding: '20px' }}>
          <h2>About Our Company</h2>
          <p>This is the full about page with its own toolbar.</p>
          
          {/* Example about content */}
          <div style={{ marginTop: '24px' }}>
            <h3>Our Story</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '24px' }}>
              Founded in 2020, our company has been dedicated to providing high-quality 
              products and services to our customers. We believe in innovation, quality, 
              and customer satisfaction.
            </p>
            
            <h3>Our Mission</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '24px' }}>
              To deliver exceptional products and services that exceed our customers' 
              expectations while maintaining the highest standards of quality and integrity.
            </p>
            
            <h3>Our Values</h3>
            <ul style={{ lineHeight: '1.6' }}>
              <li>Quality first</li>
              <li>Customer satisfaction</li>
              <li>Innovation and creativity</li>
              <li>Integrity and transparency</li>
              <li>Teamwork and collaboration</li>
            </ul>
          </div>
        </div>
      </FullPageSlideUp>

      {/* Slide-in Menu from Right */}
      <SlideInMenu 
        isVisible={isMenuOpen} 
        onClose={closeMenu}
      />
    </div>
  );
}

export default App;