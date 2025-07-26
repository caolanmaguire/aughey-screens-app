// src/components/FullWidthSlider.jsx
import React, { useState, useEffect, useRef } from 'react';

// Material Design Colors
const materialColors = {
  primary: '#6200ea',
  primaryDark: '#3700b3',
  accent: '#03dac6',
  surface: '#ffffff',
  background: '#f5f5f5',
  onSurface: '#000000',
  onPrimary: '#ffffff'
};

const FullWidthSlider = ({ 
  slides = [], 
  height = '400px',
  autoPlay = true,
  autoPlayInterval = 5000,
  showControls = true,
  showDots = true,
  showCounter = false,
  pauseOnHover = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const sliderRef = useRef(null);

  // Sample slides if none provided
  const defaultSlides = [
    {
      id: 1,
      type: 'image',
      src: 'https://picsum.photos/1200/400?random=1',
      title: 'Professional Screen Installation',
      description: 'Expert installation services for residential and commercial properties',
      overlay: true,
      overlayPosition: 'center-left'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://picsum.photos/1200/400?random=2',
      title: 'Quality Materials',
      description: 'Premium materials ensuring durability and longevity',
      overlay: true,
      overlayPosition: 'center-right'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://picsum.photos/1200/400?random=3',
      title: 'Custom Solutions',
      description: 'Tailored screen solutions for every space and requirement',
      overlay: true,
      overlayPosition: 'center'
    }
  ];

  const allSlides = slides.length > 0 ? slides : defaultSlides;

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying || allSlides.length <= 1) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, currentSlide]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev + 1) % allSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(prev => (prev - 1 + allSlides.length) % allSlides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getOverlayStyle = (position) => {
    const baseStyle = {
      position: 'absolute',
      color: 'white',
      padding: '40px',
      background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
      borderRadius: '8px',
      maxWidth: '400px'
    };

    switch(position) {
      case 'center-left':
        return { ...baseStyle, left: '40px', top: '50%', transform: 'translateY(-50%)' };
      case 'center-right':
        return { ...baseStyle, right: '40px', top: '50%', transform: 'translateY(-50%)' };
      case 'center':
        return { ...baseStyle, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' };
      case 'bottom-left':
        return { ...baseStyle, left: '40px', bottom: '40px' };
      case 'bottom-right':
        return { ...baseStyle, right: '40px', bottom: '40px' };
      case 'bottom-center':
        return { ...baseStyle, left: '50%', bottom: '40px', transform: 'translateX(-50%)', textAlign: 'center' };
      default:
        return { ...baseStyle, left: '40px', bottom: '40px' };
    }
  };

  return (
    <div style={{
      position: 'relative',
      width: '100vw',
      height: '100%',
      marginLeft: 'calc(-50vw + 50%)', // This makes it full width even inside containers
      overflow: 'hidden',
      background: '#000',
      marginTop: '28px',
    }}>
      {/* Slides Container */}
      <div
        ref={sliderRef}
        style={{
          display: 'flex',
          width: `${allSlides.length * 100}%`,
          height: '100%',
          transform: `translateX(-${currentSlide * (100 / allSlides.length)}%)`,
          transition: 'transform 0.6s cubic-bezier(0.4, 0.0, 0.2, 1)'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={() => pauseOnHover && setIsPlaying(false)}
        onMouseLeave={() => pauseOnHover && setIsPlaying(autoPlay)}
      >
        {allSlides.map((slide, index) => (
          <div
            key={slide.id || index}
            style={{
              width: `${100 / allSlides.length}%`,
              height: '100%',
              position: 'relative',
              flexShrink: 0,
              background: slide.backgroundColor || 'transparent'
            }}
          >
            {/* Image Slide */}
            {slide.type === 'image' && (
              <>
                <img
                  src={slide.src}
                  alt={slide.title || `Slide ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Text Overlay */}
                {slide.overlay && (slide.title || slide.description) && (
                  <div style={getOverlayStyle(slide.overlayPosition || 'bottom-left')}>
                    {slide.title && (
                      <h2 style={{
                        margin: '0 0 12px 0',
                        fontSize: '28px',
                        fontWeight: '400',
                        fontFamily: 'Roboto, sans-serif',
                        lineHeight: '1.2'
                      }}>
                        {slide.title}
                      </h2>
                    )}
                    {slide.description && (
                      <p style={{
                        margin: 0,
                        fontSize: '16px',
                        opacity: 0.95,
                        lineHeight: '1.5'
                      }}>
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </>
            )}

            {/* Content Slide */}
            {slide.type === 'content' && slide.content}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showControls && allSlides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            style={{
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isTransitioning ? 'not-allowed' : 'pointer',
              fontSize: '20px',
              transition: 'all 0.3s ease',
              opacity: isTransitioning ? 0.5 : 1,
              zIndex: 10,
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => !isTransitioning && (e.target.style.backgroundColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => !isTransitioning && (e.target.style.backgroundColor = 'rgba(255,255,255,0.2)')}
          >
            ❮
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: isTransitioning ? 'not-allowed' : 'pointer',
              fontSize: '20px',
              transition: 'all 0.3s ease',
              opacity: isTransitioning ? 0.5 : 1,
              zIndex: 10,
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => !isTransitioning && (e.target.style.backgroundColor = 'rgba(255,255,255,0.3)')}
            onMouseLeave={(e) => !isTransitioning && (e.target.style.backgroundColor = 'rgba(255,255,255,0.2)')}
          >
            ❯
          </button>
        </>
      )}

      {/* Counter */}
      {showCounter && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontFamily: 'Roboto, sans-serif',
          zIndex: 10,
          backdropFilter: 'blur(10px)'
        }}>
          {currentSlide + 1} / {allSlides.length}
        </div>
      )}

      {/* Play/Pause Button */}
      {showControls && (
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.2s ease',
            zIndex: 10,
            backdropFilter: 'blur(10px)'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.9)'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(0,0,0,0.7)'}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
      )}

      {/* Dot Navigation */}
      {showDots && allSlides.length > 1 && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '12px',
          zIndex: 10
        }}>
          {allSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index 
                  ? materialColors.accent 
                  : 'rgba(255,255,255,0.5)',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                transition: 'all 0.3s ease',
                transform: currentSlide === index ? 'scale(1.2)' : 'scale(1)',
                opacity: isTransitioning ? 0.5 : 1,
                backdropFilter: 'blur(10px)'
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FullWidthSlider;