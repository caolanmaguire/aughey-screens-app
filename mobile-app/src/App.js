// src/App.js
import React, { useState } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style/material.css';
import './style/style.css';

import FullWidthSlider from './components/FullWidthSlider';
import TileButton from './components/AugheyTile';
import AppHeader from './components/AppHeader';
import SalesEnquiryComponent from './components/SalesEnquiryComponent';
import SalesEnquiryForm from './components/SalesEnquiryForm';

// Images
import homeArchImage from './img/home-arch.jpg';
import homeWovenImage from './img/home-woven.jpg';
import ImgSnowWide from './img/img_snow_wide.jpg';

// Tile data list - add or remove items as needed
const tileData = [
  ['Premium Ceramic Tiles', 'High-quality ceramic tiles perfect for modern kitchens and bathrooms. Available in multiple colors and finishes with excellent durability and water resistance.'],
  ['Natural Stone Collection', 'Beautiful natural stone tiles sourced from the finest quarries. Durable and elegant for any space, bringing the beauty of nature indoors.'],
  ['Mosaic Designs', 'Stunning mosaic tiles that add artistic flair to your walls and floors. Perfect for accent walls, backsplashes, and creating unique design features.'],
  ['Porcelain Pro Series', 'Professional-grade porcelain tiles designed for high-traffic areas. Slip-resistant and easy to maintain, ideal for commercial and residential use.'],
  ['Wood Effect Tiles', 'Get the look of hardwood with the durability of ceramic. Perfect for any room in your home, combining warmth with practicality.'],
  ['Luxury Marble Style', 'Marble-effect tiles that bring elegance and sophistication to your space at an affordable price. Create a luxurious atmosphere without the maintenance.']
];

// Custom TabBar Component (completely independent of OnsenUI)
const CustomTabBar = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'products', icon: '📦', label: 'Products' },
    { id: 'services', icon: '⚙️', label: 'Services' },
    { id: 'contact', icon: '📞', label: 'Contact' },
    { id: 'about', icon: 'ℹ️', label: 'About' }
  ];

  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#fff',
      borderTop: '1px solid #e0e0e0',
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          style={{
            flex: 1,
            padding: '12px 8px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: activeTab === tab.id ? '#6200ea' : '#666',
            fontSize: '12px',
            transition: 'color 0.2s ease'
          }}
        >
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
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
        zIndex: 100,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Page Toolbar */}
      <div style={{
        backgroundColor: 'rgb(61, 61, 61)',
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        minHeight: '64px',
        zIndex: 101
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
  const [selectedTile, setSelectedTile] = useState(null);

  // Handle tab clicks to show full pages
  const handleTabClick = (tabName) => {
    if (tabName !== 'home') {
      setCurrentPage(tabName);
    } else {
      setCurrentPage(null);
    }
    setActiveTab(tabName);
  };

  const closePage = () => {
    setCurrentPage(null);
    setActiveTab('home');
  };

  // Handle tile click to show popup
  const handleTileClick = (index) => {
    setSelectedTile({
      title: tileData[index][0],
      content: tileData[index][1]
    });
  };

  // Close tile popup
  const closePopup = () => {
    setSelectedTile(null);
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
      <AppHeader />
      
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

        {/* Catalogue Section */}
        <div style={{ padding: '16px' }}>
          <h2>Catalogue</h2>

          <input type='text' placeholder='save your name' id='name' style={{
            width: '100%',
            padding: '12px',
            marginBottom: '16px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontSize: '16px'
          }} />
          <input type='submit' value='Submit' onClick={() => localStorage.setItem('name',document.getElementById('name').value)} /> <br/> <br/>

          <input type='submit' value='Get Value' onClick={() => alert(localStorage.getItem('name'))} />


          
          {/* Generate TileButton for each item in the list */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '16px',
            marginBottom: '16px'
          }}>
            {tileData.map((item, index) => (
              <div key={index} onClick={() => handleTileClick(index)}>
                <TileButton />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Custom TabBar at bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <CustomTabBar 
          activeTab={activeTab} 
          onTabClick={handleTabClick}
        />
      </div>

      {/* Simple Popup for tile content */}
      {selectedTile && (
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
              zIndex: 1001,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={closePopup}
          >
            {/* Popup Content */}
            <div 
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '24px',
                maxWidth: '400px',
                width: '100%',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px'
              }}>
                <h3 style={{ margin: 0, color: '#333' }}>
                  {selectedTile.title}
                </h3>
                <button 
                  onClick={closePopup}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#666'
                  }}
                >
                  ×
                </button>
              </div>
              <p style={{ 
                margin: 0, 
                lineHeight: '1.6', 
                color: '#666' 
              }}>
                {selectedTile.content}
              </p>
            </div>
          </div>
        </>
      )}

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
        <SalesEnquiryForm />
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
                backgroundColor: 'rgb(61, 61, 61)',
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
    </div>
  );
}

export default App;