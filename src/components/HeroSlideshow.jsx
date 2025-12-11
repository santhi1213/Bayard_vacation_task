// components/HeroSlideshow.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/HeroSlideshow.css';

const HeroSlideshow = ({ destinations, activeSlide, setActiveSlide }) => {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const totalSlides = destinations.length;
  const scrollTimeout = useRef(null);
  const containerRef = useRef(null);

  // Handle wheel scroll for slide navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default scrolling behavior
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (e.deltaY > 0) {
        // Scroll down - next slide
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      } else {
        // Scroll up - previous slide
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
      
      // Reset progress when manually changing slides
      setProgress(0);
      
      // Debounce to prevent rapid scrolling
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    };

    // Handle touch events for mobile
    const handleTouchStart = (e) => {
      const touchStartY = e.touches[0].clientY;
      
      const handleTouchEnd = (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        
        if (Math.abs(deltaY) > 50 && !isScrolling) {
          setIsScrolling(true);
          
          if (deltaY > 0) {
            // Swipe up - next slide
            setActiveSlide((prev) => (prev + 1) % totalSlides);
          } else {
            // Swipe down - previous slide
            setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
          }
          
          setProgress(0);
          
          setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }
      };
      
      window.addEventListener('touchend', handleTouchEnd, { once: true });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling, totalSlides, setActiveSlide]);

  // Auto-advance progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setActiveSlide((activeSlide + 1) % totalSlides);
          return 0;
        }
        return prev + 0.5;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [activeSlide, totalSlides, setActiveSlide]);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setProgress(0);
  };

  return (
    <section className="wellness-slideshow" ref={containerRef}>
      <div className="overlay-gradient"></div>
      
      <div className="image-wrapper">
        {destinations.map((dest, index) => (
          <div 
            key={dest.id}
            className={`image-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ 
              backgroundImage: `url(${dest.images.desktop})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>

      <div className="content">
        <div className="title-wrapper">
          {destinations.map((dest, index) => (
            <h2 
              key={dest.id}
              className={`title ${index === activeSlide ? 'active' : ''}`}
            >
              {dest.title}
            </h2>
          ))}
        </div>

        <div className="border"></div>

        <div className="center">
          <div className="explore">
            <div className="text-label">
              <div className="icon">
                <svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z" fill="#D1CCBF"/>
                </svg>
              </div>
              <div className="text">
                <h2 className="label-title">Explore Destinations</h2>
              </div>
            </div>
          </div>

          <div className="number">
            <span className="current">
              {(activeSlide + 1).toString().padStart(2, '0')}
            </span>
            <span className="inactive">
              &nbsp;—&nbsp;{totalSlides.toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="location-wrapper">
          {destinations.map((dest, index) => (
            <p 
              key={dest.id}
              className={`location ${index === activeSlide ? 'active' : ''}`}
            >
              {dest.title} {dest.subtitle && `| ${dest.subtitle}`}
            </p>
          ))}
        </div>

        <div className="border"></div>

        <div>
          <div className="desc-wrapper">
            {destinations.map((dest, index) => (
              <p 
                key={dest.id}
                className={`desc ${index === activeSlide ? 'active' : ''}`}
              >
                {dest.description}
              </p>
            ))}
          </div>
        </div>

        <div className="preview">
          {destinations.map((dest, index) => (
            <div 
              key={dest.id}
              className={`preview__item ${index === activeSlide ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
            >
              <p className="preview__number">
                {(index + 1).toString().padStart(2, '0')}.
              </p>
              <div className="preview__image">
                <img 
                  src={dest.images.desktop} 
                  alt={dest.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/160x96/2b3530/d1ccbf?text=Image+Loading";
                  }}
                />
              </div>
            </div>
          ))}
          
          <div className="preview__loading">
            <div className="preview__bar">
              <div 
                className="preview__fill"
                style={{ transform: `scaleX(${progress / 100})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span>Scroll to navigate</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.99998 1.33333C5.63179 1.33333 5.33331 1.63181 5.33331 2V8.39052L3.13806 6.19527C2.87771 5.93492 2.45559 5.93492 2.19524 6.19527C1.93489 6.45562 1.93489 6.87774 2.19524 7.13809L5.52857 10.4714C5.78892 10.7318 6.21104 10.7318 6.47139 10.4714L9.80472 7.13809C10.0651 6.87774 10.0651 6.45562 9.80472 6.19527C9.54437 5.93492 9.12225 5.93492 8.8619 6.19527L6.66665 8.39052V2C6.66665 1.63181 6.36817 1.33333 5.99998 1.33333Z" fill="#D1CCBF"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSlideshow;


