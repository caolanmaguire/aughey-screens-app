// src/App.js
import React, { useState } from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style/material.css';
import './style/style.css';

import FullWidthSlider from './components/FullWidthSlider';
import TileButton from './components/AugheyTile';
import AppHeader from './components/AppHeader';
import SalesEnquiryComponent from './components/SalesEnquiryComponent';
import SalesEnquiryForm from './components/SalesEnquiryForm';
import LargeMenu from './components/LargeMenu';

// Images
import homeArchImage from './img/home-arch.jpg';
import homeWovenImage from './img/home-woven.jpg';
import ImgSnowWide from './img/img_snow_wide.jpg';

// TEST MODE - Set to true to bypass login and show sample data
const TEST_MODE = true;

// Sample quotes data for test mode
const SAMPLE_QUOTES = [
  {
    id: 'Q001',
    status: 'pending',
    date: '2024-01-15',
    total: '£2,450.00',
    itemCount: 3,
    description: 'Bathroom renovation tiles',
    items: [
      {
        name: 'Porcelain Floor Tiles',
        quantity: '15 sq meters',
        description: 'Premium white porcelain tiles, 60x60cm',
        price: '£1,200.00',
        unitPrice: '£80.00'
      },
      {
        name: 'Mosaic Wall Tiles',
        quantity: '8 sq meters', 
        description: 'Glass mosaic tiles for shower area',
        price: '£800.00',
        unitPrice: '£100.00'
      },
      {
        name: 'Installation Service',
        quantity: '1',
        description: 'Professional tile installation',
        price: '£450.00',
        unitPrice: '£450.00'
      }
    ]
  },
  {
    id: 'Q002',
    status: 'approved',
    date: '2024-01-10',
    total: '£1,850.00',
    itemCount: 2,
    description: 'Kitchen backsplash',
    items: [
      {
        name: 'Natural Stone Tiles',
        quantity: '12 sq meters',
        description: 'Travertine natural stone tiles',
        price: '£1,200.00',
        unitPrice: '£100.00'
      },
      {
        name: 'Tile Adhesive & Grout',
        quantity: '1 set',
        description: 'Professional grade adhesive and grout',
        price: '£650.00',
        unitPrice: '£650.00'
      }
    ]
  },
  {
    id: 'Q003',
    status: 'pending',
    date: '2024-01-08',
    total: '£3,200.00',
    itemCount: 4,
    description: 'Commercial office flooring',
    items: [
      {
        name: 'Wood Effect Tiles',
        quantity: '50 sq meters',
        description: 'Oak wood effect porcelain tiles',
        price: '£2,000.00',
        unitPrice: '£40.00'
      },
      {
        name: 'Underfloor Heating',
        quantity: '50 sq meters',
        description: 'Electric underfloor heating system',
        price: '£800.00',
        unitPrice: '£16.00'
      },
      {
        name: 'Installation Service',
        quantity: '1',
        description: 'Professional installation with heating',
        price: '£350.00',
        unitPrice: '£350.00'
      },
      {
        name: 'Delivery',
        quantity: '1',
        description: 'Same-day delivery service',
        price: '£50.00',
        unitPrice: '£50.00'
      }
    ]
  },
  {
    id: 'Q004',
    status: 'rejected',
    date: '2024-01-05',
    total: '£890.00',
    itemCount: 1,
    description: 'Small bathroom tiles',
    items: [
      {
        name: 'Luxury Marble Style Tiles',
        quantity: '6 sq meters',
        description: 'Carrara marble effect tiles',
        price: '£890.00',
        unitPrice: '£148.33'
      }
    ]
  },
  {
    id: 'Q005',
    status: 'approved',
    date: '2024-01-03',
    total: '£4,750.00',
    itemCount: 5,
    description: 'Complete home renovation',
    items: [
      {
        name: 'Woven Wire Mesh Panels',
        quantity: '25 sq meters',
        description: 'Architectural wire mesh for feature wall',
        price: '£1,500.00',
        unitPrice: '£60.00'
      },
      {
        name: 'Natural Stone Collection',
        quantity: '30 sq meters',
        description: 'Mixed natural stone tiles',
        price: '£1,800.00',
        unitPrice: '£60.00'
      },
      {
        name: 'Porcelain Pro Series',
        quantity: '40 sq meters',
        description: 'Heavy-duty porcelain floor tiles',
        price: '£1,200.00',
        unitPrice: '£30.00'
      },
      {
        name: 'Installation Service',
        quantity: '1',
        description: 'Complete professional installation',
        price: '£200.00',
        unitPrice: '£200.00'
      },
      {
        name: 'Design Consultation',
        quantity: '1',
        description: 'Professional design consultation',
        price: '£50.00',
        unitPrice: '£50.00'
      }
    ]
  }
];

// Sample video data
const PRODUCT_VIDEOS = [
  {
    id: 'woven-wire-1',
    title: 'Woven Wire Installation Process',
    category: 'Woven Wire Cloth and Filtration',
    duration: '3:45',
    thumbnail: '🎬',
    description: 'Step-by-step guide to installing architectural wire mesh panels',
    videoUrl: '#', // Replace with actual video URL
    views: '2.4K'
  },
  {
    id: 'woven-wire-2',
    title: 'Wire Mesh Design Possibilities',
    category: 'Woven Wire Cloth and Filtration',
    duration: '5:20',
    thumbnail: '🎨',
    description: 'Exploring creative applications of wire mesh in modern architecture',
    videoUrl: '#',
    views: '1.8K'
  },
  {
    id: 'natural-stone-1',
    title: 'Natural Stone Tile Showcase',
    category: 'Natural Stone Collection',
    duration: '4:15',
    thumbnail: '🏔️',
    description: 'Tour of our premium natural stone collection and finishes',
    videoUrl: '#',
    views: '3.2K'
  },
  {
    id: 'natural-stone-2',
    title: 'Stone Tile Maintenance Tips',
    category: 'Natural Stone Collection',
    duration: '2:30',
    thumbnail: '🧽',
    description: 'Professional tips for maintaining your natural stone tiles',
    videoUrl: '#',
    views: '1.5K'
  },
  {
    id: 'mosaic-1',
    title: 'Mosaic Design Techniques',
    category: 'Mosaic Designs',
    duration: '6:10',
    thumbnail: '🎭',
    description: 'Creating stunning mosaic patterns for feature walls',
    videoUrl: '#',
    views: '2.7K'
  },
  {
    id: 'porcelain-1',
    title: 'Porcelain Pro Series Features',
    category: 'Porcelain Pro Series',
    duration: '3:55',
    thumbnail: '⚡',
    description: 'Demonstration of slip-resistance and durability testing',
    videoUrl: '#',
    views: '1.9K'
  },
  {
    id: 'wood-effect-1',
    title: 'Wood Effect vs Real Wood',
    category: 'Wood Effect Tiles',
    duration: '4:40',
    thumbnail: '🌳',
    description: 'Comparing wood effect tiles with traditional hardwood flooring',
    videoUrl: '#',
    views: '4.1K'
  },
  {
    id: 'marble-1',
    title: 'Luxury Marble Installation',
    category: 'Luxury Marble Style',
    duration: '5:05',
    thumbnail: '💎',
    description: 'Professional installation of marble-effect luxury tiles',
    videoUrl: '#',
    views: '2.6K'
  },
  {
    id: 'general-1',
    title: 'Tile Preparation & Tools',
    category: 'Installation Guides',
    duration: '7:20',
    thumbnail: '🔧',
    description: 'Essential tools and preparation for any tile installation project',
    videoUrl: '#',
    views: '5.3K'
  },
  {
    id: 'general-2',
    title: 'Grouting Techniques Masterclass',
    category: 'Installation Guides',
    duration: '8:15',
    thumbnail: '👨‍🏭',
    description: 'Professional grouting techniques for perfect finishes',
    videoUrl: '#',
    views: '3.8K'
  }
];

  // Custom hook to detect screen size
  function useScreenSize() {
    const [screenSize, setScreenSize] = useState({
      isMobile: typeof window !== 'undefined' ? window.innerWidth < 768 : false,
      isTablet: typeof window !== 'undefined' ? window.innerWidth >= 768 : false
    });

    React.useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setScreenSize({
          isMobile: width < 768,
          isTablet: width >= 768
        });
      };

// Video Library Component
const VideoLibrary = ({ videos }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(videos.map(video => video.category))];
  
  // Filter videos by category
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  if (selectedVideo) {
    return (
      <div style={{ padding: '20px' }}>
        {/* Video Player Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid #e0e0e0'
        }}>
          <button
            onClick={() => setSelectedVideo(null)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              marginRight: '12px',
              color: 'rgb(61, 61, 61)'
            }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, color: '#333', flex: 1 }}>{selectedVideo.title}</h2>
        </div>

        {/* Video Player Placeholder */}
        <div style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#000',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>▶️</div>
            <p style={{ margin: 0, fontSize: '18px' }}>Video Player</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
              Duration: {selectedVideo.duration}
            </p>
          </div>
          
          {/* Play overlay */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px'
          }}>
            {selectedVideo.views} views
          </div>
        </div>

        {/* Video Details */}
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{selectedVideo.title}</h3>
          <p style={{ margin: '0 0 12px 0', color: '#6c757d', fontSize: '14px' }}>
            Category: {selectedVideo.category}
          </p>
          <p style={{ margin: 0, color: '#495057', lineHeight: '1.5' }}>
            {selectedVideo.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'rgb(61, 61, 61)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            📥 Download Video
          </button>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'white',
            color: 'rgb(61, 61, 61)',
            border: '2px solid rgb(61, 61, 61)',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            📤 Share Video
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>Product Videos</h2>
        <p style={{ margin: 0, color: '#666' }}>
          Professional guides, tutorials, and product showcases
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: selectedCategory === category ? 'rgb(61, 61, 61)' : '#f8f9fa',
              color: selectedCategory === category ? 'white' : '#495057',
              transition: 'all 0.2s ease'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Video Thumbnail */}
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '48px',
                opacity: 0.9
              }}>
                {video.thumbnail}
              </div>
              
              {/* Duration badge */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {video.duration}
              </div>
              
              {/* Play overlay */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                opacity: 0.8
              }}>
                ▶️
              </div>
            </div>

            {/* Video Info */}
            <div style={{ padding: '16px' }}>
              <h4 style={{
                margin: '0 0 8px 0',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                lineHeight: '1.3'
              }}>
                {video.title}
              </h4>
              
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '12px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                {video.category}
              </p>
              
              <p style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {video.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontSize: '12px',
                  color: '#6c757d'
                }}>
                  {video.views} views
                </span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgb(61, 61, 61)',
                  fontWeight: '500'
                }}>
                  Watch →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📹</div>
          <h3 style={{ margin: '0 0 8px 0' }}>No videos found</h3>
          <p style={{ margin: 0 }}>Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

// Video Showcase Component
const VideoShowcaseComponent = ({ onClick }) => {
  return (
    <div style={{ padding: '16px', marginBottom: '24px' }}>
      <div 
        onClick={onClick}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-4px)';
          e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          transform: 'rotate(45deg)'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                🎬
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 4px 0',
                  fontSize: '22px',
                  fontWeight: '600'
                }}>
                  Product Videos
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  opacity: 0.9
                }}>
                  Watch installation guides & showcases
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              backdropFilter: 'blur(10px)'
            }}>
              ▶️
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              {PRODUCT_VIDEOS.length} Videos Available
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              HD Quality
            </div>
          </div>
          
          <p style={{
            margin: '0 0 16px 0',
            fontSize: '15px',
            lineHeight: '1.5',
            opacity: 0.95
          }}>
            Explore our comprehensive video library featuring installation tutorials, 
            product showcases, and design inspiration for all our tile collections.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <span>Browse Video Library</span>
            <span style={{
              fontSize: '16px',
              transform: 'translateX(0)',
              transition: 'transform 0.2s ease',
              display: 'inline-block'
            }}>
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return screenSize;
  }

// Tile data list - add or remove items as needed
const tileData = [
  ['Woven Wire Cloth and Filtration', 'Wire mesh is increasingly being adopted more and more by the architectural community and building industry. Aughey Screens basis for the innovative strength and quality of these products comes from our decades of experience in manufacturing technical woven wire for separation and filtration.  Woven wire is ideal for architectural projects because of its optical and functional properties. May of which include their reflectiveness, transparency and opaqueness, flexibility and robustness, permeability to light and air, practically unlimited service life, ease of cleaning, recyclability and functional protection against the sun, drafts and impacts.  Wire mesh facades offer an ideal solution for both internal and external requirements. The various combinations of wire diameters, aperture sizes and mesh patterns result in each application having its own unique appearance. When these products are combined with suitable lighting the results are very impressive. There are a number of different fitting options available depending on the mesh type and the application.'],
  ['Natural Stone Collection', 'Beautiful natural stone tiles sourced from the finest quarries. Durable and elegant for any space, bringing the beauty of nature indoors.'],
  ['Mosaic Designs', 'Stunning mosaic tiles that add artistic flair to your walls and floors. Perfect for accent walls, backsplashes, and creating unique design features.'],
  ['Porcelain Pro Series', 'Professional-grade porcelain tiles designed for high-traffic areas. Slip-resistant and easy to maintain, ideal for commercial and residential use.'],
  ['Wood Effect Tiles', 'Get the look of hardwood with the durability of ceramic. Perfect for any room in your home, combining warmth with practicality.'],
  ['Luxury Marble Style', 'Marble-effect tiles that bring elegance and sophistication to your space at an affordable price. Create a luxurious atmosphere without the maintenance.']
];

// Video Showcase Component
const VideoShowcaseComponent = ({ onClick }) => {
  return (
    <div style={{ padding: '16px', marginBottom: '24px' }}>
      <div 
        onClick={onClick}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '24px',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
          transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-4px)';
          e.target.style.boxShadow = '0 12px 35px rgba(102, 126, 234, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          transform: 'rotate(45deg)'
        }} />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '16px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                🎬
              </div>
              <div>
                <h3 style={{
                  margin: '0 0 4px 0',
                  fontSize: '22px',
                  fontWeight: '600'
                }}>
                  Product Videos
                </h3>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  opacity: 0.9
                }}>
                  Watch installation guides & showcases
                </p>
              </div>
            </div>
            
            <div style={{
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              backdropFilter: 'blur(10px)'
            }}>
              ▶️
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center',
            marginBottom: '16px'
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              {PRODUCT_VIDEOS.length} Videos Available
            </div>
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: '500',
              backdropFilter: 'blur(10px)'
            }}>
              HD Quality
            </div>
          </div>
          
          <p style={{
            margin: '0 0 16px 0',
            fontSize: '15px',
            lineHeight: '1.5',
            opacity: 0.95
          }}>
            Explore our comprehensive video library featuring installation tutorials, 
            product showcases, and design inspiration for all our tile collections.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            <span>Browse Video Library</span>
            <span style={{
              fontSize: '16px',
              transform: 'translateX(0)',
              transition: 'transform 0.2s ease',
              display: 'inline-block'
            }}>
              →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Error Popup Component
const ErrorPopup = ({ isVisible, message, onClose }) => {
  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '24px',
        maxWidth: '400px',
        width: '100%',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>❌</div>
          <h3 style={{
            margin: '0 0 8px 0',
            color: '#d32f2f',
            fontSize: '20px'
          }}>Login Failed</h3>
          <p style={{
            margin: 0,
            color: '#666',
            lineHeight: '1.5'
          }}>
            {message || 'Invalid email or PIN. Please check your credentials and try again.'}
          </p>
        </div>
        <button
          onClick={onClose}
          style={{
            width: '100%',
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer'
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

// Video Library Component
const VideoLibrary = ({ videos }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Get unique categories
  const categories = ['All', ...new Set(videos.map(video => video.category))];
  
  // Filter videos by category
  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  if (selectedVideo) {
    return (
      <div style={{ padding: '20px' }}>
        {/* Video Player Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid #e0e0e0'
        }}>
          <button
            onClick={() => setSelectedVideo(null)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              marginRight: '12px',
              color: 'rgb(61, 61, 61)'
            }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, color: '#333', flex: 1 }}>{selectedVideo.title}</h2>
        </div>

        {/* Video Player Placeholder */}
        <div style={{
          width: '100%',
          height: '300px',
          backgroundColor: '#000',
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            textAlign: 'center',
            color: 'white'
          }}>
            <div style={{ fontSize: '64px', marginBottom: '16px' }}>▶️</div>
            <p style={{ margin: 0, fontSize: '18px' }}>Video Player</p>
            <p style={{ margin: '8px 0 0 0', fontSize: '14px', opacity: 0.8 }}>
              Duration: {selectedVideo.duration}
            </p>
          </div>
          
          {/* Play overlay */}
          <div style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '6px',
            fontSize: '12px'
          }}>
            {selectedVideo.views} views
          </div>
        </div>

        {/* Video Details */}
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <h3 style={{ margin: '0 0 8px 0', color: '#333' }}>{selectedVideo.title}</h3>
          <p style={{ margin: '0 0 12px 0', color: '#6c757d', fontSize: '14px' }}>
            Category: {selectedVideo.category}
          </p>
          <p style={{ margin: 0, color: '#495057', lineHeight: '1.5' }}>
            {selectedVideo.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'rgb(61, 61, 61)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            📥 Download Video
          </button>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'white',
            color: 'rgb(61, 61, 61)',
            border: '2px solid rgb(61, 61, 61)',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            📤 Share Video
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>Product Videos</h2>
        <p style={{ margin: 0, color: '#666' }}>
          Professional guides, tutorials, and product showcases
        </p>
      </div>

      {/* Category Filter */}
      <div style={{
        marginBottom: '24px',
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        overflowX: 'auto',
        paddingBottom: '8px'
      }}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: 'none',
              fontSize: '14px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              backgroundColor: selectedCategory === category ? 'rgb(61, 61, 61)' : '#f8f9fa',
              color: selectedCategory === category ? 'white' : '#495057',
              transition: 'all 0.2s ease'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px'
      }}>
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-4px)';
              e.target.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
          >
            {/* Video Thumbnail */}
            <div style={{
              height: '180px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}>
              <div style={{
                fontSize: '48px',
                opacity: 0.9
              }}>
                {video.thumbnail}
              </div>
              
              {/* Duration badge */}
              <div style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(0, 0, 0, 0.8)',
                color: 'white',
                padding: '4px 8px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: '500'
              }}>
                {video.duration}
              </div>
              
              {/* Play overlay */}
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                opacity: 0.8
              }}>
                ▶️
              </div>
            </div>

            {/* Video Info */}
            <div style={{ padding: '16px' }}>
              <h4 style={{
                margin: '0 0 8px 0',
                fontSize: '16px',
                fontWeight: '600',
                color: '#333',
                lineHeight: '1.3'
              }}>
                {video.title}
              </h4>
              
              <p style={{
                margin: '0 0 8px 0',
                fontSize: '12px',
                color: '#6c757d',
                fontWeight: '500'
              }}>
                {video.category}
              </p>
              
              <p style={{
                margin: '0 0 12px 0',
                fontSize: '14px',
                color: '#666',
                lineHeight: '1.4',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {video.description}
              </p>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{
                  fontSize: '12px',
                  color: '#6c757d'
                }}>
                  {video.views} views
                </span>
                <span style={{
                  fontSize: '12px',
                  color: 'rgb(61, 61, 61)',
                  fontWeight: '500'
                }}>
                  Watch →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📹</div>
          <h3 style={{ margin: '0 0 8px 0' }}>No videos found</h3>
          <p style={{ margin: 0 }}>Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

// Quotes List Component
const QuotesList = ({ quotes, onBack, userEmail }) => {
  const [selectedQuote, setSelectedQuote] = useState(null);

  if (selectedQuote) {
    return (
      <div style={{ padding: '20px' }}>
        {/* Quote Detail Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '24px',
          paddingBottom: '16px',
          borderBottom: '2px solid #e0e0e0'
        }}>
          <button
            onClick={() => setSelectedQuote(null)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '24px',
              cursor: 'pointer',
              marginRight: '12px',
              color: 'rgb(61, 61, 61)'
            }}
          >
            ←
          </button>
          <h2 style={{ margin: 0, color: '#333' }}>Quote #{selectedQuote.id}</h2>
        </div>

        {/* Quote Details */}
        <div style={{
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          padding: '20px',
          marginBottom: '24px'
        }}>
          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '500' }}>Status:</span>
              <span style={{
                padding: '4px 12px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: '500',
                backgroundColor: selectedQuote.status === 'pending' ? '#fff3cd' : 
                               selectedQuote.status === 'approved' ? '#d4edda' : '#f8d7da',
                color: selectedQuote.status === 'pending' ? '#856404' : 
                       selectedQuote.status === 'approved' ? '#155724' : '#721c24'
              }}>
                {selectedQuote.status?.toUpperCase()}
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '500' }}>Date:</span>
              <span>{selectedQuote.date}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontWeight: '500' }}>Total:</span>
              <span style={{ fontSize: '18px', fontWeight: 'bold', color: 'rgb(61, 61, 61)' }}>
                {selectedQuote.total}
              </span>
            </div>
          </div>
        </div>

        {/* Quote Items */}
        <div>
          <h3 style={{ marginBottom: '16px', color: '#333' }}>Items</h3>
          {selectedQuote.items?.map((item, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '16px',
              marginBottom: '12px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: '0 0 8px 0', color: '#333' }}>{item.name}</h4>
                  <p style={{ margin: '0 0 8px 0', color: '#666', fontSize: '14px' }}>
                    Quantity: {item.quantity}
                  </p>
                  {item.description && (
                    <p style={{ margin: 0, color: '#888', fontSize: '12px' }}>
                      {item.description}
                    </p>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 'bold', color: '#333' }}>{item.price}</div>
                  {item.unitPrice && (
                    <div style={{ fontSize: '12px', color: '#666' }}>
                      {item.unitPrice} each
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div style={{
          marginTop: '32px',
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'rgb(61, 61, 61)',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            Download PDF
          </button>
          <button style={{
            flex: 1,
            minWidth: '140px',
            backgroundColor: 'white',
            color: 'rgb(61, 61, 61)',
            border: '2px solid rgb(61, 61, 61)',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            Request Changes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      {/* Header */}
      <div style={{
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '2px solid #e0e0e0'
      }}>
        <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>My Quotes</h2>
        <p style={{ margin: 0, color: '#666' }}>Welcome back, {userEmail}</p>
        {TEST_MODE && (
          <div style={{ 
            margin: '8px 0 0 0', 
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px'
          }}>
            <p style={{ 
              margin: 0,
              color: '#ff6b35', 
              fontStyle: 'italic'
            }}>
              🧪 Test Mode Active
            </p>
            <p style={{ 
              margin: 0,
              color: '#28a745', 
              fontSize: '12px'
            }}>
              ✓ Session maintained - you'll stay logged in while navigating
            </p>
          </div>
        )}
      </div>

      {/* Quotes List */}
      {quotes.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '40px 20px',
          color: '#666'
        }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>📋</div>
          <h3 style={{ margin: '0 0 8px 0' }}>No quotes yet</h3>
          <p style={{ margin: 0 }}>Your quotes will appear here once you submit a request.</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gap: '16px' }}>
          {quotes.map((quote, index) => (
            <div
              key={index}
              onClick={() => setSelectedQuote(quote)}
              style={{
                backgroundColor: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={(e) => {
                e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '12px'
              }}>
                <div>
                  <h3 style={{ margin: '0 0 4px 0', color: '#333' }}>
                    Quote #{quote.id}
                  </h3>
                  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>
                    {quote.date}
                  </p>
                </div>
                <div style={{
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '500',
                  backgroundColor: quote.status === 'pending' ? '#fff3cd' : 
                                 quote.status === 'approved' ? '#d4edda' : '#f8d7da',
                  color: quote.status === 'pending' ? '#856404' : 
                         quote.status === 'approved' ? '#155724' : '#721c24'
                }}>
                  {quote.status?.toUpperCase()}
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <p style={{ margin: '0 0 4px 0', color: '#666', fontSize: '14px' }}>
                    {quote.itemCount} item{quote.itemCount !== 1 ? 's' : ''}
                  </p>
                  {quote.description && (
                    <p style={{ margin: 0, color: '#888', fontSize: '12px' }}>
                      {quote.description}
                    </p>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '18px', fontWeight: 'bold', color: 'rgb(61, 61, 61)' }}>
                    {quote.total}
                  </div>
                  <div style={{ fontSize: '12px', color: '#666' }}>
                    Total
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Logout Button */}
      <div style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #e0e0e0'
      }}>
        <button
          onClick={onBack}
          style={{
            width: '100%',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '6px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          🚪 End Session & Logout
        </button>
      </div>
    </div>
  );
};

// Right Slide Menu Component
const RightSlideMenu = ({ isOpen, onClose }) => {
  const menuItems = [
    { icon: '🏠', label: 'Home', action: () => console.log('Home clicked') },
    { icon: '📦', label: 'Products', action: () => console.log('Products clicked') },
    { icon: '⚙️', label: 'Services', action: () => console.log('Services clicked') },
    { icon: '📞', label: 'Contact', action: () => console.log('Contact clicked') },
    { icon: 'ℹ️', label: 'About', action: () => console.log('About clicked') },
    { icon: '⭐', label: 'Favorites', action: () => console.log('Favorites clicked') },
    { icon: '📋', label: 'My Orders', action: () => console.log('My Orders clicked') },
    { icon: '⚙️', label: 'Settings', action: () => console.log('Settings clicked') },
    { icon: '❓', label: 'Help', action: () => console.log('Help clicked') },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: isOpen ? 999 : -1,
          opacity: isOpen ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
        onClick={onClose}
      />

      {/* Slide Menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '280px',
        backgroundColor: 'white',
        boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.15)',
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column'
      }}>
        {/* Menu Header */}
        <div style={{
          backgroundColor: 'rgb(61, 61, 61)',
          color: 'white',
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>
            Menu
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>

        {/* User Section (Optional) */}
        <div style={{
          padding: '20px',
          borderBottom: '1px solid #e0e0e0',
          backgroundColor: '#f5f5f5'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              backgroundColor: 'rgb(61, 61, 61)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px'
            }}>
              👤
            </div>
          </div>
        </div>

        {/* Menu Footer (Optional) */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1px solid #e0e0e0',
          backgroundColor: '#f8f8f8'
        }}>
          <button disabled style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'rgb(61, 61, 61)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }}>
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

// Custom TabBar Component (completely independent of OnsenUI)
const CustomTabBar = ({ activeTab, onTabClick }) => {
  const tabs = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'services', icon: '⚙️', label: 'Submit a quote' },
    { id: 'about', icon: 'ℹ️', label: 'My Quotes' }
  ];

  return (
    <div style={{
      display: 'flex',
      backgroundColor: '#fff',
      borderTop: '1px solid #e0e0e0',
      boxShadow: '0 -2px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          style={{
            flex: 1,
            padding: '12px 8px',
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: activeTab === tab.id ? '#6200ea' : '#666',
            fontSize: '12px',
            transition: 'color 0.2s ease'
          }}
        >
          <span style={{ fontSize: '20px' }}>{tab.icon}</span>
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
};

// Full Page Slide-up Component with its own toolbar
const FullPageSlideUp = ({ isVisible, onClose, title, children }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 100,
        transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      {/* Page Toolbar */}
      <div style={{
        backgroundColor: 'rgb(61, 61, 61)',
        color: 'white',
        padding: '16px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        minHeight: '64px',
        zIndex: 101
      }}>
        <button
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '24px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '16px'
          }}
        >
          ←
        </button>
        <h1 style={{
          margin: 0,
          fontSize: '20px',
          fontWeight: '500',
          flex: 1
        }}>
          {title}
        </h1>

        {/* Optional toolbar actions */}
        <div style={{ display: 'flex', gap: '8px' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            padding: '8px',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            ⋮
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch'
      }}>
        {children}
      </div>
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentPage, setCurrentPage] = useState(null);
  const [selectedTileIndex, setSelectedTileIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideoLibrary, setShowVideoLibrary] = useState(false);
  
  // Login states
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState(['', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [loginData, setLoginData] = useState(null);

  const { isMobile, isTablet } = useScreenSize();

  // Auto-navigate to quotes if already logged in when accessing My Quotes tab
  React.useEffect(() => {
    if (currentPage === 'about' && loginData) {
      // User is already logged in, they'll see the quotes list automatically
    }
  }, [currentPage, loginData]);

  // API Login function - Replace with your actual API endpoint
  const performLogin = async (email, pinCode) => {
    try {
      const response = await fetch('/api/login', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          pin: pinCode
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Successful login - return the data
        return { success: true, data: data };
      } else {
        // Failed login
        return { success: false, message: data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'Network error. Please try again.' };
    }
  };

  // Handle login submission
  const handleLogin = async () => {
    const pinCode = pin.join('');
    
    // Check if in test mode
    if (TEST_MODE) {
      setIsLoading(true);
      
      // Simulate loading delay
      setTimeout(() => {
        setLoginData({
          user: {
            email: email || 'test@example.com',
            name: 'Test User'
          },
          quotes: SAMPLE_QUOTES
        });
        setIsLoading(false);
      }, 1000);
      return;
    }
    
    if (!email || pinCode.length !== 4) {
      setErrorMessage('Please enter both email and 4-digit PIN');
      setShowError(true);
      return;
    }

    setIsLoading(true);

    try {
      const result = await performLogin(email, pinCode);
      
      if (result.success) {
        // Successful login
        setLoginData(result.data);
        // The QuotesList component will be shown automatically
      } else {
        // Failed login
        setErrorMessage(result.message);
        setShowError(true);
      }
    } catch (error) {
      setErrorMessage('An unexpected error occurred');
      setShowError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setLoginData(null);
    setEmail('');
    setPin(['', '', '', '']);
  };

  // Handle PIN input
  const handlePinChange = (index, value) => {
    if (value && !/^[0-9]$/.test(value)) return; // Only allow numbers
    
    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
  };

  // Handle tab clicks to show full pages
  const handleTabClick = (tabName) => {
    if (tabName !== 'home') {
      setCurrentPage(tabName);
    } else {
      setCurrentPage(null);
    }
    setActiveTab(tabName);
  };

  const closePage = () => {
    setCurrentPage(null);
    setActiveTab('home');
    // Don't reset login state when closing the page - maintain session
  };

  // Handle tile click to show slide-up page
  const handleTileClick = (index) => {
    setSelectedTileIndex(index);
  };

  // Close tile slide-up page
  const closeTilePage = () => {
    setSelectedTileIndex(null);
  };

  // Menu toggle functions
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  // Video library functions
  const openVideoLibrary = () => setShowVideoLibrary(true);
  const closeVideoLibrary = () => setShowVideoLibrary(false);

  // Your slides data
  const yourSlides = [
    {
      id: 1,
      type: 'image',
      src: homeArchImage,
      overlay: true,
      overlayPosition: 'center-left'
    },
    {
      id: 2,
      type: 'image',
      src: homeWovenImage,
      overlay: true,
      overlayPosition: 'center-right'
    },
    {
      id: 3,
      type: 'image',
      src: ImgSnowWide,
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      {/* Pass openMenu function to AppHeader if needed */}
      <AppHeader onMenuClick={openMenu} />

      {/* Main scrollable content */}
      <div style={{
        flex: 1,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        paddingBottom: '80px' // Add space for TabBar
      }}>

        <br /><br />

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

        <SalesEnquiryComponent />

        <VideoShowcaseComponent onClick={openVideoLibrary} />

        {/* Catalogue Section */}
        <div style={{ padding: '16px' }}>
          <h2 style={{margin:'2%'}}>Catalogue</h2>

          {/* Mobile View - Show TileButton grid */}
          {isMobile && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '16px'
            }}>
              {tileData.map((item, index) => (
                <div key={index} onClick={() => handleTileClick(index)}>
                  <TileButton
                    navigator={navigator}
                    title={tileData[index][0]}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Tablet/Desktop View - Show LargeMenu */}
          {isTablet && (
            <LargeMenu 
              tileData={tileData}
              onMenuClick={handleTileClick}
            />
          )}
        </div>
      </div>

      {/* Fixed Custom TabBar at bottom */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100
      }}>
        <CustomTabBar
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
      </div>

      {/* Right Slide Menu */}
      <RightSlideMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />

      {/* Error Popup */}
      <ErrorPopup
        isVisible={showError}
        message={errorMessage}
        onClose={() => setShowError(false)}
      />

      {/* Tile Detail Slide-up Pages */}
      {tileData.map((tile, index) => (
        <FullPageSlideUp
          key={`tile-${index}`}
          isVisible={selectedTileIndex === index}
          onClose={closeTilePage}
          title={tile[0]}
        >
          <div style={{ padding: '20px' }}>
            <div style={{
              marginBottom: '24px',
              padding: '20px',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              border: '1px solid #e9ecef'
            }}>
              <h2 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '24px'
              }}>
                {tile[0]}
              </h2>
              <p style={{
                margin: 0,
                lineHeight: '1.6',
                color: '#666',
                fontSize: '16px'
              }}>
                {tile[1]}
              </p>
            </div>

            {/* Product Features Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                Key Features
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Premium Quality Materials</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Water & Stain Resistant</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Easy to Clean & Maintain</span>
                </div>
                <div style={{
                  padding: '16px',
                  backgroundColor: '#fff',
                  border: '1px solid #e9ecef',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '20px' }}>✓</span>
                  <span>Professional Installation Available</span>
                </div>
              </div>
            </div>

            {/* Specifications Section */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                Specifications
              </h3>
              <div style={{
                backgroundColor: '#fff',
                border: '1px solid #e9ecef',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Size Options
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Various sizes available
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Thickness
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    8-12mm
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  borderBottom: '1px solid #e9ecef'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Finish
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Matt, Gloss, Textured
                  </div>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr'
                }}>
                  <div style={{ padding: '12px 16px', fontWeight: '500', backgroundColor: '#f8f9fa' }}>
                    Suitable Areas
                  </div>
                  <div style={{ padding: '12px 16px' }}>
                    Indoor & Outdoor
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <button style={{
                flex: 1,
                minWidth: '140px',
                backgroundColor: 'rgb(61, 61, 61)',
                color: 'white',
                border: 'none',
                padding: '16px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📋 Request Quote
              </button>
              <button style={{
                flex: 1,
                minWidth: '140px',
                backgroundColor: '#fff',
                color: 'rgb(61, 61, 61)',
                border: '2px solid rgb(61, 61, 61)',
                padding: '16px 24px',
                borderRadius: '6px',
                fontSize: '16px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                📞 Call Us
              </button>
            </div>

            {/* Related Products Section */}
            <div style={{ marginTop: '40px' }}>
              <h3 style={{
                margin: '0 0 16px 0',
                color: '#333',
                fontSize: '20px'
              }}>
                You might also like
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
                gap: '12px'
              }}>
                {tileData.filter((_, i) => i !== index).slice(0, 3).map((relatedTile, relatedIndex) => (
                  <button
                    key={relatedIndex}
                    onClick={() => setSelectedTileIndex(tileData.findIndex(t => t === relatedTile))}
                    style={{
                      padding: '16px 12px',
                      backgroundColor: '#f8f9fa',
                      border: '1px solid #e9ecef',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      textAlign: 'center',
                      fontSize: '14px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#e9ecef'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#f8f9fa'}
                  >
                    {relatedTile[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </FullPageSlideUp>
      ))}

      {/* Full Page Slide-ups */}
      <FullPageSlideUp
        isVisible={currentPage === 'services'}
        onClose={closePage}
        title="Services"
      >
        <SalesEnquiryForm />
      </FullPageSlideUp>

      <FullPageSlideUp
        isVisible={currentPage === 'about'}
        onClose={closePage}
        title="My Quotes"
      >
        {loginData ? (
          <QuotesList 
            quotes={loginData.quotes || []} 
            onBack={handleLogout}
            userEmail={loginData.user?.email || email}
          />
        ) : (
          <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ margin: '0 0 8px 0', fontSize: '28px', color: '#333' }}>Login</h2>
              <p style={{ margin: 0, color: '#666', fontSize: '16px' }}>
                Sign in to access your quotes
              </p>
              {TEST_MODE && (
                <div style={{ 
                  margin: '8px 0 0 0', 
                  padding: '12px',
                  backgroundColor: '#e8f5e8',
                  borderRadius: '6px',
                  border: '1px solid #28a745'
                }}>
                  <p style={{ 
                    margin: '0 0 4px 0', 
                    color: '#ff6b35', 
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    🧪 Test Mode: Any login will work
                  </p>
                  <p style={{ 
                    margin: 0, 
                    color: '#155724', 
                    fontSize: '12px'
                  }}>
                    Your session will be maintained while navigating between tabs
                  </p>
                </div>
              )}
            </div>

            {/* Login Form */}
            <div style={{ marginBottom: '32px' }}>
              {/* Email Input */}
              <div style={{ marginBottom: '24px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  style={{
                    width: '100%',
                    padding: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    fontSize: '16px',
                    transition: 'border-color 0.2s ease',
                    outline: 'none',
                    opacity: isLoading ? 0.6 : 1
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'rgb(61, 61, 61)'}
                  onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                />
              </div>

              {/* PIN Code Input */}
              <div style={{ marginBottom: '32px' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#333'
                }}>
                  PIN Code
                </label>
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  justifyContent: 'center',
                  marginBottom: '8px'
                }}>
                  {[0, 1, 2, 3].map((index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      value={pin[index]}
                      onChange={(e) => handlePinChange(index, e.target.value)}
                      disabled={isLoading}
                      style={{
                        width: '60px',
                        height: '60px',
                        textAlign: 'center',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        border: '2px solid #e0e0e0',
                        borderRadius: '8px',
                        outline: 'none',
                        transition: 'border-color 0.2s ease',
                        opacity: isLoading ? 0.6 : 1
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'rgb(61, 61, 61)';
                        e.target.select();
                      }}
                      onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
                      onInput={(e) => {
                        // Auto-focus next input
                        if (e.target.value && index < 3) {
                          const nextInput = e.target.parentNode.children[index + 1];
                          if (nextInput) nextInput.focus();
                        }
                      }}
                      onKeyDown={(e) => {
                        // Handle backspace to go to previous input
                        if (e.key === 'Backspace' && !e.target.value && index > 0) {
                          const prevInput = e.target.parentNode.children[index - 1];
                          if (prevInput) {
                            prevInput.focus();
                            prevInput.select();
                          }
                        }
                      }}
                    />
                  ))}
                </div>
                <p style={{
                  margin: 0,
                  fontSize: '12px',
                  color: '#666',
                  textAlign: 'center'
                }}>
                  {TEST_MODE ? 'Enter any 4 digits (test mode)' : 'Enter your 4-digit PIN'}
                </p>
              </div>

              {/* Login Button */}
              <button 
                onClick={handleLogin}
                disabled={isLoading}
                style={{
                  width: '100%',
                  backgroundColor: isLoading ? '#ccc' : 'rgb(61, 61, 61)',
                  color: 'white',
                  border: 'none',
                  padding: '16px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s ease',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseEnter={(e) => {
                  if (!isLoading) e.target.style.backgroundColor = 'rgb(45, 45, 45)';
                }}
                onMouseLeave={(e) => {
                  if (!isLoading) e.target.style.backgroundColor = 'rgb(61, 61, 61)';
                }}
              >
                {isLoading ? (
                  <>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      border: '2px solid #fff',
                      borderTop: '2px solid transparent',
                      borderRadius: '50%',
                      animation: 'spin 1s linear infinite'
                    }} />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

              {/* Add CSS for spinner animation */}
              <style>
                {`
                  @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                `}
              </style>

              {/* Forgot PIN Link */}
              <div style={{ textAlign: 'center' }}>
                <button style={{
                  background: 'none',
                  border: 'none',
                  color: 'rgb(61, 61, 61)',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
                  onClick={() => {
                    // Add forgot PIN logic here
                    console.log('Forgot PIN clicked');
                  }}
                >
                  Forgot your PIN?
                </button>
              </div>
            </div>
          </div>
        )}
      </FullPageSlideUp>

      {/* Video Library Page */}
      <FullPageSlideUp
        isVisible={showVideoLibrary}
        onClose={closeVideoLibrary}
        title="Product Videos"
      >
        <VideoLibrary videos={PRODUCT_VIDEOS} />
      </FullPageSlideUp>
    </div>
  );
}

export default App;