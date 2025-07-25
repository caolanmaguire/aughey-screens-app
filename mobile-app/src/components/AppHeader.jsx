// src/components/AppHeader.js
import React from 'react';
import { Toolbar, Icon } from 'react-onsenui';

import logo from '../images/aughey-screens-logo.png'; // Adjust the path as necessary

const AppHeader = ({ onMenuClick }) => {
  return (
    <Toolbar style={{'height':'66px'}} modifier="material">
      <div className="left">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          paddingLeft: '16px'
        }}>
          <img style={{'height' : '40px', 'margin':'10px'}} src={logo}/>
          {/* <div style={{
            width: '32px',
            height: '32px',
            backgroundColor: 'white',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#6200ea',
            fontWeight: 'bold',
            fontSize: '18px'
          }}>
            A
          </div>
          <span style={{
            fontSize: '20px',
            fontWeight: '500',
            color: 'white'
          }}>
            Aughey
          </span> */}
        </div>
      </div>
      
      <div className="center">
        {/* Optional center content */}
      </div>
      
      <div className="right">
        <div 
          className="toolbar-button"
          onClick={onMenuClick}
          style={{
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <Icon 
            icon="md-menu" 
            style={{
              color: 'white',
              fontSize: '24px'
            }}
          />
        </div>
      </div>
    </Toolbar>
  );
};

export default AppHeader;