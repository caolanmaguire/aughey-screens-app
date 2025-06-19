// src/components/TabBar.js
import React from 'react';

const TabBar = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'products', label: 'Products', icon: '📦' },
    { id: 'services', label: 'Services', icon: '🔧' },
    { id: 'contact', label: 'Contact', icon: '📞' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <div style={{
      display: 'flex',
      backgroundColor: 'white',
      borderTop: '1px solid #e0e0e0',
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)',
      height: '60px'
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            padding: '8px 4px',
            color: activeTab === tab.id ? '#6200ea' : '#666',
            transition: 'color 0.2s ease'
          }}
        >
          <span style={{ fontSize: '16px', marginBottom: '2px' }}>
            {tab.icon}
          </span>
          <span style={{ fontSize: '10px', fontWeight: '500' }}>
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabBar;