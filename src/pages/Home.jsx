import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function Home() {
  return (
    <div className="page-home">
      
      {/* ---------------------------------------------------------------------
          HERO SECTION WITH FLASHING PAWAR PUBLIC SCHOOL SPOTLIGHT
          --------------------------------------------------------------------- */}
      <section className="section home-hero">
        <div className="container">
          
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              SMART WORKFLOW ALLOCATION &amp; PLACEMENT
            </span>
          </div>

          <h1 className="hero-headline">
            Teacher substitutions, without the administrative chaos.
          </h1>

          <p className="hero-description">
            A smarter way to manage teacher absences, allocate substitute periods and monitor faculty availability. Tested and proven in live everyday school administration.
          </p>

          <div className="hero-buttons">
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Request a Product Demonstration
            </Button>
            <Link to="/product" className="btn btn-secondary btn-lg">
              Explore Features
            </Link>
          </div>

          {/* Compact Trust Row */}
          <div className="hero-meta-row">
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              100+ Teaching Faculty
            </span>
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Grades 1 to 12 Timetables
            </span>
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Max 2 Duties Daily Limit
            </span>
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Printable Morning Rosters
            </span>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------
          OUR CLIENTS SECTION (Prominent Pawar Public School Showcase)
          --------------------------------------------------------------------- */}
      <section className="section clients-section">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: 32 }}>
            <div className="section-tag">Institutional Trust</div>
            <h2 className="section-title">Our Clients</h2>
            <p className="section-subtitle">
              Deployed and evaluated in live everyday school operations.
            </p>
          </div>

          <div className="client-spotlight-card">
            <div className="client-logo-column">
              <img
                src="assets/PPS_Logo_dombivali.png"
                alt="Pawar Public School, Dombivli Logo"
                className="client-main-logo"
              />
              <span className="client-location-text">Dombivli, Maharashtra</span>
            </div>
            
            <div className="client-info-column">
              <div className="client-status-badge">
                <span className="status-dot"></span>
                ACTIVE INSTITUTIONAL DEPLOYMENT
              </div>
              <h3 className="client-school-name">Pawar Public School</h3>
              <p className="client-narrative">
                Pawar Public School, Dombivli actively utilizes SWAP to manage daily teacher substitutions, prevent double-bookings, and monitor faculty availability across more than 100 teaching staff from Grade 1 through Grade 12.
              </p>

              <div className="client-metrics-row">
                <div className="client-metric-pill">
                  <strong>100+</strong> Teaching Faculty
                </div>
                <div className="client-metric-pill">
                  <strong>Grades 1 to 12</strong> Multi-Grid Coverage
                </div>
                <div className="client-metric-pill">
                  <strong>Max 2 Duties</strong> Automated Daily Limit
                </div>
                <div className="client-metric-pill">
                  <strong>&lt; 2 Mins</strong> Morning Resolution
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------
          THE PROBLEM & 3 PILLARS: PLAN, BALANCE, RECORD
          --------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: 'var(--bg-slate-50)', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          
          <div className="section-header">
            <div className="section-tag">The Morning Reality</div>
            <h2 className="section-title">One teacher absent. How many decisions?</h2>
            <p className="section-subtitle">
              Every morning, coordinators scramble to find available teachers without causing double-bookings or faculty burnout.
            </p>
          </div>

          {/* High-Impact Insight Callout */}
          <div className="insight-callout-box" style={{ marginBottom: 40 }}>
            <div className="insight-icon-col">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <div className="insight-content">
              <span className="insight-tag">Critical Operational Insight</span>
              <div className="insight-quote">"An available teacher is not necessarily an available substitute."</div>
              <p className="insight-body">
                For example, Teacher K may appear unassigned on the daily leave sheet, but in Period 4 is already assigned to Class 9A. Without instant multi-timetable conflict detection, double-booking is almost inevitable. SWAP brings deterministic computational structure so no conflict slips through.
              </p>
            </div>
          </div>

          {/* The 3 Core Pillars Grid (Directly from Brochure Panel 3) */}
          <div className="pillars-grid">
            
            <div className="pillar-card">
              <span className="pillar-tag">Pillar 01</span>
              <h3 className="pillar-title">PLAN</h3>
              <p className="pillar-desc">
                Deterministic morning substitution engine eliminating timetable collisions and guesswork.
              </p>
              <ul className="pillar-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Conflict-free automated suggestions
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Full manual coordinator override
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Grades 1 to 12 coverage (Sections 1A–12E)
                </li>
              </ul>
            </div>

            <div className="pillar-card">
              <span className="pillar-tag">Pillar 02</span>
              <h3 className="pillar-title">BALANCE</h3>
              <p className="pillar-desc">
                Real-time faculty availability calculation with an automated policy limit against burnout.
              </p>
              <ul className="pillar-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Instant live availability tracking
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Fair, transparent workload distribution
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Strict two-duty daily limit guardrail
                </li>
              </ul>
            </div>

            <div className="pillar-card">
              <span className="pillar-tag">Pillar 03</span>
              <h3 className="pillar-title">RECORD</h3>
              <p className="pillar-desc">
                Institutional continuity with permanent substitution history and physical staffroom slips.
              </p>
              <ul className="pillar-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Printable noticeboard daily rosters
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Permanent historical substitution logs
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Audit-ready records for school leadership
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------
          CAMPUS ARCHITECTURE & DEMONSTRATION (Practical, Streamlined CTA)
          --------------------------------------------------------------------- */}
      <section className="section" style={{ backgroundColor: '#ffffff', paddingTop: 64, paddingBottom: 64 }}>
        <div className="container">
          <div className="cta-box" style={{ maxWidth: 800, padding: '44px 36px' }}>
            
            <span className="section-tag" style={{ marginBottom: 12 }}>Local • Independent • Practical</span>
            <h2 className="cta-heading" style={{ marginBottom: 12 }}>Ready for tomorrow morning's substitution routine.</h2>
            <p className="cta-subtext" style={{ maxWidth: 620, margin: '0 auto 24px', lineHeight: 1.6 }}>
              SWAP runs directly on your campus desktop and intranet. No continuous internet connection needed for routine planning - your school's student timetables and faculty records never leave your campus.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 28 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brand-blue)', background: 'rgba(30, 58, 138, 0.06)', padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(30, 58, 138, 0.12)' }}>Zero Internet Dependency</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brand-blue)', background: 'rgba(30, 58, 138, 0.06)', padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(30, 58, 138, 0.12)' }}>100% On-Campus Data Privacy</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--brand-blue)', background: 'rgba(30, 58, 138, 0.06)', padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(30, 58, 138, 0.12)' }}>&lt; 50ms Processing Speed</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
              <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
                Request a Product Demonstration
              </Button>
              <a
                href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#16a34a' }}><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.09 7.09 8.87 7.33C8.65 7.57 8.02 8.16 8.02 9.36C8.02 10.56 8.9 11.72 9.02 11.89C9.15 12.05 10.76 14.53 13.22 15.6C15.27 16.48 15.69 16.31 16.13 16.27C16.57 16.23 17.56 15.69 17.76 15.11C17.96 14.53 17.96 14.04 17.9 13.94C17.84 13.84 17.68 13.78 17.44 13.66C17.2 13.54 16.02 12.96 15.8 12.88C15.58 12.8 15.42 12.76 15.25 13C15.09 13.24 14.62 13.78 14.48 13.94C14.34 14.11 14.2 14.13 13.96 14.01C13.72 13.89 12.95 13.64 12.03 12.82C11.31 12.18 10.83 11.39 10.69 11.15C10.55 10.91 10.67 10.78 10.8 10.66C10.91 10.55 11.05 10.37 11.17 10.23C11.29 10.09 11.33 9.99 11.41 9.83C11.49 9.67 11.45 9.53 11.39 9.41C11.33 9.29 10.87 8.16 10.67 7.69C10.49 7.23 10.3 7.29 10.15 7.28C10.02 7.28 9.86 7.27 9.7 7.27C9.53 7.27 9.53 7.03 9.53 7.03Z"/></svg>
                WhatsApp Us
              </a>
            </div>

            <div style={{ marginTop: 20, fontSize: 13, color: 'var(--text-muted)' }}>
              Direct Coordinator Line: <a href="tel:+919082777586" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline' }}>+91 9082777586</a> • Email: <a href="mailto:coretechnologiesofficial@gmail.com" style={{ color: 'var(--text-primary)', fontWeight: 600, textDecoration: 'underline' }}>coretechnologiesofficial@gmail.com</a>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
