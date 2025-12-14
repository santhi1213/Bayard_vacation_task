import React, { useState, useEffect, useRef } from 'react';

const HeroSlideshow = ({ destinations, activeSlide, setActiveSlide }) => {
  const [progress, setProgress] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const totalSlides = destinations.length;
  const containerRef = useRef(null);
  const clickTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const lastInteractionTime = useRef(Date.now());
  const lastScrollTime = useRef(0);

  // Handle click to open sidebar
  const handlePageClick = (e) => {
    const isInteractiveElement = e.target.closest('.preview__item') || 
                                 e.target.closest('.scroll-indicator') ||
                                 e.target.closest('.sidebar-content') ||
                                 e.target.closest('.sidebar-close') ||
                                 e.target.tagName === 'BUTTON' ||
                                 e.target.tagName === 'A';
    
    if (!isInteractiveElement) {
      clearTimeout(clickTimerRef.current);
      clickTimerRef.current = setTimeout(() => {
        setShowSidebar(true);
      }, 100);
    }
  };

  // Handle wheel scroll for slide navigation
  const handleWheel = (e) => {
    if (showSidebar) return;
    
    e.preventDefault();
    
    const now = Date.now();
    const timeSinceLastScroll = now - lastScrollTime.current;
    
    // Reduce cooldown to 300ms for more responsive scrolling
    if (timeSinceLastScroll < 300) return;
    
    lastScrollTime.current = now;
    lastInteractionTime.current = now;
    
    if (e.deltaY > 0) {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    } else {
      setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    }
    
    setProgress(0);
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    if (showSidebar) return;
    
    const touchStartY = e.touches[0].clientY;
    
    const handleTouchEnd = (e) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTime.current;
      
      if (Math.abs(deltaY) > 50 && timeSinceLastScroll >= 300) {
        lastScrollTime.current = now;
        lastInteractionTime.current = now;
        
        if (deltaY > 0) {
          setActiveSlide((prev) => (prev + 1) % totalSlides);
        } else {
          setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
        }
        
        setProgress(0);
      }
    };
    
    window.addEventListener('touchend', handleTouchEnd, { once: true });
  };

  // Handle mouse move for tooltip
  const handleMouseMove = (e) => {
    if (showSidebar) {
      setShowTooltip(false);
      return;
    }
    
    const isInteractiveElement = e.target.closest('.preview__item') || 
                                 e.target.closest('.scroll-indicator') ||
                                 e.target.closest('.sidebar-content') ||
                                 e.target.closest('.sidebar-close') ||
                                 e.target.tagName === 'BUTTON' ||
                                 e.target.tagName === 'A';
    
    if (!isInteractiveElement) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setShowTooltip(true);
    } else {
      setShowTooltip(false);
    }
  };

  // Setup event listeners
  useEffect(() => {
    const container = containerRef.current;
    
    const wheelHandler = (e) => handleWheel(e);
    const touchHandler = (e) => handleTouchStart(e);
    const mouseMoveHandler = (e) => handleMouseMove(e);
    
    if (container) {
      container.addEventListener('wheel', wheelHandler, { passive: false });
      container.addEventListener('touchstart', touchHandler);
      container.addEventListener('click', handlePageClick);
      container.addEventListener('mousemove', mouseMoveHandler);
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', wheelHandler);
        container.removeEventListener('touchstart', touchHandler);
        container.removeEventListener('click', handlePageClick);
        container.removeEventListener('mousemove', mouseMoveHandler);
      }
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
    };
  }, [totalSlides, setActiveSlide, showSidebar]);

  // Auto-advance progress bar logic
  useEffect(() => {
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
    
    if (!showSidebar) {
      progressIntervalRef.current = setInterval(() => {
        const timeSinceLastInteraction = Date.now() - lastInteractionTime.current;
        const shouldAutoAdvance = timeSinceLastInteraction > 2000;
        
        if (shouldAutoAdvance) {
          setProgress(prev => {
            if (prev >= 100) {
              setActiveSlide((prevSlide) => (prevSlide + 1) % totalSlides);
              return 0;
            }
            return prev + 0.5;
          });
        }
      }, 50);
    }
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    };
  }, [activeSlide, totalSlides, setActiveSlide, showSidebar]);

  useEffect(() => {
    setProgress(0);
  }, [activeSlide]);

  const handleSlideChange = (index) => {
    lastInteractionTime.current = Date.now();
    setActiveSlide(index);
    setProgress(0);
  };

  const closeSidebar = (e) => {
    if (e) {
      e.stopPropagation();
    }
    setShowSidebar(false);
  };

  const handleSidebarWheel = (e) => {
    e.stopPropagation();
  };

  const currentDestination = destinations[activeSlide];

  return (
    <>
      {/* Cursor Tooltip */}
      {showTooltip && !showSidebar && (
        <div 
          className="cursor-tooltip"
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
          }}
        >
          <div className="tooltip-content">
            {/* <span className="tooltip-icon">👁️</span> */}
            <span className="tooltip-text">Explore</span>
          </div>
        </div>
      )}

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
                
                <div className="preview__loading">
                  <div className="preview__bar">
                    <div 
                      className="preview__fill"
                      style={{ 
                        transform: index === activeSlide 
                          ? `scaleX(${progress / 100})` 
                          : 'scaleX(0)',
                        transition: index === activeSlide 
                          ? 'transform 0.1s linear' 
                          : 'none'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll to navigate</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M5.99998 1.33333C5.63179 1.33333 5.33331 1.63181 5.33331 2V8.39052L3.13806 6.19527C2.87771 5.93492 2.45559 5.93492 2.19524 6.19527C1.93489 6.45562 1.93489 6.87774 2.19524 7.13809L5.52857 10.4714C5.78892 10.7318 6.21104 10.7318 6.47139 10.4714L9.80472 7.13809C10.0651 6.87774 10.0651 6.45562 9.80472 6.19527C9.54437 5.93492 9.12225 5.93492 8.8619 6.19527L6.66665 8.39052V2C6.66665 1.63181 6.36817 1.33333 5.99998 1.33333Z" fill="#D1CCBF"/>
          </svg>
        </div>
      </section>

      {/* Image Detail Sidebar */}
      <div 
        className={`image-detail-sidebar ${showSidebar ? 'open' : ''}`}
        onWheel={handleSidebarWheel}
        onClick={(e) => {
          if (e.target.classList.contains('sidebar-overlay')) {
            closeSidebar(e);
          }
        }}
      >
        <div className="sidebar-overlay"></div>
        <div 
          className="sidebar-content"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="sidebar-close" onClick={closeSidebar}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          
          <div className="sidebar-image">
            <img 
              src={currentDestination.images.desktop} 
              alt={currentDestination.title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/400x500/2b3530/d1ccbf?text=Image+Loading";
              }}
            />
          </div>
          
          <div className="sidebar-details">
            <div className="sidebar-header">
              <h3 className="sidebar-title">{currentDestination.title}</h3>
              {currentDestination.subtitle && (
                <p className="sidebar-subtitle">{currentDestination.subtitle}</p>
              )}
            </div>
            
            <div className="sidebar-description">
              <p>{currentDestination.description}</p>
            </div>
            
            <div className="sidebar-meta">
              <div className="meta-item">
                <span className="meta-label">Current Slide</span>
                <span className="meta-value">
                  {(activeSlide + 1).toString().padStart(2, '0')} / {totalSlides.toString().padStart(2, '0')}
                </span>
              </div>
              {currentDestination.location && (
                <div className="meta-item">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{currentDestination.location}</span>
                </div>
              )}
              {currentDestination.country && (
                <div className="meta-item">
                  <span className="meta-label">Country</span>
                  <span className="meta-value">{currentDestination.country}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Base Slideshow Styles */
        .wellness-slideshow {
          position: relative;
          height: 100vh;
          min-height: 100vh;
          color: #fff;
          overflow: hidden;
          touch-action: none;
          z-index: 1;
        }

        body, html {
          overflow: hidden;
          height: 100%;
        }

        .overlay-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(0deg, rgba(0,0,0,0.7), transparent);
          opacity: 0.5;
          z-index: 2;
        }

        .image-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .image-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .image-slide.active {
          opacity: 1;
        }

        .content {
          position: relative;
          z-index: 3;
          height: 100%;
          padding: 80px 64px;
          display: flex;
          flex-direction: column;
          pointer-events: none;
        }

        .content > * {
          pointer-events: auto;
        }

        .title-wrapper {
          height: 30vh;
          position: relative;
          margin-bottom: 40px;
        }

        .title {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 8rem;
          font-weight: 300;
          letter-spacing: -0.02em;
          line-height: 1;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .title.active {
          opacity: 1;
        }

        .border {
          width: 100%;
          height: 1px;
          background-color: rgba(255, 255, 255, 0.5);
          margin: 20px 0;
        }

        .center {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 20px 0;
        }

        .text-label {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .label-title {
          font-size: 1rem;
          font-weight: 400;
          margin: 0;
        }

        .number {
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        .current {
          font-weight: 400;
        }

        .inactive {
          opacity: 0.5;
          margin-left: 8px;
        }

        .location-wrapper {
          position: absolute;
          bottom: 120px;
          right: 64px;
          font-size: 1.125rem;
        }

        .location {
          opacity: 0;
          position: absolute;
          transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .location.active {
          opacity: 1;
        }

        .desc-wrapper {
          max-width: 500px;
          height: 80px;
          position: relative;
        }

        .desc {
          position: absolute;
          top: 0;
          left: 0;
          font-size: 1.125rem;
          line-height: 1.4;
          opacity: 0;
          transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .desc.active {
          opacity: 1;
        }

        .preview {
          position: absolute;
          bottom: 40px;
          right: 64px;
          display: flex;
          gap: 20px;
          align-items: flex-end;
        }

        .preview__item {
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }

        .preview__item.active {
          opacity: 1;
          cursor: default;
        }

        .preview__item:hover:not(.active) {
          opacity: 0.8;
        }

        .preview__number {
          font-size: 0.875rem;
          margin: 0;
        }

        .preview__image {
          width: 160px;
          height: 96px;
          overflow: hidden;
        }

        .preview__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .preview__item:hover .preview__image img {
          transform: scale(1.1);
        }

        .preview__loading {
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 100%;
        }

        .preview__bar {
          width: 160px;
          height: 2px;
          background-color: rgba(255, 255, 255, 0.3);
          position: relative;
          overflow: hidden;
        }

        .preview__fill {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background-color: #fff;
          width: 100%;
          transform-origin: left;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          z-index: 10;
          opacity: 0.8;
        }

        /* Cursor Tooltip */
        .cursor-tooltip {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          animation: tooltipPulse 2s ease-in-out infinite;
        }

        .tooltip-content {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(214, 202, 202, 0.95);
          color: #2b3530;
          padding: 10px 16px;
          border-radius: 24px;
          width:90px;
          height: 90px;
          border-radius: 100%;
          font-size: 0.875rem;
          font-weight: 500;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          white-space: nowrap;
        }

        .tooltip-icon {
          font-size: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tooltip-text {
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-size: 0.75rem;
        }

        @keyframes tooltipPulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            transform: translate(-50%, -50%) scale(1.05);
          }
        }

        /* Sidebar Styles */
        .image-detail-sidebar {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          z-index: 1000;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-detail-sidebar.open {
          opacity: 1;
          pointer-events: auto;
        }

        .sidebar-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .image-detail-sidebar.open .sidebar-overlay {
          opacity: 1;
        }

        .image-detail-sidebar:not(.open) .sidebar-overlay {
          pointer-events: none;
        }

        .sidebar-content {
          position: absolute;
          top: 0;
          right: -100%;
          width: 90%;
          max-width: 500px;
          height: 100%;
          background: linear-gradient(135deg, rgba(30, 30, 30, 0.95) 0%, rgba(20, 20, 20, 0.98) 100%);
          backdrop-filter: blur(10px);
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          overflow-y: auto;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .image-detail-sidebar.open .sidebar-content {
          right: 0;
        }

        .sidebar-close {
          position: absolute;
          top: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: all 0.3s ease;
          pointer-events: auto;
        }

        .sidebar-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .sidebar-image {
          width: 100%;
          height: 50vh;
          min-height: 300px;
          overflow: hidden;
          position: relative;
        }

        .sidebar-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }

        .sidebar-image:hover img {
          transform: scale(1.05);
        }

        .sidebar-details {
          flex: 1;
          padding: 32px;
          overflow-y: auto;
        }

        .sidebar-header {
          margin-bottom: 32px;
          padding-bottom: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .sidebar-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #fff;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .sidebar-subtitle {
          font-size: 1.125rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-weight: 300;
        }

        .sidebar-description {
          margin-bottom: 40px;
        }

        .sidebar-description p {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .sidebar-meta {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .meta-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .meta-label {
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .meta-value {
          font-size: 1rem;
          color: #fff;
          font-weight: 400;
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .content {
            padding: 100px 20px 60px;
          }

          .title {
            font-size: 4rem;
          }

          .location-wrapper {
            position: relative;
            bottom: auto;
            right: auto;
            margin: 20px 0;
          }

          .preview {
            position: relative;
            bottom: auto;
            right: auto;
            margin-top: 40px;
            justify-content: center;
          }

          .preview__image {
            width: 120px;
            height: 72px;
          }

          .preview__bar {
            width: 120px;
          }

          .cursor-tooltip {
            display: none;
          }

          .sidebar-content {
            width: 100%;
            max-width: none;
          }

          .sidebar-title {
            font-size: 2rem;
          }

          .sidebar-details {
            padding: 24px;
          }

          .sidebar-image {
            height: 40vh;
            min-height: 250px;
          }
        }

        @media (max-width: 480px) {
          .sidebar-title {
            font-size: 1.75rem;
          }

          .sidebar-subtitle {
            font-size: 1rem;
          }

          .sidebar-details {
            padding: 20px;
          }
        }

        .sidebar-content::-webkit-scrollbar {
          width: 6px;
        }

        .sidebar-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .sidebar-content::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }

        .sidebar-content::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
      </>
  )}
  export default HeroSlideshow;

