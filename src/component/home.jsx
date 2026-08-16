import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import './home.css'

function Home() {
  const stats = [
    { num: '40+', label: 'Years Experience' },
    { num: '300+', label: 'Projects Completed' },
    { num: '100%', label: 'Client Satisfaction' },
    { num: '50+', label: 'Govt. Tenders Won' },
  ]

  const highlights = [
    { icon: '🏗️', title: 'Government Tenders', desc: 'Trusted partner for large-scale government infrastructure projects across the region.' },
    { icon: '🏠', title: 'Residential Homes', desc: 'Custom homes built with precision and care, turning your dream home into reality.' },
    { icon: '🏢', title: 'Apartments & Complexes', desc: 'Modern, spacious apartment buildings designed for comfort and community living.' },
    { icon: '🛣️', title: 'Roads & Infrastructure', desc: 'Durable road construction and civil infrastructure built to last for decades.' },
    { icon: '🏛️', title: 'Public Buildings', desc: 'Police stations, temples, schools, and more — serving the public with quality.' },
    { icon: '⭐', title: 'Excellence Guaranteed', desc: 'Every project delivered on time, within budget, and to the highest standards.' },
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="home-hero-bg">
          <img src={img1} alt="Construction project" className="home-hero-img" />
          <div className="home-hero-overlay"></div>
        </div>
        <div className="home-hero-content">
          <span className="home-hero-badge">Est. 1984 • Trusted Builder</span>
          <h1 className="home-hero-title">Building Tamil Nadu's<br /><span className="home-hero-accent">Future Since 1984</span></h1>
          <p className="home-hero-subtitle">
            Selva Construction — 40+ years of unmatched expertise in government tenders, residential homes, roads, and landmark public buildings.
          </p>
          <div className="home-hero-buttons">
            <button className="sc-btn-primary">Explore Projects</button>
            <button className="sc-btn-outline">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats">
        <div className="home-stats-inner">
          {stats.map((s, i) => (
            <div key={i} className="home-stat-card">
              <span className="home-stat-num">{s.num}</span>
              <span className="home-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="home-intro">
        <div className="home-intro-inner">
          <div className="home-intro-text">
            <div className="sc-section-title" style={{textAlign:'left'}}>
              <h2>Who We Are</h2>
            </div>
            <p>
              Founded by our visionary leader with a passion for quality construction, Selva Construction has grown into one of the most trusted names in Tamil Nadu's building industry. With over four decades of hands-on experience, we have successfully delivered more than 300 projects ranging from individual homes to massive government infrastructure.
            </p>
            <p style={{marginTop:'16px'}}>
              Our commitment is simple: build structures that stand the test of time, deliver every project with integrity, and treat every client like family.
            </p>
          </div>
          <div className="home-intro-images">
            <img src={img2} alt="Our work" className="home-intro-img home-intro-img1" />
            <img src={img3} alt="Construction excellence" className="home-intro-img home-intro-img2" />
          </div>
        </div>
      </section>

      {/* Highlights / What We Do */}
      <section className="home-highlights">
        <div className="home-highlights-inner">
          <div className="sc-section-title">
            <h2>What We Build</h2>
            <p>Decades of expertise across every construction domain</p>
          </div>
          <div className="home-highlights-grid">
            {highlights.map((h, i) => (
              <div key={i} className="home-highlight-card">
                <span className="home-highlight-icon">{h.icon}</span>
                <h3>{h.title}</h3>
                <p>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="home-gallery">
        <div className="sc-section-title">
          <h2>Our Work in Pictures</h2>
          <p>A glimpse of the projects that define our legacy</p>
        </div>
        <div className="home-gallery-strip">
          <div className="home-gallery-item"><img src={img1} alt="Project 1" /></div>
          <div className="home-gallery-item"><img src={img2} alt="Project 2" /></div>
          <div className="home-gallery-item"><img src={img3} alt="Project 3" /></div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta">
        <div className="home-cta-inner">
          <h2>Ready to Build Something Great?</h2>
          <p>Contact Selva Construction today and let's bring your vision to life.</p>
          <a href="mailto:dhevethas@gmail.com" className="sc-btn-primary" style={{display:'inline-block'}}>Get In Touch</a>
        </div>
      </section>
    </div>
  )
}

export default Home