import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import { useScroll, useSpring, useTransform } from 'framer-motion';

const Header = ({ isMenuOpen, setIsMenuOpen, isHeaderActive }) => {
  return (
    <motion.header 
      className={`header ${isHeaderActive || isMenuOpen ? 'active' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: isHeaderActive || isMenuOpen ? 0 : -120 }}
    >
      <nav className="nav">
        <a href="/" className="logo">ELEMENTIS</a>
        <div className="nav-menu">
          <a href="/destinations" className="link">Destinations</a>
          <a href="/wellness" className="link">Wellness</a>
          <a href="/innovation" className="link">Innovation</a>
          <a href="/sustainability" className="link">Nature</a>
          <a href="/community" className="link">Community</a>
          <a href="/the-story" className="link">The Story</a>
          <div className="hamburger-spacing" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <div className="hamburger">
              {[0, 1, 2].map((i) => <div key={i} className="line"></div>)}
            </div>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
const FullscreenMenu = ({ isMenuOpen, menuItems, socialMedia }) => {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          className="fullscreen-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="menu-content">
            <ul className="menu-items">
              {menuItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className="menu-item"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a href={item.href}>{item.name}</a>
                </motion.li>
              ))}
            </ul>
            <motion.div className="menu-contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <p>Contact Us</p>
              <a href="mailto:info@elementis.co">info@ELEMENTIS.co</a>
              <span> | </span>
              <a href="tel:+62 823 4078 1817">+62 823 4078 1817</a>
            </motion.div>
            <motion.div className="menu-social" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
              {socialMedia.map((social) => (
                <a key={social.name} href="#" title={social.name}>{social.icon}</a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const HeroSection = () => {
  return (
    <section className="hero">
      <video 
        className="hero-video"
        loop 
        playsInline
        muted
        autoPlay
        poster="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/75adb8ce-4345-4334-b05b-ea265c6e8ec3/rawelementis-posterjpg.jpeg"
      >
        <source src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/3b4017bb-400d-4582-997a-7d7525fd5181/elementismp4.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          className="font-heading1 hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ELEMENTIS
        </motion.h1>
        <motion.div 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>A lifestyle revolution for a sustainable fulfilling future</p>
          <p style={{ marginTop: '20px', fontSize: '16px' }}>Scroll to Explore</p>
        </motion.div>
      </div>
    </section>
  );
};
const WellnessSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2col">
          <div className="section-image">
            <img 
            //   src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/5b1a95cd-930b-4114-bfab-5e3ee32b5c27/rawwellnessjpg.jpeg"
            src='./wellness.jpeg'
              alt="Wellness Sanctuary"
            />
          </div>
          <div className="section-content">
            <div className="section-label">
              <div className="icon"></div>
              <span className="text">Introduction</span>
            </div>
            <h2 className="font-heading3 section-title">
              <span className="highlight">Personalized</span> wellness,
              <br />
              innovation, and nature
              <br />
              meet in synergy
            </h2>
            <p className="section-description font-body2">
              At ELEMENTIS, we use the Integrative Wellness approach,
              that considers psychological, physical, and nutritional
              aspects of your life to improve overall well-being and balance.
            </p>
            <a href="/wellness" className="button-link font-button1">
              <span>Discover ELEMENTIS</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
const InnovationSlider = ({ nextSectionRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const lastScrollTimeRef = useRef(0);
  const scrollThreshold = 500;
  const totalSlides = 5;

  const innovationSlides = [
    { 
      id: 0, 
      title: "ELEMENTIS Innovation Culture", 
      description: "We foster a culture of Innovation that enriches lives through transformative solutions and innovative ideas that resonate with our global Community.",
      image: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/d4bb8d97-b1ed-4a66-8b9f-26ce4e5ad7ed/raw/living-room-1-2jpg.jpeg"
    },
    { 
      id: 1, 
      title: "Exceptional Wood Construction", 
      description: "Our high-quality glue laminated timber revolutionizes tropical climate construction by seamlessly combining natural elegance, unparalleled durability, and environmental responsibility",
      image: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/innovation/599ba4bd-2033-45e3-9213-d6d5748c5000/raw/exceptional-wood-constructionjpg.jpeg"
    },
    { 
      id: 2, 
      title: "Innovative Glass Solutions", 
      description: "The innovative Low-E solar control glass stands out for its unparalleled ability to blend energy efficiency, enhanced comfort, and breathtaking aesthetic appeal.",
      image: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/innovation/51c303f3-f358-419c-8db1-bf92b3c2d850/raw/innovative-glass-solutionsjpg.jpeg"
    },
    { 
      id: 3, 
      title: "World First Climate Control", 
      description: "We pioneer an innovative climate control system that outperforms any other option, ending the battle with mold for an infinitely healthier experience. When combined with our solar energy system, it provides a world-first sustainable solution.",
      image: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/homepage/e0fed644-ae29-4af4-8c3a-f16ab24d8d63/raw/pic-5-1-1-1jpg.jpeg"
    },
    { 
      id: 4, 
      title: "State-of-the-Art Design", 
      description: "By blending natural elements, panoramic views, tactile textures, luxury touches, and sustainable design principles, we create a memorable and inviting hotel interior that reflects ELEMENTIS modern, wooden eco concept.",
      image: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/innovation/e82c8517-7fdf-4e79-b346-e6f33b7a9caf/raw/state-of-the-art-designjpg.jpeg"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // More lenient: trigger when 20% visible
      const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
      setIsInView(isVisible);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    useEffect(() => {
    const handleScrollEnd = () => {
      if (!sectionRef.current || !isInView) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      // If scrolled past 90% of innovation section while on last slide
      if (currentSlide === totalSlides - 1 && rect.top < window.innerHeight * -0.1) {
        // FIXED: Null check
        if (nextSectionRef?.current) {
          nextSectionRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }
    };
    
    const timeout = setTimeout(handleScrollEnd, 300);
    return () => clearTimeout(timeout);
  }, [currentSlide, isInView, nextSectionRef, totalSlides]); 


   const handleWheel = useCallback((e) => {
    if (!isInView || isScrolling) return;
    
    const now = Date.now();
    if (now - lastScrollTimeRef.current < scrollThreshold) return;
    
    const deltaY = e.deltaY;
    const direction = deltaY > 0 ? 1 : -1; // Down = next, Up = prev
    let nextSlide = currentSlide + direction;
    
    // Fixed wrap-around: 0-1 (up from first), 4-0 (down from last)
    if (nextSlide < 0) nextSlide = totalSlides - 1;
    if (nextSlide >= totalSlides) nextSlide = 0;
    
    setIsScrolling(true);
    setCurrentSlide(nextSlide);
    lastScrollTimeRef.current = now;
    setTimeout(() => setIsScrolling(false), 1000);
  }, [currentSlide, isInView, isScrolling, totalSlides]);

// const handleWheel = useCallback((e) => {
//   if (!isInView || isScrolling) return;
  
//   const now = Date.now();
//   if (now - lastScrollTimeRef.current < scrollThreshold) return;
  
//   const deltaY = e.deltaY;
//   const direction = deltaY > 0 ? 1 : -1;
//   let nextSlide = currentSlide + direction;
  
//   // Wrap-around logic with exit detection
//   if (nextSlide < 0) {
//     nextSlide = totalSlides - 1;
//   } else if (nextSlide >= totalSlides) {
//     // On down-scroll from last slide (4), go to first slide first
//     nextSlide = 0;
//   }
  
//   setIsScrolling(true);
//   setCurrentSlide(nextSlide);
//   lastScrollTimeRef.current = now;
  
//   // Track full cycle completion for exit
//   if (direction > 0 && currentSlide === totalSlides - 1) {
//     setHasCompletedCycle(true);
//   }
  
//   setTimeout(() => {
//     setIsScrolling(false);
    
//     // After final slide animation + extra delay, auto-scroll to next section
//     if (nextSlide === 0 && direction > 0 && hasCompletedCycle) {
//       setTimeout(() => {
//         if (nextSectionRef.current) {
//           nextSectionRef.current.scrollIntoView({ 
//             behavior: 'smooth', 
//             block: 'start' 
//           });
//           setHasCompletedCycle(false); // Reset for next time
//         }
//       }, 500); // Wait for slide transition to complete
//     }
//   }, 1200);
// }, [currentSlide, isInView, isScrolling, totalSlides, hasCompletedCycle]);

  const handleKeyDown = useCallback((e) => {
    if (!isInView || isScrolling) return;
    
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      if (currentSlide < totalSlides - 1) {
        setIsScrolling(true);
        setCurrentSlide(currentSlide + 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (currentSlide > 0) {
        setIsScrolling(true);
        setCurrentSlide(currentSlide - 1);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }
  }, [currentSlide, isInView, isScrolling, totalSlides]);

   useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wheelHandler = (e) => {
      if (isInView) {
        e.preventDefault();
        handleWheel(e);
      }
    };

    section.addEventListener('wheel', wheelHandler, { passive: false });
    return () => section.removeEventListener('wheel', wheelHandler);
  }, [isInView, handleWheel]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const wheelHandler = (e) => {
      handleWheel(e);
    };

    window.addEventListener('keydown', handleKeyDown);
    section.addEventListener('wheel', wheelHandler, { passive: false });

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      section.removeEventListener('wheel', wheelHandler);
    };
  }, [handleWheel, handleKeyDown]);

   const getMaskGradient = (slideIndex) => {
    const progress = (currentSlide - slideIndex) * 100;
    if (progress <= 0) {
      return `linear-gradient(0deg, black 0%, black ${-progress}%, transparent ${Math.max(-progress, 0)}% 100%)`;
    }
    return `linear-gradient(0deg, transparent 0%, transparent 100%)`;
  };

  return (
    <section 
      ref={sectionRef}
    // ref={nextSectionRef}
      className="innovation-scroll-section"
      style={{ 
        position: 'relative',
        height: '100vh', // Fixed to just 100vh, no extra space
        backgroundColor: '#1a211d'
      }}
    >
      <div 
        ref={containerRef}
        className="innovation-sticky-container"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          overflow: 'hidden'
        }}
      >
        <div className="innovation-background">
          {innovationSlides.map((slide, index) => (
            <motion.div
              key={`bg-${slide.id}`}
              className="innovation-bg-slide"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                willChange: 'transform',
                transform: `translateY(${(index - currentSlide) * 100}%)`
              }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="bg-image"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: `scale(${1.1 - Math.abs(currentSlide - index) * 0.05})`,
                  transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              />
              <div 
                className="overlay-black"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)'
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="innovation-foreground">
          <div className="innovation-content-container">
            <div className="text-floating" style={{
              position: 'absolute',
              left: '60px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 20
            }}>
              <div className="text-label" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '30px'
              }}>
                <div className="icon" style={{
                  width: '13px',
                  height: '16px'
                }}>
                  <svg width="13" height="16" viewBox="0 0 13 16" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.94753e-05 1.20954V0H12.0661V1.46243L8.94753e-05 1.20954ZM8.94753e-05 14.7904V16H12.0661V14.5375L8.94753e-05 14.7904ZM0 8.73043V7.52255L5.19475 7.52089H5.90313H6.87124L12.066 7.52255V8.73043H0Z" fill="#D1CCBF"/>
                  </svg>
                </div>
                <div className="text font-body1">
                  <h2 className="title" style={{
                    fontSize: '14px',
                    letterSpacing: '2px',
                    color: '#D1CCBF',
                    fontWeight: 300
                  }}>Innovation</h2>
                </div>
              </div>
              <p className="scroll font-body1" style={{
                fontSize: '12px',
                color: 'rgba(209, 204, 191, 0.6)',
                letterSpacing: '1px',
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                marginLeft: '6px'
              }}>( Keep Scrolling )</p>
            </div>

            <div className="poster" style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              maxWidth: '1200px',
              textAlign: 'center'
            }}>
              <div className="number" style={{
                fontSize: '14px',
                color: '#D1CCBF',
                letterSpacing: '1px',
                marginBottom: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px'
              }}>
                <span className="current" style={{
                  display: 'inline-block',
                  overflow: 'hidden',
                  height: '20px'
                }}>
                  <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: `-${currentSlide * 100}%` }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {innovationSlides.map((_, index) => (
                      <span key={index} style={{
                        height: '20px',
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        0{index + 1}
                      </span>
                    ))}
                  </motion.div>
                </span>
                <span className="inactive" style={{ opacity: 0.5 }}> — </span>
                <span className="total">0{totalSlides}</span>
              </div>

              <div className="title-wrapper" style={{
                position: 'relative',
                height: '120px',
                overflow: 'hidden',
                marginBottom: '30px'
              }}>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: `-${currentSlide * 100}%` }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {innovationSlides.map((slide, index) => (
                    <div key={index} style={{
                      height: '120px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <h3 className="title font-subheading2" style={{
                        fontSize: '52px',
                        fontWeight: 300,
                        lineHeight: 1.1,
                        color: 'white',
                        marginBottom: '10px'
                      }}>
                        {slide.title.split(' ').map((word, i, arr) => (
                          <div key={i} className="masking-text">
                            <div className="line" style={{
                              display: 'block',
                              textAlign: 'center'
                            }}>
                              {word}{i < arr.length - 1 ? ' ' : ''}
                            </div>
                          </div>
                        ))}
                      </h3>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="desc-wrapper" style={{
                position: 'relative',
                height: '180px',
                overflow: 'hidden',
                marginBottom: '60px'
              }}>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: `-${currentSlide * 100}%` }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {innovationSlides.map((slide, index) => (
                    <div key={index} style={{
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}>
                      <div className="desc font-body3" style={{
                        fontSize: '20px',
                        fontWeight: 300,
                        lineHeight: 1.4,
                        color: 'rgba(255, 255, 255, 0.85)',
                        maxWidth: '800px',
                        margin: '0 auto'
                      }}>
                        {slide.description.split('. ').map((sentence, i, arr) => (
                          <div key={i} className="masking-text">
                            <div className="line" style={{
                              display: 'block',
                              textAlign: 'center',
                              marginBottom: i < arr.length - 1 ? '10px' : '0'
                            }}>
                              {sentence}{i < arr.length - 1 ? '.' : ''}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="image-wrapper" style={{
                position: 'relative',
                width: '600px',
                height: '400px',
                margin: '0 auto',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0, 0, 0, 0.4)'
              }}>
                {innovationSlides.map((slide, index) => (
                  <motion.div
                    key={`center-${slide.id}`}
                    className="image-center"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      maskImage: getMaskGradient(index),
                      WebkitMaskImage: getMaskGradient(index),
                      maskSize: '100% 100%',
                      maskRepeat: 'no-repeat'
                    }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '20px'
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      right: '20px',
                      bottom: '20px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '15px',
                      pointerEvents: 'none'
                    }} />
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="progress-dots" style={{
              position: 'absolute',
              right: '60px',
              top: '50%',
              transform: 'translateY(-50%)',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              zIndex: 20
            }}>
              {innovationSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isScrolling) {
                      setIsScrolling(true);
                      setCurrentSlide(index);
                      setTimeout(() => setIsScrolling(false), 1000);
                    }
                  }}
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'transparent',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <div style={{
                    width: '1px',
                    height: '20px',
                    background: index === currentSlide ? '#D1CCBF' : 'rgba(209, 204, 191, 0.3)',
                    transform: index === currentSlide ? 'scaleY(1.5)' : 'scaleY(1)',
                    transition: 'all 0.3s ease'
                  }} />
                  <span style={{
                    position: 'absolute',
                    right: 'calc(100% + 10px)',
                    fontSize: '12px',
                    color: index === currentSlide ? '#D1CCBF' : 'rgba(209, 204, 191, 0.3)',
                    letterSpacing: '1px',
                    opacity: index === currentSlide ? 1 : 0,
                    transition: 'all 0.3s ease'
                  }}>
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const smoothScrollStyles = `
  /* ====== SMOOTH SCROLL ANIMATION SECTION ====== */
  .innovation-scroll-section {
  position: relative;
  height: 100vh;
  min-height: 100vh;
  background-color: #1a211d;
  overflow: hidden;
}
  body.no-scroll {
  overflow: hidden;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .innovation-content-container {
    padding: 0 40px;
  }
}

@media (max-width: 992px) {
  .innovation-slide-content {
    grid-template-columns: 1fr !important;
    gap: 40px;
    text-align: center;
  }
  
  .slide-title {
    font-size: 36px !important;
  }
  
  .slide-description {
    font-size: 18px !important;
  }
  
  .navigation-arrows {
    display: none !important;
  }
}

@media (max-width: 768px) {
  .innovation-slide-content {
    padding: 0 20px;
  }
  
  .slide-title {
    font-size: 28px !important;
  }
  
  .slide-description {
    font-size: 16px !important;
  }
  
  .scroll-indicator {
    display: none !important;
  }
}
  
  .innovation-sticky-container {
    position: sticky;
    top: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  
  .innovation-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .innovation-bg-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    will-change: opacity, transform;
  }
  
  .innovation-bg-slide .bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    will-change: transform, filter;
  }
  
  .bg-gradient-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(43, 53, 48, 0.9) 0%,
      rgba(43, 53, 48, 0.3) 50%,
      rgba(43, 53, 48, 0.9) 100%
    );
    transition: opacity 1.5s var(--ease-out);
  }
  
  .innovation-foreground {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
  }
  
  .innovation-content-container {
    width: 100%;
    max-width: 1400px;
    padding: 0 60px;
    height: 100%;
    display: flex;
    align-items: center;
  }
  
  .innovation-slide-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
    width: 100%;
    will-change: opacity, transform;
  }
  
  .slide-image-column {
    position: relative;
  }
  
  .image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.4);
    will-change: transform;
  }
  
  .slide-image {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 20px;
    transition: transform 10s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  .image-wrapper:hover .slide-image {
    transform: scale(1.05);
  }
  
  .image-border {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    pointer-events: none;
    z-index: 2;
  }
  
  .slide-text-column {
    color: var(--color-secondary);
  }
  
  .text-content {
    max-width: 500px;
  }
  
  .slide-title {
    font-size: calc(56 * var(--vw) / var(--multiplier));
    font-weight: 300;
    line-height: 1.1;
    margin: 30px 0 25px;
    color: white;
    will-change: transform, opacity;
  }
  
  .slide-description {
    font-size: calc(22 * var(--vw) / var(--multiplier));
    line-height: 1.6;
    margin-bottom: 40px;
    opacity: 0.85;
    font-weight: 300;
    will-change: transform, opacity;
  }
  
  .slide-counter {
    font-size: calc(28 * var(--vw) / var(--multiplier));
    color: var(--color-primary);
    margin-bottom: 50px;
    font-weight: 300;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .current-number {
    font-size: calc(36 * var(--vw) / var(--multiplier));
    font-weight: 400;
  }
  
  .divider {
    opacity: 0.5;
  }
  
  .slide-progress {
    margin-top: 60px;
  }
  
  .progress-track {
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 15px;
    overflow: hidden;
    border-radius: 1px;
  }
  
  .progress-bar {
    height: 100%;
    background: var(--color-primary);
    width: 0%;
    will-change: width;
  }
  
  .progress-text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
  
  .scroll-hint {
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
  
  /* Global Scroll Indicator */
  .global-scroll-indicator {
    position: absolute;
    right: 40px;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    z-index: 100;
  }
  
  .scroll-line {
    width: 1px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
  }
  
  .scroll-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primary);
    transform-origin: top;
    will-change: transform;
  }
  
  .scroll-instruction {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-size: 12px;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
  }
  
  .scroll-arrows {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  
  .scroll-arrows .arrow {
    width: 12px;
    height: 12px;
    border-right: 2px solid rgba(255, 255, 255, 0.6);
    border-bottom: 2px solid rgba(255, 255, 255, 0.6);
    transform: rotate(45deg);
  }
  
  .scroll-arrows .arrow:last-child {
    opacity: 0.5;
  }
  
  .section-spacer {
    height: 100vh;
    pointer-events: none;
  }
  
  /* Smooth transitions */
  .smooth-transition {
    transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  /* Delayed animations */
  .delayed-1 { transition-delay: 0.1s; }
  .delayed-2 { transition-delay: 0.2s; }
  .delayed-3 { transition-delay: 0.3s; }
  .delayed-4 { transition-delay: 0.4s; }
  
  /* Responsive adjustments */
  @media (max-width: 1200px) {
    .innovation-slide-content {
      gap: 60px;
    }
    
    .slide-title {
      font-size: calc(48 * var(--vw) / var(--multiplier));
    }
  }
  
  @media (max-width: 992px) {
    .innovation-slide-content {
      grid-template-columns: 1fr;
      gap: 40px;
      text-align: center;
    }
    
    .innovation-content-container {
      padding: 0 30px;
    }
    
    .text-content {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .image-wrapper {
      max-width: 600px;
      margin: 0 auto;
    }
    
    .slide-title {
      font-size: calc(36 * var(--vw) / var(--multiplier));
    }
    
    .slide-description {
      font-size: calc(18 * var(--vw) / var(--multiplier));
    }
    
    .global-scroll-indicator {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    .innovation-scroll-section {
      height: 300vh; /* Less height on mobile for better UX */
    }
    
    .innovation-content-container {
      padding: 0 20px;
    }
    
    .slide-title {
      font-size: calc(28 * var(--vw) / var(--multiplier));
    }
    
    .slide-description {
      font-size: calc(16 * var(--vw) / var(--multiplier));
    }
    
    .slide-counter {
      font-size: calc(20 * var(--vw) / var(--multiplier));
    }
    
    .current-number {
      font-size: calc(24 * var(--vw) / var(--multiplier));
    }
  }
  
  /* Performance optimizations */
  .will-change-transform {
    will-change: transform;
  }
  
  .will-change-opacity {
    will-change: opacity;
  }
  
  /* Prevent flash of unstyled content */
  .innovation-sticky-container {
    opacity: 0;
    animation: fadeIn 0.5s ease-out 0.3s forwards;
  }
  
  @keyframes fadeIn {
    to { opacity: 1; }
  }
`;
const SustainabilitySection = React.forwardRef((props, ref) => {
  const [hoveredImage, setHoveredImage] = useState(0);
  const sectionRef = useRef(null);
  
  const sustainabilityImages = [
    {
      src: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/sustainability-point/64c5ffee-8465-455c-ba8f-2da37f6ff649/raw/sustain-1jpg.jpeg",
      title: "Sustainable Architecture",
      description: "Eco-friendly design principles"
    },
    {
      src: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/sustainability-point/67f296c6-8533-4a18-9168-ec99dcda8fe4/raw/sustain-2jpg.jpeg",
      title: "Natural Integration",
      description: "Harmony with surrounding ecosystems"
    },
    {
      src: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/sustainability-point/57a309f7-bab4-4cc0-922b-81712cddb8db/raw/sustain-3jpg.jpeg",
      title: "Renewable Energy",
      description: "Clean power solutions"
    },
    {
      src: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/sustainability-point/5825fbef-65af-4a49-8aee-a632b73e1c1c/raw/sustain-4jpg.jpeg",
      title: "Water Conservation",
      description: "Advanced water management systems"
    },
    {
      src: "https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/sustainability-point/a7670787-e74e-44f0-8140-c728f6357771/raw/sustain-5jpg.jpeg",
      title: "Community Focus",
      description: "Supporting local communities"
    }
  ];

  return (
    <section className="sustainability-scroll-section section" ref={ref}>
      <div className="container">
        <div className="sustainability-scroll-container">
          <div className="sustain-background">
            {sustainabilityImages.map((img, index) => (
              <motion.div
                key={`sustain-bg-${index}`}
                className="sustain-bg-layer"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredImage === index ? 0.8 : 0,
                  scale: hoveredImage === index ? 1 : 1.1
                }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              >
                <img src={img.src} alt={img.title} />
              </motion.div>
            ))}
          </div>
          
          <div className="sustain-content">
            <h2 className="font-heading3 section-title">Sustainable Retreat</h2>
            <p className="sustainability-text font-body2">
              At our Resorts and Residences, we believe in fostering a sense of partnership,
              building a thriving ecosystem, nurturing a strong Community, and prioritizing
              the health of the planet.
            </p>
            
            <div className="sustain-image-grid">
              {sustainabilityImages.map((img, index) => (
                <motion.div
                  key={`sustain-${index}`}
                  className="sustain-image-item"
                  onMouseEnter={() => setHoveredImage(index)}
                  onMouseLeave={() => setHoveredImage(0)}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img src={img.src} alt={img.title} />
                  <div className="image-overlay">
                    <h3>{img.title}</h3>
                    <p>{img.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="sustainability-buttons">
              {["ELEMENTIS Story", "Our Vision & Mission", "Our Commitment", "Our Pillars"].map((text, index) => (
                <motion.a
                  key={text}
                  href={`/sustainability#${text.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="button-link font-button1"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <span>{text}</span>
                  <motion.span
                    animate={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
const sustainStyles = `
  .sustainability-scroll-section {
    position: relative;
    overflow: hidden;
  }
  
  .sustain-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  .sustain-bg-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  
  .sustain-bg-layer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.4) blur(10px);
  }
  
  .sustain-content {
    position: relative;
    z-index: 2;
    padding: 80px 0;
  }
  
  .sustain-image-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin: 60px 0;
  }
  
  .sustain-image-item {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    height: 200px;
    cursor: pointer;
  }
  
  .sustain-image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease-out;
  }
  
  .image-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
    padding: 20px;
    color: white;
    transform: translateY(100%);
    transition: transform 0.6s ease-out;
  }
  
  .sustain-image-item:hover .image-overlay {
    transform: translateY(0);
  }
  
  .image-overlay h3 {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
  }
  
  .image-overlay p {
    font-size: 12px;
    opacity: 0.8;
  }
`;
const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section className="form-section section" id="joinus">
      <div className="container">
        <div className="form-grid">
          <div className="form-image">
            {/* <img src="/_ipx/w_3072&f_jpeg&q_95/form.jpg" alt="Contact Form" /> */}
             <img 
            //   src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/contact-form-image.jpg" 
            src='./contact.webp'
              alt="Contact Form"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="form-content">
            <h2 className="font-subheading1 form-title">Take the First Step</h2>
            <p className="form-description font-body2">
              Become a member of ELEMENTIS Club and take the first step
              towards a life filled with purpose, Wellness, and connection.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" className="form-input" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input type="email" id="email" className="form-input" placeholder="Enter your email address" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <select className="form-input" style={{ width: '100px' }}>
                    <option value="+1">+1</option>
                    <option value="+62">+62</option>
                    <option value="+44">+44</option>
                  </select>
                  <input type="tel" id="phone" className="form-input" placeholder="Enter your phone number" style={{ flex: 1 }} required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="country">Country</label>
                <select id="country" className="form-input" required>
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="ID">Indonesia</option>
                  <option value="GB">United Kingdom</option>
                </select>
              </div>
              <div className="form-group">
                <p className="form-label">I would like to receive information on:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {['Resorts and Residences', 'Retreats', 'Wellness', 'New Developments', 'Building Innovation'].map((item) => (
                    <label key={item} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input type="checkbox" required />
                  <span>I agree to the <a href="/privacy-terms" style={{ color: '#ca7d57' }}>Policies and Terms</a></span>
                </label>
              </div>
              <button type="submit" className="form-button font-button2">
                <span>Sign Up</span>
                <span>→</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isVideoPopup, setIsVideoPopup] = useState(false);
  const videoPopupRef = useRef(null);
  const sustainabilityRef = useRef(null);
  
  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Community", href: "/community" },
    { name: "Destinations", href: "/destinations" },
    { name: "Wellness", href: "/wellness" },
    { name: "Innovation", href: "/innovation" },
    { name: "Nature", href: "/nature" },
    { name: "The Story", href: "/the-story" },
  ];

  const socialMedia = [
    { name: "Facebook", icon: "FB" },
    { name: "Instagram", icon: "IG" },
    { name: "LinkedIn", icon: "IN" },
    { name: "YouTube", icon: "YT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 100);
    };
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isVideoPopup) {
        setIsVideoPopup(false);
      }
    };
    
    const handleClickOutside = (e) => {
      if (videoPopupRef.current && !videoPopupRef.current.contains(e.target) && isVideoPopup) {
        setIsVideoPopup(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVideoPopup]);

  return (
    <>
      <style jsx global>{`
      /* Add these styles to your global CSS */

.innovation-scroll-section {
  position: relative;
  background-color: #1a211d;
}

.innovation-sticky-container {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.innovation-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.innovation-bg-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.innovation-bg-slide .bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.innovation-foreground {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.innovation-content-container {
  width: 100%;
  height: 100%;
  position: relative;
}

/* Masking text animation */
.masking-text {
  overflow: hidden;
  display: inline-block;
  vertical-align: top;
}

.masking-text .line {
  transition: transform 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Progress dots animation */
.progress-dots button {
  transition: all 0.3s ease;
}

.progress-dots button:hover div {
  background: #D1CCBF !important;
  transform: scaleY(2) !important;
}

/* Responsive styles */
@media (max-width: 1200px) {
  .poster {
    width: 90% !important;
  }
  
  .title.font-subheading2 {
    font-size: 42px !important;
  }
  
  .desc.font-body3 {
    font-size: 18px !important;
  }
}

@media (max-width: 992px) {
  .text-floating,
  .progress-dots {
    display: none !important;
  }
  
  .poster {
    width: 95% !important;
  }
  
  .title.font-subheading2 {
    font-size: 36px !important;
  }
  
  .desc.font-body3 {
    font-size: 16px !important;
  }
  
  .image-wrapper {
    width: 500px !important;
    height: 350px !important;
  }
}

@media (max-width: 768px) {
  .innovation-scroll-section {
    height: ${5 * 80}vh !important;
  }
  
  .title.font-subheading2 {
    font-size: 28px !important;
  }
  
  .desc.font-body3 {
    font-size: 14px !important;
  }
  
  .image-wrapper {
    width: 90% !important;
    height: 250px !important;
  }
  
  .number {
    font-size: 12px !important;
    margin-bottom: 20px !important;
  }
}

@media (max-width: 480px) {
  .title.font-subheading2 {
    font-size: 24px !important;
  }
  
  .desc.font-body3 {
    font-size: 13px !important;
  }
  
  .image-wrapper {
    height: 200px !important;
  }
}

/* Smooth scroll lock when in view */
body.innovation-scrolling {
  overflow: hidden;
}

/* Animation classes */
@keyframes slideUp {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideDown {
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-up {
  animation: slideUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.slide-down {
  animation: slideDown 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent;
        }
        
        :root {
          --vw: 1440;
          --multiplier: 100vw;
          --vh-mobile-bar: 9.61px;
          --base-svh: 81.2%;
          --color-primary: #ca7d57;
          --color-secondary: #d1ccbf;
          --color-background: #2b3530;
          --color-dark: #1a211d;
          --color-light: #f5f3ee;
          --ease-out: cubic-bezier(0.24, 0.43, 0.15, 0.97);
          --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
          --header-height: 80px;
        }
        
        html.lenis, html.lenis body {
          height: auto;
        }
        
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
        
        .lenis.lenis-stopped {
          overflow: hidden;
        }
        
        html, body {
          width: 100%;
          overflow-x: hidden;
          background-color: var(--color-background);
          color: var(--color-secondary);
          font-family: 'Basis Grotesque Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif;
          font-weight: 300;
          line-height: 1.2;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          scroll-behavior: auto;
          min-height: 100vh;
          height: auto;
        }
        
        body {
          font-size: calc(20 * var(--vw) / var(--multiplier));
        }
        
        @media (max-width: 767.98px) {
          :root {
            --vw: 375;
          }
          body {
            font-size: calc(16 * var(--vw) / var(--multiplier));
          }
        }
        
        /* ====== TYPOGRAPHY SCALE ====== */
        .font-heading1 {
          font-size: calc(144 * var(--vw) / var(--multiplier));
          font-weight: 300;
          line-height: 0.9;
          letter-spacing: -0.02em;
        }
        
        .font-heading2 {
          font-size: calc(72 * var(--vw) / var(--multiplier));
          font-weight: 300;
          line-height: 1;
          letter-spacing: -0.01em;
        }
        
        .font-heading3 {
          font-size: calc(40 * var(--vw) / var(--multiplier));
          font-weight: 300;
          line-height: 1.1;
        }
        
        .font-subheading1 {
          font-size: calc(36 * var(--vw) / var(--multiplier));
          font-weight: 300;
          line-height: 1.2;
        }
        
        .font-subheading2 {
          font-size: calc(52 * var(--vw) / var(--multiplier));
          font-weight: 300;
          line-height: 1;
        }
        
        .font-body1 {
          font-size: calc(20 * var(--vw) / var(--multiplier));
          line-height: 1.4;
          font-weight: 300;
        }
        
        .font-body2 {
          font-size: calc(18 * var(--vw) / var(--multiplier));
          line-height: 1.33333;
          font-weight: 300;
        }
        
        .font-button1 {
          font-size: calc(16 * var(--vw) / var(--multiplier));
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .font-button2 {
          font-size: calc(14 * var(--vw) / var(--multiplier));
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        @media (max-width: 767.98px) {
          .font-heading1 { font-size: calc(72 * var(--vw) / var(--multiplier)); }
          .font-heading2 { font-size: calc(48 * var(--vw) / var(--multiplier)); }
          .font-heading3 { font-size: calc(32 * var(--vw) / var(--multiplier)); }
          .font-subheading1 { font-size: calc(24 * var(--vw) / var(--multiplier)); }
          .font-subheading2 { font-size: calc(28 * var(--vw) / var(--multiplier)); }
          .font-body1 { font-size: calc(16 * var(--vw) / var(--multiplier)); }
          .font-body2 { font-size: calc(14 * var(--vw) / var(--multiplier)); }
        }
        
        /* ====== LAYOUT & CONTAINERS ====== */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        
        @media (max-width: 767.98px) {
          .container {
            padding: 0 20px;
          }
        }
        
        .grid-2col {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px;
          align-items: center;
        }
        
        @media (max-width: 991.98px) {
          .grid-2col {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        /* ====== HEADER STYLES ====== */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: var(--header-height);
          z-index: 1000;
          padding: 0 40px;
          display: flex;
          align-items: center;
          transition: all 0.6s var(--ease-out);
          background: transparent;
        }
        
        .header.active {
          background-color: rgba(43, 53, 48, 0.95);
          backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        
        .nav {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 24px;
          font-weight: 300;
          letter-spacing: 2px;
          color: var(--color-secondary);
          text-decoration: none;
          position: relative;
          z-index: 1001;
        }
        
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 40px;
        }
        
        .link {
          color: var(--color-secondary);
          text-decoration: none;
          font-size: 14px;
          letter-spacing: 1px;
          position: relative;
          padding: 4px 0;
          transition: color 0.3s var(--ease-out);
        }
        
        .link:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.6s var(--ease-out);
        }
        
        .link:hover {
          color: var(--color-primary);
        }
        
        .link:hover:before {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .hamburger-spacing {
          cursor: pointer;
          padding: 10px;
          margin-left: 20px;
        }
        
        .hamburger {
          width: 24px;
          height: 16px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        
        .hamburger .line {
          width: 100%;
          height: 1px;
          background-color: var(--color-secondary);
          transition: all 0.4s var(--ease-out);
        }
        
        .hamburger-spacing:hover .line {
          background-color: var(--color-primary);
        }
        
        /* ====== FULLSCREEN MENU ====== */
        .fullscreen-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-background);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .menu-content {
          text-align: center;
          padding: 40px;
        }
        
        .menu-items {
          list-style: none;
          margin-bottom: 60px;
        }
        
        .menu-item {
          margin-bottom: 20px;
          overflow: hidden;
        }
        
        .menu-item a {
          font-size: 64px;
          font-weight: 300;
          color: var(--color-secondary);
          text-decoration: none;
          position: relative;
          display: inline-block;
          transition: color 0.3s var(--ease-out);
        }
        
        .menu-item a:hover {
          color: var(--color-primary);
        }
        
        @media (max-width: 767.98px) {
          .menu-item a {
            font-size: 48px;
          }
        }
        
        .menu-contact {
          font-size: 18px;
          color: var(--color-secondary);
          margin-bottom: 40px;
        }
        
        .menu-contact a {
          color: var(--color-secondary);
          text-decoration: none;
          transition: color 0.3s var(--ease-out);
        }
        
        .menu-contact a:hover {
          color: var(--color-primary);
        }
        
        .menu-social {
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        
        .menu-social a {
          color: var(--color-secondary);
          font-size: 16px;
          text-decoration: none;
          transition: color 0.3s var(--ease-out);
        }
        
        .menu-social a:hover {
          color: var(--color-primary);
        }
        
        /* ====== HERO SECTION ====== */
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          cursor: pointer;
        }
        
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 20s var(--ease-in-out);
        }
        
        .hero:hover .hero-video {
          transform: scale(1.05);
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            transparent 0%,
            rgba(43, 53, 48, 0.2) 50%,
            rgba(43, 53, 48, 0.8) 100%
          );
        }
        
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 100%;
          padding: 0 40px;
          z-index: 2;
        }
        
        .hero-title {
          color: var(--color-secondary);
          margin-bottom: 30px;
          letter-spacing: -2px;
        }
        
        .hero-subtitle {
          font-size: 20px;
          color: var(--color-secondary);
          opacity: 0.9;
          line-height: 1.4;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .hero-subtitle p {
          margin-bottom: 10px;
        }
        
        /* ====== VIDEO POPUP ====== */
        .video-popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #000;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          visibility: hidden;
          transition: all 0.6s var(--ease-out);
        }
        
        .video-popup.active {
          opacity: 1;
          visibility: visible;
        }
        
        .video-popup-content {
          width: 90%;
          max-width: 1200px;
          position: relative;
        }
        
        .video-popup video {
          width: 100%;
          height: auto;
          display: block;
        }
        
        .close-popup {
          position: absolute;
          top: -60px;
          right: 0;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        
        .close-popup:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }
        
        .close-popup:before,
        .close-popup:after {
          content: '';
          position: absolute;
          width: 20px;
          height: 1px;
          background-color: white;
        }
        
        .close-popup:before {
          transform: rotate(45deg);
        }
        
        .close-popup:after {
          transform: rotate(-45deg);
        }
        
        /* ====== SECTION STYLES ====== */
        .section {
          padding: 120px 0;
          position: relative;
          overflow: hidden;
        }
        
        @media (max-width: 767.98px) {
          .section {
            padding: 80px 0;
          }
        }
        
        .section-label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 20px;
        }
        
        .section-label .icon {
          width: 20px;
          height: 1px;
          background-color: var(--color-primary);
        }
        
        .section-label .text {
          font-size: 14px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--color-primary);
        }
        
        .section-title {
          color: var(--color-secondary);
          margin-bottom: 30px;
        }
        
        .section-title .highlight {
          color: var(--color-primary);
        }
        
        .section-description {
          color: var(--color-secondary);
          opacity: 0.8;
          margin-bottom: 40px;
          max-width: 500px;
        }
        
        .section-image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
        }
        
        .section-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 1.2s var(--ease-out);
        }
        
        .section-image:hover img {
          transform: scale(1.05);
        }
        
        /* ====== BUTTON STYLES ====== */
        .button-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--color-secondary);
          text-decoration: none;
          padding: 12px 0;
          position: relative;
          overflow: hidden;
        }
        
        .button-link:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.6s var(--ease-out);
        }
        
        .button-link:hover {
          color: var(--color-primary);
        }
        
        .button-link:hover:before {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .button-link span:last-child {
          transition: transform 0.3s var(--ease-out);
        }
        
        .button-link:hover span:last-child {
          transform: translateX(5px);
        }
        
        /* ====== INNOVATION SLIDER ====== */
        .innovation-section {
          position: relative;
          height: 100vh;
          overflow: hidden;
        }
        
        .innovation-slider {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .innovation-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 1s var(--ease-out);
        }
        
        .innovation-slide.active {
          opacity: 1;
        }
        
        .innovation-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .innovation-content {
          position: absolute;
          bottom: 100px;
          left: 0;
          width: 100%;
          text-align: center;
          z-index: 2;
          padding: 0 40px;
        }
        
        .innovation-title {
          color: white;
          margin: 20px 0;
          font-weight: 300;
        }
        
        .innovation-counter {
          color: white;
          font-size: 18px;
          letter-spacing: 2px;
        }
        
        .innovation-nav {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 2;
        }
        
        .innovation-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
        }
        
        .innovation-dot.active {
          background-color: white;
          transform: scale(1.2);
        }
        
        .innovation-dot:hover {
          background-color: rgba(255, 255, 255, 0.6);
        }
        
        /* ====== SUSTAINABILITY SECTION ====== */
        .sustainability-section {
          background-color: var(--color-dark);
        }
        
        .sustainability-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media (max-width: 991.98px) {
          .sustainability-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        .sustainability-images {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(2, 1fr);
          gap: 20px;
          height: 500px;
        }
        
        .sustainability-image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          opacity: 0.5;
          transition: all 0.6s var(--ease-out);
        }
        
        .sustainability-image.active {
          opacity: 1;
          transform: scale(1.05);
          z-index: 1;
        }
        
        .sustainability-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s var(--ease-out);
        }
        
        .sustainability-image:hover img {
          transform: scale(1.1);
        }
        
        .sustainability-text {
          color: var(--color-secondary);
          opacity: 0.8;
          margin-bottom: 40px;
        }
        
        .sustainability-buttons {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        /* ====== FORM SECTION ====== */
        .form-section {
          background-color: var(--color-background);
        }
        
        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media (max-width: 991.98px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        .form-image {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          height: 500px;
        }
        
        .form-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .form-title {
          color: var(--color-secondary);
          margin-bottom: 20px;
        }
        
        .form-description {
          color: var(--color-secondary);
          opacity: 0.8;
          margin-bottom: 40px;
        }
        
        .form-group {
          margin-bottom: 25px;
        }
        
        .form-label {
          display: block;
          font-size: 14px;
          color: var(--color-secondary);
          margin-bottom: 8px;
          letter-spacing: 1px;
        }
        
        .form-input {
          width: 100%;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          color: var(--color-secondary);
          font-size: 16px;
          transition: all 0.3s var(--ease-out);
        }
        
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
          background: rgba(255, 255, 255, 0.1);
        }
        
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .form-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--color-primary);
          color: var(--color-light);
          padding: 15px 30px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s var(--ease-out);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }
        
        .form-button:hover {
          background: #b86c48;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(202, 125, 87, 0.2);
        }
        
        .form-button span:last-child {
          transition: transform 0.3s var(--ease-out);
        }
        
        .form-button:hover span:last-child {
          transform: translateX(5px);
        }
        
        /* ====== FOOTER ====== */
        .footer {
          background-color: var(--color-dark);
          padding: 80px 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 60px;
        }
        
        .footer-logo {
          font-size: 24px;
          font-weight: 300;
          letter-spacing: 2px;
          color: var(--color-secondary);
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .footer-links a {
          color: var(--color-secondary);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s var(--ease-out);
        }
        
        .footer-links a:hover {
          color: var(--color-primary);
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }
        
        /* ====== ANIMATION CLASSES ====== */
        .fade-in {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s var(--ease-out) forwards;
        }
        
        .fade-in-delay-1 {
          animation-delay: 0.2s;
        }
        
        .fade-in-delay-2 {
          animation-delay: 0.4s;
        }
        
        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          animation: scaleIn 0.8s var(--ease-out) forwards;
        }
        
        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          animation: slideInLeft 0.8s var(--ease-out) forwards;
        }
        
        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          animation: slideInRight 0.8s var(--ease-out) forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        /* ====== HOVER EFFECTS ====== */
        .hover-lift {
          transition: transform 0.3s var(--ease-out);
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
        }
        
        .hover-glow {
          transition: all 0.3s var(--ease-out);
        }
        
        .hover-glow:hover {
          filter: brightness(1.1);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        
        /* ====== SCROLL INDICATOR ====== */
        .scroll-indicator {
          position: fixed;
          bottom: 40px;
          right: 40px;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 100;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s var(--ease-out);
        }
        
        .scroll-indicator.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-indicator:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        
        /* ====== RESPONSIVE ADJUSTMENTS ====== */
        @media (max-width: 767.98px) {
          .header, .nav-menu {
            padding: 0 20px;
          }
          
          .nav-menu {
            gap: 20px;
          }
          
          .link {
            display: none;
          }
          
          .hero-title {
            font-size: 48px !important;
            letter-spacing: -1px;
          }
          
          .hero-subtitle {
            font-size: 16px;
          }
          
          .section {
            padding: 60px 0;
          }
          
          .innovation-section {
            height: 70vh;
          }
          
          .innovation-content {
            bottom: 60px;
            padding: 0 20px;
          }
          
          .sustainability-images {
            height: 300px;
          }
          
          .form-image {
            height: 300px;
          }
        }
        
        /* ====== LOADING ANIMATION ====== */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: var(--color-background);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          animation: fadeOut 0.8s var(--ease-out) 1.5s forwards;
        }
        
        .loading-logo {
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 4px;
          color: var(--color-secondary);
          opacity: 0;
          animation: fadeIn 0.8s var(--ease-out) 0.5s forwards;
        }
        
        @keyframes fadeIn {
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          to { opacity: 0; visibility: hidden; }
        }
        /* Innovation Slider Styles */
.innovation-scroll-section {
  position: relative;
  overflow: hidden;
}

.innovation-sticky-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
}

.innovation-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.innovation-bg-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: opacity;
}

.innovation-bg-slide .bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  will-change: transform;
}

.innovation-foreground {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.innovation-content-container {
  width: 100%;
  max-width: 1400px;
  padding: 0 60px;
  height: 100%;
  display: flex;
  align-items: center;
}

.innovation-slide-content {
  will-change: opacity, transform;
}

@media (max-width: 1200px) {
  .innovation-content-container {
    padding: 0 40px;
  }
}

@media (max-width: 992px) {
  .innovation-slide-content {
    grid-template-columns: 1fr !important;
    gap: 40px;
    text-align: center;
  }
  
  .innovation-content-container {
    padding: 0 30px;
  }
}

@media (max-width: 768px) {
  .innovation-content-container {
    padding: 0 20px;
  }
  
  .slide-title {
    font-size: 36px !important;
  }
  
  .slide-description {
    font-size: 18px !important;
  }
  
  .global-scroll-indicator {
    display: none !important;
  }
}

/* Smooth scroll lock */
body.scroll-locked {
  overflow: hidden;
}

body.scroll-locked .innovation-sticky-container {
  position: fixed !important;
}
        ${smoothScrollStyles}
        ${sustainStyles}
      `}</style>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isVideoPopup && (
          <motion.div 
            className="video-popup active"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            ref={videoPopupRef}
          >
            <div className="video-popup-content">
              <video 
                controls 
                autoPlay
                playsInline
                style={{ width: '100%' }}
              >
                <source 
                  src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/3b4017bb-400d-4582-997a-7d7525fd5181/elementismp4.mp4" 
                  type="video/mp4" 
                />
              </video>
              <div className="close-popup" onClick={() => setIsVideoPopup(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        isHeaderActive={isHeaderActive} 
      />
      <FullscreenMenu 
        isMenuOpen={isMenuOpen} 
        menuItems={menuItems}
        socialMedia={socialMedia}
      />
      <main>
        <div className="hero" onClick={() => setIsVideoPopup(true)}>
          <video 
            className="hero-video"
            loop 
            playsInline
            muted
            autoPlay
            poster="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/75adb8ce-4345-4334-b05b-ea265c6e8ec3/rawelementis-posterjpg.jpeg"
          >
            <source src="https://vold-independent.s3.ap-southeast-1.amazonaws.com/images/hero-banner/3b4017bb-400d-4582-997a-7d7525fd5181/elementismp4.mp4" type="video/mp4" />
          </video>
          <div className="hero-overlay" />
          <div className="hero-content">
            <motion.h1 
              className="font-heading1 hero-title fade-in"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              ELEMENTIS
            </motion.h1>
            <motion.div 
              className="hero-subtitle fade-in-delay-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p>A lifestyle revolution for a sustainable fulfilling future</p>
              <p style={{ marginTop: '20px', fontSize: '16px', opacity: 0.7 }}>Click to watch full video</p>
            </motion.div>
          </div>
        </div>
        
        <WellnessSection />
        {/* <InnovationSlider /> */}
        <InnovationSlider  nextSectionRef={sustainabilityRef}/>
        <SustainabilitySection  ref={sustainabilityRef} />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
};

export default Home;

