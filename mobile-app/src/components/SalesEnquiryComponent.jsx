import React from 'react';

const SalesEnquiryComponent = ({ onSalesEnquiry }) => {
  const handleSalesEnquiry = () => {
    // Option 1: If you want to keep the original functionality
    const tabbarButtons = document.getElementsByClassName('tabbar__button');
    if (tabbarButtons[1]) {
      tabbarButtons[1].click();
    }
    
    // Option 2: If you want to use a callback function instead
    if (onSalesEnquiry) {
      onSalesEnquiry();
    }
  };

  const containerStyle = {
    background: 'linear-gradient(to bottom,#3d3d3d 0%,#2a2a2a 50%,#171717 100%)',
    borderRadius: '10px',
    marginTop: '10px',
    margin: '5%',
    marginBottom: '1%',
    marginTop: '1%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
    padding: '20px'
  };

  const headingStyle = {
    fontSize: '36px',
    color: 'white',
    textAlign: 'center',
    // marginBottom: '0',
    margin: '2%'
  };

  const buttonStyle = {
    background: '#036436',
    color: 'white',
    display: 'inline-block',
    padding: '15px 30px',
    borderRadius: '10px',
    fontSize: '24px',
    textDecoration: 'none',
    width: '75%',
    marginLeft: '10%',
    textAlign: 'center',
    marginBottom: '5%',
    boxShadow: '0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22)',
    border: 'none',
    cursor: 'pointer',
    fontFamily: 'inherit'
  };

  return (
    <div style={containerStyle} className="inner grid ftrNav">
      <div>
        <h2 style={headingStyle}>Sales Enquiries</h2>
      </div>
      <div>
        <button 
          style={buttonStyle}
          onClick={handleSalesEnquiry}
        >
          Make a Sales Enquiry
        </button>
      </div>
    </div>
  );
};

export default SalesEnquiryComponent;