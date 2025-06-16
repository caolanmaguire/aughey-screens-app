// src/App.js
import React, { useState } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style/material.css';
import './style/style.css';

import FullWidthSlider from './components/FullWidthSlider';



import AppHeader from './components/AppHeader';
import TabBar from './components/TabBar';
import SalesEnquiryComponent from './components/SalesEnquiryComponent';


// Images
import homeArchImage from './img/home-arch.jpg';
import homeWovenImage from './img/home-woven.jpg';

function App() {
  const [activeTab, setActiveTab] = useState('home');

    // Your slides data
  const yourSlides = [
    {
      id: 1,
      type: 'image',
      src: homeArchImage,
      // title: 'Aughey Screens',
      // description: 'Professional screen installation services',
      overlay: true,
      overlayPosition: 'center-left'
    },
    {
      id: 2,
      type: 'image',
      src: homeWovenImage,
      // title: 'Quality Work',
      // description: 'Expert installation and repair',
      overlay: true,
      overlayPosition: 'center-right'
    },
    {
      id: 3,
      type: 'content',
      backgroundColor: '#6200ea',
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
    <div style={{ paddingBottom: '56px' }}>

          <AppHeader></AppHeader>
          <TabBar></TabBar>

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

<SalesEnquiryComponent></SalesEnquiryComponent>

      {/* Material Toolbar */}
      {/* <div className="material-toolbar">
        <div className="material-title">Aughey Screens</div>
      </div> */}

      {/* Content */}
      <div style={{ padding: '16px' }}>
        <h2>Your App Content</h2>
        <p>Material Design styling without external libraries!</p>
      </div>

      {/* Bottom Navigation
      <div className="material-bottom-nav">
        <button 
          className={`material-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          <div className="material-tab-icon">🏠</div>
          <div>Home</div>
        </button>
        <button 
          className={`material-tab ${activeTab === 'quote' ? 'active' : ''}`}
          onClick={() => setActiveTab('quote')}
        >
          <div className="material-tab-icon">✏️</div>
          <div>Make Quote</div>
        </button>
        <button 
          className={`material-tab ${activeTab === 'quotes' ? 'active' : ''}`}
          onClick={() => setActiveTab('quotes')}
        >
          <div className="material-tab-icon">📋</div>
          <div>My Quotes</div>
        </button>
      </div> */}
    </div>
  );
}

export default App;