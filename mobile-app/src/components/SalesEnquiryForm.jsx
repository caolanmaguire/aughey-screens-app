// SalesEnquiryForm.js
import React, { useState, useRef } from 'react';

const SalesEnquiryForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    purchasedBefore: false,
    orderNumber: '',
    sameOrder: false,
    orderDifferences: '',
    meshType: '',
    aperture: '',
    customAperture: '',
    length: '',
    width: '',
    machineType: '',
    modelType: '',
    hookTypes: [],
    delivery: '',
    name: '',
    city: '',
    eircode: '',
    telephone: '',
    contactMethod: 'call-me',
    termsAccepted: false
  });

  // UI state
  const [qrResult, setQrResult] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);
  const qrInputRef = useRef(null);

  // Machine type mappings
  const machineModels = {
    "MACHINE - AUGHEY": [
      "AUGHEY 12X5", "AUGHEY 12X6", "AUGHEY 16X4", "AUGHEY 16X6", 
      "AUGHEY 20X5", "AUGHEY 20X6", "AUGHEY A4", "AUGHEY A6", "AUGHEY A8"
    ],
    "MACHINE - CEDARAPIDS": [
      "CEDARAPIDS 20X6", "CEDARAPIDS 16X5", "CEDARAPIDS 8X4"
    ],
    "MACHINE - DERNASEER": [
      "DERNASEER 20X5", "DERNASEER 20X6"
    ],
    "MACHINE - EXTEC": [
      "EXTEC S3", "EXTEC S4", "EXTEC S5", "EXTEC S6", "EXTEC E7", 
      "EXTEC ROBOTRACK", "EXTEC 5000 S"
    ],
    "MACHINE - FINLAY": [
      "FINLAY 310/312 OLD", "FINLAY 312 NEW", "FINLAY 390/393 OLD", 
      "FINLAY 390", "FINLAY 590", "FINLAY 595", "FINLAY 683", "FINLAY 684",
      "FINLAY 663", "FINLAY 693", "FINLAY 694", "FINLAY 694 PLUS",
      "FINLAY 863", "FINLAY 883", "FINLAY 883 PLUS", "FINLAY 893"
    ],
    "MACHINE - FINTEC": [
      "FINTEC 542", "FINTEC 640", "FINTEC 570"
    ],
    "MACHINE - KLEEMANN": [
      "KLEEMANN MS 12Z", "KLEEMANN MS 13", "KLEEMANN MS 13Z", 
      "KLEEMANN MS 15Z", "KLEEMANN MS 953"
    ],
    "MACHINE - MC CLOSKEY": [
      "S130", "S190", "R230", "R155", "R105", "R70", "S80", "S250"
    ],
    "MACHINE - POWERSCREEN": [
      "1200", "1200 WARRIOR", "1400 CHIEFTAIN", "1400 WARRIOR", 
      "1400 WARRIOR X", "1800", "1800 CHIEFTAIN", "1800 WARRIOR",
      "2100", "2100 X", "2100 WARRIOR", "2400", "PN 8X4", 
      "PN 16X5 DRY", "PN 16X5 WASHER", "PN 510"
    ],
    "MACHINE - SANDVIK": [
      "QE 340", "QE 241", "QA 331", "QA 335", "QE 341", "QA 340",
      "QA 430", "QA 450", "QA 451", "QA 440", "QA 441", "QE 440",
      "QE 141", "QE 441"
    ]
  };

  // Aperture options
  const apertureOptions = [
    "1mm", "1.5mm", "2mm", "2.5mm", "3mm", "4mm", "5mm", "6mm", "7mm", "8mm",
    "9.8mm", "11.2mm", "11.8mm", "12.3mm", "12.8mm", "14.5mm", "15.5mm", "16mm",
    "16.25mm", "16.75mm", "18mm", "19.5mm", "21.5mm", "22mm", "22.5mm", "24.5mm",
    "25mm", "29mm", "32mm", "39mm", "42.5mm", "45mm", "50mm", "57mm", "64mm",
    "70mm", "80mm", "100mm"
  ];

  // Handle input changes
  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (name) => {
    setFormData(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  // Handle hook type selection
  const handleHookTypeChange = (hookType) => {
    setFormData(prev => ({
      ...prev,
      hookTypes: prev.hookTypes.includes(hookType)
        ? prev.hookTypes.filter(h => h !== hookType)
        : [...prev.hookTypes, hookType]
    }));
  };

  // Handle machine type change
  const handleMachineTypeChange = (machineType) => {
    setFormData(prev => ({
      ...prev,
      machineType,
      modelType: '' // Reset model when machine changes
    }));
  };

  // Handle file upload for images
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Simple QR code handling (you'd need to implement actual QR scanning)
  const handleQRUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        // Here you would implement actual QR code scanning
        // For now, just showing a placeholder
        setQrResult('QR scanning would happen here - requires QR library integration');
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    
    console.log('Form submitted:', formData);
    alert('Quote request submitted successfully!');
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    marginBottom: '8px'
  };

  const selectStyle = {
    ...inputStyle,
    backgroundColor: 'white'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '4px',
    fontWeight: '500',
    color: '#3d3d3d'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '8px',
    // padding: '20px',
    margin: '16px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
  };

  const sectionStyle = {
    marginBottom: '24px',
    paddingBottom: '16px',
    borderBottom: '1px solid #eee'
  };

  return (
    <div style={cardStyle}>
      <img 
        src="https://augheyscreens.app/includes/subBanner.jpg" 
        alt="Banner"
        style={{ width: '100%', marginBottom: '16px', borderRadius: '4px' }}
      />
      
      <form onSubmit={handleSubmit}>
        {/* QR Code Scanner Section */}
        <div style={sectionStyle}>
          <label style={labelStyle}>
            QR Code Scanner
          </label>
          <div style={{ marginBottom: '16px' }}>
            <input
              ref={qrInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleQRUpload}
              style={{ display: 'none' }}
            />
            <button
              type="button"
              onClick={() => qrInputRef.current?.click()}
              style={{
                ...inputStyle,
                backgroundColor: '#3d3d3d',
                color: 'white',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Scan QR Code
            </button>
          </div>
          {previewImage && (
            <img 
              src={previewImage} 
              alt="QR Preview" 
              style={{ maxHeight: '150px', marginBottom: '8px' }}
            />
          )}
          {qrResult && (
            <p style={{ color: '#666' }}>QR Code Data: {qrResult}</p>
          )}
        </div>

        <h2 style={{ color: '#3d3d3d', marginBottom: '20px' }}>Send us a quote</h2>

        {/* Email */}
        <div style={sectionStyle}>
          <label style={labelStyle} htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="Enter your email"
            style={inputStyle}
            required
          />
        </div>

        {/* Purchased Before */}
        <div style={sectionStyle}>
          <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.purchasedBefore}
              onChange={() => handleCheckboxChange('purchasedBefore')}
            />
            Have you purchased from us before?
          </label>

          {formData.purchasedBefore && (
            <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
              <label style={labelStyle} htmlFor="orderNumber">Order Number:</label>
              <input
                type="number"
                id="orderNumber"
                value={formData.orderNumber}
                onChange={(e) => handleInputChange('orderNumber', e.target.value)}
                placeholder="Enter your order number"
                style={inputStyle}
              />

              <label style={{ ...labelStyle, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input
                  type="checkbox"
                  checked={formData.sameOrder}
                  onChange={() => handleCheckboxChange('sameOrder')}
                />
                Is this order exactly the same as your last order?
              </label>

              {!formData.sameOrder && (
                <div style={{ marginTop: '12px' }}>
                  <textarea
                    value={formData.orderDifferences}
                    onChange={(e) => handleInputChange('orderDifferences', e.target.value)}
                    placeholder="Is your order the exact same as your last order or are there differences? Please input here."
                    style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* New Order Section */}
        {!formData.purchasedBefore && (
          <div style={sectionStyle}>
            {/* Image Upload */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Select Image:</label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg, image/png, image/gif"
                onChange={handleImageUpload}
                style={inputStyle}
              />
            </div>

            {/* Mesh Type */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle} htmlFor="meshType">Mesh Type:</label>
              <select
                id="meshType"
                value={formData.meshType}
                onChange={(e) => handleInputChange('meshType', e.target.value)}
                style={selectStyle}
              >
                <option value="">-- select an option --</option>
                <option value="piano_wire">Piano Wire</option>
                <option value="woven">Woven</option>
                <option value="self_cleaning_screens">Self Cleaning Screens</option>
                <option value="rubber_mats">Rubber Mats</option>
                <option value="poly_modules">Poly Modules</option>
                <option value="perforated_plates">Perforated Plates</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Aperture */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle} htmlFor="aperture">Aperture:</label>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <select
                  id="aperture"
                  value={formData.aperture}
                  onChange={(e) => handleInputChange('aperture', e.target.value)}
                  style={{ ...selectStyle, flex: 1 }}
                >
                  <option value="">-- select an option --</option>
                  {apertureOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <span>OR</span>
                <input
                  type="number"
                  value={formData.customAperture}
                  onChange={(e) => handleInputChange('customAperture', e.target.value)}
                  placeholder="Custom"
                  style={{ ...inputStyle, width: '80px', marginBottom: 0 }}
                />
                <span>mm</span>
              </div>
            </div>

            {/* Dimensions */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ color: '#3d3d3d', marginBottom: '12px' }}>Dimensions</h3>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <input
                  type="number"
                  value={formData.length}
                  onChange={(e) => handleInputChange('length', e.target.value)}
                  placeholder="length"
                  style={{ ...inputStyle, marginBottom: 0 }}
                />
                <span>X</span>
                <input
                  type="number"
                  value={formData.width}
                  onChange={(e) => handleInputChange('width', e.target.value)}
                  placeholder="width"
                  style={{ ...inputStyle, marginBottom: 0 }}
                />
              </div>
            </div>

            {/* Machine Type */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle} htmlFor="machineType">Machine Type:</label>
              <select
                id="machineType"
                value={formData.machineType}
                onChange={(e) => handleMachineTypeChange(e.target.value)}
                style={selectStyle}
              >
                <option value="">-- select an option --</option>
                {Object.keys(machineModels).map(machine => (
                  <option key={machine} value={machine}>{machine}</option>
                ))}
              </select>
            </div>

            {/* Model Type */}
            {formData.machineType && (
              <div style={{ marginBottom: '16px' }}>
                <label style={labelStyle} htmlFor="modelType">Model Type:</label>
                <select
                  id="modelType"
                  value={formData.modelType}
                  onChange={(e) => handleInputChange('modelType', e.target.value)}
                  style={selectStyle}
                >
                  <option value="">-- select an option --</option>
                  {machineModels[formData.machineType]?.map(model => (
                    <option key={model} value={model}>{model}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Hook Types */}
            <div style={{ marginBottom: '16px' }}>
              <h3 style={{ color: '#3d3d3d', marginBottom: '12px' }}>Hook Type</h3>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <strong>ST</strong>
                  <input
                    type="checkbox"
                    checked={formData.hookTypes.includes('ST')}
                    onChange={() => handleHookTypeChange('ST')}
                    style={{ marginTop: '8px' }}
                  />
                  <img 
                    src="https://augheyscreens.app/includes/AHook.png" 
                    alt="ST Hook"
                    style={{ width: '60px', height: '60px', objectFit: 'contain', marginTop: '4px' }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <strong>ET</strong>
                  <input
                    type="checkbox"
                    checked={formData.hookTypes.includes('ET')}
                    onChange={() => handleHookTypeChange('ET')}
                    style={{ marginTop: '8px' }}
                  />
                  <img 
                    src="https://augheyscreens.app/includes/BHook.png" 
                    alt="ET Hook"
                    style={{ width: '60px', height: '60px', objectFit: 'contain', marginTop: '4px' }}
                  />
                </label>
                <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                  <strong>No Hook</strong>
                  <input
                    type="checkbox"
                    checked={formData.hookTypes.includes('NO_HOOK')}
                    onChange={() => handleHookTypeChange('NO_HOOK')}
                    style={{ marginTop: '8px' }}
                  />
                  <img 
                    src="https://augheyscreens.app/includes/NO-HOOK.png" 
                    alt="No Hook"
                    style={{ width: '60px', height: '60px', objectFit: 'contain', marginTop: '4px' }}
                  />
                </label>
              </div>
            </div>

            {/* Delivery */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle} htmlFor="delivery">Delivery:</label>
              <select
                id="delivery"
                value={formData.delivery}
                onChange={(e) => handleInputChange('delivery', e.target.value)}
                style={selectStyle}
              >
                <option value="">-- select an option --</option>
                <option value="asl">ASL</option>
                <option value="courier">Courier</option>
              </select>
            </div>
          </div>
        )}

        {/* Delivery Information */}
        <div style={sectionStyle}>
          <h3 style={{ color: '#3d3d3d', marginBottom: '16px' }}>Delivery Information</h3>
          
          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle} htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your name"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle} htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange('city', e.target.value)}
              placeholder="Enter your city"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle} htmlFor="eircode">Eircode:</label>
            <input
              type="text"
              id="eircode"
              value={formData.eircode}
              onChange={(e) => handleInputChange('eircode', e.target.value)}
              placeholder="Enter your eircode"
              style={inputStyle}
              required
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={labelStyle} htmlFor="telephone">Telephone Number:</label>
            <input
              type="tel"
              id="telephone"
              value={formData.telephone}
              onChange={(e) => handleInputChange('telephone', e.target.value)}
              placeholder="Enter your telephone number"
              style={inputStyle}
              required
            />
          </div>
        </div>

        {/* Contact Method */}
        <div style={sectionStyle}>
          <label style={labelStyle} htmlFor="contactMethod">How would you like us to contact you?</label>
          <select
            id="contactMethod"
            value={formData.contactMethod}
            onChange={(e) => handleInputChange('contactMethod', e.target.value)}
            style={selectStyle}
          >
            <option value="call-me">Whatsapp me</option>
            <option value="phone-me">Phone me</option>
            <option value="email-me">Email me</option>
          </select>
        </div>

        {/* Terms and Conditions */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{ ...labelStyle, display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={() => handleCheckboxChange('termsAccepted')}
              required
              style={{ marginTop: '2px' }}
            />
            <span>
              By submitting this form you agree with our{' '}
              <a href="#" style={{ color: '#6200ea' }}>Terms & Conditions</a>
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '16px',
            backgroundColor: '#3d3d3d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
        >
          Submit Quote Request
        </button>
      </form>
    </div>
  );
};

export default SalesEnquiryForm;