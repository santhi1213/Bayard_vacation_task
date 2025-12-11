// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import HeroSlideshow from './components/HeroSlideshow';
import Footer from './components/Footer';
import './index.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

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

  return (
    <div className="app">
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        activePage="destinations"
      />
      
      <main>
        <HeroSlideshow 
          destinations={destinations}
          activeSlide={activeSlide}
          setActiveSlide={setActiveSlide}
        />
      </main>
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;