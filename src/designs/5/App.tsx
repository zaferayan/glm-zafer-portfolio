import './styles.css'
import { personalInfo, skills, services, projects, testimonials, stats } from '../../data/content'

function Design5() {
  return (
    <div className="d5">
      <div className="d5__noise"></div>
      
      <nav className="d5__nav">
        <div className="d5__nav-marquee">
          <span>ZAFER AYAN</span>
          <span>•</span>
          <span>FRONTEND DEVELOPER</span>
          <span>•</span>
          <span>REACT NATIVE</span>
          <span>•</span>
          <span>AI INTEGRATION</span>
          <span>•</span>
          <span>MENTORSHIP</span>
          <span>•</span>
          <span>ZAFER AYAN</span>
          <span>•</span>
          <span>FRONTEND DEVELOPER</span>
          <span>•</span>
          <span>REACT NATIVE</span>
          <span>•</span>
        </div>
      </nav>

      <header className="d5__hero">
        <div className="d5__hero-bg-text">DEVELOPER</div>
        <div className="d5__hero-content">
          <div className="d5__hero-left">
            <div className="d5__hero-tag">
              <span className="d5__tag-line"></span>
              <span>Available Q1 2024</span>
            </div>
            <h1 className="d5__hero-title">
              <span className="d5__title-line">I build</span>
              <span className="d5__title-line d5__title-line--accent">digital</span>
              <span className="d5__title-line">products</span>
            </h1>
            <div className="d5__hero-cta">
              <a href="#contact" className="d5__btn-main">
                <span>Let's Talk</span>
                <div className="d5__btn-arrow">→</div>
              </a>
            </div>
          </div>
          <div className="d5__hero-right">
            <div className="d5__hero-box">
              <div className="d5__box-label">Stack</div>
              <ul className="d5__stack-list">
                {skills.core.slice(0, 4).map((skill, i) => (
                  <li key={i}>
                    <span className="d5__stack-num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="d5__stack-name">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="d5__scroll-indicator">
          <span>Scroll</span>
          <div className="d5__scroll-line"></div>
        </div>
      </header>

      <section className="d5__intro">
        <div className="d5__intro-label">
          <span>01</span>
          <span>—</span>
          <span>About</span>
        </div>
        <div className="d5__intro-content">
          <p className="d5__intro-text">
            I'm a <strong>frontend developer</strong> with 5+ years of experience
            building production-ready applications. I specialize in <strong>React</strong>,
            <strong>TypeScript</strong>, and <strong>React Native</strong>.
          </p>
          <p className="d5__intro-text">
            I help startups ship faster and teach developers to build
            real-world applications. My focus is on creating seamless
            user experiences with clean, maintainable code.
          </p>
        </div>
      </section>

      <section className="d5__stats-section">
        {stats.map((stat, i) => (
          <div key={i} className="d5__stat-block">
            <span className="d5__stat-num">{stat.value}</span>
            <span className="d5__stat-text">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="d5__services" id="services">
        <div className="d5__services-header">
          <div className="d5__section-label">
            <span>02</span>
            <span>—</span>
            <span>Services</span>
          </div>
        </div>
        <div className="d5__services-list">
          {services.map((service, i) => (
            <div key={service.id} className="d5__service-item">
              <div className="d5__service-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="d5__service-content">
                <h3 className="d5__service-title">{service.title}</h3>
                <p className="d5__service-desc">{service.description}</p>
              </div>
              <div className="d5__service-features">
                {service.features.map((feature, j) => (
                  <span key={j} className="d5__feature">{feature}</span>
                ))}
              </div>
              <div className="d5__service-arrow">→</div>
            </div>
          ))}
        </div>
      </section>

      <section className="d5__projects" id="work">
        <div className="d5__projects-header">
          <div className="d5__section-label">
            <span>03</span>
            <span>—</span>
            <span>Work</span>
          </div>
          <h2 className="d5__projects-title">Selected Projects</h2>
        </div>
        <div className="d5__projects-grid">
          {projects.filter(p => p.featured).map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`d5__project-card ${i === 0 ? 'd5__project-card--large' : ''}`}
            >
              <div className="d5__project-index">{String(i + 1).padStart(2, '0')}</div>
              <div className="d5__project-info">
                <span className="d5__project-cat">{project.category}</span>
                <h3 className="d5__project-name">{project.title}</h3>
                <p className="d5__project-desc">{project.description}</p>
              </div>
              <div className="d5__project-tech">
                {project.tech.map((tech, j) => (
                  <span key={j}>{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="d5__testimonials">
        <div className="d5__section-label">
          <span>04</span>
          <span>—</span>
          <span>Testimonials</span>
        </div>
        <div className="d5__testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="d5__testimonial">
              <div className="d5__testimonial-quote">"</div>
              <p className="d5__testimonial-text">{testimonial.content}</p>
              <div className="d5__testimonial-author">
                <span className="d5__author-name">{testimonial.name}</span>
                <span className="d5__author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="d5__contact" id="contact">
        <div className="d5__contact-left">
          <div className="d5__section-label">
            <span>05</span>
            <span>—</span>
            <span>Contact</span>
          </div>
          <h2 className="d5__contact-title">
            Have a project<br />in mind?
          </h2>
          <p className="d5__contact-desc">
            Let's build something great together. I'm always open to discussing
            new projects, creative ideas, or opportunities.
          </p>
          <div className="d5__contact-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="d5__link">
              <span>GH</span>
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="d5__link">
              <span>LI</span>
              <span>LinkedIn</span>
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer" className="d5__link">
              <span>TW</span>
              <span>Twitter</span>
            </a>
          </div>
        </div>
        <div className="d5__contact-right">
          <form className="d5__form">
            <div className="d5__form-row">
              <div className="d5__field">
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="d5__field">
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="d5__field d5__field--full">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows={5}></textarea>
            </div>
            <button type="submit" className="d5__submit">
              <span>Send Message</span>
              <span className="d5__submit-arrow">→</span>
            </button>
          </form>
        </div>
      </section>

      <footer className="d5__footer">
        <div className="d5__footer-main">
          <span className="d5__footer-name">Zafer AYAN</span>
          <span className="d5__footer-title">Frontend Developer</span>
        </div>
        <div className="d5__footer-copy">
          <span>© 2024</span>
          <span>All Rights Reserved</span>
        </div>
      </footer>

      <a href="/glm" className="d5__back">← Back</a>
    </div>
  )
}

export default Design5
