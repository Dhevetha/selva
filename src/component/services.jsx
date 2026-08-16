import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import './services.css'

function Services() {
  const services = [
    {
      icon: '🏛️',
      title: 'Government Tenders',
      desc: 'We specialize in large-scale government construction contracts. With 50+ tenders successfully completed, we are a trusted partner for public infrastructure projects.',
      features: ['Road & Highway Construction', 'Public Buildings', 'Municipal Infrastructure', 'Drainage & Water Projects'],
      img: img1,
    },
    {
      icon: '🏠',
      title: 'Residential Homes',
      desc: 'From compact family homes to sprawling villas, we build residences that reflect your personality while ensuring structural excellence and lasting durability.',
      features: ['Individual Homes', 'Villas & Bungalows', 'Interior Finishing', 'Renovations & Extensions'],
      img: img2,
    },
    {
      icon: '🏢',
      title: 'Apartments & Complexes',
      desc: 'Our apartment projects blend modern design with thoughtful community spaces. We manage every aspect from foundation to finishing, on time and on budget.',
      features: ['Multi-storey Apartments', 'Gated Communities', 'Commercial Complexes', 'Mixed-use Developments'],
      img: img3,
    },
    {
      icon: '🛣️',
      title: 'Roads & Infrastructure',
      desc: 'We construct durable, well-engineered roads and civil infrastructure that withstand the test of time and traffic. Every road we build meets government standards.',
      features: ['Village & Town Roads', 'Highway Construction', 'Bridges & Culverts', 'Footpaths & Drains'],
      img: img1,
    },
    {
      icon: '🚔',
      title: 'Police Stations & Public Buildings',
      desc: 'Selva Construction has delivered secure, functional, and aesthetically strong public buildings including police stations, courts, and government offices.',
      features: ['Police Stations', 'Government Offices', 'Community Halls', 'Courts & Tribunals'],
      img: img2,
    },
    {
      icon: '🛕',
      title: 'Temples & Religious Structures',
      desc: 'We build sacred spaces with reverence and precision. Our team brings traditional architectural knowledge together with modern construction techniques.',
      features: ['Temple Construction', 'Gopuram & Mandapam', 'Sacred Enclosures', 'Renovation & Restoration'],
      img: img3,
    },
  ]

  const process = [
    { step: '01', title: 'Consultation', desc: 'Discuss your requirements, budget, and timeline with our experts.' },
    { step: '02', title: 'Design & Planning', desc: 'Detailed site analysis, architectural planning, and structural design.' },
    { step: '03', title: 'Approval & Agreement', desc: 'Legal approvals, permits, and formal project agreement.' },
    { step: '04', title: 'Construction', desc: 'Expert execution with quality materials and skilled workforce.' },
    { step: '05', title: 'Inspection & Finishing', desc: 'Rigorous quality checks and premium finishing touches.' },
    { step: '06', title: 'Handover', desc: 'Timely handover with full documentation and post-project support.' },
  ]

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="services-hero-content">
          <span className="services-hero-badge">What We Do</span>
          <h1>Our <span className="services-accent">Construction Services</span></h1>
          <p>Comprehensive building solutions delivered with 40+ years of expertise</p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        <div className="services-list-inner">
          <div className="sc-section-title">
            <h2>All Services</h2>
            <p>Every project we undertake gets our full commitment and craftsmanship</p>
          </div>
          {services.map((s, i) => (
            <div key={i} className={`services-item ${i % 2 === 1 ? 'services-item-reverse' : ''}`}>
              <div className="services-item-img">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="services-item-text">
                <span className="services-item-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <ul className="services-item-features">
                  {s.features.map((f, j) => (
                    <li key={j}><span>✓</span> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="services-process">
        <div className="services-process-inner">
          <div className="sc-section-title">
            <h2>Our Process</h2>
            <p>A clear, transparent process from start to finish</p>
          </div>
          <div className="services-process-grid">
            {process.map((p, i) => (
              <div key={i} className="services-process-card">
                <span className="services-process-step">{p.step}</span>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="services-stats">
        <div className="services-stats-inner">
          <div className="sc-section-title">
            <h2 style={{color:'white'}}>Proven Track Record</h2>
            <p style={{color:'rgba(255,255,255,0.8)'}}>Numbers that speak louder than words</p>
          </div>
          <div className="services-stats-grid">
            {[
              {n:'300+', l:'Projects Completed'},
              {n:'50+', l:'Govt. Tenders'},
              {n:'40+', l:'Years Experience'},
              {n:'6+', l:'Construction Types'},
            ].map((s,i) => (
              <div key={i} className="services-stat-box">
                <span className="services-stat-num">{s.n}</span>
                <span className="services-stat-label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-cta-inner">
          <h2>Need a Construction Partner?</h2>
          <p>Reach out to Selva Construction and let's discuss your project.</p>
          <a href="mailto:dhevethas@gmail.com" className="sc-btn-primary" style={{display:'inline-block'}}>Get a Free Consultation</a>
        </div>
      </section>
    </div>
  )
}

export default Services