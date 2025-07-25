import React from 'react';
import { Button, Icon } from 'react-onsenui';

const TileButton = ({ title = 'woven wire cloth and filtration', onClick }) => {
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
    height: 'auto',
    borderRadius: '50%'
  };

  const iconStyle = {
    fontSize: '40px',
    marginBottom: '8px'
  };

  return (
    <button
      id="tile"
      style={tileStyle}
      onClick={onClick} // Use the onClick prop from parent
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
      <span>{title}</span>
    </button>
  );
};

export default TileButton;