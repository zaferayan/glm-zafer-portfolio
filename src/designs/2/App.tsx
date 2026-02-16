import { Link } from 'react-router-dom'
import './styles.css'
import { personalInfo, skills, services, projects, testimonials, stats } from '../../data/content'

function Design2() {
  return (
    <div className="d2">
      <nav className="d2__nav">
        <Link to="/" className="d2__logo">ZA.</Link>
        <div className="d2__nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="d2__nav-cta">Let's Talk</a>
        </div>
      </nav>

      <header className="d2__hero">
        <div className="d2__hero-content">
          <div className="d2__hero-label">Frontend Developer & React Native Developer</div>
          <h1 className="d2__hero-title">
            I help startups ship
            <br />
            <span className="d2__hero-accent">beautiful products</span>
          </h1>
          <p className="d2__hero-desc">
            With 5+ years of experience in React, TypeScript, and React Native,
            I build production-ready applications that users love. From mobile apps
            to AI-powered platforms, I turn ideas into reality.
          </p>
          <div className="d2__hero-actions">
            <a href="#work" className="d2__btn d2__btn--dark">View My Work</a>
            <a href="#contact" className="d2__btn d2__btn--outline">Get in Touch</a>
          </div>
        </div>
        <div className="d2__hero-stats">
          {stats.map((stat, i) => (
            <div key={i} className="d2__stat">
              <span className="d2__stat-value">{stat.value}</span>
              <span className="d2__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </header>

      <section id="work" className="d2__section">
        <div className="d2__section-header">
          <span className="d2__section-number">01</span>
          <h2 className="d2__section-title">Selected Work</h2>
        </div>
        <div className="d2__projects">
          {projects.filter(p => p.featured).map((project, i) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`d2__project d2__project--${i % 2 === 0 ? 'wide' : 'narrow'}`}
            >
              <div className="d2__project-image">
                <div className="d2__project-placeholder">
                  <span>{project.title[0]}</span>
                </div>
              </div>
              <div className="d2__project-info">
                <span className="d2__project-category">{project.category}</span>
                <h3 className="d2__project-title">{project.title}</h3>
                <p className="d2__project-desc">{project.description}</p>
                <div className="d2__project-tech">
                  {project.tech.map((tech, j) => (
                    <span key={j} className="d2__tech">{tech}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="about" className="d2__section d2__about">
        <div className="d2__section-header">
          <span className="d2__section-number">02</span>
          <h2 className="d2__section-title">About Me</h2>
        </div>
        <div className="d2__about-content">
          <div className="d2__about-text">
            <p className="d2__about-intro">
              I'm Zafer AYAN, a frontend developer passionate about creating
              seamless user experiences with clean, maintainable code.
            </p>
            <p>
              My journey in software development started with a curiosity about
              how things work on the web. Today, I specialize in React, TypeScript,
              and React Native, helping startups and companies ship products faster.
            </p>
            <p>
              I bridge the gap between AI capabilities and frontend development,
              building intelligent applications that solve real problems. Whether
              it's a mobile app, a web platform, or an AI-powered solution, I
              bring ideas to life with precision and care.
            </p>
          </div>
          <div className="d2__skills-section">
            <h3 className="d2__skills-title">Core Technologies</h3>
            <div className="d2__skills-list">
              {skills.core.map((skill, i) => (
                <div key={i} className="d2__skill-item">
                  <span className="d2__skill-name">{skill.name}</span>
                  <div className="d2__skill-bar">
                    <div
                      className="d2__skill-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="d2__section d2__services">
        <div className="d2__section-header">
          <span className="d2__section-number">03</span>
          <h2 className="d2__section-title">Services</h2>
        </div>
        <div className="d2__services-grid">
          {services.map((service, i) => (
            <div key={service.id} className="d2__service">
              <span className="d2__service-number">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="d2__service-title">{service.title}</h3>
              <p className="d2__service-desc">{service.description}</p>
              <ul className="d2__service-features">
                {service.features.map((feature, j) => (
                  <li key={j}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="d2__section d2__testimonials">
        <div className="d2__section-header">
          <span className="d2__section-number">04</span>
          <h2 className="d2__section-title">Kind Words</h2>
        </div>
        <div className="d2__testimonial-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="d2__testimonial">
              <blockquote className="d2__testimonial-quote">
                "{testimonial.content}"
              </blockquote>
              <div className="d2__testimonial-author">
                <span className="d2__author-name">{testimonial.name}</span>
                <span className="d2__author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="d2__section d2__contact">
        <div className="d2__contact-content">
          <div className="d2__contact-info">
            <span className="d2__section-number">05</span>
            <h2 className="d2__contact-title">Let's Work Together</h2>
            <p className="d2__contact-desc">
              Have a project in mind? I'd love to hear about it. Let's discuss
              how I can help bring your ideas to life.
            </p>
            <div className="d2__contact-links">
              <a href={`mailto:${personalInfo.email}`} className="d2__contact-link">
                <span className="d2__contact-label">Email</span>
                <span className="d2__contact-value">{personalInfo.email}</span>
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="d2__contact-link">
                <span className="d2__contact-label">GitHub</span>
                <span className="d2__contact-value">@zaferayan</span>
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="d2__contact-link">
                <span className="d2__contact-label">LinkedIn</span>
                <span className="d2__contact-value">/in/zaferayan</span>
              </a>
            </div>
          </div>
          <form className="d2__form">
            <div className="d2__form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" />
            </div>
            <div className="d2__form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div className="d2__form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Tell me about your project..." rows={5}></textarea>
            </div>
            <button type="submit" className="d2__btn d2__btn--dark d2__btn--full">Send Message</button>
          </form>
        </div>
      </section>

      <footer className="d2__footer">
        <div className="d2__footer-content">
          <div className="d2__footer-left">
            <span className="d2__logo">ZA.</span>
            <p>Frontend Developer & React Native Developer</p>
          </div>
          <div className="d2__footer-right">
            <p>© 2024 Zafer AYAN. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Design2
