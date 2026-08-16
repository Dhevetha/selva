import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import './about.css'

function About() {
  const milestones = [
    { year: '1984', event: 'Selva Construction founded with a small team and big vision.' },
    { year: '1990', event: 'First major government tender awarded for road construction.' },
    { year: '2000', event: 'Completed 100th project — a milestone celebrated with the community.' },
    { year: '2010', event: 'Expanded into apartment and commercial complex construction.' },
    { year: '2020', event: 'Crossed 300+ projects with zero compromise on quality.' },
    { year: '2024', event: 'Continuing legacy with new-age construction technologies.' },
  ]

  const values = [
    { icon: '🏆', title: 'Quality First', desc: 'We never compromise on materials, workmanship, or safety — delivering only the best.' },
    { icon: '🤝', title: 'Integrity', desc: 'Transparent dealings, honest timelines, and fair pricing build lasting trust.' },
    { icon: '⏱️', title: 'On-Time Delivery', desc: 'We respect your time. Every project is planned to be delivered as promised.' },
    { icon: '🌱', title: 'Sustainability', desc: 'Building responsibly with eco-conscious materials and techniques wherever possible.' },
  ]

  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <span className="about-hero-badge">Our Story</span>
          <h1>40+ Years of <span className="about-accent">Building Excellence</span></h1>
          <p>Rooted in trust, driven by passion, defined by quality</p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="about-founder">
        <div className="about-founder-inner">
          <div className="about-founder-img-wrap">
            <img src={img2} alt="Founder" className="about-founder-img" />
            <div className="about-founder-badge-card">
              <span className="about-fbadge-num">40+</span>
              <span className="about-fbadge-label">Years Experience</span>
            </div>
          </div>
          <div className="about-founder-text">
            <div className="sc-section-title" style={{textAlign:'left'}}>
              <h2>Our Founder's Vision</h2>
            </div>
            <p>Selva Construction was founded with a singular vision: to build structures that stand not just for years, but for generations. Our founder, a first-generation builder with roots in Tamil Nadu, started with a small team, a strong work ethic, and an unwavering belief in quality.</p>
            <p>Over the decades, that small team grew into a trusted enterprise. Today, Selva Construction is synonymous with reliability, craftsmanship, and community development across Tamil Nadu.</p>
            <p>From a modest home in a village to a government police station in the city — every brick laid by Selva Construction carries the same spirit of excellence.</p>
            <div className="about-founder-stats">
              <div className="about-fstat"><span>300+</span><label>Projects</label></div>
              <div className="about-fstat"><span>50+</span><label>Govt Tenders</label></div>
              <div className="about-fstat"><span>1984</span><label>Founded</label></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="sc-section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision and every brick we lay</p>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={i} className="about-value-card">
                <span className="about-value-icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-timeline-inner">
          <div className="sc-section-title">
            <h2>Our Journey</h2>
            <p>Four decades of milestones and achievements</p>
          </div>
          <div className="about-timeline-track">
            {milestones.map((m, i) => (
              <div key={i} className={`about-timeline-item ${i % 2 === 0 ? 'about-tl-left' : 'about-tl-right'}`}>
                <div className="about-tl-card">
                  <span className="about-tl-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
                <div className="about-tl-dot"></div>
              </div>
            ))}
            <div className="about-tl-line"></div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="about-gallery">
        <div className="about-gallery-inner">
          <div className="sc-section-title">
            <h2>Our Work</h2>
            <p>A selection of landmark projects delivered with pride</p>
          </div>
          <div className="about-gallery-grid">
            <div className="about-gallery-big"><img src={img1} alt="Project" /></div>
            <div className="about-gallery-sm"><img src={img2} alt="Project" /></div>
            <div className="about-gallery-sm"><img src={img3} alt="Project" /></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why">
        <div className="about-why-inner">
          <div className="sc-section-title">
            <h2>Why Choose Selva Construction?</h2>
            <p>We bring unmatched expertise and commitment to every project</p>
          </div>
          <div className="about-why-list">
            {['Proven 40+ year track record', 'Expert engineers & skilled workforce', '300+ successfully completed projects', 'Government-approved and certified', 'Transparent cost & timeline commitments', 'Post-construction support & warranty'].map((item, i) => (
              <div key={i} className="about-why-item">
                <span className="about-why-check">✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About