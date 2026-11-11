import React from 'react'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function HowItWorks() {
  return (
    <div className="page-how-it-works">
      
      {/* Hero */}
      <section className="section how-it-works-hero">
        <div className="container">
          <div className="section-tag">Four-Step Process</div>
          <h1 className="section-title">How SWAP operates in a school's daily routine.</h1>
          <p className="section-subtitle">
            A straightforward, sequential workflow designed to turn stressful morning substitution coordination into a calm, reliable two-minute task.
          </p>
        </div>
      </section>

      {/* Flowchart Section */}
      <section className="section" style={{ paddingTop: 0 }}>
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
                Upload &amp; Ingest Master Timetables
              </h3>
              <p className="flowchart-node-desc">
                Import faculty master schedules and section grids (Grades 1 through 12, sections 1A to 12E). SWAP parses and maps subject lectures, zero periods, library hours, laboratory slots, and teacher pairings into the school's private local database.
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
                Log Reported Teacher Absences
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
                <span className="flowchart-timing-tag">Calculated in &lt; 50ms</span>
              </div>
              <h3 className="flowchart-node-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: '#1d4ed8' }}><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                Deterministic Substitution &amp; Workload Matching
              </h3>
              <p className="flowchart-node-desc">
                The allocation engine scans master schedules to pair vacant slots with genuinely free teachers while enforcing institutional fairness policies.
              </p>

              {/* Flowchart Inner Decision Rules Grid */}
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

      {/* Operational Principles */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header">
            <div className="section-tag">Design Principles</div>
            <h2 className="section-title">Built for administrative peace of mind.</h2>
            <p className="section-subtitle">
              Every step is designed to eliminate human error while leaving ultimate discretion in the hands of the academic coordinator.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="benefit-card">
              <h3>Zero Double-Booking</h3>
              <p>
                Once a teacher is assigned a substitution or is scheduled for their regular class, the engine locks their availability for that period across all grids.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Coordinator Discretion</h3>
              <p>
                The software suggests the best available substitute, but the coordinator can reassign any lecture with a single dropdown click if subject continuity is preferred.
              </p>
            </div>

            <div className="benefit-card">
              <h3>Local Offline Resilience</h3>
              <p>
                Designed to run locally within school administrative computers, ensuring morning substitution planning is never stalled by internet outages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Experience the four-step workflow.</h2>
            <p className="cta-subtext">
              Contact our team to request a personalized demonstration of SWAP configured for your institution.
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
