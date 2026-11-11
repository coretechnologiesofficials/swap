import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggleMobile = () => setMobileOpen(!mobileOpen)
  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="site-header">
      <div className="nav-container">
        <Link to="/" className="brand-link" onClick={closeMobile} aria-label="S.W.A.P Home">
          <img src="assets/logo.png" alt="S.W.A.P Logo" className="brand-logo" width="32" height="32" />
          <div className="brand-text">
            <span className="brand-title">S.W.A.P</span>
            <span className="brand-subtitle">Smart Workflow Allocation &amp; Placement</span>
          </div>
        </Link>

        <nav className="desktop-nav" aria-label="Primary Navigation">
          <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Product
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            How It Works
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Request a Demo
          </Link>
          <button
            className="mobile-toggle"
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <NavLink to="/" end className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Home
          </NavLink>
          <NavLink to="/product" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Product
          </NavLink>
          <NavLink to="/how-it-works" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            How It Works
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`} onClick={closeMobile}>
            Contact
          </NavLink>
          <div className="mobile-cta-wrapper">
            <Link to="/contact" className="btn btn-primary btn-block" onClick={closeMobile}>
              Request a Demo
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
