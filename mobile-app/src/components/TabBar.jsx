// src/components/TabBar.jsx
import React, { useState } from 'react';

const TabBar = ({ onTabChange, activeTab = 'home' }) => {
    const handleTabClick = (tabName) => {
        if (onTabChange) {
            onTabChange(tabName);
        }
    };

    const tabs = [
        { id: 'home', label: 'Home', icon: '🏠' },
        { id: 'quote', label: 'Make Quote', icon: '✏️' },
        { id: 'quotes', label: 'My Quotes', icon: '📋' }
    ];

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '56px',
            background: '#3d3d3d',
            display: 'flex',
            zIndex: 1000,
            boxShadow: '0 -2px 8px rgba(0,0,0,0.15)'
        }}>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => handleTabClick(tab.id)}
                    style={{
                        flex: 1,
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        color: activeTab === tab.id ? '#03dac6' : 'rgba(255,255,255,0.7)',
                        transition: 'color 0.15s ease',
                        padding: '6px 12px',
                        fontSize: '12px',
                        fontFamily: 'Roboto, sans-serif',
                        fontWeight: activeTab === tab.id ? '500' : '400'
                    }}
                >
                    <div style={{
                        fontSize: '18px',
                        marginBottom: '2px',
                        transform: activeTab === tab.id ? 'scale(1.1)' : 'scale(1)',
                        transition: 'transform 0.15s ease'
                    }}>
                        {tab.icon}
                    </div>
                    <div style={{
                        fontSize: activeTab === tab.id ? '12px' : '11px',
                        opacity: activeTab === tab.id ? 1 : 0.8
                    }}>
                        {tab.label}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default TabBar;