import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function Product() {
  return (
    <div className="page-product">
      
      {/* Product Hero */}
      <section className="section product-hero">
        <div className="container">
          <div className="section-tag">System Capabilities</div>
          <h1 className="section-title">Core capabilities designed for school administration.</h1>
          <p className="section-subtitle">
            SWAP is built around the daily realities of school scheduling. It combines timetable ingestion, real-time availability calculation, and deterministic substitution matching into a single local workspace.
          </p>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="product-features-grid">

            {/* Feature 1 */}
            <div className="product-card">
              <span className="product-card-badge">Module 01</span>
              <h2 className="product-card-title">Teacher Substitution Management</h2>
              <p className="product-card-desc">
                Select absent teachers in seconds. The engine identifies every scheduled lecture affected, checks faculty schedules across all grades, and suggests conflict-free substitute teachers while preserving the coordinator's ability to manually override any assignment.
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Reduces morning substitution planning time from hours to under two minutes.</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="product-card">
              <span className="product-card-badge">Module 02</span>
              <h2 className="product-card-title">Faculty Timetable Management</h2>
              <p className="product-card-desc">
                Maintains a centralized, queryable repository of faculty master timetables. Accommodates multi-grid setups (such as ICSE and ISC grids), split periods, zero periods, library duties, and faculty meetings without data fragmentation.
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Eliminates paper timetable binders and conflicting departmental spreadsheets.</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="product-card">
              <span className="product-card-badge">Module 03</span>
              <h2 className="product-card-title">Class Timetable Management</h2>
              <p className="product-card-desc">
                Stores section-wise class timetables from Grade 1 through Grade 12 (e.g. 1A–1E to 12A–12E). Tracks room numbers, subjects, and teacher pairings to ensure class coverage continuity.
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Guarantees students never wait in an unattended classroom when a teacher is away.</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="product-card">
              <span className="product-card-badge">Module 04</span>
              <h2 className="product-card-title">Faculty Availability &amp; Free Periods</h2>
              <p className="product-card-desc">
                Instantly calculates which teachers are free during any given period of any weekday. Provides a dual viewing mode: inspect teacher-wise schedules with free period counts, or look up period-by-period free faculty rosters.
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Instant, conflict-free visibility prevents double-booking substitute teachers.</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="product-card">
              <span className="product-card-badge">Module 05</span>
              <h2 className="product-card-title">Substitution History &amp; Auditing</h2>
              <p className="product-card-desc">
                Chronologically archives every confirmed daily substitution run with exact dates, absent faculty names, and assigned substitute teachers. Readily searchable for term reviews and administrative compliance.
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Creates a permanent, transparent audit trail for workload disputes or management review.</span>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="product-card">
              <span className="product-card-badge">Module 06</span>
              <h2 className="product-card-title">Workload Balancing &amp; Visibility</h2>
              <p className="product-card-desc">
                Distributes substitution periods equitably across the faculty. Prioritizes available teachers with fewer assigned cover periods and enforces an automatic ceiling (maximum 2 substitutions per teacher per day).
              </p>
              <div className="product-benefit-box">
                <span className="benefit-label">Administrative Benefit</span>
                <span className="benefit-text">Protects faculty morale by avoiding unfair burden on the same cooperative teachers.</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Practical Benefits Row for School Leaders */}
      <section className="section admin-benefits-section">
        <div className="container">
          <div className="section-header text-left">
            <div className="section-tag">Leadership Perspective</div>
            <h2 className="section-title">Designed for Principals &amp; Vice Principals</h2>
            <p className="section-subtitle">
              How SWAP delivers operational clarity at every administrative level.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="benefit-card">
              <h3>For Principals</h3>
              <p>
                Complete institutional confidence that every class period is reliably covered every morning without disruptions, double-bookings, or unaccounted absences.
              </p>
            </div>

            <div className="benefit-card">
              <h3>For Vice Principals</h3>
              <p>
                Objective data on faculty workload distribution. Reliable audit trails for academic reviews, substitute allowance verifications, and teacher duty records.
              </p>
            </div>

            <div className="benefit-card">
              <h3>For Morning Coordinators</h3>
              <p>
                A peaceful morning routine. Instant identification of absent teachers' classes, automatic candidate suggestions, and one-click printable staffroom notices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta-section">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-heading">Ready to see SWAP with your school's data?</h2>
            <p className="cta-subtext">
              We configure a demonstration workspace using your actual period structure and faculty roster.
            </p>
            <Button href={DEMO_MAILTO_URL} variant="primary" size="lg">
              Request a Demonstration
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
