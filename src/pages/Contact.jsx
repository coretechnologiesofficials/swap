import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    designation: '',
    officialEmail: '',
    phone: '',
    facultyCount: '50 to 100 Faculty',
    currentSystem: 'Manual Paper Binders & Noticeboards',
    notes: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [mailtoUrl, setMailtoUrl] = useState('mailto:coretechnologiesofficial@gmail.com')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    if (!formData.schoolName.trim()) newErrors.schoolName = true
    if (!formData.contactPerson.trim()) newErrors.contactPerson = true
    if (!formData.designation.trim()) newErrors.designation = true
    if (!formData.officialEmail.trim()) newErrors.officialEmail = true
    if (!formData.phone.trim()) newErrors.phone = true

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    const emailSubject = encodeURIComponent(`SWAP Demo Request - ${formData.schoolName}`)
    const emailBody = encodeURIComponent(
      `Hello CORE Technologies Team,

` +
      `We would like to request an institutional demonstration of S.W.A.P.

` +
      `School Name: ${formData.schoolName}
` +
      `Contact Person: ${formData.contactPerson}
` +
      `Designation: ${formData.designation}
` +
      `Official Email: ${formData.officialEmail}
` +
      `Phone Number: ${formData.phone}
` +
      `Approximate Faculty Size: ${formData.facultyCount}
` +
      `Current Timetable System: ${formData.currentSystem}
` +
      `Notes / Requirements: ${formData.notes}

` +
      `Thank you.`
    )
    const generatedMailto = `mailto:coretechnologiesofficial@gmail.com?subject=${emailSubject}&body=${emailBody}`
    setMailtoUrl(generatedMailto)

    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 600)
  }

  return (
    <div className="page-contact">
      
      {/* 1. CONTACT HERO */}
      <section className="section contact-hero">
        <div className="container">
          <div className="section-tag">Direct Institutional Communication</div>
          <h1 className="section-title">Schedule a Demonstration or Speak with Our Team</h1>
          <p className="section-subtitle">
            Connect directly with CORE Technologies to explore S.W.A.P. implementation, evaluate multi-grid timetable coverage, or request a customized demonstration for your school leadership.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CHANNELS GRID */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '40px' }}>
        <div className="container">
          
          <div className="contact-channels-grid">
            
            {/* Email Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">Official Institutional Email</span>
                <a href="mailto:coretechnologiesofficial@gmail.com" className="channel-main-val">
                  coretechnologiesofficial@gmail.com
                </a>
                <p className="channel-sub-desc">
                  Direct inbox for school inquiries, proposal requests, and technical specifications. Monitored daily.
                </p>
              </div>
              <a href="mailto:coretechnologiesofficial@gmail.com" className="btn btn-outline btn-sm">
                Compose Email
              </a>
            </div>

            {/* Telephone Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">Direct Telephone Desk</span>
                <a href="tel:+919082777586" className="channel-main-val">
                  +91 9082777586
                </a>
                <p className="channel-sub-desc">
                  Speak directly with our team regarding institutional requirements and timetable consultations.
                </p>
              </div>
              <a href="tel:+919082777586" className="btn btn-outline btn-sm">
                Call Direct
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap" style={{ color: '#16a34a' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.09 7.09 8.87 7.33C8.65 7.57 8.02 8.16 8.02 9.36C8.02 10.56 8.9 11.72 9.02 11.89C9.15 12.05 10.76 14.53 13.22 15.6C15.27 16.48 15.69 16.31 16.13 16.27C16.57 16.23 17.56 15.69 17.76 15.11C17.96 14.53 17.96 14.04 17.9 13.94C17.84 13.84 17.68 13.78 17.44 13.66C17.2 13.54 16.02 12.96 15.8 12.88C15.58 12.8 15.42 12.76 15.25 13C15.09 13.24 14.62 13.78 14.48 13.94C14.34 14.11 14.2 14.13 13.96 14.01C13.72 13.89 12.95 13.64 12.03 12.82C11.31 12.18 10.83 11.39 10.69 11.15C10.55 10.91 10.67 10.78 10.8 10.66C10.91 10.55 11.05 10.37 11.17 10.23C11.29 10.09 11.33 9.99 11.41 9.83C11.49 9.67 11.45 9.53 11.39 9.41C11.33 9.29 10.87 8.16 10.67 7.69C10.49 7.23 10.3 7.29 10.15 7.28C10.02 7.28 9.86 7.27 9.7 7.27C9.53 7.27 9.53 7.03 9.53 7.03Z"/>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">WhatsApp Communication</span>
                <a href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school." target="_blank" rel="noopener noreferrer" class="channel-main-val">
                  +91 9082777586
                </a>
                <p className="channel-sub-desc">
                  Instant messaging desk for administrative coordinators, quick scheduling questions, and appointment scheduling.
                </p>
              </div>
              <a href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school." target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 3. STRUCTURED INSTITUTIONAL DEMO REQUEST FORM */}
      <section className="section section-alt" id="demo-form">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Institutional Onboarding</div>
            <h2 className="section-title">Request an Institutional Demonstration</h2>
            <p className="section-subtitle">
              Provide key details regarding your school structure. We configure a personalized test workspace using your period bell schedule and faculty roster.
            </p>
          </div>

          <div className="demo-form-card">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="demo-form-grid">
                  
                  {/* 1. School Name */}
                  <div className={`form-group ${errors.schoolName ? 'has-error' : ''}`}>
                    <label htmlFor="schoolName" className="demo-label">
                      School / Institution Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="schoolName"
                      name="schoolName"
                      value={formData.schoolName}
                      onChange={handleChange}
                      className="demo-input"
                      placeholder="e.g. Pawar Public School"
                      required
                    />
                    <span className="demo-error-msg">Please enter the name of your institution.</span>
                  </div>

                  {/* 2. Contact Person */}
                  <div className={`form-group ${errors.contactPerson ? 'has-error' : ''}`}>
                    <label htmlFor="contactPerson" className="demo-label">
                      Contact Person &amp; Title <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className="demo-input"
                      placeholder="e.g. Dr. Ramesh K. (Principal)"
                      required
                    />
                    <span className="demo-error-msg">Please provide a contact person name.</span>
                  </div>

                  {/* 3. Designation */}
                  <div className={`form-group ${errors.designation ? 'has-error' : ''}`}>
                    <label htmlFor="designation" className="demo-label">
                      Designation / Role <span className="req">*</span>
                    </label>
                    <select
                      id="designation"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className="demo-select"
                      required
                    >
                      <option value="">Select your designation...</option>
                      <option value="Principal">School Principal</option>
                      <option value="Vice Principal">Vice Principal</option>
                      <option value="Academic Coordinator">Academic Coordinator</option>
                      <option value="Timetable Coordinator">Timetable Coordinator</option>
                      <option value="School Administrator">School Administrator</option>
                      <option value="IT Director / System Admin">IT Director / System Administrator</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="demo-error-msg">Please select your administrative designation.</span>
                  </div>

                  {/* 4. Official Email */}
                  <div className={`form-group ${errors.officialEmail ? 'has-error' : ''}`}>
                    <label htmlFor="officialEmail" className="demo-label">
                      Official Email Address <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="officialEmail"
                      name="officialEmail"
                      value={formData.officialEmail}
                      onChange={handleChange}
                      className="demo-input"
                      placeholder="e.g. principal@school.edu.in"
                      required
                    />
                    <span className="demo-error-msg">Please provide a valid institutional email.</span>
                  </div>

                  {/* 5. Phone Number */}
                  <div className={`form-group ${errors.phone ? 'has-error' : ''}`}>
                    <label htmlFor="phone" className="demo-label">
                      Telephone / Mobile Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="demo-input"
                      placeholder="e.g. +91 98765 43210"
                      required
                    />
                    <span className="demo-error-msg">Please provide a direct telephone or mobile number.</span>
                  </div>

                  {/* 6. Faculty Size */}
                  <div className="form-group">
                    <label htmlFor="facultyCount" className="demo-label">
                      Approximate Teaching Faculty Count
                    </label>
                    <select
                      id="facultyCount"
                      name="facultyCount"
                      value={formData.facultyCount}
                      onChange={handleChange}
                      className="demo-select"
                    >
                      <option value="Under 50 Faculty">Under 50 Teaching Staff</option>
                      <option value="50 to 100 Faculty">50 to 100 Teaching Staff</option>
                      <option value="100 to 200 Faculty">100 to 200 Teaching Staff</option>
                      <option value="200+ Faculty">200+ Teaching Staff</option>
                    </select>
                  </div>

                  {/* 7. Current System */}
                  <div className="form-group form-full-width">
                    <label htmlFor="currentSystem" className="demo-label">
                      Current Substitution &amp; Timetable Method
                    </label>
                    <select
                      id="currentSystem"
                      name="currentSystem"
                      value={formData.currentSystem}
                      onChange={handleChange}
                      className="demo-select"
                    >
                      <option value="Manual Paper Binders & Noticeboards">Manual Paper Binders &amp; Staffroom Noticeboards</option>
                      <option value="Excel / Google Spreadsheets">Spreadsheets (Excel / Google Sheets)</option>
                      <option value="WhatsApp Groups">WhatsApp / Messaging Groups</option>
                      <option value="Legacy Timetable Software">Existing Timetable Software</option>
                      <option value="Other">Other Arrangement</option>
                    </select>
                  </div>

                  {/* 8. Additional Notes */}
                  <div className="form-group form-full-width">
                    <label htmlFor="notes" className="demo-label">
                      Timetable Structure &amp; Special Requirements (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="demo-textarea"
                      placeholder="e.g. We have separate ICSE and ISC grids, 8 periods daily, zero periods on Tuesdays, and would like to test workload balancing."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="form-full-width" style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg form-submit-btn"
                      disabled={isSubmitting}
                      style={{ width: '100%' }}
                    >
                      {isSubmitting ? 'Verifying & Recording...' : 'Request Institutional Demonstration'}
                    </button>
                    <p style={{ fontSize: '0.8rem', color: '#64748b', textAlign: 'center', marginTop: '10px' }}>
                      No obligations. We schedule a convenient 30-minute demonstration tailored to your school leadership team.
                    </p>
                  </div>

                </div>
              </form>
            ) : (
              <div className="demo-success-box visible" role="alert">
                <h3 className="demo-success-title">Demonstration Request Recorded</h3>
                <p className="demo-success-text">
                  Thank you for requesting a demonstration of S.W.A.P. Our institutional team will review your timetable parameters and contact you within one school business day to confirm a demonstration time.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href={mailtoUrl} className="btn btn-primary btn-sm">
                    Send Direct Email Copy
                  </a>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-outline btn-sm"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 4. WHAT HAPPENS DURING DEMONSTRATION */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <div className="section-tag">Demonstration Process</div>
            <h2 className="section-title">What to Expect During Your Demonstration</h2>
            <p className="section-subtitle">
              A practical, 30-minute walkthrough focused on your institution's specific administrative workflow.
            </p>
          </div>

          <div className="grid grid-3" style={{ marginTop: '32px' }}>
            <div className="benefit-card">
              <h3>1. Timetable Structure Mapping</h3>
              <p>We review your school's period timings, split grids, zero periods, and laboratory blocks to demonstrate how your exact schedule is parsed.</p>
            </div>

            <div className="benefit-card">
              <h3>2. Live Morning Absence Simulation</h3>
              <p>We simulate typical morning leave scenarios (e.g. 5 concurrent teacher absences) and walk through conflict validation, candidate suggestions, and manual override.</p>
            </div>

            <div className="benefit-card">
              <h3>3. Staffroom Slip &amp; Audit Output</h3>
              <p>We showcase formatted physical noticeboard rosters and historical duty audit logs, addressing any questions from academic coordinators.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
