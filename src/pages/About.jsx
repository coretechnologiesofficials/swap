import React from 'react'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function About() {
  return (
    <div className="page-about">
      
      {/* Hero */}
      <section className="section about-hero">
        <div className="container">
          <div className="section-tag">About The Project</div>
          <h1 className="section-title">Built to eliminate administrative chaos.</h1>
          <p className="section-subtitle">
            SWAP (Smart Workflow Allocation &amp; Placement) is an administrative software initiative engineered to bring calm, structure, and equity to school timetables and teacher substitution management.
          </p>
        </div>
      </section>

      {/* Main Content Blocks */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="about-content-grid">
            
            <div className="about-block">
              <h3>The Administrative Problem</h3>
              <p>
                In almost every educational institution, the start of every school day begins with the same high-pressure routine: teachers call in sick, emergency leave requests arrive, and academic coordinators must scramble to find qualified faculty to cover unattended classes.
              </p>
              <p>
                Historically, this has meant flipping through heavy physical timetable binders, cross-referencing departmental spreadsheets, and manually guessing which teachers might be free. The result is often frantic morning coordination, double-booked classrooms, and an unfair burden placed repeatedly on the same cooperative teachers.
              </p>
            </div>

            <div className="about-block">
              <h3>Why SWAP Was Developed</h3>
              <p>
                SWAP was developed to replace manual guesswork with deterministic computational precision. By centralizing master faculty schedules and class section grids into a single local database, SWAP allows coordinators to solve complex multi-grid substitution puzzles in seconds.
              </p>
              <p>
                The software takes into account primary, middle, and senior school period timings, zero periods, library duties, and faculty meetings. It guarantees zero double-booking while ensuring equitable workload distribution across the entire teaching staff.
              </p>
            </div>

            <div className="about-block">
              <h3>Who SWAP Is Built For</h3>
              <p>
                SWAP is engineered specifically for school principals, vice principals, academic supervisors, and timetable coordinators in ICSE, CBSE, state board, and independent educational institutions.
              </p>
              <p>
                Whether managing a faculty of 40 educators or a large campus with over 150 teachers and multiple academic sections, SWAP provides the structural stability and operational clarity needed to keep school days running smoothly.
              </p>
            </div>

            {/* Developer Card: CORE Technologies */}
            <div className="core-identity-card">
              <div className="core-badge-box" style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-light)', padding: 8 }}>
                <img src="assets/core_mark.png" alt="CORE Technologies Symbol" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="core-info-col">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span className="section-tag" style={{ marginBottom: 0 }}>Product Engineering</span>
                  <img src="assets/core_logo.png" alt="CORE Technologies" style={{ height: 24, width: 'auto', objectFit: 'contain' }} />
                </div>
                <p className="core-quote">
                  "CORE Technologies is an independent technology initiative focused on developing practical software solutions that address real-world operational challenges."
                </p>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  We believe administrative technology should be reliable, functional, and deeply respectful of the environment it serves. SWAP reflects our commitment to solving practical operational friction with clean, dependable engineering.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Speak with our implementation team.</h2>
            <p className="cta-subtext">
              Learn how SWAP can be adapted to support the unique scheduling requirements of your school.
            </p>
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Contact CORE Technologies
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
