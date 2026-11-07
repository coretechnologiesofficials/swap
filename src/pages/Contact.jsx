import React from 'react'
import Button from '../components/Button'
import { DEMO_MAILTO_URL } from '../components/Navbar'

export default function Contact() {
  return (
    <div className="page-contact">
      
      {/* Hero */}
      <section className="section contact-hero">
        <div className="container">
          <div className="section-tag">Direct Communication</div>
          <h1 className="section-title">See how SWAP can work for your school.</h1>
          <p className="section-subtitle">
            Get in touch with CORE Technologies to discuss SWAP, request a demonstration, or explore institutional implementation for your school.
          </p>
        </div>
      </section>

      {/* Official Direct Contact Channels */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          
          <div className="contact-channels-grid">
            
            {/* Channel 1: Email */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">Official Email</span>
                <a href={DEMO_MAILTO_URL} className="channel-main-val">
                  coretechnologiesofficial@gmail.com
                </a>
                <p className="channel-sub-desc">
                  Opens a pre-addressed email draft with key institutional details ready to fill in.
                </p>
              </div>
              <Button href={DEMO_MAILTO_URL} variant="outline" size="sm">
                Send Email
              </Button>
            </div>

            {/* Channel 2: Phone */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">Direct Telephone</span>
                <a href="tel:+919082777586" className="channel-main-val">
                  +91 9082777586
                </a>
                <p className="channel-sub-desc">
                  Speak directly with our team regarding institutional inquiries and technical requirements.
                </p>
              </div>
              <Button href="tel:+919082777586" variant="outline" size="sm">
                Call Direct
              </Button>
            </div>

            {/* Channel 3: WhatsApp */}
            <div className="contact-channel-card">
              <div className="channel-icon-wrap" style={{ color: '#16a34a' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.03C9.36 7.03 9.09 7.09 8.87 7.33C8.65 7.57 8.02 8.16 8.02 9.36C8.02 10.56 8.9 11.72 9.02 11.89C9.15 12.05 10.76 14.53 13.22 15.6C15.27 16.48 15.69 16.31 16.13 16.27C16.57 16.23 17.56 15.69 17.76 15.11C17.96 14.53 17.96 14.04 17.9 13.94C17.84 13.84 17.68 13.78 17.44 13.66C17.2 13.54 16.02 12.96 15.8 12.88C15.58 12.8 15.42 12.76 15.25 13C15.09 13.24 14.62 13.78 14.48 13.94C14.34 14.11 14.2 14.13 13.96 14.01C13.72 13.89 12.95 13.64 12.03 12.82C11.31 12.18 10.83 11.39 10.69 11.15C10.55 10.91 10.67 10.78 10.8 10.66C10.91 10.55 11.05 10.37 11.17 10.23C11.29 10.09 11.33 9.99 11.41 9.83C11.49 9.67 11.45 9.53 11.39 9.41C11.33 9.29 10.87 8.16 10.67 7.69C10.49 7.23 10.3 7.29 10.15 7.28C10.02 7.28 9.86 7.27 9.7 7.27C9.53 7.27 9.53 7.03 9.53 7.03Z"/>
                </svg>
              </div>
              <div className="channel-text-col">
                <span className="channel-title">WhatsApp Communication</span>
                <a
                  href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-main-val"
                >
                  +91 9082777586
                </a>
                <p className="channel-sub-desc">
                  Instant messaging channel for administrative questions and quick scheduling queries.
                </p>
              </div>
              <Button
                href="https://wa.me/919082777586?text=Hello%20CORE%20Technologies%2C%20we%20are%20interested%20in%20a%20demonstration%20of%20SWAP%20for%20our%20school."
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="sm"
              >
                Chat on WhatsApp
              </Button>
            </div>

          </div>

          {/* Demonstration Callout Box */}
          <div className="contact-demo-banner">
            <h2 className="demo-banner-title">Request an Institutional Demonstration</h2>
            <p className="demo-banner-text">
              We provide guided demonstrations for school leadership teams, walking through your actual timetable structures and illustrating how SWAP operates under real-world faculty absence scenarios.
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
