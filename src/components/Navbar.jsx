import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Button from './Button'

export const DEMO_MAILTO_URL =
  'mailto:coretechnologiesofficial@gmail.com?subject=SWAP%20Demo%20Request%20-%20[School%20Name]&body=Hello%20CORE%20Technologies%20Team%2C%0A%0AWe%20are%20interested%20in%20learning%20more%20about%20S.W.A.P%20for%20our%20institution.%0A%0ASchool%20Name%3A%0AContact%20Person%3A%0ADesignation%20(Principal%20%2F%20Vice%20Principal%20%2F%20Administrator)%3A%0APhone%20Number%3A%0AEstimated%20Faculty%20Size%3A%0A%0AThank%20you.'

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
          <Button href={DEMO_MAILTO_URL} variant="primary" size="sm" className="nav-cta">
            Request a Demo
          </Button>
          <button
            className="mobile-toggle"
            onClick={toggleMobile}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
          >
            <span className="hamburger-bar"></span>
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
            <Button href={DEMO_MAILTO_URL} variant="primary" size="md" className="btn-block" onClick={closeMobile}>
              Request a Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
