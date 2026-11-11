import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const captions = {
    dashboard: 'Morning Substitution Dashboard: Faculty selection, period assignment, and conflict-validated candidate matching.',
    availability: 'Real-Time Availability Matrix: Period-by-period free faculty grid with daily duty limits.',
    timetables: 'Multi-Grid Class Schedules: Master timetable mapping from Grade 1 through Grade 12.',
    engine: 'Algorithmic Decision Inspector: Conceptual preview of sequential conflict verification.'
  }

  return (
    <div className="page-home">
      
      {/* 1. HERO SECTION */}
      <section className="section home-hero">
        <div className="container">
          
          <div className="hero-badge-wrap">
            <span className="hero-badge">
              <span className="badge-dot"></span>
              TEACHER SUBSTITUTION &amp; WORKLOAD MANAGEMENT SYSTEM
            </span>
          </div>

          <h1 className="hero-headline">
            Teacher substitutions, <span className="hero-gradient-text">without the administrative chaos.</span>
          </h1>

          <p className="hero-description">
            S.W.A.P. streamlines teacher substitution management through timetable-aware availability checks, workload tracking and conflict-validated allocation suggestions.
          </p>

          <div className="hero-buttons">
            <Link to="/contact#demo-form" className="btn btn-primary btn-lg">
              Request a Demo
            </Link>
            <Link to="/product" className="btn btn-secondary btn-lg">
              Explore Features
            </Link>
          </div>

          {/* Capability Statistics Row (Verified Context) */}
          <div className="hero-meta-row">
            <span className="meta-item" title="Evaluated in live deployment across faculty schedules">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              100+ Teaching Faculty Capacity
            </span>
            <span className="meta-item" title="Structured multi-grid timetables from primary to senior secondary">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Grades 1 to 12 Coverage
            </span>
            <span className="meta-item" title="Automated policy ceiling preventing teacher burnout">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Max 2 Duties Daily Limit
            </span>
            <span className="meta-item" title="One-click formatted physical slips ready for the staffroom board">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Printable Morning Rosters
            </span>
          </div>

          {/* Genuine Desktop Application Interface Showcase Frame */}
          <div className="app-showcase-frame">
            <div className="showcase-window-header">
              <div className="showcase-controls">
                <span className="control-dot dot-red"></span>
                <span className="control-dot dot-yellow"></span>
                <span className="control-dot dot-green"></span>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#475569', marginLeft: '8px' }}>
                  S.W.A.P. v1.0 &bull; Desktop Application
                </span>
              </div>

              {/* Tab Switchers */}
              <div className="showcase-tab-bar" role="tablist" aria-label="Application Screens">
                <button
                  className={`showcase-tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
                  onClick={() => setActiveTab('dashboard')}
                  role="tab"
                  aria-selected={activeTab === 'dashboard'}
                >
                  Substitution Dashboard
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === 'availability' ? 'active' : ''}`}
                  onClick={() => setActiveTab('availability')}
                  role="tab"
                  aria-selected={activeTab === 'availability'}
                >
                  Faculty Availability
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === 'timetables' ? 'active' : ''}`}
                  onClick={() => setActiveTab('timetables')}
                  role="tab"
                  aria-selected={activeTab === 'timetables'}
                >
                  Class Timetables
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === 'engine' ? 'active' : ''}`}
                  onClick={() => setActiveTab('engine')}
                  role="tab"
                  aria-selected={activeTab === 'engine'}
                >
                  Allocation Engine Preview
                </button>
              </div>

              <div className="showcase-live-status">
                <span className="pulse-dot"></span>
                Local Database Connected
              </div>
            </div>

            <div className="showcase-screen-container">
              {/* Screen 1: Dashboard */}
              <div className={`showcase-screen-panel ${activeTab === 'dashboard' ? 'active' : ''}`}>
                <img
                  src="assets/screenshots/dashboard.png"
                  alt="S.W.A.P. Desktop Application Dashboard - Substitution Review and Candidate Selection"
                  className="showcase-img"
                  loading="eager"
                />
              </div>

              {/* Screen 2: Availability */}
              <div className={`showcase-screen-panel ${activeTab === 'availability' ? 'active' : ''}`}>
                <img
                  src="assets/screenshots/availability.png"
                  alt="S.W.A.P. Real-Time Faculty Availability Matrix"
                  className="showcase-img"
                  loading="lazy"
                />
              </div>

              {/* Screen 3: Timetables */}
              <div className={`showcase-screen-panel ${activeTab === 'timetables' ? 'active' : ''}`}>
                <img
                  src="assets/screenshots/timetables.png"
                  alt="S.W.A.P. Multi-Grid Class Timetables from Grade 1 to 12"
                  className="showcase-img"
                  loading="lazy"
                />
              </div>

              {/* Screen 4: Algorithmic Preview */}
              <div className={`showcase-screen-panel ${activeTab === 'engine' ? 'active' : ''}`}>
                <div style={{ padding: '24px', background: '#0f172a', color: '#f8fafc' }}>
                  <div className="engine-preview-window" style={{ border: '1px solid #334155', background: '#1e293b' }}>
                    <div className="engine-preview-body" style={{ background: '#1e293b', color: '#f8fafc' }}>
                      <div className="engine-slot-bar" style={{ background: '#0f172a', borderColor: '#334155' }}>
                        <div className="slot-badge">PERIOD 04 &bull; 10:45 AM - 11:30 AM</div>
                        <div className="slot-class-info" style={{ color: '#94a3b8' }}>Grade 9A &bull; Mathematics &bull; Room 204</div>
                      </div>
                      <div className="engine-matching-grid">
                        <div className="engine-column absence-col" style={{ background: 'rgba(239, 68, 68, 0.1)', borderColor: '#ef4444' }}>
                          <div className="col-status-tag tag-alert">LEAVE REPORTED</div>
                          <div className="teacher-profile">
                            <div className="teacher-avatar avatar-absent">AS</div>
                            <div className="teacher-meta">
                              <div className="teacher-name" style={{ color: '#ffffff' }}>Mrs. A. Sharma</div>
                              <div className="teacher-dept" style={{ color: '#cbd5e1' }}>Mathematics Faculty</div>
                            </div>
                          </div>
                          <div className="slot-notice" style={{ color: '#fca5a5' }}>Class 9A vacant &bull; Substitution required</div>
                        </div>

                        <div className="engine-match-indicator">
                          <div className="match-icon-wrap">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline></svg>
                          </div>
                          <span className="match-scan-text" style={{ color: '#94a3b8' }}>0 Collisions</span>
                        </div>

                        <div className="engine-column match-col" style={{ background: 'rgba(37, 99, 235, 0.1)', borderColor: '#3b82f6' }}>
                          <div className="col-status-tag tag-match">100% FREE CANDIDATE</div>
                          <div className="teacher-profile">
                            <div className="teacher-avatar avatar-available">RV</div>
                            <div className="teacher-meta">
                              <div className="teacher-name" style={{ color: '#ffffff' }}>Mr. R. Verma</div>
                              <div className="teacher-dept" style={{ color: '#cbd5e1' }}>Free Period 4 &bull; Senior Faculty</div>
                            </div>
                          </div>
                          <div className="workload-guardrail-tag" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            Duty 1 of 2 (Workload Policy Compliant)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-caption-bar">
              <span className="showcase-caption-badge">Verified Application Interface</span>
              <span className="showcase-caption-text">
                {captions[activeTab]}
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. PROBLEM VS SOLUTION COMPARISON SECTION */}
      <section className="comparison-section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Operational Comparison</div>
            <h2 className="section-title">The Administrative Reality: Before and After S.W.A.P.</h2>
            <p className="section-subtitle">
              Evaluating the shift from stressful morning paper coordination to structured, conflict-validated allocation.
            </p>
          </div>

          <div className="comparison-grid">
            
            {/* Without SWAP */}
            <div className="comparison-col without-swap">
              <div className="comparison-header">
                <span className="comparison-badge">Without S.W.A.P.</span>
                <h3 className="comparison-title">Manual Administrative Chaos</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg className="comparison-icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <div>
                    <span className="comparison-item-title">Manual Timetable Cross-Checking</span>
                    <span className="comparison-item-desc">Coordinators search through thick paper binders and fragmented departmental spreadsheets during the frantic 7:30 AM morning rush.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <div>
                    <span className="comparison-item-title">Frequent Double-Booking &amp; Conflicts</span>
                    <span className="comparison-item-desc">High risk of assigning teachers who already have scheduled laboratory sessions, zero periods, library hours, or school meetings.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <div>
                    <span className="comparison-item-title">Unbalanced Faculty Burden</span>
                    <span className="comparison-item-desc">No systematic tracking of cumulative duties; the same cooperative teachers are repeatedly assigned substitutions, causing faculty resentment.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-cross" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                  <div>
                    <span className="comparison-item-title">Delayed Staffroom Communication</span>
                    <span className="comparison-item-desc">Handwritten notices or rushed WhatsApp messages lead to missed periods, unattended classrooms, and disciplinary issues.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* With SWAP */}
            <div className="comparison-col with-swap">
              <div className="comparison-header">
                <span className="comparison-badge">With S.W.A.P.</span>
                <h3 className="comparison-title">Deterministic Control &amp; Clarity</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg className="comparison-icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Instant Timetable-Aware Availability</span>
                    <span className="comparison-item-desc">The engine maps all affected periods in milliseconds and presents every faculty member who is genuinely free during that specific bell.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Automated Conflict Validation</span>
                    <span className="comparison-item-desc">Strict deterministic checks guarantee zero double-booking across multi-grid structures (ICSE, ISC, and secondary sections).</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Strict Workload Guardrails</span>
                    <span className="comparison-item-desc">Enforces an automatic ceiling of maximum 2 substitutions per teacher per day, sorting eligible substitutes by least duties completed.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="comparison-icon-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">1-Click Printable Staffroom Slips</span>
                    <span className="comparison-item-desc">Generates clean, standardized physical substitution slips ready for the staffroom noticeboard well before the morning bell.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. INSTITUTIONAL CREDIBILITY CASE STUDY (Pawar Public School) */}
      <section className="section clients-section" id="case-study">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Institutional Trust</div>
            <h2 className="section-title">Trusted in Real School Operations</h2>
            <p className="section-subtitle">
              An active institutional deployment and operational evaluation at Pawar Public School, Dombivli.
            </p>
          </div>

          <div className="case-study-card">
            <div className="case-study-top">
              <img src="assets/PPS_Logo_dombivali.png" alt="Pawar Public School, Dombivli Official Logo" className="case-study-logo" />
              <div className="case-study-meta-col">
                <span className="case-study-status-badge">
                  <span className="pulse-dot"></span>
                  ACTIVE INSTITUTIONAL DEPLOYMENT
                </span>
                <h3 className="case-study-school-title">Pawar Public School, Dombivli</h3>
                <span className="case-study-school-sub">Affiliated to CISCE (ICSE / ISC) &bull; Maharashtra, India &bull; 100+ Teaching Faculty &bull; Grades 1 to 12</span>
              </div>
            </div>

            <div className="case-study-narrative-grid">
              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 01</div>
                <h4 className="case-study-step-heading">The Scheduling Challenge</h4>
                <p className="case-study-step-text">
                  With over 100 teaching staff across primary, secondary, and ISC streams, sudden faculty absences created significant morning coordination friction. Handling split grids and zero periods required extensive schedule verification.
                </p>
              </div>

              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 02</div>
                <h4 className="case-study-step-heading">The Pre-SWAP Routine</h4>
                <p className="case-study-step-text">
                  Substitution planning relied on physical binders and cross-checking spreadsheets between 7:30 AM and 8:00 AM. This manual workflow frequently risked double-booking free periods and burdened a small subset of cooperative teachers.
                </p>
              </div>

              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 03</div>
                <h4 className="case-study-step-heading">On-Premise Implementation</h4>
                <p className="case-study-step-text">
                  S.W.A.P. was deployed as an on-premise administrative desktop system operating entirely within the school's local administrative network, ensuring zero external exposure of institutional timetables and faculty records.
                </p>
              </div>

              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 04</div>
                <h4 className="case-study-step-heading">The Morning Workflow</h4>
                <p className="case-study-step-text">
                  As leave requests arrive, the academic coordinator selects absent faculty names. The software maps affected lectures, checks period-by-period availability, and presents balanced candidate suggestions with full manual override.
                </p>
              </div>

              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 05</div>
                <h4 className="case-study-step-heading">Workload Guardrail Policy</h4>
                <p className="case-study-step-text">
                  The school enforces a maximum ceiling of 2 substitution duties per teacher per day. S.W.A.P. automatically prioritizes free faculty with the lowest cumulative substitution assignments, preventing faculty burnout.
                </p>
              </div>

              <div className="case-study-step-block">
                <div className="case-study-step-num">Context 06</div>
                <h4 className="case-study-step-heading">Operational Outcomes</h4>
                <p className="case-study-step-text">
                  Eliminated timetable collisions, double-booking, and staffroom uncertainty. Clean, formatted physical substitution rosters are printed and pinned to the noticeboard before assembly begins.
                </p>
              </div>
            </div>

            {/* Performance Claim Substantiation Box */}
            <div className="substantiation-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
              <p className="substantiation-text">
                <strong>Performance Clarification:</strong> The claim <em>"Under 2 Minutes Morning Resolution"</em> refers specifically to the automated generation of conflict-free candidate suggestions and coordinator review for reported absences, replacing 30 to 45 minutes of manual timetable cross-checking. Initial master timetable ingestion occurs once per academic term.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SECURITY, PRIVACY & LOCAL ARCHITECTURE */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Data Ownership</div>
            <h2 className="section-title">Designed for Institutional Data Control</h2>
            <p className="section-subtitle">
              A private desktop architecture engineered to keep student schedules and faculty records strictly on-premise.
            </p>
          </div>

          <div className="architecture-container">
            <div className="arch-flow-grid">
              <div className="arch-flow-box">
                <div className="arch-flow-step">Stage 1</div>
                <div className="arch-flow-name">Master Schedules</div>
                <div className="arch-flow-tech">PDF / JSON Ingestion of school class and teacher grids.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Stage 2</div>
                <div className="arch-flow-name">Local Core Engine</div>
                <div className="arch-flow-tech">FastAPI &amp; SQLite database on local administrative machine.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Stage 3</div>
                <div className="arch-flow-name">Desktop Interface</div>
                <div className="arch-flow-tech">Interactive React client running in local desktop environment.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Stage 4</div>
                <div className="arch-flow-name">Physical &amp; Digital Output</div>
                <div className="arch-flow-tech">Printable noticeboard slips and audit-locked local logs.</div>
              </div>
            </div>

            <div className="arch-pillars-grid">
              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-blue)' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Local SQLite Database
                </div>
                <p className="arch-pillar-desc">All timetable grids, room numbers, and teacher data remain stored locally on disk. No mandatory cloud database sync.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#10b981' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                  Routine Offline Capability
                </div>
                <p className="arch-pillar-desc">Daily morning substitution coordination operates seamlessly without an active internet connection. Morning planning is never stalled by network outages.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#6366f1' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Intranet Network Access
                </div>
                <p className="arch-pillar-desc">Can be deployed on a single coordinator PC or shared securely across the school's local administrative intranet network.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#f59e0b' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Complete Data Ownership
                </div>
                <p className="arch-pillar-desc">The institution maintains total custody of its academic records. Backups can be archived to external physical media anytime.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. ACCESSIBLE ACCORDION FAQ */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Institutional Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Clear, verified answers regarding S.W.A.P. architecture, daily routine, and administrative policies.
            </p>
          </div>

          <div className="faq-accordion" role="region" aria-label="FAQ Accordion">
            {[
              {
                q: "Does S.W.A.P. require an active internet connection?",
                a: "No. Routine daily operations (logging absences, evaluating availability, reviewing suggestions, and printing morning rosters) execute 100% locally on the school's administrative computer or local intranet. Morning substitution planning will never be interrupted by broadband downtime."
              },
              {
                q: "Where is institutional and timetable data stored?",
                a: "All data is stored in a private SQLite database file located directly on the school's local administrative drive. The institution retains full ownership, physical custody, and backup control over all faculty schedules and historical records."
              },
              {
                q: "Can coordinators manually override automated suggestions?",
                a: "Yes, completely. S.W.A.P. provides default suggestions to accelerate the morning routine, but the coordinator retains ultimate administrative discretion. A single dropdown click allows the coordinator to select any other faculty member who is free during that period."
              },
              {
                q: "How does S.W.A.P. enforce the daily substitution duty limit?",
                a: "The allocation engine automatically tracks substitution assignments confirmed throughout the day. Once a teacher is assigned 2 substitution periods in a day, the engine filters them out of default candidate suggestions, ensuring equitable workload distribution across faculty."
              },
              {
                q: "Does S.W.A.P. support different school timetable structures?",
                a: "Yes. S.W.A.P. supports multi-grid arrangements commonly found in Indian educational institutions (e.g. ICSE and ISC grids, split periods, zero periods, and laboratory blocks). Timetable configurations are mapped directly to your school's bell timings during setup."
              },
              {
                q: "Can multiple teachers be marked absent simultaneously?",
                a: "Yes. The coordinator can select any number of absent teachers from a searchable multi-select list. The engine aggregates all vacant lectures across all grades for the day, processes them sequentially by period, and ensures no substitute candidate is double-booked."
              },
              {
                q: "What happens when no eligible substitute teacher is available?",
                a: 'If all free teachers have already reached their 2-duty ceiling or no faculty member is free during that bell, the engine flags the slot as "Unassigned" and highlights it clearly in red. The coordinator can then decide whether to merge sections, assign an administrative duty, or manually override the policy ceiling.'
              },
              {
                q: "Can substitution records be exported and audited?",
                a: "Yes. In addition to printing daily staffroom noticeboard slips, S.W.A.P. automatically maintains a permanent historical log searchable by date. Principals and vice principals can review cumulative monthly duty counts to verify fair workload distribution or process substitute allowances."
              },
              {
                q: "How does initial school onboarding and timetable setup work?",
                a: "At the start of the academic term, your master class timetables and teacher schedules are imported via our ingestion parser. Our technical support team assists during setup to verify room allocations, section grids, and bell timings before the system goes live."
              },
              {
                q: "What technical support is provided by CORE Technologies?",
                a: "CORE Technologies provides full onboarding support, initial timetable data ingestion, administrative training for coordinators, and direct technical telephone/WhatsApp support during school operating hours (Monday to Saturday, 8:00 AM to 6:00 PM IST)."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  aria-expanded={openFaq === idx}
                  onClick={() => toggleFaq(idx)}
                >
                  <span className="faq-question-text">{faq.q}</span>
                  <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Ready to bring structure to morning substitution planning?</h2>
            <p className="cta-subtext">
              Schedule an institutional demonstration. We will configure a test workspace with your school's actual timetable structure and walk your leadership team through live absence scenarios.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
              <Link to="/contact#demo-form" className="btn btn-primary btn-lg">
                Request an Institutional Demo
              </Link>
              <Link to="/product" className="btn btn-secondary btn-lg" style={{ background: 'rgba(255, 255, 255, 0.15)', color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)' }}>
                Explore Product Features
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
