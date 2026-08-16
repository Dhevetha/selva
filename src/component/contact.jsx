import { useState } from 'react'
import './contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [status, setStatus] = useState({ loading: false, success: false, error: '' })

  const faqs = [
    { q: 'What types of projects do you handle?', a: 'We handle government tenders, residential homes, apartments, road construction, police stations, temples, and all civil construction work.' },
    { q: 'How do I get a project estimate?', a: 'Simply contact us via email or WhatsApp with your project details. We will schedule a site visit and provide a detailed estimate within 2-3 days.' },
    { q: 'Do you handle government tender work?', a: 'Yes, we have 50+ government tenders completed across Tamil Nadu and are a registered and certified contractor for public projects.' },
    { q: 'What is your project completion timeline?', a: 'Timelines depend on project scope. We provide a detailed project schedule upfront and honor our commitments. On-time delivery is our promise.' },
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: '' })

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Something went wrong')
      }

      setStatus({ loading: false, success: true, error: '' })
      setFormData({ name: '', phone: '', email: '', projectType: '', message: '' })
    } catch (err) {
      setStatus({ loading: false, success: false, error: err.message })
    }
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-hero-badge">Get In Touch</span>
          <h1>Contact <span className="contact-accent">Selva Construction</span></h1>
          <p>Let's build something great together. Reach out today.</p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="contact-cards">
        <div className="contact-cards-inner">
          <div className="contact-card">
            <span className="contact-card-icon">📧</span>
            <h3>Email Us</h3>
            <p>Send us your project requirements</p>
            <a href="mailto:dhevethas@gmail.com" className="contact-card-link">
              dhevethas@gmail.com
            </a>
          </div>
          <div className="contact-card contact-card-featured">
            <span className="contact-card-icon">💬</span>
            <h3>WhatsApp</h3>
            <p>Chat with us instantly on WhatsApp</p>
            <a href="https://wa.me/918825444648" target="_blank" rel="noreferrer" className="contact-card-link">
              +91 88254 44648
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">📍</span>
            <h3>Our Location</h3>
            <p>Tamil Nadu, India</p>
            <span className="contact-card-link">Serving All Districts</span>
          </div>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="contact-main">
        <div className="contact-main-inner">
          {/* Form */}
          <div className="contact-form-wrap">
            <h2>Send a Message</h2>
            <p>Fill in your details and we'll get back to you within 24 hours.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="contact-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="contact-form-group">
                <label>Project Type</label>
                <select name="projectType" value={formData.projectType} onChange={handleChange}>
                  <option value="">Select project type</option>
                  <option>Residential Home</option>
                  <option>Apartment / Complex</option>
                  <option>Government Tender</option>
                  <option>Road Construction</option>
                  <option>Temple / Religious Structure</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="contact-form-group">
                <label>Your Message</label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Describe your project or inquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-submit-btn" disabled={status.loading}>
                {status.loading ? 'Sending...' : 'Send Message →'}
              </button>

              {status.success && (
                <p style={{ color: '#128C7E', fontWeight: 600 }}>
                  ✅ Message sent successfully! We'll get back to you soon.
                </p>
              )}
              {status.error && (
                <p style={{ color: '#c0392b', fontWeight: 600 }}>
                  ❌ {status.error}
                </p>
              )}
            </form>
          </div>

          {/* Info Panel */}
          <div className="contact-info-panel">
            <div className="contact-info-box">
              <h3>Direct Contact</h3>
              <div className="contact-info-item">
                <span className="contact-info-icon">📧</span>
                <div>
                  <label>Email</label>
                  <a href="mailto:dhevethas@gmail.com">dhevethas@gmail.com</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">📱</span>
                <div>
                  <label>WhatsApp</label>
                  <a href="https://wa.me/918825444648" target="_blank" rel="noreferrer">+91 88254 44648</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-icon">⏰</span>
                <div>
                  <label>Working Hours</label>
                  <span>Mon – Sat: 8:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            <div className="contact-whatsapp-cta">
              <p>Prefer instant communication?</p>
              <a href="https://wa.me/918825444648" target="_blank" rel="noreferrer" className="contact-whatsapp-btn">
                <span>💬</span> Chat on WhatsApp
              </a>
            </div>

            <div className="contact-quick-stats">
              <div><span>40+</span><label>Years</label></div>
              <div><span>300+</span><label>Projects</label></div>
              <div><span>24h</span><label>Response</label></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-map-inner">
          <div className="sc-section-title">
            <h2>Find Us</h2>
            <p>We operate across Tamil Nadu — reach us wherever you are</p>
          </div>
          <div className="contact-map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.5978576604!2d79.69459885!3d10.79344465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baab89cea453ca9%3A0xe570d0d01a1671eb!2sTamil%20Nadu!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              title="Selva Construction Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="contact-faq">
        <div className="contact-faq-inner">
          <div className="sc-section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Answers to common queries from our clients</p>
          </div>
          <div className="contact-faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="contact-faq-item">
                <h4>Q: {faq.q}</h4>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="contact-final-cta">
        <div className="contact-final-inner">
          <h2>Ready to Start Your Project?</h2>
          <p>Call or WhatsApp us right now — we're ready to help!</p>
          <div className="contact-final-btns">
            <a href="mailto:dhevethas@gmail.com" className="sc-btn-primary">
              📧 Email Us
            </a>
            <a href="https://wa.me/918825444648" target="_blank" rel="noreferrer" className="sc-btn-outline">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact