import { useState } from 'react';

import Logo from '../images/aughey-screens-logo.png'; // Adjust the path as necessary

export default function LargeMenu({ tileData = [], onMenuClick }) {
  const [activeItem, setActiveItem] = useState(1);

  // Create menu items from tileData, limiting to 8 items max
  const menuItems = tileData.slice(0, 8).map((item, index) => ({
    id: index + 1,
    label: item[0].length > 15 ? item[0].substring(0, 15) + '...' : item[0], // Truncate long titles
    fullLabel: item[0],
    angle: index * 45 // 360/8 = 45 degrees between each item
  }));

  const handleMenuClick = (itemId) => {
    setActiveItem(itemId);
    // Call the parent's handleTileClick function with the correct index
    if (onMenuClick) {
      onMenuClick(itemId - 1); // Convert to 0-based index
    }
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '45vh',
    backgroundColor: 'whitesmoke',
    fontFamily: 'Arial, sans-serif'
  };

  const menuContainerStyle = {
    position: 'relative',
    width: '900px',
    height: '600px'
  };

  const centerButtonStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '160px',
    height: '160px',
    backgroundColor: '#3d3d3d',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    zIndex: 10,
    border: 'none'
  };

  const centerTextStyle = {
    color: 'white',
    textAlign: 'center',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: '1.2',
    padding: '16px'
  };

  const instructionsStyle = {
    position: 'absolute',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
    color: '#6b7280',
    fontSize: '18px'
  };

  return (
    <div style={containerStyle}>
      <div style={menuContainerStyle}>
        {/* Central button */}
        <div style={centerButtonStyle}>
          {/* add logo here */}
          <img src={Logo} alt="Aughey Screens Logo" style={{ width: '120px', height: '30px' }} />
        </div>

        {/* Menu items */}
        {menuItems.map((item) => {
          const radius = 220;
          const angleRad = (item.angle * Math.PI) / 180;
          const x = radius * Math.cos(angleRad);
          const y = radius * Math.sin(angleRad);

          const menuItemStyle = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '162px',
            height: '162px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(rgb(61, 61, 61) 0%, rgb(42, 42, 42) 50%, rgb(23, 23, 23) 100%)',
            color: activeItem === item.id ? 'white' : 'white',
            transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            border: 'none'
          };

          const menuTextStyle = {
            fontSize: '13px',
            fontWeight: '500',
            textAlign: 'center',
            lineHeight: '1.2',
            padding: '8px'
          };

          return (
            <div
              key={item.id}
              style={menuItemStyle}
              onClick={() => handleMenuClick(item.id)}
              onMouseEnter={(e) => {
                if (activeItem !== item.id) {
                  e.target.style.backgroundColor = '#f3f4f6';
                }
              }}
            //   onMouseLeave={(e) => {
            //     if (activeItem !== item.id) {
            //       e.target.style.backgroundColor = 'white';
            //     }
            //   }}
              title={item.fullLabel} // Show full title on hover
            >
              <span style={menuTextStyle}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Instructions */}
      <div style={instructionsStyle}>
        <p>Click menu items to view details</p>
      </div>
    </div>
  );
}