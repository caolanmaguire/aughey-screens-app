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

  ['Woven Wire Cloth and Filtration','Wire mesh is increasingly being adopted more and more by the architectural community and building industry. Aughey Screens basis for the innovative strength and quality of these products comes from our decades of experience in manufacturing technical woven wire for separation and filtration.  Woven wire is ideal for architectural projects because of its optical and functional properties. May of which include their reflectiveness, transparency and opaqueness, flexibility and robustness, permeability to light and air, practically unlimited service life, ease of cleaning, recyclability and functional protection against the sun, drafts and impacts.  Wire mesh facades offer an ideal solution for both internal and external requirements. The various combinations of wire diameters, aperture sizes and mesh patterns result in each application having its own unique appearance. When these products are combined with suitable lighting the results are very impressive. There are a number of different fitting options available depending on the mesh type and the application.'],
  ['Natural Stone Collection', 'Beautiful natural stone tiles sourced from the finest quarries. Durable and elegant for any space, bringing the beauty of nature indoors.'],
  ['Mosaic Designs', 'Stunning mosaic tiles that add artistic flair to your walls and floors. Perfect for accent walls, backsplashes, and creating unique design features.'],
  ['Porcelain Pro Series', 'Professional-grade porcelain tiles designed for high-traffic areas. Slip-resistant and easy to maintain, ideal for commercial and residential use.'],
  ['Wood Effect Tiles', 'Get the look of hardwood with the durability of ceramic. Perfect for any room in your home, combining warmth with practicality.'],
  ['Luxury Marble Style', 'Marble-effect tiles that bring elegance and sophistication to your space at an affordable price. Create a luxurious atmosphere without the maintenance.']



  // ['Premium Ceramic Tiles', 'High-quality ceramic tiles perfect for modern kitchens and bathrooms. Available in multiple colors and finishes with excellent durability and water resistance.'],
  // ['Natural Stone Collection', 'Beautiful natural stone tiles sourced from the finest quarries. Durable and elegant for any space, bringing the beauty of nature indoors.'],
  // ['Mosaic Designs', 'Stunning mosaic tiles that add artistic flair to your walls and floors. Perfect for accent walls, backsplashes, and creating unique design features.'],
  // ['Porcelain Pro Series', 'Professional-grade porcelain tiles designed for high-traffic areas. Slip-resistant and easy to maintain, ideal for commercial and residential use.'],
  // ['Wood Effect Tiles', 'Get the look of hardwood with the durability of ceramic. Perfect for any room in your home, combining warmth with practicality.'],
  // ['Luxury Marble Style', 'Marble-effect tiles that bring elegance and sophistication to your space at an affordable price. Create a luxurious atmosphere without the maintenance.']
];

// Right Slide Menu Component
const RightSlideMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: '🏠', label: 'Home', action: () => console.log('Home clicked') },
    { icon: '📦', label: 'Products', action: () => console.log('Products clicked') },
    { icon: '⚙️', label: 'Services', action: () => console.log('Services clicked') },
    { icon: '📞', label: 'Contact', action: () => console.log('Contact clicked') },
    { icon: 'ℹ️', label: 'About', action: () => console.log('About clicked') },
    { icon: '⭐', label: 'Favorites', action: () => console.log('Favorites clicked') },
    { icon: '📋', label: 'My Orders', action: () => console.log('My Orders clicked') },
    { icon: '⚙️', label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: '❓', label: 'Help', action: () => console.log('Help clicked') },
  ];

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
          zIndex: isOpen ? 999 : -1,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        onClick={onClose}
      />

      {/* Slide Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '280px',
        backgroundColor: 'white',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Menu Header */}
        <div style={{
          backgroundColor: 'rgb(61, 61, 61)',
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
              borderRadius: '4px',
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

        {/* User Section (Optional) */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgb(61, 61, 61)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px'
            }}>
              👤
            </div>
            <div>
              <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px' }}>
                Welcome User
              </div>
              <div style={{ fontSize: '14px', color: '#666' }}>
                user@example.com
              </div>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '8px 0'
        }}>
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.action();
                onClose(); // Close menu after selection
              }}
              style={{
                width: '100%',
                padding: '16px 20px',
                border: 'none',
                background: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                cursor: 'pointer',
                fontSize: '16px',
                color: '#333',
                transition: 'background-color 0.2s ease',
                textAlign: 'left'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <span style={{ fontSize: '20px', minWidth: '24px' }}>
                {item.icon}
              </span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Footer (Optional) */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f8f8f8'
        }}>
          <button style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgb(61, 61, 61)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

// Custom TabBar Component (completely independent of OnsenUI)
const CustomTabBar = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    // { id: 'products', icon: '📦', label: 'Products' },
    { id: 'services', icon: '⚙️', label: 'Submit a quote' },
    // { id: 'contact', icon: '📞', label: 'Contact' },
    { id: 'about', icon: 'ℹ️', label: 'My Quotes' }
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
  const [selectedTileIndex, setSelectedTileIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Add state for menu

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

  // Handle tile click to show slide-up page
  const handleTileClick = (index) => {
    setSelectedTileIndex(index);
  };

  // Close tile slide-up page
  const closeTilePage = () => {
    setSelectedTileIndex(null);
  };

  // Menu toggle functions
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

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
      {/* Pass openMenu function to AppHeader if needed */}
      <AppHeader onMenuClick={openMenu} />

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
          <input type='submit' value='Submit' onClick={() => localStorage.setItem('name', document.getElementById('name').value)} /> <br /> <br />

          <input type='submit' value='Get Value' onClick={() => alert(localStorage.getItem('name'))} />

          {/* Temporary burger menu button for testing (remove when AppHeader is updated) */}
          <button
            onClick={openMenu}
            style={{
              background: 'rgb(61, 61, 61)',
              color: 'white',
              border: 'none',
              padding: '12px',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer',
              margin: '16px 0'
            }}
          >
            Open Menu (Test)
          </button>

          {/* Generate TileButton for each item in the list */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '16px'
          }}>
            {tileData.map((item, index) => (
              <div key={index} onClick={() => handleTileClick(index)}>
                <TileButton
                  navigator={navigator}
                  title={tileData[index][0]}
                />
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

      {/* Right Slide Menu */}
      <RightSlideMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />

      {/* Tile Detail Slide-up Pages */}
      {tileData.map((tile, index) => (
        <FullPageSlideUp
          key={`tile-${index}`}
          isVisible={selectedTileIndex === index}
          onClose={closeTilePage}
          title={tile[0]}
        >
          <div style={{ padding: '20px' }}>
            <div style={{
              marginBottom: '24px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h2 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '24px'
              }}>
                {tile[0]}
              </h2>
              <p style={{
                margin: 0,
                lineHeight: '1.6',
                color: '#666',
                fontSize: '16px'
              }}>
                {tile[1]}
              </p>
            </div>

            {/* Product Features Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                Key Features
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Premium Quality Materials</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Water & Stain Resistant</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Easy to Clean & Maintain</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Professional Installation Available</span>
                </div>
              </div>
            </div>

            {/* Specifications Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                Specifications
              </h3>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #e9ecef',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Size Options
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Various sizes available
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Thickness
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    8-12mm
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Finish
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Matt, Gloss, Textured
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Suitable Areas
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Indoor & Outdoor
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                flex: 1,
                minWidth: '140px',
                backgroundColor: 'rgb(61, 61, 61)',
                color: 'white',
                border: 'none',
                padding: '16px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📋 Request Quote
              </button>
              <button style={{
                flex: 1,
                minWidth: '140px',
                backgroundColor: '#fff',
                color: 'rgb(61, 61, 61)',
                border: '2px solid rgb(61, 61, 61)',
                padding: '16px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📞 Call Us
              </button>
            </div>

            {/* Related Products Section */}
            <div style={{ marginTop: '40px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                You might also like
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '12px'
              }}>
                {tileData.filter((_, i) => i !== index).slice(0, 3).map((relatedTile, relatedIndex) => (
                  <button
                    key={relatedIndex}
                    onClick={() => setSelectedTileIndex(tileData.findIndex(t => t === relatedTile))}
                    style={{
                      padding: '16px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '14px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                  >
                    {relatedTile[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullPageSlideUp>
      ))}

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