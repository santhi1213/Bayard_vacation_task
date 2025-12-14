// // App.js
// import React, { useState } from 'react';
// import Header from './components/Header';
// import HeroSlideshow from './components/HeroSlideshow';
// import Footer from './components/Footer';
// import './index.css'
// import ElementisHomepage from './components/Home';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
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
//     <div className="app">
//       {/* <Header 
//         isMenuOpen={isMenuOpen} 
//         setIsMenuOpen={setIsMenuOpen}
//         activePage="destinations"
//       /> */}
      
//       {/* <main>
//         <HeroSlideshow 
//           destinations={destinations}
//           activeSlide={activeSlide}
//           setActiveSlide={setActiveSlide}
//         />
//       </main> */}
//       <ElementisHomepage/>
      
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Destinations from './components/Destinations';
// // import Wellness from './pages/Wellness';
// import Wellness from './components/Wellness';
// import Innovation from './components/Innovation';
// import Nature from './components/Nature';
// import Community from './components/Community';
// import TheStory from './components/TheStory';
// import ComingSoon from './components/ComingSoon';
// import './styles/global.css';

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   return (
//     <Router>
//       <div className="app">
//         <Header 
//           isMenuOpen={isMenuOpen} 
//           setIsMenuOpen={setIsMenuOpen}
//         />
        
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/destinations" element={<Destinations />} />
//             <Route path="/wellness" element={<Wellness />} />
//             <Route path="/innovation" element={<Innovation />} />
//             <Route path="/nature" element={<Nature />} />
//             <Route path="/community" element={<Community />} />
//             <Route path="/the-story" element={<TheStory />} />
            
//             {/* Add more routes as needed */}
//             <Route path="*" element={<ComingSoon />} />
//           </Routes>
//         </main>
        
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import Destinations from './components/Destinations';
// // import Wellness from './pages/Wellness';
// import Wellness from './components/Wellness';
// import Innovation from './components/Innovation';
// import Nature from './components/Nature';
// import Community from './components/Community';
// import TheStory from './components/TheStory';
// import ComingSoon from './components/ComingSoon';
// import './styles/global.css';

// // Create a Layout component that includes Header and Footer
// const Layout = ({ children, isMenuOpen, setIsMenuOpen }) => {
//   const [isHeaderActive, setIsHeaderActive] = useState(false);
//   const location = useLocation();
  
//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsHeaderActive(window.scrollY > 100);
//     };
    
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);
  
//   return (
//     <>
//       <Header 
//         isMenuOpen={isMenuOpen} 
//         setIsMenuOpen={setIsMenuOpen}
//         isHeaderActive={isHeaderActive}
//       />
//       {children}
//       <Footer />
//     </>
//   );
// };

// function App() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Home />
//             </Layout>
//           } />
          
//           <Route path="/destinations" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Destinations />
//             </Layout>
//           } />
          
//           <Route path="/wellness" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Wellness />
//             </Layout>
//           } />
          
//           <Route path="/innovation" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Innovation />
//             </Layout>
//           } />
          
//           <Route path="/nature" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Nature />
//             </Layout>
//           } />
          
//           <Route path="/community" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <Community />
//             </Layout>
//           } />
          
//           <Route path="/the-story" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <TheStory />
//             </Layout>
//           } />
          
//           {/* 404 Route */}
//           <Route path="*" element={
//             <Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
//               <ComingSoon />
//             </Layout>
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Destinations from './components/Destinations';
// import Wellness from './pages/Wellness';
import Wellness from './components/Wellness';
import Innovation from './components/Innovation';
import Nature from './components/Nature';
import Community from './components/Community';
import TheStory from './components/TheStory';
import ComingSoon from './components/ComingSoon';
import MainLayout from './components/MainLayout';
import './styles/global.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="destinations" element={<Destinations />} />
            <Route path="wellness" element={<Wellness />} />
            <Route path="innovation" element={<Innovation />} />
            <Route path="nature" element={<Nature />} />
            <Route path="community" element={<Community />} />
            <Route path="the-story" element={<TheStory />} />
            <Route path="*" element={<ComingSoon />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
