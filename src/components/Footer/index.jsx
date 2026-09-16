import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">S</span>
            <span>Shopify Cart</span>
          </div>

          <p>
            Your simple and convenient online shopping destination.
            Explore products, manage your cart, and shop with ease.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/cart">Shopping Cart</Link>
        </div>

        <div className="footer-column">
          <h3>Customer Support</h3>

          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Return Policy</a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📧 support@shopifycart.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Jaipur, Rajasthan, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Shopify Cart. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer