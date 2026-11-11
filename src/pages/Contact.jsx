import React from 'react'

export default function Contact() {
  return (
    <div className="page-contact">
      
      <section className="section">
        <div className="container text-center">
          <span className="section-tag">Direct Institutional Contact</span>
          <h1 className="section-title">Let's discuss S.W.A.P. for your institution.</h1>
          <p className="section-subtitle">
            Get in touch to understand how S.W.A.P. can support your school's substitution management workflow.
          </p>

          {/* 3 Clean Contact Options */}
          <div className="contact-options-grid">
            
            {/* Email */}
            <div className="contact-option-card">
              <div>
                <div className="contact-channel-tag">Official Email</div>
                <div className="contact-channel-val">coretechnologiesofficial@gmail.com</div>
                <p className="contact-channel-desc">
                  Direct inbox for school inquiries, proposal requests, and technical consultations. Monitored daily.
                </p>
              </div>
              <a
                href="mailto:coretechnologiesofficial@gmail.com?subject=SWAP%20Demo%20Request%20-%20[School%20Name]&body=Hello%20CORE%20Technologies%20Team%2C%0A%0AWe%20are%20interested%20in%20learning%20more%20about%20S.W.A.P%20for%20our%20institution.%0A%0ASchool%20Name%3A%0AContact%20Person%3A%0ADesignation%3A%0APhone%20Number%3A%0A%0AThank%20you."
                className="btn btn-primary btn-block"
              >
                Send Email
              </a>
            </div>

            {/* Telephone */}
            <div className="contact-option-card">
              <div>
                <div className="contact-channel-tag">Telephone Desk</div>
                <div className="contact-channel-val">+91 9082777586</div>
                <p className="contact-channel-desc">
                  Speak directly with our team regarding institutional requirements and timetable consultations.
                </p>
              </div>
              <a href="tel:+919082777586" className="btn btn-secondary btn-block">
                Call Direct
              </a>
            </div>

            {/* WhatsApp */}
            <div className="contact-option-card">
              <div>
                <div className="contact-channel-tag">WhatsApp Desk</div>
                <div className="contact-channel-val">+91 9082777586</div>
                <p className="contact-channel-desc">
                  Instant messaging channel for academic coordinators and administrative questions.
                </p>
              </div>
              <a
                href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-block"
              >
                Open WhatsApp
              </a>
            </div>

          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '36px' }}>
            Support Hours: Monday to Saturday, 8:00 AM &ndash; 6:00 PM IST.
          </p>
        </div>
      </section>

    </div>
  )
}
