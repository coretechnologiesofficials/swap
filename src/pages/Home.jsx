import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function Home() {
  return (
    <div className="page-home">
      
      {/* ---------------------------------------------------------------------
          HERO SECTION (No giant screenshot; clean workflow visualization)
          --------------------------------------------------------------------- */}
      <section className="section home-hero">
        <div className="container">
          
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              S.W.A.P by CORE Technologies • School Administration Software
            </span>
          </div>

          <h1 className="hero-headline">
            Teacher substitutions, without the administrative chaos.
          </h1>

          <p className="hero-description">
            A smarter way to manage teacher absences, allocate substitute periods and monitor faculty availability.
          </p>

          <div className="hero-buttons">
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Request a Demo
            </Button>
            <Link to="/how-it-works" className="btn btn-secondary btn-lg">
              How It Works
            </Link>
          </div>

          <div className="hero-meta-row">
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Deterministic Conflict Checking
            </span>
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Zero Double-Booking
            </span>
            <span className="meta-item">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Printable Daily Notice Sheets
            </span>
          </div>

          {/* Clean Horizontal Workflow Diagram */}
          <div className="workflow-diagram-wrap">
            <div className="diagram-header">
              <span className="diagram-title">Morning Operational Workflow</span>
              <span className="diagram-tag">Automated Engine</span>
            </div>

            <div className="workflow-steps-horizontal">
              
              <div className="workflow-step-node">
                <span className="node-number">01</span>
                <h3 className="node-title">Absence Reported</h3>
                <p className="node-desc">
                  Faculty leaves logged via quick selection. Scheduled teaching slots identified immediately.
                </p>
              </div>

              <div className="workflow-step-node">
                <span className="node-number">02</span>
                <h3 className="node-title">Faculty Availability</h3>
                <p className="node-desc">
                  Instant cross-grid scan of teacher timetables to identify who is genuinely free for each bell.
                </p>
              </div>

              <div className="workflow-step-node">
                <span className="node-number">03</span>
                <h3 className="node-title">Substitution Allocation</h3>
                <p className="node-desc">
                  Automated conflict-free candidate matching with built-in workload balance and coordinator review.
                </p>
              </div>

              <div className="workflow-step-node">
                <span className="node-number">04</span>
                <h3 className="node-title">Updated Schedule</h3>
                <p className="node-desc">
                  Confirmed substitution timetable ready before assembly, with printable physical sheets for staff.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------------------------
          INSTITUTIONAL PILOT: PAWAR PUBLIC SCHOOL, DOMBIVLI
          --------------------------------------------------------------------- */}
      <section className="pilot-section">
        <div className="container">
          <div className="pilot-card">
            
            <div className="pilot-logo-box">
              <img
                src="assets/PPS_Logo_dombivali.png"
                alt="Pawar Public School, Dombivli Logo"
                className="pilot-logo-img"
              />
              <span className="pilot-logo-meta">Pawar Public School</span>
              <span className="pilot-location">Dombivli, Maharashtra</span>
            </div>

            <div className="pilot-content">
              <span className="pilot-badge">INSTITUTIONAL PILOT</span>
              <h2 className="pilot-heading">Taking SWAP into real school administration.</h2>
              <p className="pilot-description">
                SWAP is being piloted in association with Pawar Public School, Dombivli, marking an important step towards bringing structured digital substitution management into everyday school administration.
              </p>
              <ul className="pilot-details-list">
                <li>Active evaluation in a live academic environment with 100+ teaching faculty.</li>
                <li>Validating multi-grid period structures, zero periods, and lab schedules.</li>
                <li>Refining morning coordinator workflows to minimize operational friction.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          TESTIMONIALS & RECOGNITION (Authentic, clearly marked placeholder)
          --------------------------------------------------------------------- */}
      <section className="section recognition-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Institutional Validation</div>
            <h2 className="section-title">Recognition &amp; Feedback</h2>
            <p className="section-subtitle">
              Documenting feedback and administrative outcomes from institutional implementation.
            </p>
          </div>

          <div className="placeholder-grid">
            
            <div className="placeholder-card">
              <span className="placeholder-tag">Document Pending</span>
              <h3 className="placeholder-title">Institutional Appreciation Letter</h3>
              <p className="placeholder-text">
                Official institutional review and appreciation documentation from school leadership will be published here upon completion of the initial evaluation cycle.
              </p>
              <div className="placeholder-note">
                [Documentation Placeholder: Official administrative letter pending publication]
              </div>
            </div>

            <div className="placeholder-card">
              <span className="placeholder-tag">Feedback Phase</span>
              <h3 className="placeholder-title">School Management Feedback</h3>
              <p className="placeholder-text">
                Direct feedback on coordinator time savings, workload balancing accuracy, and administrative stability from vice principals and academic supervisors.
              </p>
              <div className="placeholder-note">
                [Documentation Placeholder: Management feedback collected post-pilot audit]
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          FINAL CTA SECTION
          --------------------------------------------------------------------- */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Make teacher substitution management simpler.</h2>
            <p className="cta-subtext">
              See how SWAP can be configured for your school's specific timetable structure, period timings, and faculty roster.
            </p>
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
