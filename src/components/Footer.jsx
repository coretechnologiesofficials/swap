import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-top">
          
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img src="assets/logo.png" alt="S.W.A.P Logo" className="footer-logo" width="28" height="28" />
              <div>
                <span className="footer-title">S.W.A.P</span>
                <span className="footer-subtitle">Smart Workflow Allocation &amp; Placement</span>
              </div>
            </div>
            <p className="footer-desc">
              Teacher substitutions, without the administrative chaos. A structured timetable and substitution management system for modern school administration.
            </p>
            <div className="footer-dev-tag">
              A product by <strong>CORE Technologies</strong>.
            </div>
          </div>

          <div className="footer-nav-col">
            <h4 className="footer-heading">Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4 className="footer-heading">Official Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <span className="contact-label">Email:</span>
                <a href="mailto:coretechnologiesofficial@gmail.com" className="contact-link">
                  coretechnologiesofficial@gmail.com
                </a>
              </li>
              <li>
                <span className="contact-label">Phone:</span>
                <a href="tel:+919082777586" className="contact-link">
                  +91 9082777586
                </a>
              </li>
              <li>
                <span className="contact-label">WhatsApp:</span>
                <a
                  href="https://wa.me/919082777586"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  +91 9082777586 (Chat)
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            &copy; 2026 CORE Technologies. All rights reserved.
          </p>
          <p className="footer-meta">
            Developed for educational institutions and school administration.
          </p>
        </div>
      </div>
    </footer>
  )
}
