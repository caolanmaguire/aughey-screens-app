import React from 'react';
import { Button, Icon } from 'react-onsenui';

const TileButton = ({ navigator }) => {
  const handleTileClick = () => {
    // Using Onsen UI React navigation
    navigator.pushPage({
      component: 'db-page-3', // Your target component
      props: {
        title: 'PullHook'
      }
    });
  };

  const tileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'center'
  };

  const imageStyle = {
    width: '60px',
    height: 'auto'
  };

  const iconStyle = {
    fontSize: '40px',
    marginBottom: '8px'
  };

  return (
    <button 
      id="tile" 
      style={tileStyle}
      onClick={handleTileClick}
    >
      <Icon 
        icon="md-information" 
        style={iconStyle}
      />
      <img 
        className="unicode-icon" 
        style={imageStyle}
        src="https://augheyscreens.app/includes/icons/ICON-PHOTO.png"
        alt="Icon"
      />
      <br />
      <span>woven wire cloth and filtration</span>
    </button>
  );
};

export default TileButton;