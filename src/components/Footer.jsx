import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">

          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-brand-row">
              <img src="assets/logo.png" alt="S.W.A.P Logo" className="footer-brand-logo" width="32" height="32" />
              <div>
                <div className="footer-brand-name">S.W.A.P</div>
                <div className="footer-brand-tagline">Smart Workflow Allocation &amp; Placement</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              Teacher substitutions, without the administrative chaos. A structured timetable and substitution management system for modern school administration.
            </p>
            <div className="footer-company-tag">A product by <strong>CORE Technologies</strong></div>
          </div>

          {/* Navigation Column */}
          <div className="footer-nav-col">
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-nav-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/how-it-works">How It Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-contact-col">
            <div className="footer-col-title">Official Contact</div>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <span className="footer-contact-label">Email</span>
                <a href="mailto:coretechnologiesofficial@gmail.com" className="footer-contact-val footer-contact-link">coretechnologiesofficial@gmail.com</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">Phone</span>
                <a href="tel:+919082777586" className="footer-contact-val">+91 9082777586</a>
              </div>
              <div className="footer-contact-item">
                <span className="footer-contact-label">WhatsApp</span>
                <a href="https://wa.me/919082777586" target="_blank" rel="noopener noreferrer" className="footer-contact-val footer-contact-link">+91 9082777586 (Chat)</a>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-copy">&copy; 2026 CORE Technologies. All rights reserved.</div>
          <div className="footer-bottom-tag">Developed for educational institutions and school administration.</div>
        </div>
      </div>
    </footer>
  )
}
