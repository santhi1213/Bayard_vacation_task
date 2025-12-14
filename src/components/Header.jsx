// // components/Header.js
// import React from 'react';
// import '../styles/Header.css';

// const Header = ({ isMenuOpen, setIsMenuOpen, activePage }) => {
//   const menuItems = [
//     { name: 'Home', path: '/' },
//     { name: 'Community', path: '/community' },
//     { name: 'Destinations', path: '/destinations' },
//     { name: 'The Story', path: '/the-story' },
//     { name: 'Wellness', path: '/wellness' },
//     { name: 'New Developments', path: '/new-developments' },
//     { name: 'Innovation', path: '/innovation' },
//     { name: 'Press Room', path: '/press' },
//     { name: 'Nature', path: '/sustainability' },
//     { name: 'Careers', path: '/careers' }
//   ];

//   return (
//     <>
//       <header className={`header ${isMenuOpen ? 'is--open' : ''}`}>
//         <nav className="nav font-button3">
//           <a href="/" className="logo" aria-label="ELEMENTIS">
//             <svg width="216" height="17" viewBox="0 0 216 17" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M214.962 2.84549L213.753 3.74535C213.308 2.98331 212.699 2.39151 211.926 1.96996C211.168 1.5484 210.321 1.33763 209.383 1.33763C208.132 1.33763 207.144 1.56462 206.42 2.0186C205.696 2.47258 205.334 3.13734 205.334 4.01288C205.334 4.67763 205.605 5.23701 206.148 5.69099C206.626 6.08011 207.268 6.40439 208.074 6.66381C208.189 6.69623 208.527 6.80973 209.086 7.00429C209.662 7.18264 210.049 7.30424 210.247 7.3691C210.757 7.57988 211.177 7.75012 211.506 7.87983C212.312 8.2041 212.995 8.54459 213.555 8.90129C214.131 9.2742 214.567 9.73629 214.864 10.2876C215.176 10.8712 215.333 11.5441 215.333 12.3062C215.333 13.7654 214.773 14.9165 213.654 15.7597C212.535 16.5866 211.02 17 209.111 17C207.975 17 206.906 16.7973 205.902 16.392C204.7 15.9056 203.828 15.2084 203.285 14.3004C202.939 13.7654 202.708 13.1736 202.593 12.525L204.001 11.917C204.675 14.3653 206.42 15.5894 209.235 15.5894C210.123 15.5894 210.93 15.4435 211.654 15.1516C212.477 14.8436 213.037 14.341 213.333 13.6438C213.497 13.3033 213.58 12.8736 213.58 12.3548C213.58 11.8846 213.456 11.3739 213.209 10.8226C213.111 10.6443 212.921 10.4578 212.642 10.2632C212.329 10.0687 212.115 9.92275 212 9.82546C211.819 9.71197 211.168 9.43634 210.049 8.99857C209.835 8.93371 209.416 8.78779 208.79 8.5608C208.675 8.54459 208.593 8.52027 208.543 8.48784C207.852 8.24464 207.334 8.05818 206.988 7.92847C206.659 7.79876 206.247 7.6123 205.753 7.3691C205.276 7.1259 204.914 6.8989 204.667 6.68813C204.437 6.46114 204.214 6.1774 204.001 5.83691C203.803 5.49642 203.671 5.1154 203.606 4.69385C203.589 4.58035 203.581 4.3939 203.581 4.13448C203.581 2.75632 204.157 1.71054 205.309 0.997139C206.379 0.33238 207.663 0 209.16 0C211.827 0 213.761 0.948498 214.962 2.84549Z" fill="currentColor"/>
//               <path d="M187.932 16.735H186.278V0.221436H187.932V16.735Z" fill="currentColor"/>
//               <path d="M159.354 1.74759V0.218506H171.97V1.74759L166.538 1.48317V16.7321L164.786 16.7351V1.48317L159.354 1.74759Z" fill="currentColor"/>
//               <path d="M131.495 16.735V0.221436H133.372L143.716 14.23V9.8037V0.221436H145.198V16.735H143.667L133.026 2.19139V6.86092V16.735H131.495Z" fill="currentColor"/>
//               <path fillRule="evenodd" clipRule="evenodd" d="M104.927 1.26466V0H117.543V1.52908L104.927 1.26466ZM104.927 15.4645V16.7292H117.543V15.2001L104.927 15.4645ZM104.927 9.12827V7.86534L110.359 7.8636H111.099H112.112L117.543 7.86534V9.12827H104.927Z" fill="currentColor"/>
//               <path d="M74.8855 16.7327V0.243408H77.305L82.6624 12.1604L88.168 0.243408H90.3406V16.7327H88.8346V2.33497L83.3784 13.9115H81.8477L76.4903 2.28633V16.7327H74.8855Z" fill="currentColor"/>
//               <path d="M60.4869 16.735H49.377V0.221436H60.4869V1.86452L51.0805 1.4861V7.27437H59.717V8.58767H51.0805V15.4704L60.4869 15.0888V16.735Z" fill="currentColor"/>
//               <path d="M35.6816 16.735H25.4358V0.221436H27.1393V15.4704H35.6816V16.735Z" fill="currentColor"/>
//               <path d="M11.1099 16.735H0V0.221436H11.1099V1.86452L1.70352 1.4861V7.27437H10.34V8.58767H1.70352V15.4704L11.1099 15.0888V16.735Z" fill="currentColor"/>
//             </svg>
//           </a>
          
//           <ul className="menu">
//             {menuItems.slice(2, 6).map((item, index) => (
//               <li key={index}>
//                 <a 
//                   href={item.path} 
//                   className={`link ${activePage === item.name.toLowerCase() ? 'active' : ''}`}
//                 >
//                   {item.name}
//                 </a>
//               </li>
//             ))}
//           </ul>
          
//           <div className="hamburger-wrapper">
//             <button className="join-us-btn">Join Us</button>
//             <div 
//               className="hamburger-spacing"
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//             >
//               <div className="hamburger">
//                 <div className="line"></div>
//                 <div className="line"></div>
//                 <div className="line"></div>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </header>

//       {/* Mobile Menu Popup */}
//       {isMenuOpen && (
//         <div className="popup is--open">
//           <div className="overlay-black" onClick={() => setIsMenuOpen(false)}></div>
//           <div className="content-wrapper">
//             <div className="content">
//               <p className="subtitle">Discover Pages</p>
//               <ul className="menu-popup">
//                 {menuItems.map((item, index) => (
//                   <li key={index} className="menu__item">
//                     <a 
//                       href={item.path} 
//                       className={`button-link ${activePage === item.name.toLowerCase() ? 'active' : ''}`}
//                       onClick={() => setIsMenuOpen(false)}
//                     >
//                       <span className="text">{item.name}</span>
//                       <span className="icon-wrapper">
//                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path fillRule="evenodd" clipRule="evenodd" d="M11.9966 8.5308C11.9966 8.84819 11.7334 9.11139 11.416 9.11139C11.0986 9.11139 10.8354 8.84819 10.8354 8.5308V1.98239L0.989067 11.8287C0.872949 11.9448 0.725867 11.999 0.578784 11.999C0.431702 11.999 0.284619 11.9448 0.168502 11.8287C-0.0559931 11.6042 -0.0559931 11.2326 0.168502 11.0082L10.0155 1.16118H3.46578C3.14839 1.16118 2.88519 0.897979 2.88519 0.58059C2.88519 0.263201 3.14839 0 3.46578 0H11.416C11.5014 0 11.5828 0.0190504 11.6563 0.0530812C11.7183 0.0808598 11.7763 0.119992 11.8267 0.170477C11.8841 0.227843 11.9268 0.294813 11.9549 0.366478C11.9817 0.432929 11.9966 0.505232 11.9966 0.58059V8.5308Z" fill="currentColor"/>
//                         </svg>
//                       </span>
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;


import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ isMenuOpen, setIsMenuOpen, isHeaderActive }) => {
  const location = useLocation();
  
  return (
    <motion.header 
      className={`header ${isHeaderActive || isMenuOpen ? 'active' : ''}`}
      initial={{ y: 0 }}
      animate={{ y: isHeaderActive || isMenuOpen ? 0 : -120 }}
    >
      <nav className="nav">
        <Link to="/" className="logo">ELEMENTIS</Link>
        <div className="nav-menu">
          <Link to="/destinations" className={`link ${location.pathname === '/destinations' ? 'active' : ''}`}>
            Destinations
          </Link>
          <Link to="/wellness" className={`link ${location.pathname === '/wellness' ? 'active' : ''}`}>
            Wellness
          </Link>
          <Link to="/innovation" className={`link ${location.pathname === '/innovation' ? 'active' : ''}`}>
            Innovation
          </Link>
          <Link to="/nature" className={`link ${location.pathname === '/nature' ? 'active' : ''}`}>
            Nature
          </Link>
          <Link to="/community" className={`link ${location.pathname === '/community' ? 'active' : ''}`}>
            Community
          </Link>
          <Link to="/the-story" className={`link ${location.pathname === '/the-story' ? 'active' : ''}`}>
            The Story
          </Link>
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

export default Header;


