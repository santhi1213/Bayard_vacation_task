// import React, { useState } from 'react';
// import HeroSlideshow from './HeroSlideshow';

// const Destinations = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const destinations = [
//     {
//       id: 1,
//       title: "Asia",
//       subtitle: "Indonesia",
//       description: "Indonesia is a stunning archipelago with diverse landscapes and rich cultural heritage. Bali, known for its awe-inspiring culture, is a spiritual haven where ancient traditions thrive.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 2,
//       title: "Americas",
//       subtitle: "Chile",
//       description: "The Americas is a region marked by an astounding variety of landscapes and cultural experiences. From the Andes mountains to coastal paradises.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 3,
//       title: "Australia",
//       subtitle: "",
//       description: "Australia stands out as an ideal destination for transformative experiences and relaxation. With its unique wildlife and breathtaking landscapes.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     }
//   ];

//   return (
//     <div className="destinations-page">
//       <HeroSlideshow 
//         destinations={destinations}
//         activeSlide={activeSlide}
//         setActiveSlide={setActiveSlide}
//       />
//     </div>
//   );
// };

// export default Destinations;

// import React, { useState, useEffect } from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import HeroSlideshow from '../components/HeroSlideshow';

// const Destinations = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isHeaderActive, setIsHeaderActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderActive(window.scrollY > 100);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const destinations = [
//     {
//       id: 1,
//       title: "Asia",
//       subtitle: "Indonesia",
//       description: "Indonesia is a stunning archipelago with diverse landscapes and rich cultural heritage. Bali, known for its awe-inspiring culture, is a spiritual haven where ancient traditions thrive.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 2,
//       title: "Americas",
//       subtitle: "Chile",
//       description: "The Americas is a region marked by an astounding variety of landscapes and cultural experiences. From the Andes mountains to coastal paradises.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 3,
//       title: "Australia",
//       subtitle: "",
//       description: "Australia stands out as an ideal destination for transformative experiences and relaxation. With its unique wildlife and breathtaking landscapes.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     }
//   ];

//   return (
//     <div className="destinations-page">
//       <Header 
//         isMenuOpen={isMenuOpen} 
//         setIsMenuOpen={setIsMenuOpen}
//         isHeaderActive={isHeaderActive}
//       />
      
//       <main>
//         <HeroSlideshow 
//           destinations={destinations}
//           activeSlide={activeSlide}
//           setActiveSlide={setActiveSlide}
//         />
//       </main>
      
//       <Footer />
//     </div>
//   );
// };

// export default Destinations;

// import React, { useState } from 'react';
// import HeroSlideshow from '../components/HeroSlideshow';

// const Destinations = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const destinations = [
//     {
//       id: 1,
//       title: "Asia",
//       subtitle: "Indonesia",
//       description: "Indonesia is a stunning archipelago with diverse landscapes and rich cultural heritage. Bali, known for its awe-inspiring culture, is a spiritual haven where ancient traditions thrive.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 2,
//       title: "Americas",
//       subtitle: "Chile",
//       description: "The Americas is a region marked by an astounding variety of landscapes and cultural experiences. From the Andes mountains to coastal paradises.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     },
//     {
//       id: 3,
//       title: "Australia",
//       subtitle: "",
//       description: "Australia stands out as an ideal destination for transformative experiences and relaxation. With its unique wildlife and breathtaking landscapes.",
//       images: {
//         desktop: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
//         mobile: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
//       }
//     }
//   ];

//   return (
//     <div className="destinations-page">
//       <HeroSlideshow 
//         destinations={destinations}
//         activeSlide={activeSlide}
//         setActiveSlide={setActiveSlide}
//       />
//     </div>
//   );
// };

// export default Destinations;

import React, { useState, useEffect } from 'react';
import HeroSlideshow from '../components/HeroSlideshow';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Destinations = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(true);
  const location = useLocation();

  const destinations = [
    {
      id: 1,
      title: "Asia",
      subtitle: "Indonesia",
      description: "Indonesia is a stunning archipelago with diverse landscapes and rich cultural heritage. Bali, known for its awe-inspiring culture, is a spiritual haven where ancient traditions thrive.",
      images: {
        desktop: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    },
    {
      id: 2,
      title: "Americas",
      subtitle: "Chile",
      description: "The Americas is a region marked by an astounding variety of landscapes and cultural experiences. From the Andes mountains to coastal paradises.",
      images: {
        desktop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    },
    {
      id: 3,
      title: "Australia",
      subtitle: "",
      description: "Australia stands out as an ideal destination for transformative experiences and relaxation. With its unique wildlife and breathtaking landscapes.",
      images: {
        desktop: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
        mobile: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      }
    }
  ];

  // Simple scroll effect - keep header always visible
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderActive(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="destinations-page">
      {/* Simple Fixed Header */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#0A3D2B', // Dark green
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        boxShadow: isHeaderActive ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '0 2rem',
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontFamily: 'sans-serif',
              letterSpacing: '1px'
            }}
          >
            ELEMENTIS
          </Link>
          
          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center'
          }}>
            <Link 
              to="/destinations" 
              style={{
                color: location.pathname === '/destinations' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/destinations' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/destinations' ? '#FFD700' : 'white'}
            >
              Destinations
            </Link>
            
            <Link 
              to="/wellness" 
              style={{
                color: location.pathname === '/wellness' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/wellness' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/wellness' ? '#FFD700' : 'white'}
            >
              Wellness
            </Link>
            
            <Link 
              to="/innovation" 
              style={{
                color: location.pathname === '/innovation' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/innovation' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/innovation' ? '#FFD700' : 'white'}
            >
              Innovation
            </Link>
            
            <Link 
              to="/nature" 
              style={{
                color: location.pathname === '/nature' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/nature' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/nature' ? '#FFD700' : 'white'}
            >
              Nature
            </Link>
            
            <Link 
              to="/community" 
              style={{
                color: location.pathname === '/community' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/community' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/community' ? '#FFD700' : 'white'}
            >
              Community
            </Link>
            
            <Link 
              to="/the-story" 
              style={{
                color: location.pathname === '/the-story' ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: location.pathname === '/the-story' ? 'bold' : 'normal',
                transition: 'color 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = location.pathname === '/the-story' ? '#FFD700' : 'white'}
            >
              The Story
            </Link>
            
            {/* Join Us Button */}
            <button
              style={{
                backgroundColor: 'transparent',
                color: 'white',
                border: '1px solid white',
                padding: '8px 24px',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginLeft: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = '#0A3D2B';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'white';
              }}
            >
              Join Us
            </button>
          </div>
        </nav>
      </header>

      {/* Add padding to main content to account for fixed header */}
      <div style={{ paddingTop: '80px' }}>
        <HeroSlideshow 
          destinations={destinations}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </div>
    </div>
  );
};

export default Destinations;

