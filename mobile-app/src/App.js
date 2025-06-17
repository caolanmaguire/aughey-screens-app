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

function App() {
  const [activeTab, setActiveTab] = useState('home');

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
      // backgroundColor: '#6200ea',
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
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch'
    }}>
      <AppHeader />
      <TabBar />
      
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
          <TileButton></TileButton>
          <TileButton></TileButton>
          <TileButton></TileButton>
          <TileButton></TileButton>
        </div>

      </div>
    </div>
  );
}

export default App;