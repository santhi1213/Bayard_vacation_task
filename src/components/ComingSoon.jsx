import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="coming-soon-content"
        >
          <h1 className="font-heading2">Coming Soon</h1>
          <p className="font-body1">
            This page is currently under development. We're working hard to bring you an amazing experience.
          </p>
          <div className="coming-soon-actions">
            <Link to="/" className="button-link font-button1">
              <span>Back to Home</span>
              <span>→</span>
            </Link>
            <Link to="/destinations" className="button-link font-button1">
              <span>Explore Destinations</span>
              <span>→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;