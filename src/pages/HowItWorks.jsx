import React from 'react'
import { Link } from 'react-router-dom'

export default function HowItWorks() {
  return (
    <div className="page-how-it-works">
      
      {/* 1. HERO SECTION */}
      <section className="section how-it-works-hero">
        <div className="container">
          <div className="section-tag">Four-Step Process</div>
          <h1 className="section-title">How S.W.A.P. Operates in Daily Administration</h1>
          <p className="section-subtitle">
            A predictable, sequential workflow designed to turn stressful morning substitution coordination into a calm, reliable two-minute task.
          </p>
        </div>
      </section>

      {/* 2. INITIAL SETUP VS DAILY ROUTINE DISTINCTION */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            
            <div style={{ background: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '10px', padding: '24px' }}>
              <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: '#1e40af', background: '#dbeafe', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                ONCE PER ACADEMIC TERM
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>Initial Setup &amp; Configuration</h3>
              <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.5, margin: 0 }}>
                Import master class timetables (Grades 1 to 12), faculty lists, room numbers, and bell schedules into the private local database. Takes approximately 20 minutes with our support team, establishing the baseline for the entire term.
              </p>
            </div>

            <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px', padding: '24px' }}>
              <div style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 700, color: '#166534', background: '#dcfce7', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
                DAILY MORNING ROUTINE
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#14532d', marginBottom: '8px' }}>Daily Absence Allocation (&lt; 2 Mins)</h3>
              <p style={{ fontSize: '0.88rem', color: '#166534', lineHeight: 1.5, margin: 0 }}>
                Every morning as leave calls arrive, the coordinator selects absent teachers. The engine evaluates availability in milliseconds, presents conflict-free candidate suggestions, and exports printable staffroom slips before assembly.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. FOUR-STAGE FLOWCHART SECTION */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          
          <div className="flowchart-container">
            
            {/* Node 01: Setup & Import */}
            <div className="flowchart-node">
              <div className="flowchart-node-header">
                <span className="flowchart-stage-tag">STAGE 01: DATA INGESTION</span>
                <span className="flowchart-timing-tag">Term-Start Setup (Once per term)</span>
              </div>
              <h3 className="flowchart-node-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-blue)' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                Master Timetable Ingestion &amp; Mapping
              </h3>
              <p className="flowchart-node-desc">
                Import faculty master schedules and section grids (Grades 1 through 12, sections 1A to 12E). S.W.A.P. parses and maps subject lectures, zero periods, library hours, laboratory slots, and teacher pairings into the school's private local database.
              </p>
            </div>

            {/* Flow Connector 1 -> 2 */}
            <div className="flowchart-connector">
              <div className="flowchart-line"></div>
              <svg className="flowchart-arrow-head" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              <span className="flowchart-connector-label">School Baseline Stored Locally</span>
            </div>

            {/* Node 02: Morning Absence Trigger */}
            <div className="flowchart-node">
              <div className="flowchart-node-header">
                <span className="flowchart-stage-tag" style={{ color: '#b45309', background: '#fef3c7', borderColor: '#fde68a' }}>STAGE 02: MORNING TRIGGER</span>
                <span className="flowchart-timing-tag">Daily Morning (~30 Seconds)</span>
              </div>
              <h3 className="flowchart-node-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#b45309' }}><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg>
                Log Reported Faculty Absences
              </h3>
              <p className="flowchart-node-desc">
                As morning leave calls or messages arrive, the timetable coordinator selects absent teachers from a searchable faculty dropdown. The system instantly queries the database and isolates every vacant lecture and class section for the day.
              </p>
            </div>

            {/* Flow Connector 2 -> 3 */}
            <div className="flowchart-connector">
              <div className="flowchart-line"></div>
              <svg className="flowchart-arrow-head" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              <span className="flowchart-connector-label">Vacant Periods Identified</span>
            </div>

            {/* Node 03: Decision & Conflict Engine */}
            <div className="flowchart-node" style={{ border: '2px solid #93c5fd', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)' }}>
              <div className="flowchart-node-header">
                <span className="flowchart-stage-tag" style={{ color: '#1d4ed8', background: '#dbeafe', borderColor: '#bfdbfe' }}>STAGE 03: CONFLICT CHECK ENGINE</span>
                <span className="flowchart-timing-tag">Evaluated in &lt; 50ms</span>
              </div>
              <h3 className="flowchart-node-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#1d4ed8' }}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Deterministic Substitution &amp; Workload Matching
              </h3>
              <p className="flowchart-node-desc">
                The allocation engine scans master schedules to pair vacant slots with genuinely free teachers while enforcing institutional fairness policies.
              </p>

              <div className="flowchart-rules-box">
                <div className="flowchart-rule-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Real-Time Availability:</strong> Verifies teacher is 100% free with zero conflicting duties during that bell.</span>
                </div>
                <div className="flowchart-rule-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Workload Guardrail:</strong> Automatically filters out any faculty member who has reached the max 2 duties/day limit.</span>
                </div>
                <div className="flowchart-rule-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Special Slot Protection:</strong> Respects laboratory sessions, zero periods, and departmental conference blocks.</span>
                </div>
                <div className="flowchart-rule-item">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span><strong>Manual Override:</strong> Coordinator retains full authority to confirm suggested candidate or swap with one click.</span>
                </div>
              </div>
            </div>

            {/* Flow Connector 3 -> 4 */}
            <div className="flowchart-connector">
              <div className="flowchart-line"></div>
              <svg className="flowchart-arrow-head" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"></polyline></svg>
              <span className="flowchart-connector-label">Schedule Confirmed by Coordinator</span>
            </div>

            {/* Node 04: Noticeboard & Live Logging */}
            <div className="flowchart-node">
              <div className="flowchart-node-header">
                <span className="flowchart-stage-tag" style={{ color: '#047857', background: '#d1fae5', borderColor: '#a7f3d0' }}>STAGE 04: NOTICEBOARD &amp; AUDIT</span>
                <span className="flowchart-timing-tag">Ready Before Morning Assembly</span>
              </div>
              <h3 className="flowchart-node-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#047857' }}><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print Staffroom Slips &amp; Archive Records
              </h3>
              <p className="flowchart-node-desc">
                Instantly exports clean, formatted physical substitution slips for the staffroom noticeboard. Teacher availability matrices immediately update with substitution duty marked in red, and the day's record is locked in the historical archive.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. REAL-WORLD COMPLEXITY SCENARIOS GRID */}
      <section className="section section-alt" id="scenarios">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Edge-Case Reliability</div>
            <h2 className="section-title">Built for Real-World Scheduling Complexity</h2>
            <p className="section-subtitle">
              School administration is full of unpredictable situations. Here is how S.W.A.P. deterministically handles complex edge scenarios.
            </p>
          </div>

          <div className="scenarios-grid">
            
            {/* Scenario 1 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 01</span>
                <span className="scenario-badge">Sequential Allocation</span>
              </div>
              <h3 className="scenario-title">Multiple Teachers Absent Simultaneously</h3>
              <p className="scenario-text">
                The engine orders all vacant periods chronologically. When a substitute candidate is assigned to period 2 for teacher A, that candidate is instantly marked busy for period 2 and cannot be double-booked for teacher B.
              </p>
            </div>

            {/* Scenario 2 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 02</span>
                <span className="scenario-badge" style={{ color: '#b91c1c', background: '#fee2e2' }}>Explicit Alert</span>
              </div>
              <h3 className="scenario-title">Zero Free Substitutes Available</h3>
              <p className="scenario-text">
                When all faculty are teaching or absent during a specific bell, S.W.A.P. never assigns an impossible candidate. It explicitly marks status as "Unassigned" and highlights the period in red, alerting the coordinator immediately.
              </p>
            </div>

            {/* Scenario 3 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 03</span>
                <span className="scenario-badge">Policy Guardrail</span>
              </div>
              <h3 className="scenario-title">Daily Duty Limit (Max 2) Reached</h3>
              <p className="scenario-text">
                Teachers who have already accepted 2 substitution periods in the day are automatically filtered out of default suggestions. They remain visible in manual override if an administrative emergency requires an exception.
              </p>
            </div>

            {/* Scenario 4 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 04</span>
                <span className="scenario-badge">Coordinator Discretion</span>
              </div>
              <h3 className="scenario-title">Subject-Specialist Requirements</h3>
              <p className="scenario-text">
                While the default suggestion selects the candidate with the lowest duty count, the coordinator dropdown lists every genuinely free teacher for that period, allowing instant selection of a matching subject teacher.
              </p>
            </div>

            {/* Scenario 5 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 05</span>
                <span className="scenario-badge">Granular Slots</span>
              </div>
              <h3 className="scenario-title">Partial-Day Availability &amp; Split Grids</h3>
              <p className="scenario-text">
                Faculty availability is tracked on a period-by-period basis rather than crude half-day approximations. Teachers arriving late or leaving early are only evaluated for periods they are scheduled on campus.
              </p>
            </div>

            {/* Scenario 6 */}
            <div className="scenario-card">
              <div className="scenario-top">
                <span className="scenario-num">Scenario 06</span>
                <span className="scenario-badge">Room Collision Check</span>
              </div>
              <h3 className="scenario-title">Concurrent Vacancies in the Same Bell</h3>
              <p className="scenario-text">
                If three teachers are absent during period 3, S.W.A.P. identifies three distinct, non-overlapping free faculty members, ensuring each room receives a dedicated supervising teacher.
              </p>
            </div>

            {/* Scenario 7 */}
            <div className="scenario-card" style={{ gridColumn: '1 / -1' }}>
              <div className="scenario-top">
                <span className="scenario-num">Scenario 07</span>
                <span className="scenario-badge">Executive Authority</span>
              </div>
              <h3 className="scenario-title">Manual Coordinator Intervention &amp; Override</h3>
              <p className="scenario-text">
                S.W.A.P. operates on the philosophy that software should support human judgment, not supplant it. The academic coordinator can alter any suggestion, add special notes to the printed roster, and confirm the final schedule with total discretion.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. TECHNICAL ARCHITECTURE SECTION */}
      <section className="section" id="architecture">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">System Architecture</div>
            <h2 className="section-title">Designed for Institutional Data Control</h2>
            <p className="section-subtitle">
              How data flows through S.W.A.P.'s private on-premise application environment.
            </p>
          </div>

          <div className="architecture-container">
            <div className="arch-flow-grid">
              <div className="arch-flow-box">
                <div className="arch-flow-step">Input Layer</div>
                <div className="arch-flow-name">Master Schedules</div>
                <div className="arch-flow-tech">Structured PDF / JSON ingestion maps section timetables, room numbers, and teacher pairings.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Storage Layer</div>
                <div className="arch-flow-name">SQLite Local DB</div>
                <div className="arch-flow-tech">Stores active timetables, faculty rosters, and historical substitution logs directly on the local drive.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Processing Layer</div>
                <div className="arch-flow-name">FastAPI Core Engine</div>
                <div className="arch-flow-tech">Executes deterministic conflict checking, availability filtering, and workload balancing in milliseconds.</div>
              </div>

              <div className="arch-flow-box">
                <div className="arch-flow-step">Presentation Layer</div>
                <div className="arch-flow-name">Desktop Interface</div>
                <div className="arch-flow-tech">Interactive React client with real-time review table and formatted printing for staffroom boards.</div>
              </div>
            </div>

            <div className="arch-pillars-grid">
              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--brand-blue)' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                  Local On-Premise Storage
                </div>
                <p className="arch-pillar-desc">Student section timetables and teacher contact details remain on the school's local administrative drive.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#10b981' }}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                  Offline Morning Resilience
                </div>
                <p className="arch-pillar-desc">Routine daily substitution operations operate smoothly without internet connectivity, ensuring zero morning delays.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#6366f1' }}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Controlled Network Sharing
                </div>
                <p className="arch-pillar-desc">Can be deployed on a single coordinator PC or accessed across the school administrative intranet.</p>
              </div>

              <div className="arch-pillar-item">
                <div className="arch-pillar-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#f59e0b' }}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  Full Institutional Custody
                </div>
                <p className="arch-pillar-desc">School leadership holds complete custody of historical logs with convenient local database backup capabilities.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA SECTION */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Experience the 4-stage allocation workflow.</h2>
            <p className="cta-subtext">
              Contact our team to schedule an institutional demonstration configured with your school's actual period structure and faculty roster.
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
