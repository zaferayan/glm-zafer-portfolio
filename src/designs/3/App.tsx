import './styles.css'
import { personalInfo, skills, services, projects, testimonials, stats, trainingPrograms } from '../../data/content'

function Design3() {
  return (
    <div className="d3">
      <div className="d3__bg">
        <div className="d3__gradient d3__gradient--1"></div>
        <div className="d3__gradient d3__gradient--2"></div>
        <div className="d3__gradient d3__gradient--3"></div>
        <div className="d3__grid"></div>
      </div>

      <nav className="d3__nav">
        <div className="d3__nav-brand">
          <div className="d3__brand-icon">
            <span>Z</span>
          </div>
          <span className="d3__brand-name">Zafer AYAN</span>
        </div>
        <div className="d3__nav-menu">
          <a href="#expertise">Expertise</a>
          <a href="#work">Work</a>
          <a href="#training">Training</a>
          <a href="#contact" className="d3__nav-btn">Connect</a>
        </div>
      </nav>

      <header className="d3__hero">
        <div className="d3__hero-badge">
          <span className="d3__badge-dot"></span>
          Available for new projects
        </div>
        <h1 className="d3__hero-title">
          Building the future
          <br />
          of <span className="d3__gradient-text">AI-powered</span> apps
        </h1>
        <p className="d3__hero-subtitle">
          Frontend developer specializing in React, TypeScript, and React Native.
          I bridge the gap between cutting-edge AI and exceptional user experiences.
        </p>
        <div className="d3__hero-actions">
          <a href="#contact" className="d3__btn d3__btn--glow">
            <span>Start a Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#work" className="d3__btn d3__btn--ghost">
            View Portfolio
          </a>
        </div>

        <div className="d3__hero-visual">
          <div className="d3__orb">
            <div className="d3__orb-ring d3__orb-ring--1"></div>
            <div className="d3__orb-ring d3__orb-ring--2"></div>
            <div className="d3__orb-ring d3__orb-ring--3"></div>
            <div className="d3__orb-core"></div>
          </div>
        </div>
      </header>

      <section className="d3__stats">
        {stats.map((stat, i) => (
          <div key={i} className="d3__stat">
            <span className="d3__stat-value">{stat.value}</span>
            <span className="d3__stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="expertise" className="d3__section">
        <div className="d3__section-header">
          <span className="d3__section-tag">Expertise</span>
          <h2 className="d3__section-title">What I Build</h2>
        </div>
        <div className="d3__services">
          {services.map((service, i) => (
            <div key={service.id} className="d3__service">
              <div className="d3__service-icon">
                <span>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="d3__service-title">{service.title}</h3>
              <p className="d3__service-desc">{service.description}</p>
              <ul className="d3__service-list">
                {service.features.map((feature, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="d3__section">
        <div className="d3__section-header">
          <span className="d3__section-tag">Portfolio</span>
          <h2 className="d3__section-title">Featured Projects</h2>
        </div>
        <div className="d3__projects">
          {projects.filter(p => p.featured).map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`d3__project ${i === 0 ? 'd3__project--featured' : ''}`}
            >
              <div className="d3__project-visual">
                <div className="d3__project-shape"></div>
                <span className="d3__project-category">{project.category}</span>
              </div>
              <div className="d3__project-content">
                <h3 className="d3__project-title">{project.title}</h3>
                <p className="d3__project-desc">{project.description}</p>
                <div className="d3__project-tech">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="d3__tech">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="d3__project-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="d3__section d3__stack">
        <div className="d3__section-header">
          <span className="d3__section-tag">Stack</span>
          <h2 className="d3__section-title">Technologies</h2>
        </div>
        <div className="d3__tech-grid">
          {[...skills.core, ...skills.frontend.slice(0, 2)].map((skill, i) => (
            <div key={i} className="d3__tech-card">
              <span className="d3__tech-name">{skill.name}</span>
              <div className="d3__tech-bar">
                <div className="d3__tech-fill" style={{ width: `${skill.level}%` }}></div>
              </div>
              <span className="d3__tech-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="d3__section">
        <div className="d3__section-header">
          <span className="d3__section-tag">Training</span>
          <h2 className="d3__section-title">Level Up Your Skills</h2>
        </div>
        <div className="d3__programs">
          {trainingPrograms.map((program) => (
            <div
              key={program.id}
              className={`d3__program ${program.featured ? 'd3__program--featured' : ''}`}
            >
              {program.featured && <span className="d3__program-badge">Most Popular</span>}
              <h3 className="d3__program-title">{program.title}</h3>
              <p className="d3__program-desc">{program.description}</p>
              <div className="d3__program-meta">
                <span>{program.duration}</span>
                <span className="d3__program-price">{program.price}</span>
              </div>
              <ul className="d3__program-features">
                {program.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="d3__program-cta">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      <section className="d3__section d3__testimonials">
        <div className="d3__section-header">
          <span className="d3__section-tag">Testimonials</span>
          <h2 className="d3__section-title">What People Say</h2>
        </div>
        <div className="d3__testimonial-carousel">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="d3__testimonial">
              <p className="d3__testimonial-text">{testimonial.content}</p>
              <div className="d3__testimonial-author">
                <span className="d3__author-name">{testimonial.name}</span>
                <span className="d3__author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="d3__section d3__contact">
        <div className="d3__contact-grid">
          <div className="d3__contact-info">
            <span className="d3__section-tag">Contact</span>
            <h2 className="d3__contact-title">Let's Create Something Amazing</h2>
            <p className="d3__contact-desc">
              Ready to bring your idea to life? I'm here to help you build
              exceptional digital experiences.
            </p>
            <div className="d3__social">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
            </div>
          </div>
          <form className="d3__form">
            <div className="d3__form-row">
              <div className="d3__form-group">
                <label>Name</label>
                <input type="text" placeholder="Your name" />
              </div>
              <div className="d3__form-group">
                <label>Email</label>
                <input type="email" placeholder="your@email.com" />
              </div>
            </div>
            <div className="d3__form-group">
              <label>Project Type</label>
              <select>
                <option>Select a service</option>
                <option>Mobile App Development</option>
                <option>Web Application</option>
                <option>AI Integration</option>
                <option>Mentorship</option>
              </select>
            </div>
            <div className="d3__form-group">
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows={4}></textarea>
            </div>
            <button type="submit" className="d3__btn d3__btn--glow d3__btn--full">
              Send Message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <footer className="d3__footer">
        <div className="d3__footer-content">
          <div className="d3__footer-brand">
            <div className="d3__brand-icon d3__brand-icon--small">
              <span>Z</span>
            </div>
            <span>Zafer AYAN</span>
          </div>
          <p className="d3__copyright">© 2024 All rights reserved. Built with React.</p>
        </div>
      </footer>

      <a href="/glm" className="d3__back">← All Designs</a>
    </div>
  )
}

export default Design3
