// src/components/TabBar.js
import React from 'react';
import { Tabbar, Tab } from 'react-onsenui';

const TabBar = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: 'md-home' },
    { id: 'products', label: 'Products', icon: 'md-apps' },
    { id: 'services', label: 'Services', icon: 'md-wrench' },
    { id: 'contact', label: 'Contact', icon: 'md-phone' },
    { id: 'about', label: 'About', icon: 'md-info' }
  ];

  return (
    <Tabbar
      swipeable={false}
      position="bottom"
      index={tabs.findIndex(tab => tab.id === activeTab)}
      onPreChange={(event) => {
        const selectedTab = tabs[event.index];
        onTabClick(selectedTab.id);
      }}
      renderTabs={() =>
        tabs.map((tab, index) => ({
          content: <div key={tab.id}></div>, // Empty content since we handle navigation differently
          tab: (
            <Tab
              key={tab.id}
              label={tab.label}
              icon={tab.icon}
              badge={tab.id === 'contact' ? '!' : null} // Example badge
            />
          )
        }))
      }
    />
  );
};

export default TabBar;