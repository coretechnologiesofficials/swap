import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

export default function Product() {
  return (
    <div className="page-product">
      
      {/* 1. PRODUCT HERO & THREE PILLARS */}
      <section className="section product-hero">
        <div className="container">
          <div className="section-tag">System Capabilities</div>
          <h1 className="section-title">Engineered for Everyday School Administration</h1>
          <p className="section-subtitle">
            Six interconnected modules designed to eliminate timetable collisions, protect faculty workload, and guarantee continuous classroom supervision from Grades 1 to 12.
          </p>

          {/* The 3 Core Pillars (PLAN • BALANCE • RECORD) */}
          <div className="pillars-grid" style={{ marginTop: '40px', marginBottom: '20px' }}>
            
            <div className="pillar-card">
              <span className="pillar-tag">Pillar 01</span>
              <h3 className="pillar-title">PLAN</h3>
              <p className="pillar-desc">
                Deterministic morning substitution engine eliminating timetable collisions and guesswork.
              </p>
              <ul className="pillar-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Conflict-free automated candidate suggestions
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Full manual coordinator override with 1 click
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Multi-grid coverage across Grades 1 to 12
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
                  Instant live free-period calculation
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
                  Permanent date-stamped substitution archive
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  Audit-ready logs for school leadership
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STRUCTURED PRODUCT MODULES (6 Core Modules) */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '32px' }}>
            <div className="section-tag">Core Modules</div>
            <h2 className="section-title">Comprehensive Administrative Toolkit</h2>
            <p className="section-subtitle">
              Each module is tailored to address specific operational bottlenecks in daily school scheduling.
            </p>
          </div>

          <div className="product-features-grid">

            {/* Module 01 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 01</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Teacher Substitution Management</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Identifies all scheduled lectures affected by reported teacher absences and presents eligible substitute candidates for every vacant period.
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Cross-references absent teachers with the day's master slots, isolates vacant classes, and checks all active teachers against scheduled duties, zero periods, and daily duty counts before suggesting conflict-free candidates.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Reduces morning coordination from hours of paper cross-checking to under two minutes.</span>
              </div>
            </div>

            {/* Module 02 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 02</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Faculty Timetable Management</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Maintains a centralized, searchable repository of all teacher master timetables across departments and grades.
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Parses term-start timetable documents into structured records accommodating multi-grid streams (ICSE, ISC, and secondary sections), zero periods, and faculty non-teaching duty blocks.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Eliminates lost binders, conflicting spreadsheets, and fragmented departmental schedules.</span>
              </div>
            </div>

            {/* Module 03 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 03</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Class Timetable Management</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Maps section-wise class timetables from Grade 1 through Grade 12 (including sections 1A to 12E).
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Stores room numbers, subjects, and assigned teachers for every period of the weekly bell schedule, enabling instant lookup by class section whenever student schedules need review.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Guarantees that no class section is left unattended due to untracked room or timetable shifts.</span>
              </div>
            </div>

            {/* Module 04 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 04</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Faculty Availability &amp; Free Periods</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Instantly calculates and displays which teachers are free during any given period of any day of the week.
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Offers dual viewing modes: an all-teacher matrix highlighting free periods and total free counts, and a period-by-period breakdown listing every candidate with zero scheduled teaching commitments.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Gives coordinators instant visibility of unassigned faculty without manual ledger cross-referencing.</span>
              </div>
            </div>

            {/* Module 05 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 05</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Workload Balancing &amp; Guardrails</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Distributes substitution duties equitably across available faculty while enforcing an automatic daily ceiling.
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Orders candidate suggestions by lowest cumulative substitution count today and filters out any teacher who has reached 2 daily duties, shielding cooperative faculty from repeated burden.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Protects teacher morale, prevents burnout, and ensures transparent duty distribution.</span>
              </div>
            </div>

            {/* Module 06 */}
            <div className="structured-module-card">
              <div>
                <div className="module-card-top">
                  <span className="module-badge">Module 06</span>
                  <div className="module-icon-box">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline><path d="M18 18H6"></path></svg>
                  </div>
                </div>
                <h3 className="structured-module-title">Substitution Records &amp; Auditing</h3>
                
                <div className="module-desc-section">
                  <span className="module-label">What It Does</span>
                  <p className="module-body-text">
                    Chronologically archives every confirmed daily substitution run for institutional record-keeping and audit compliance.
                  </p>
                </div>

                <div className="module-desc-section">
                  <span className="module-label">How It Operates</span>
                  <p className="module-body-text">
                    Locks confirmed substitution rosters with exact dates, absent teachers, assigned substitutes, and class periods in a permanent local database searchable by date range.
                  </p>
                </div>
              </div>

              <div className="module-benefit-callout">
                <span className="module-label">Administrative Benefit</span>
                <span className="module-benefit-text">Provides verifiable duty records for academic reviews, substitute allowances, and parent inquiries.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STAKEHOLDER-BASED BENEFITS (4 Categories) */}
      <section className="section section-alt" id="stakeholders">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Institutional Impact</div>
            <h2 className="section-title">Designed for Every School Stakeholder</h2>
            <p className="section-subtitle">
              How S.W.A.P. provides operational control, transparent records, and fairness across leadership and faculty.
            </p>
          </div>

          <div className="stakeholders-grid">
            
            {/* Stakeholder 1: Principals */}
            <div className="stakeholder-card">
              <span className="stakeholder-role-tag">Leadership</span>
              <h3 className="stakeholder-title">For Principals</h3>
              <ul className="stakeholder-focus-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Institutional Continuity:</strong> Confidence that every period is reliably covered every morning.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Administrative Oversight:</strong> Complete operational visibility into daily faculty absences and coverage.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Audit-Ready Records:</strong> Permanent date-stamped logs for board reports and compliance checks.</span>
                </li>
              </ul>
              <div className="stakeholder-mechanism-note">
                <strong>Mechanism:</strong> Immutable local database logs prevent unrecorded substitutions or dispute ambiguities.
              </div>
            </div>

            {/* Stakeholder 2: Vice Principals */}
            <div className="stakeholder-card">
              <span className="stakeholder-role-tag">Academic Administration</span>
              <h3 className="stakeholder-title">For Vice Principals</h3>
              <ul className="stakeholder-focus-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Workload Monitoring:</strong> Objective data on cumulative substitution distribution across departments.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Multi-Grid Coordination:</strong> Synchronizes ICSE, ISC, and primary schedules without cross-stream friction.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Conflict Prevention:</strong> Strict algorithmic validation catches overlapping non-teaching assignments.</span>
                </li>
              </ul>
              <div className="stakeholder-mechanism-note">
                <strong>Mechanism:</strong> Unified query engine evaluates teacher commitments across all stream timetables simultaneously.
              </div>
            </div>

            {/* Stakeholder 3: Timetable Coordinators */}
            <div className="stakeholder-card">
              <span className="stakeholder-role-tag">Daily Operations</span>
              <h3 className="stakeholder-title">For Coordinators</h3>
              <ul className="stakeholder-focus-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Instant Availability:</strong> Zero manual ledger searching during the stressful 7:30 AM morning rush.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>1-Click Override:</strong> Discretion to confirm candidate suggestion or reassign with a single click.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Formatted Notices:</strong> One-click printable noticeboard slips ready before morning assembly.</span>
                </li>
              </ul>
              <div className="stakeholder-mechanism-note">
                <strong>Mechanism:</strong> Automated candidate sorting presents the best free candidate while leaving ultimate authority with the coordinator.
              </div>
            </div>

            {/* Stakeholder 4: Teaching Faculty */}
            <div className="stakeholder-card">
              <span className="stakeholder-role-tag">Teaching Staff</span>
              <h3 className="stakeholder-title">For Teachers</h3>
              <ul className="stakeholder-focus-list">
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Burnout Protection:</strong> Strict ceiling of maximum 2 substitution duties per day.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Transparent Distribution:</strong> Eliminates perception of favoritism or repeated assignment burden.</span>
                </li>
                <li>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Advance Notice:</strong> Substitution duties clearly communicated via noticeboard slips before the bell.</span>
                </li>
              </ul>
              <div className="stakeholder-mechanism-note">
                <strong>Mechanism:</strong> Automated greedy load balancing prioritizes faculty who have served zero duties today before assigning a second duty.
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINAL CTA SECTION */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">See S.W.A.P. configured with your school's timetable.</h2>
            <p className="cta-subtext">
              We will configure an institutional test workspace using your school's actual bell timings, room numbers, and faculty lists.
            </p>
            <Link to="/contact#demo-form" className="btn btn-primary btn-lg">
              Request an Institutional Demo
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
