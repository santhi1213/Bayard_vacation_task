// components/HeroSlideshow.js
import React, { useState, useEffect, useRef } from 'react';
import '../styles/HeroSlideshow.css';

const HeroSlideshow = ({ destinations, activeSlide, setActiveSlide }) => {
  const [progress, setProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);
  const totalSlides = destinations.length;
  const scrollCooldown = useRef(false);
  const containerRef = useRef(null);

  // Handle wheel scroll for slide navigation
  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent default page scrolling
      e.preventDefault();
      e.stopPropagation();
      
      if (scrollCooldown.current) return;
      
      setIsScrolling(true);
      scrollCooldown.current = true;
      
      if (e.deltaY > 0) {
        // Scroll down - next slide
        setScrollDirection('down');
        setActiveSlide((prev) => {
          const next = (prev + 1) % totalSlides;
          return next;
        });
      } else {
        // Scroll up - previous slide
        setScrollDirection('up');
        setActiveSlide((prev) => {
          const prevSlide = (prev - 1 + totalSlides) % totalSlides;
          return prevSlide;
        });
      }
      
      // Reset progress when manually changing slides
      setProgress(0);
      
      // Cooldown to prevent rapid scrolling
      setTimeout(() => {
        scrollCooldown.current = false;
        setIsScrolling(false);
        setScrollDirection(null);
      }, 800);
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };
    
    const handleTouchMove = (e) => {
      e.preventDefault(); // Prevent page scrolling on mobile
    };
    
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) > 50 && !scrollCooldown.current) {
        e.preventDefault();
        scrollCooldown.current = true;
        
        if (deltaY > 0) {
          // Swipe up - next slide
          setScrollDirection('up');
          setActiveSlide((prev) => (prev + 1) % totalSlides);
        } else {
          // Swipe down - previous slide
          setScrollDirection('down');
          setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
        
        setProgress(0);
        
        setTimeout(() => {
          scrollCooldown.current = false;
          setScrollDirection(null);
        }, 800);
      }
    };

    const container = containerRef.current;
    if (container) {
      // Add passive: false to ensure we can preventDefault
      container.addEventListener('wheel', handleWheel, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });
      container.addEventListener('touchend', handleTouchEnd, { passive: false });
      
      // Also prevent default browser behavior for arrow keys
      const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
        }
      };
      
      container.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
        container.removeEventListener('touchend', handleTouchEnd);
        container.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, [totalSlides, setActiveSlide]);

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

  // Add keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        setActiveSlide((prev) => (prev + 1) % totalSlides);
        setProgress(0);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        setProgress(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setActiveSlide, totalSlides]);

  return (
    <section 
      className="wellness-slideshow" 
      ref={containerRef}
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <div className="overlay-gradient"></div>
      
      {/* Direction indicators */}
      {scrollDirection && (
        <div className={`scroll-direction-indicator ${scrollDirection}`}>
          <div className="indicator-content">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {scrollDirection === 'down' ? (
                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#D1CCBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              ) : (
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="#D1CCBF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              )}
            </svg>
          </div>
        </div>
      )}
      
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

      {/* Scroll instruction */}
      <div className="scroll-instruction">
        <div className="instruction-text">
          <span>Scroll to explore</span>
        </div>
        <div className="instruction-scroll">
          <div className="scroll-wheel">
            <div className="scroll-wheel-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlideshow;


