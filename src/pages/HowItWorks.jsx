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

      {/* Primary Visual Process Flow */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          
          <div className="workflow-steps-vertical">
            
            {/* Step 1 */}
            <div className="step-row-card">
              <div className="step-indicator">01</div>
              <div className="step-main-content">
                <h2 className="step-heading">STEP 01 — Upload Timetables</h2>
                <p className="step-desc">
                  Import your faculty master schedule and student class-wise timetable files into SWAP. The system parses all periods, class sections, teacher pairings, and room assignments, establishing the school's private timetable baseline.
                </p>
              </div>
              <div className="step-badge-col">
                <span className="step-frequency">Term Setup</span>
                <span className="step-timing">Uploaded once at term start</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-row-card">
              <div className="step-indicator">02</div>
              <div className="step-main-content">
                <h2 className="step-heading">STEP 02 — Mark Absences</h2>
                <p className="step-desc">
                  When leave notifications arrive in the morning, the administrative coordinator selects the absent teachers from a searchable faculty dropdown. The system instantly isolates every lecture and classroom affected for the day.
                </p>
              </div>
              <div className="step-badge-col">
                <span className="step-frequency">Daily Morning</span>
                <span className="step-timing">Takes ~30 seconds</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-row-card">
              <div className="step-indicator">03</div>
              <div className="step-main-content">
                <h2 className="step-heading">STEP 03 — Generate Substitutions</h2>
                <p className="step-desc">
                  Click Generate to run the deterministic conflict check. SWAP evaluates every teacher free at each period, balances the workload (max 2 cover periods per teacher per day), and presents suggested substitutes with full manual override control.
                </p>
              </div>
              <div className="step-badge-col">
                <span className="step-frequency">Deterministic Check</span>
                <span className="step-timing">Calculated in milliseconds</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="step-row-card">
              <div className="step-indicator">04</div>
              <div className="step-main-content">
                <h2 className="step-heading">STEP 04 — Monitor Availability</h2>
                <p className="step-desc">
                  Confirm the schedule to save it permanently into the historical log. Instantly export a clean printable daily substitution sheet for the staffroom noticeboard, while real-time availability views update with assigned duties marked in red.
                </p>
              </div>
              <div className="step-badge-col">
                <span className="step-frequency">Ready Before Assembly</span>
                <span className="step-timing">Printable noticeboard sheets</span>
              </div>
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
