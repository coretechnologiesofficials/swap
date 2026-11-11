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
              ONE TEACHER ABSENT. HOW MANY DECISIONS?
            </span>
          </div>

          <h1 className="hero-headline">
            Teacher substitutions, without the administrative chaos.
          </h1>

          <p className="hero-description">
            A smarter way to manage teacher absences, allocate substitute periods and monitor faculty availability. Managing substitutions shouldn't disrupt the school day.
          </p>

          <div className="hero-buttons">
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Request a Product Demonstration
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
              Fair Limit: Max 2 Duties / Day
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
              Printable Morning Rosters
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
          THE PROBLEM: THE DECISION CHAIN
          --------------------------------------------------------------------- */}
      <section className="section decision-chain-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Operational Reality</div>
            <h2 className="section-title">Every absence creates a chain of decisions.</h2>
            <p className="section-subtitle">
              Coordinators handle this every morning under intense time pressure. Each step depends on the one before it.
            </p>
          </div>

          <div className="decision-grid">
            
            <div className="decision-card">
              <span className="decision-num">STEP 01</span>
              <h3 className="decision-title">Checking Multiple Timetables</h3>
              <p className="decision-desc">
                Cross-referencing teacher timetables against class section schedules across Grades 1 through 12.
              </p>
            </div>

            <div className="decision-card">
              <span className="decision-num">STEP 02</span>
              <h3 className="decision-title">Finding Genuinely Available Teachers</h3>
              <p className="decision-desc">
                Filtering who is actually free during that specific bell without conflicting zero periods or lab duties.
              </p>
            </div>

            <div className="decision-card">
              <span className="decision-num">STEP 03</span>
              <h3 className="decision-title">Avoiding Double-Bookings</h3>
              <p className="decision-desc">
                Ensuring no faculty member is assigned to two classrooms or conflicting duties simultaneously.
              </p>
            </div>

            <div className="decision-card">
              <span className="decision-num">STEP 04</span>
              <h3 className="decision-title">Distributing Duties Fairly</h3>
              <p className="decision-desc">
                Preventing teacher fatigue by enforcing balanced substitution loads across all department members.
              </p>
            </div>

            <div className="decision-card">
              <span className="decision-num">STEP 05</span>
              <h3 className="decision-title">Managing Last-Minute Changes</h3>
              <p className="decision-desc">
                Rapidly re-allocating classes when unexpected leave notices arrive minutes before the school bell.
              </p>
            </div>

            <div className="decision-card">
              <span className="decision-num">STEP 06</span>
              <h3 className="decision-title">Maintaining Substitution Records</h3>
              <p className="decision-desc">
                Keeping an auditable chronological record of daily assignments for leadership and administrative reviews.
              </p>
            </div>

          </div>

          {/* High-Impact Insight Callout */}
          <div className="insight-callout-box">
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
              <span className="pilot-badge">INSTITUTIONAL PILOT • 100+ TEACHERS</span>
              <h2 className="pilot-heading">Designed for real school operations.</h2>
              <p className="pilot-description">
                SWAP is being piloted in association with Pawar Public School, Dombivli, marking an important step towards bringing structured digital substitution management into everyday school administration.
              </p>
              <ul className="pilot-details-list">
                <li>Active evaluation in a live academic environment with 100+ teaching faculty.</li>
                <li>Comprehensive timetable support across Primary, Secondary, and Higher Secondary divisions.</li>
                <li>Eliminating morning coordinator bottlenecks before the morning assembly.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          PILOT RESULTS & OPERATIONAL HIGHLIGHTS (Launch Ready)
          --------------------------------------------------------------------- */}
      <section className="section pilot-results-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Institutional Validation</div>
            <h2 className="section-title">Verified Operational Capabilities</h2>
            <p className="section-subtitle">
              Engineered and tested against the daily operational demands of high-capacity school administration.
            </p>
          </div>

          <div className="metrics-grid">
            
            <div className="metric-card">
              <div className="metric-val">100+</div>
              <div className="metric-label">Teaching Faculty Handled</div>
              <p className="metric-desc">
                Seamlessly tracks and balances daily substitution assignments across primary, secondary, and higher secondary educators.
              </p>
            </div>

            <div className="metric-card">
              <div className="metric-val">Grades 1–12</div>
              <div className="metric-label">Full Timetable Coverage</div>
              <p className="metric-desc">
                Handles section structures from 1A to 12E, zero periods, library blocks, lab sessions, and combined subject periods.
              </p>
            </div>

            <div className="metric-card">
              <div className="metric-val">Max 2 Duties</div>
              <div className="metric-label">Daily Faculty Guardrail</div>
              <p className="metric-desc">
                Built-in policy engine strictly caps substitution duty at 2 periods per teacher per day, protecting staff morale and fairness.
              </p>
            </div>

            <div className="metric-card">
              <div className="metric-val">&lt; 2 Minutes</div>
              <div className="metric-label">Morning Resolution Time</div>
              <p className="metric-desc">
                Substitutions are computed in seconds, producing clean, printable noticeboard slips ready before morning assembly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------------
          CAMPUS ARCHITECTURE: LOCAL, INDEPENDENT, PRACTICAL
          --------------------------------------------------------------------- */}
      <section className="section architecture-section">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Campus Architecture</div>
            <h2 className="section-title">Local. Independent. Practical.</h2>
            <p className="section-subtitle">
              A dedicated desktop and campus intranet installation. No continuous internet needed for routine planning.
            </p>
          </div>

          {/* Architecture Flow Diagram */}
          <div className="arch-flow-wrap">
            <div className="arch-flow">
              
              <div className="arch-step-node">
                <div className="arch-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="arch-node-name">School Staff</div>
                <div className="arch-node-sub">Principals &amp; Coordinators</div>
              </div>

              <div className="arch-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="arch-step-node">
                <div className="arch-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="arch-node-name">SWAP Desktop App</div>
                <div className="arch-node-sub">Administrative Interface</div>
              </div>

              <div className="arch-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="arch-step-node">
                <div className="arch-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div className="arch-node-name">Local Engine Backend</div>
                <div className="arch-node-sub">Conflict &amp; Allocation Core</div>
              </div>

              <div className="arch-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>

              <div className="arch-step-node">
                <div className="arch-node-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                  </svg>
                </div>
                <div className="arch-node-name">Campus Local Database</div>
                <div className="arch-node-sub">Private Timetable Store</div>
              </div>

            </div>
          </div>

          <div className="arch-benefits-grid">
            
            <div className="arch-benefit-card">
              <h3>Zero Cloud Dependency</h3>
              <p>
                Daily substitution planning never halts if campus broadband or cloud connectivity goes down. The local core runs reliably every morning.
              </p>
            </div>

            <div className="arch-benefit-card">
              <h3>Complete Data Sovereignty</h3>
              <p>
                Master timetables, teacher rosters, leave patterns, and substitution logs remain strictly on campus hardware under school administrative control.
              </p>
            </div>

            <div className="arch-benefit-card">
              <h3>Microsecond Query Performance</h3>
              <p>
                Checking cross-timetable teacher availability and slot conflicts takes less than 50 milliseconds across hundreds of class combinations.
              </p>
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
