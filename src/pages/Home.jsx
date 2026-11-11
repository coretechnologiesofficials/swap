import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      q: "Does S.W.A.P. require an internet connection?",
      a: "No. Routine daily operations (logging absences, checking availability, assigning substitutes, and printing rosters) execute locally on the school administrative computer. Morning planning is never stalled by network outages."
    },
    {
      q: "Where is institutional and timetable data stored?",
      a: "All data is stored in a private SQLite database file located directly on the school local administrative drive. The institution retains full custody and backup control over all faculty records."
    },
    {
      q: "Can coordinators manually override automated suggestions?",
      a: "Yes. S.W.A.P. provides default suggestions to accelerate the morning routine, but the coordinator retains full discretion. A single dropdown click allows selecting any other faculty member who is free during that period."
    },
    {
      q: "How does S.W.A.P. enforce the daily substitution limit?",
      a: "The allocation engine tracks daily substitutions confirmed. Once a teacher reaches 2 substitution duties in a day, the engine filters them out of default suggestions to protect staff morale and prevent burnout."
    },
    {
      q: "Does S.W.A.P. support multi-grid school timetable structures?",
      a: "Yes. S.W.A.P. accommodates complex multi-grid schedules (such as ICSE and ISC grids, split periods, zero periods, and laboratory blocks) mapped directly to your school bell schedule."
    },
    {
      q: "What technical support is provided?",
      a: "CORE Technologies provides onboarding assistance, master timetable ingestion, coordinator training, and direct telephone/WhatsApp support during school operating hours (Monday to Saturday, 8:00 AM - 6:00 PM IST)."
    }
  ]

  return (
    <div className="page-home">
      
      {/* 1. HERO SECTION (Minimal, Typography-Driven, Mobile-First) */}
      <section className="section home-hero">
        <div className="container">
          
          {/* Hero Brand Badge: Logo + Name + One-Liner (Hover UX) */}
          <div className="hero-brand-badge">
            <img src="assets/logo.png" alt="S.W.A.P Logo" className="hero-brand-logo" width="34" height="34" />
            <div className="hero-brand-text">
              <span className="hero-brand-title">S.W.A.P</span>
              <span className="hero-brand-tagline">Teacher substitutions, without the administrative chaos.</span>
            </div>
          </div>

          <h1 className="hero-headline">
            Teacher substitutions.<br />Simplified.
          </h1>

          <p className="hero-description">
            Manage faculty availability, teacher substitutions and workload distribution through one organised system.
          </p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-primary btn-lg">
              Request a Demo
            </Link>
            <Link to="/product" className="btn btn-secondary btn-lg">
              Explore Features
            </Link>
          </div>

          {/* 3 Compact Capability Indicators */}
          <div className="hero-indicators-row">
            <span className="hero-indicator-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Timetable-aware allocation
            </span>
            <span className="hero-indicator-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Workload tracking
            </span>
            <span className="hero-indicator-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
              Conflict validation
            </span>
          </div>

        </div>
      </section>

      {/* 2. INSTITUTIONAL DEPLOYMENT (Pawar Public School) */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Institutional Deployment</span>
            <h2 className="section-title">Trusted in Everyday School Operations</h2>
            <p className="section-subtitle">
              S.W.A.P. is actively deployed at Pawar Public School, Dombivli, supporting faculty coordination across Grades 1 through 12.
            </p>
          </div>

          <div className="case-study-box">
            <div className="case-study-header">
              <img src="assets/PPS_Logo_dombivali.png" alt="Pawar Public School, Dombivli Logo" className="case-study-logo" />
              <div className="case-study-title-col">
                <span className="case-study-badge">Active Institutional Deployment</span>
                <h3 className="case-study-school-title">Pawar Public School, Dombivli</h3>
                <p className="case-study-school-meta">CISCE Affiliated (ICSE / ISC) &bull; Maharashtra &bull; 100+ Teaching Faculty &bull; Grades 1 to 12</p>
              </div>
            </div>

            <div className="case-study-grid">
              <div className="case-study-col">
                <div className="case-study-col-label">The Challenge</div>
                <p className="case-study-col-text">
                  Coordinating morning coverage across 100+ teaching staff and multi-grid timetables without schedule collisions or burdening the same cooperative teachers.
                </p>
              </div>

              <div className="case-study-col">
                <div className="case-study-col-label">The Implementation</div>
                <p className="case-study-col-text">
                  An on-premise administrative desktop deployment that evaluates real-time faculty availability and enforces an automated 2-duty daily ceiling.
                </p>
              </div>

              <div className="case-study-col">
                <div className="case-study-col-label">The Outcome</div>
                <p className="case-study-col-text">
                  Double-booking eliminated, workload transparently distributed, and verified staffroom substitution notices ready before morning assembly.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROBLEM VS SOLUTION */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Administrative Comparison</span>
            <h2 className="section-title">Administrative Control vs Manual Coordination</h2>
            <p className="section-subtitle">
              A clear comparison between traditional paper cross-referencing and structured digital substitution management.
            </p>
          </div>

          <div className="comparison-grid">
            
            <div className="comparison-col without-swap">
              <div className="comparison-header">
                <span className="comparison-badge">Without S.W.A.P.</span>
                <h3 className="comparison-title">Manual Administrative Friction</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg className="icon-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <div>
                    <span className="comparison-item-title">Manual Timetable Cross-Checking</span>
                    <span className="comparison-item-desc">Coordinators search through paper binders and spreadsheets during the morning rush.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <div>
                    <span className="comparison-item-title">Risk of Schedule Collisions</span>
                    <span className="comparison-item-desc">High risk of accidentally assigning teachers with lab, zero period, or library commitments.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <div>
                    <span className="comparison-item-title">Unequal Duty Distribution</span>
                    <span className="comparison-item-desc">Without workload tracking, the same available teachers are repeatedly assigned substitutions.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-cross" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <div>
                    <span className="comparison-item-title">Hurried Staffroom Communication</span>
                    <span className="comparison-item-desc">Handwritten slips lead to missed classes, delayed periods, and unattended classrooms.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="comparison-col with-swap">
              <div className="comparison-header">
                <span className="comparison-badge">With S.W.A.P.</span>
                <h3 className="comparison-title">Structured Management</h3>
              </div>
              <ul className="comparison-list">
                <li className="comparison-item">
                  <svg className="icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Instant Timetable-Aware Availability</span>
                    <span className="comparison-item-desc">Queries master schedules in milliseconds to identify every genuinely free teacher.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Automated Conflict Validation</span>
                    <span className="comparison-item-desc">Strict deterministic checks guarantee zero double-booking across multi-grid setups.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Enforced Workload Guardrails</span>
                    <span className="comparison-item-desc">Automatically enforces a maximum 2-duty daily ceiling, sorting candidates equitably.</span>
                  </div>
                </li>
                <li className="comparison-item">
                  <svg className="icon-check" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <div>
                    <span className="comparison-item-title">Printable Staffroom Rosters</span>
                    <span className="comparison-item-desc">Generates formatted physical substitution slips for the staffroom noticeboard in one click.</span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="section section-alt">
        <div className="container-narrow">
          <div className="section-header text-center">
            <span className="section-tag">Institutional Questions</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Essential information regarding S.W.A.P. architecture, daily routine, and administrative policies.
            </p>
          </div>

          <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaq === idx ? 'open' : ''}`}>
                <button
                  className="faq-trigger"
                  aria-expanded={openFaq === idx}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <svg className="faq-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </button>
                <div className="faq-content">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="section text-center">
        <div className="container-narrow">
          <h2 className="section-title">Ready to simplify substitution management?</h2>
          <p className="section-subtitle" style={{ marginBottom: '28px' }}>
            Contact our team to discuss S.W.A.P. implementation or schedule a demonstration tailored to your school timetable structure.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
