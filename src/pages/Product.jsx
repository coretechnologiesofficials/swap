import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div className="page-product">
      
      {/* 1. PRODUCT HEADER & THREE PILLARS */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <span className="section-tag">System Capabilities</span>
          <h1 className="section-title">Built around daily administrative realities.</h1>
          <p className="section-subtitle">
            S.W.A.P. organizes substitution coordination into three structured pillars: planning schedules, balancing duties, and recording historical records.
          </p>

          {/* The 3 Core Pillars */}
          <div className="pillars-summary-grid">
            
            <div className="pillar-item">
              <div className="pillar-name">PILLAR 01</div>
              <h3 className="pillar-heading">PLAN</h3>
              <p className="pillar-desc">
                Timetable and faculty information management. Ensures schedule baseline accuracy across all grades and streams.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-name">PILLAR 02</div>
              <h3 className="pillar-heading">BALANCE</h3>
              <p className="pillar-desc">
                Faculty availability and substitution workload management. Evaluates free periods and enforces daily duty limits.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-name">PILLAR 03</div>
              <h3 className="pillar-heading">RECORD</h3>
              <p className="pillar-desc">
                Substitution history and administrative reporting. Generates physical staffroom rosters and permanent audit trails.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SIX CORE CAPABILITIES */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Core Capabilities</span>
            <h2 className="section-title">Six Integrated Modules</h2>
            <p className="section-subtitle">
              Every capability directly addresses an everyday operational constraint in school timetable coordination.
            </p>
          </div>

          <div className="features-clean-grid">
            
            <div className="feature-clean-card">
              <div className="feature-num-tag">01 &bull; SUBSTITUTION</div>
              <h3 className="feature-title">Teacher Substitution Management</h3>
              <p className="feature-text">
                Identifies eligible faculty members for substitution assignments when absences occur, checking timetable constraints and offering instant one-click coordinator override.
              </p>
            </div>

            <div className="feature-clean-card">
              <div className="feature-num-tag">02 &bull; FACULTY TIMETABLES</div>
              <h3 className="feature-title">Faculty Timetable Repository</h3>
              <p className="feature-text">
                Maintains a centralized queryable database of master teacher schedules across departments, accommodating split grids, zero periods, and faculty meetings.
              </p>
            </div>

            <div className="feature-clean-card">
              <div className="feature-num-tag">03 &bull; CLASS TIMETABLES</div>
              <h3 className="feature-title">Class Timetables (Grades 1 to 12)</h3>
              <p className="feature-text">
                Stores section-wise class schedules, room allocations, and teacher pairings, ensuring continuous classroom supervision without unassigned periods.
              </p>
            </div>

            <div className="feature-clean-card">
              <div className="feature-num-tag">04 &bull; AVAILABILITY</div>
              <h3 className="feature-title">Faculty Availability &amp; Free Periods</h3>
              <p className="feature-text">
                Instantly calculates which teachers are free during any given bell, providing both a comprehensive period-by-period matrix and individual teacher schedules.
              </p>
            </div>

            <div className="feature-clean-card">
              <div className="feature-num-tag">05 &bull; WORKLOAD</div>
              <h3 className="feature-title">Workload Balancing &amp; Guardrails</h3>
              <p className="feature-text">
                Distributes substitution assignments equitably across free faculty, enforcing an automatic ceiling of maximum two substitutions per teacher per day.
              </p>
            </div>

            <div className="feature-clean-card">
              <div className="feature-num-tag">06 &bull; RECORDS</div>
              <h3 className="feature-title">Substitution Records &amp; Auditing</h3>
              <p className="feature-text">
                Chronologically archives confirmed daily substitution runs for term reviews, substitute allowance verification, and administrative compliance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. STAKEHOLDER PERSPECTIVES */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-tag">Institutional Value</span>
            <h2 className="section-title">Designed for School Leadership &amp; Faculty</h2>
            <p className="section-subtitle">
              Providing administrative control, operational visibility, and fairness across institutional roles.
            </p>
          </div>

          <div className="stakeholders-clean-grid">
            
            <div className="stakeholder-box">
              <div className="stakeholder-role">Leadership</div>
              <h3 className="stakeholder-heading">Principals</h3>
              <p className="stakeholder-desc">
                Institutional continuity, comprehensive operational oversight, and permanent date-stamped records for board reporting.
              </p>
            </div>

            <div className="stakeholder-box">
              <div className="stakeholder-role">Administration</div>
              <h3 className="stakeholder-heading">Vice Principals</h3>
              <p className="stakeholder-desc">
                Objective faculty workload monitoring, multi-grid schedule synchronization, and early identification of scheduling bottlenecks.
              </p>
            </div>

            <div className="stakeholder-box">
              <div className="stakeholder-role">Operations</div>
              <h3 className="stakeholder-heading">Coordinators</h3>
              <p className="stakeholder-desc">
                Rapid availability lookups, elimination of manual ledger searches, full manual override authority, and printable notices.
              </p>
            </div>

            <div className="stakeholder-box">
              <div className="stakeholder-role">Faculty</div>
              <h3 className="stakeholder-heading">Teachers</h3>
              <p className="stakeholder-desc">
                Protection against burnout through enforced 2-duty daily ceilings, transparent distribution, and timely staffroom notification.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FINAL CTA */}
      <section className="section text-center">
        <div className="container-narrow">
          <h2 className="section-title">See S.W.A.P. with your school's schedule.</h2>
          <p className="section-subtitle" style={{ marginBottom: '28px' }}>
            We configure a demonstration workspace using your actual period structure and faculty roster.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Request a Demo
          </Link>
        </div>
      </section>

    </div>
  )
}
