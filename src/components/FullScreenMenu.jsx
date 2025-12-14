import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

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
                  <Link to={item.href}>{item.name}</Link>
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

export default FullscreenMenu;