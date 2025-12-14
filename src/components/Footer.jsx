// // components/Footer.js
// import React from 'react';
// // import '../styles/Footer.css';
// import '../styles/Footer.css';

// const Footer = () => {
//   const menuPages = [
//     { name: 'Community', path: '/community' },
//     { name: 'Destinations', path: '/destinations' },
//     { name: 'The Story', path: '/the-story' },
//     { name: 'Wellness', path: '/wellness' }
//   ];

//   const menuPages2 = [
//     { name: 'New Developments', path: '/new-developments' },
//     { name: 'Innovation', path: '/innovation' },
//     { name: 'Press Room', path: '/press' },
//     { name: 'Nature', path: '/sustainability' },
//     { name: 'Careers', path: '/careers' }
//   ];

//   const socialMedia = [
//     { name: 'Instagram', url: 'https://www.instagram.com/elementis.co/' },
//     { name: 'Facebook', url: 'https://www.facebook.com/share/Qfswyjm8Uz44otYs/' },
//     { name: 'WhatsApp', url: 'https://wa.me/6282340781817' },
//     { name: 'TikTok', url: 'https://www.tiktok.com/@elementis.co' },
//     { name: 'YouTube', url: 'https://www.youtube.com/@elementis-co' }
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="grid">
//           <div className="left">
//             <a href="/" className="logo">
//               <svg width="200" height="17" viewBox="0 0 216 17" fill="none">
//                 {/* Same logo SVG as header but with dark theme colors */}
//                 <path d="M214.962 2.84549L213.753 3.74535C213.308 2.98331 212.699 2.39151 211.926 1.96996C211.168 1.5484 210.321 1.33763 209.383 1.33763C208.132 1.33763 207.144 1.56462 206.42 2.0186C205.696 2.47258 205.334 3.13734 205.334 4.01288C205.334 4.67763 205.605 5.23701 206.148 5.69099C206.626 6.08011 207.268 6.40439 208.074 6.66381C208.189 6.69623 208.527 6.80973 209.086 7.00429C209.662 7.18264 210.049 7.30424 210.247 7.3691C210.757 7.57988 211.177 7.75012 211.506 7.87983C212.312 8.2041 212.995 8.54459 213.555 8.90129C214.131 9.2742 214.567 9.73629 214.864 10.2876C215.176 10.8712 215.333 11.5441 215.333 12.3062C215.333 13.7654 214.773 14.9165 213.654 15.7597C212.535 16.5866 211.02 17 209.111 17C207.975 17 206.906 16.7973 205.902 16.392C204.7 15.9056 203.828 15.2084 203.285 14.3004C202.939 13.7654 202.708 13.1736 202.593 12.525L204.001 11.917C204.675 14.3653 206.42 15.5894 209.235 15.5894C210.123 15.5894 210.93 15.4435 211.654 15.1516C212.477 14.8436 213.037 14.341 213.333 13.6438C213.497 13.3033 213.58 12.8736 213.58 12.3548C213.58 11.8846 213.456 11.3739 213.209 10.8226C213.111 10.6443 212.921 10.4578 212.642 10.2632C212.329 10.0687 212.115 9.92275 212 9.82546C211.819 9.71197 211.168 9.43634 210.049 8.99857C209.835 8.93371 209.416 8.78779 208.79 8.5608C208.675 8.54459 208.593 8.52027 208.543 8.48784C207.852 8.24464 207.334 8.05818 206.988 7.92847C206.659 7.79876 206.247 7.6123 205.753 7.3691C205.276 7.1259 204.914 6.8989 204.667 6.68813C204.437 6.46114 204.214 6.1774 204.001 5.83691C203.803 5.49642 203.671 5.1154 203.606 4.69385C203.589 4.58035 203.581 4.3939 203.581 4.13448C203.581 2.75632 204.157 1.71054 205.309 0.997139C206.379 0.33238 207.663 0 209.16 0C211.827 0 213.761 0.948498 214.962 2.84549Z" fill="#D1CCBF"/>
//                 {/* ... rest of logo paths with fill="#D1CCBF" */}
//               </svg>
//             </a>
            
//             <div className="contact">
//               <div className="contact-item">
//                 <p>Contact Us</p>
//                 <a href="mailto:info@elementis.co">info@ELEMENTIS.co</a>
//                 <span className="spacer"> | </span>
//                 <a href="tel:+62 823 4078 1817">+62 823 4078 1817</a>
//               </div>
//             </div>
//           </div>

//           <div className="menu-page">
//             {menuPages.map((item, index) => (
//               <a key={index} href={item.path} className="link">
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           <div className="menu-page-2">
//             {menuPages2.map((item, index) => (
//               <a key={index} href={item.path} className="link">
//                 {item.name}
//               </a>
//             ))}
//           </div>

//           <div className="social">
//             <p>Stay Connected</p>
//             <ul className="socmed-list">
//               {socialMedia.map((social, index) => (
//                 <li key={index}>
//                   <a 
//                     href={social.url} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     aria-label={social.name}
//                   >
//                     {/* Social media icons would go here */}
//                     <span>{social.name}</span>
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="border-mobile"></div>

//           <div className="bottom">
//             <div className="border"></div>
//             <div className="copyright">
//               <p>© {new Date().getFullYear()} ELEMENTIS</p>
//             </div>
//             <div className="terms">
//               <a href="/privacy-terms" className="link">Policies and Terms</a>
//             </div>
//             <div className="credit">
//               <p>Website by ELEMENTIS</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// components/Footer.js
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const menuPages = [
    { name: 'Community', path: '/community' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'The Story', path: '/the-story' },
    { name: 'Wellness', path: '/wellness' }
  ];

  const menuPages2 = [
    { name: 'New Developments', path: '/new-developments' },
    { name: 'Innovation', path: '/innovation' },
    { name: 'Press Room', path: '/press' },
    { name: 'Nature', path: '/sustainability' },
    { name: 'Careers', path: '/careers' }
  ];

  const socialMedia = [
    { name: 'Instagram', url: 'https://www.instagram.com/elementis.co/', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/Qfswyjm8Uz44otYs/', icon: 'Facebook' },
    { name: 'WhatsApp', url: 'https://wa.me/6282340781817', icon: 'WhatsApp' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@elementis.co', icon: 'TikTok' },
    { name: 'YouTube', url: 'https://www.youtube.com/@elementis-co', icon: 'YouTube' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Left Column - Logo & Contact */}
          <div className="left font-body3">
            <a href="/" className="logo">
              <svg width="216" height="17" viewBox="0 0 216 17" fill="none">
                <path d="M214.962 2.84549L213.753 3.74535C213.308 2.98331 212.699 2.39151 211.926 1.96996C211.168 1.5484 210.321 1.33763 209.383 1.33763C208.132 1.33763 207.144 1.56462 206.42 2.0186C205.696 2.47258 205.334 3.13734 205.334 4.01288C205.334 4.67763 205.605 5.23701 206.148 5.69099C206.626 6.08011 207.268 6.40439 208.074 6.66381C208.189 6.69623 208.527 6.80973 209.086 7.00429C209.662 7.18264 210.049 7.30424 210.247 7.3691C210.757 7.57988 211.177 7.75012 211.506 7.87983C212.312 8.2041 212.995 8.54459 213.555 8.90129C214.131 9.2742 214.567 9.73629 214.864 10.2876C215.176 10.8712 215.333 11.5441 215.333 12.3062C215.333 13.7654 214.773 14.9165 213.654 15.7597C212.535 16.5866 211.02 17 209.111 17C207.975 17 206.906 16.7973 205.902 16.392C204.7 15.9056 203.828 15.2084 203.285 14.3004C202.939 13.7654 202.708 13.1736 202.593 12.525L204.001 11.917C204.675 14.3653 206.42 15.5894 209.235 15.5894C210.123 15.5894 210.93 15.4435 211.654 15.1516C212.477 14.8436 213.037 14.341 213.333 13.6438C213.497 13.3033 213.58 12.8736 213.58 12.3548C213.58 11.8846 213.456 11.3739 213.209 10.8226C213.111 10.6443 212.921 10.4578 212.642 10.2632C212.329 10.0687 212.115 9.92275 212 9.82546C211.819 9.71197 211.168 9.43634 210.049 8.99857C209.835 8.93371 209.416 8.78779 208.79 8.5608C208.675 8.54459 208.593 8.52027 208.543 8.48784C207.852 8.24464 207.334 8.05818 206.988 7.92847C206.659 7.79876 206.247 7.6123 205.753 7.3691C205.276 7.1259 204.914 6.8989 204.667 6.68813C204.437 6.46114 204.214 6.1774 204.001 5.83691C203.803 5.49642 203.671 5.1154 203.606 4.69385C203.589 4.58035 203.581 4.3939 203.581 4.13448C203.581 2.75632 204.157 1.71054 205.309 0.997139C206.379 0.33238 207.663 0 209.16 0C211.827 0 213.761 0.948498 214.962 2.84549Z" fill="white"></path>
                <path d="M187.932 16.735H186.278V0.221436H187.932V16.735Z" fill="white"></path>
                <path d="M159.354 1.74759V0.218506H171.97V1.74759L166.538 1.48317V16.7321L164.786 16.7351V1.48317L159.354 1.74759Z" fill="white"></path>
                <path d="M131.495 16.735V0.221436H133.372L143.716 14.23V9.8037V0.221436H145.198V16.735H143.667L133.026 2.19139V6.86092V16.735H131.495Z" fill="white"></path>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M104.927 1.26466V0H117.543V1.52908L104.927 1.26466ZM104.927 15.4645V16.7292H117.543V15.2001L104.927 15.4645ZM104.927 9.12827V7.86534L110.359 7.8636H111.099H112.112L117.543 7.86534V9.12827H104.927Z" fill="white"></path>
                <path d="M74.8855 16.7327V0.243408H77.305L82.6624 12.1604L88.168 0.243408H90.3406V16.7327H88.8346V2.33497L83.3784 13.9115H81.8477L76.4903 2.28633V16.7327H74.8855Z" fill="white"></path>
                <path d="M60.4869 16.735H49.377V0.221436H60.4869V1.86452L51.0805 1.4861V7.27437H59.717V8.58767H51.0805V15.4704L60.4869 15.0888V16.735Z" fill="white"></path>
                <path d="M35.6816 16.735H25.4358V0.221436H27.1393V15.4704H35.6816V16.735Z" fill="white"></path>
                <path d="M11.1099 16.735H0V0.221436H11.1099V1.86452L1.70352 1.4861V7.27437H10.34V8.58767H1.70352V15.4704L11.1099 15.0888V16.735Z" fill="white"></path>
              </svg>
            </a>
            
            <div className="contact d-desktop">
              <div className="contact-item">
                <p>Contact Us</p>
                <a className="link" href="mailto:info@elementis.co">info@ELEMENTIS.co</a>
                <a className="link" href="tel:+62 823 4078 1817">+62 823 4078 1817</a>
              </div>
            </div>
          </div>

          {/* Middle Columns - Navigation Links */}
          <ul className="menu-page font-subheading1">
            <li><a aria-current="page" href="/" className="active link">Home</a></li>
            <li><a href="/destinations" className="link">Destinations</a></li>
            <li><a href="/wellness" className="link">Wellness</a></li>
            <li><a href="/innovation" className="link">Innovation</a></li>
            <li><a href="/sustainability" className="link">Nature</a></li>
          </ul>

          <ul className="menu-page-2 font-subheading1">
            {menuPages2.map((item, index) => (
              <li key={index}>
                <a href={item.path} className="link">{item.name}</a>
              </li>
            ))}
          </ul>

          {/* Mobile Contact */}
          <div className="contact d-mobile">
            <div className="contact-item">
              <p>Contact Us</p>
              <a className="link" href="mailto:info@elementis.co">info@ELEMENTIS.co</a>
              <span className="spacer"> | </span>
              <a className="link" href="tel:+62 823 4078 1817">+62 823 4078 1817</a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="social font-button3">
            <p>Stay Connected</p>
            <ul className="socmed-list">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.url} 
                    rel="noopener noreferrer" 
                    target="_blank" 
                    aria-label={social.name}
                  >
                    {social.icon === 'Instagram' && (
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M19.9179 0H15.199V19.0724C15.199 21.3449 13.3841 23.2116 11.1256 23.2116C8.86698 23.2116 7.05206 21.3449 7.05206 19.0724C7.05206 16.8406 8.82665 15.0145 11.0046 14.9333V10.1449C6.20509 10.2261 2.33325 14.1623 2.33325 19.0724C2.33325 24.0232 6.28575 28 11.1659 28C16.046 28 19.9985 23.9826 19.9985 19.0724V9.29273C21.7731 10.5913 23.951 11.3623 26.2499 11.4029V6.61449C22.7008 6.49276 19.9179 3.57101 19.9179 0Z" fill="#D1CCBF"/>
                      </svg>
                    )}
                    {social.icon === 'Facebook' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z" fill="#D1CCBF"/>
                      </svg>
                    )}
                    {social.icon === 'WhatsApp' && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.4 3.45C18.15 1.2 15.15 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.600009 16.2 1.65001 18L0 24L6.30002 22.35C8.10002 23.25 10.05 23.85 12 23.85C18.6 23.85 24 18.45 24 11.85C24 8.7 22.65 5.7 20.4 3.45ZM12 21.9C10.2 21.9 8.40001 21.45 6.90001 20.55L6.59999 20.4L2.84999 21.45L3.90001 17.85L3.59999 17.4C2.54999 15.75 2.09999 13.95 2.09999 12.15C2.09999 6.75 6.6 2.25 12 2.25C14.7 2.25 17.1 3.3 19.05 5.1C21 7.05 21.9 9.45 21.9 12.15C21.9 17.4 17.55 21.9 12 21.9ZM17.4 14.4C17.1 14.25 15.6 13.5 15.3 13.5C15 13.35 14.85 13.35 14.7 13.65C14.55 13.95 13.95 14.55 13.8 14.85C13.65 15 13.5 15 13.2 15C12.9 14.85 12 14.55 10.8 13.5C9.90002 12.75 9.30001 11.7 9.15001 11.4C9.00001 11.1 9.15002 10.95 9.30002 10.8C9.45002 10.65 9.6 10.5 9.75 10.35C9.9 10.2 9.90002 10.05 10.05 9.9C10.2 9.75 10.05 9.6 10.05 9.45C10.05 9.3 9.45001 7.8 9.15001 7.2C9.00001 6.75 8.70002 6.75 8.55002 6.75C8.40002 6.75 8.24998 6.75 7.94998 6.75C7.79998 6.75 7.49998 6.75 7.19998 7.05C6.89998 7.35 6.15001 8.1 6.15001 9.6C6.15001 11.1 7.19999 12.45 7.34999 12.75C7.49999 12.9 9.44998 16.05 12.45 17.25C15 18.3 15.45 18 16.05 18C16.65 18 17.85 17.25 18 16.65C18.3 15.9 18.3 15.3 18.15 15.3C18 14.55 17.7 14.55 17.4 14.4Z" fill="#D1CCBF"/>
                      </svg>
                    )}
                    {social.icon === 'TikTok' && (
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M19.9179 0H15.199V19.0724C15.199 21.3449 13.3841 23.2116 11.1256 23.2116C8.86698 23.2116 7.05206 21.3449 7.05206 19.0724C7.05206 16.8406 8.82665 15.0145 11.0046 14.9333V10.1449C6.20509 10.2261 2.33325 14.1623 2.33325 19.0724C2.33325 24.0232 6.28575 28 11.1659 28C16.046 28 19.9985 23.9826 19.9985 19.0724V9.29273C21.7731 10.5913 23.951 11.3623 26.2499 11.4029V6.61449C22.7008 6.49276 19.9179 3.57101 19.9179 0Z" fill="#D1CCBF"/>
                      </svg>
                    )}
                    {social.icon === 'YouTube' && (
                      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                        <path d="M27.7211 8.4001C27.7211 8.4001 27.4477 6.46963 26.6055 5.62197C25.5391 4.50635 24.3469 4.50088 23.8 4.43525C19.8844 4.15088 14.0055 4.15088 14.0055 4.15088H13.9945C13.9945 4.15088 8.11562 4.15088 4.2 4.43525C3.65313 4.50088 2.46094 4.50635 1.39453 5.62197C0.552344 6.46963 0.284375 8.4001 0.284375 8.4001C0.284375 8.4001 0 10.6696 0 12.9337V15.0556C0 17.3196 0.278906 19.5892 0.278906 19.5892C0.278906 19.5892 0.552344 21.5196 1.38906 22.3673C2.45547 23.4829 3.85547 23.4446 4.47891 23.5649C6.72109 23.7782 14 23.8438 14 23.8438C14 23.8438 19.8844 23.8329 23.8 23.554C24.3469 23.4884 25.5391 23.4829 26.6055 22.3673C27.4477 21.5196 27.7211 19.5892 27.7211 19.5892C27.7211 19.5892 28 17.3251 28 15.0556V12.9337C28 10.6696 27.7211 8.4001 27.7211 8.4001ZM11.107 17.6313V9.76182L18.6703 13.7103L11.107 17.6313Z" fill="#D1CCBF"/>
                      </svg>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Border */}
          <div className="border border-mobile"></div>
        </div>

        {/* Bottom Section */}
        <div className="container bottom font-body3">
          <div className="border"></div>
          <div className="copyright">
            <p>© {new Date().getFullYear()} ELEMENTIS. All Rights Reserved</p>
          </div>
          <div className="terms">
            <a href="/privacy-terms" className="link">Policies and Terms</a>
          </div>
          <div className="credit">
            <p>Website by <a href="https://fleava.com/" rel="noopener noreferrer" target="_blank" className="link" title="Fleava - Bali & Singapore Creative Digital Agency">Fleava</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
