import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <div className="footer-brand-title">S.W.A.P</div>
            <p className="footer-brand-desc">
              Smart Workflow Allocation &amp; Placement. Teacher substitutions, without the administrative chaos.
            </p>
            <div className="footer-company-tag">A product by <strong>CORE Technologies</strong></div>
          </div>

          <div className="footer-links-group">
            <div>
              <div className="footer-col-title">Navigation</div>
              <ul className="footer-nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="footer-col-title">Direct Contact</div>
              <ul className="footer-nav-list">
                <li><a href="mailto:coretechnologiesofficial@gmail.com">coretechnologiesofficial@gmail.com</a></li>
                <li><a href="tel:+919082777586">+91 9082777586</a></li>
                <li><a href="https://wa.me/919082777586" target="_blank" rel="noopener noreferrer">WhatsApp Desk</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 CORE Technologies. All rights reserved.</div>
          <div>School Administration &amp; Timetable Management System</div>
        </div>
      </div>
    </footer>
  )
}
