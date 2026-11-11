import React from 'react'
import { Link } from 'react-router-dom'

export default function HowItWorks() {
  return (
    <div className="page-how-it-works">
      
      {/* 1. HEADER SECTION */}
      <section className="section" style={{ paddingBottom: '20px' }}>
        <div className="container text-center">
          <span className="section-tag">Daily Routine</span>
          <h1 className="section-title">The Four-Step Workflow</h1>
          <p className="section-subtitle">
            Designed to turn stressful morning substitution coordination into a calm, reliable two-minute task.
          </p>
        </div>
      </section>

      {/* 2. ROUTINE DISTINCTION */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '20px' }}>
        <div className="container-narrow">
          <div className="routine-contrast-row">
            <div className="routine-contrast-box">
              <div className="routine-tag">Term-Start Setup</div>
              <h3 className="routine-title">Initial Configuration</h3>
              <p className="routine-text">
                Master class timetables, teacher schedules, room allocations, and bell timings are ingested once per academic term.
              </p>
            </div>

            <div className="routine-contrast-box daily">
              <div className="routine-tag">Daily Operation</div>
              <h3 className="routine-title">Morning Routine (&lt; 2 Mins)</h3>
              <p className="routine-text">
                Log absences as notifications arrive, verify candidate suggestions, apply manual overrides if desired, and print staffroom notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE 4 STAGES */}
      <section className="section" style={{ paddingTop: '10px' }}>
        <div className="container">
          
          <div className="workflow-timeline">
            
            {/* Stage 01 */}
            <div className="timeline-stage-item">
              <div className="timeline-marker">01</div>
              <div className="timeline-content">
                <div className="stage-label-row">
                  <span className="stage-number">STAGE 01</span>
                  <span className="stage-timing">Once per academic term</span>
                </div>
                <h3 className="stage-title">Data Setup</h3>
                <p className="stage-description">
                  Configure institutional timetables and faculty information. Class schedules across Grades 1 through 12 and teacher assignments are stored in the local on-premise database.
                </p>
              </div>
            </div>

            {/* Stage 02 */}
            <div className="timeline-stage-item">
              <div className="timeline-marker">02</div>
              <div className="timeline-content">
                <div className="stage-label-row">
                  <span className="stage-number">STAGE 02</span>
                  <span className="stage-timing">Daily morning (~30 seconds)</span>
                </div>
                <h3 className="stage-title">Absence Reporting</h3>
                <p className="stage-description">
                  Record faculty absences for the day from a searchable faculty list. The system isolates affected lectures and pinpoints every vacant class period.
                </p>
              </div>
            </div>

            {/* Stage 03 */}
            <div className="timeline-stage-item">
              <div className="timeline-marker">03</div>
              <div className="timeline-content">
                <div className="stage-label-row">
                  <span className="stage-number">STAGE 03</span>
                  <span className="stage-timing">Calculated in &lt; 50ms</span>
                </div>
                <h3 className="stage-title">Allocation</h3>
                <p className="stage-description">
                  Identify eligible substitutes using real-time timetable availability and workload constraints. Candidates are sorted equitably while enforcing the 2-duty daily ceiling.
                </p>
              </div>
            </div>

            {/* Stage 04 */}
            <div className="timeline-stage-item">
              <div className="timeline-marker">04</div>
              <div className="timeline-content">
                <div className="stage-label-row">
                  <span className="stage-number">STAGE 04</span>
                  <span className="stage-timing">Before morning assembly</span>
                </div>
                <h3 className="stage-title">Final Roster</h3>
                <p className="stage-description">
                  Review allocation suggestions with full manual override authority. Confirm assignments, export formatted noticeboard slips, and lock the day into the permanent audit archive.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="section section-alt text-center">
        <div className="container-narrow">
          <h2 className="section-title">Experience the 4-step workflow.</h2>
          <p className="section-subtitle" style={{ marginBottom: '28px' }}>
            Contact our team to request a personalized demonstration of S.W.A.P. configured for your institution.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
