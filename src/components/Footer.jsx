// components/Footer.js
import React from 'react';
// import '../styles/Footer.css';
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
    { name: 'Instagram', url: 'https://www.instagram.com/elementis.co/' },
    { name: 'Facebook', url: 'https://www.facebook.com/share/Qfswyjm8Uz44otYs/' },
    { name: 'WhatsApp', url: 'https://wa.me/6282340781817' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@elementis.co' },
    { name: 'YouTube', url: 'https://www.youtube.com/@elementis-co' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="grid">
          <div className="left">
            <a href="/" className="logo">
              <svg width="200" height="17" viewBox="0 0 216 17" fill="none">
                {/* Same logo SVG as header but with dark theme colors */}
                <path d="M214.962 2.84549L213.753 3.74535C213.308 2.98331 212.699 2.39151 211.926 1.96996C211.168 1.5484 210.321 1.33763 209.383 1.33763C208.132 1.33763 207.144 1.56462 206.42 2.0186C205.696 2.47258 205.334 3.13734 205.334 4.01288C205.334 4.67763 205.605 5.23701 206.148 5.69099C206.626 6.08011 207.268 6.40439 208.074 6.66381C208.189 6.69623 208.527 6.80973 209.086 7.00429C209.662 7.18264 210.049 7.30424 210.247 7.3691C210.757 7.57988 211.177 7.75012 211.506 7.87983C212.312 8.2041 212.995 8.54459 213.555 8.90129C214.131 9.2742 214.567 9.73629 214.864 10.2876C215.176 10.8712 215.333 11.5441 215.333 12.3062C215.333 13.7654 214.773 14.9165 213.654 15.7597C212.535 16.5866 211.02 17 209.111 17C207.975 17 206.906 16.7973 205.902 16.392C204.7 15.9056 203.828 15.2084 203.285 14.3004C202.939 13.7654 202.708 13.1736 202.593 12.525L204.001 11.917C204.675 14.3653 206.42 15.5894 209.235 15.5894C210.123 15.5894 210.93 15.4435 211.654 15.1516C212.477 14.8436 213.037 14.341 213.333 13.6438C213.497 13.3033 213.58 12.8736 213.58 12.3548C213.58 11.8846 213.456 11.3739 213.209 10.8226C213.111 10.6443 212.921 10.4578 212.642 10.2632C212.329 10.0687 212.115 9.92275 212 9.82546C211.819 9.71197 211.168 9.43634 210.049 8.99857C209.835 8.93371 209.416 8.78779 208.79 8.5608C208.675 8.54459 208.593 8.52027 208.543 8.48784C207.852 8.24464 207.334 8.05818 206.988 7.92847C206.659 7.79876 206.247 7.6123 205.753 7.3691C205.276 7.1259 204.914 6.8989 204.667 6.68813C204.437 6.46114 204.214 6.1774 204.001 5.83691C203.803 5.49642 203.671 5.1154 203.606 4.69385C203.589 4.58035 203.581 4.3939 203.581 4.13448C203.581 2.75632 204.157 1.71054 205.309 0.997139C206.379 0.33238 207.663 0 209.16 0C211.827 0 213.761 0.948498 214.962 2.84549Z" fill="#D1CCBF"/>
                {/* ... rest of logo paths with fill="#D1CCBF" */}
              </svg>
            </a>
            
            <div className="contact">
              <div className="contact-item">
                <p>Contact Us</p>
                <a href="mailto:info@elementis.co">info@ELEMENTIS.co</a>
                <span className="spacer"> | </span>
                <a href="tel:+62 823 4078 1817">+62 823 4078 1817</a>
              </div>
            </div>
          </div>

          <div className="menu-page">
            {menuPages.map((item, index) => (
              <a key={index} href={item.path} className="link">
                {item.name}
              </a>
            ))}
          </div>

          <div className="menu-page-2">
            {menuPages2.map((item, index) => (
              <a key={index} href={item.path} className="link">
                {item.name}
              </a>
            ))}
          </div>

          <div className="social">
            <p>Stay Connected</p>
            <ul className="socmed-list">
              {socialMedia.map((social, index) => (
                <li key={index}>
                  <a 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    {/* Social media icons would go here */}
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-mobile"></div>

          <div className="bottom">
            <div className="border"></div>
            <div className="copyright">
              <p>© {new Date().getFullYear()} ELEMENTIS</p>
            </div>
            <div className="terms">
              <a href="/privacy-terms" className="link">Policies and Terms</a>
            </div>
            <div className="credit">
              <p>Website by ELEMENTIS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;