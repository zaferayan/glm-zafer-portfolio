import './styles.css'
import { personalInfo, skills, services, projects, testimonials, stats } from '../../data/content'

function Design1() {
  return (
    <div className="d1">
      <nav className="d1__nav">
        <div className="d1__nav-left">
          <span className="d1__prompt">$</span>
          <span className="d1__nav-name">zafer.ayan</span>
        </div>
        <div className="d1__nav-right">
          <a href="#services">./services</a>
          <a href="#projects">./projects</a>
          <a href="#contact">./contact</a>
        </div>
      </nav>

      <header className="d1__hero">
        <div className="d1__terminal">
          <div className="d1__terminal-header">
            <span className="d1__terminal-dot d1__terminal-dot--red"></span>
            <span className="d1__terminal-dot d1__terminal-dot--yellow"></span>
            <span className="d1__terminal-dot d1__terminal-dot--green"></span>
            <span className="d1__terminal-title">~/zafer-ayan/intro.sh</span>
          </div>
          <div className="d1__terminal-body">
            <code className="d1__code">
              <span className="d1__comment">#!/bin/bash</span>
              <br /><br />
              <span className="d1__keyword">const</span> developer = {'{'}
              <br />
              {'  '}name: <span className="d1__string">"{personalInfo.name}"</span>,
              <br />
              {'  '}title: <span className="d1__string">"{personalInfo.title}"</span>,
              <br />
              {'  '}stack: [<span className="d1__string">"React"</span>, <span className="d1__string">"TypeScript"</span>, <span className="d1__string">"Expo"</span>],
              <br />
              {'  '}passion: <span className="d1__string">"Building products that matter"</span>,
              <br />
              {'}'};
              <br /><br />
              <span className="d1__keyword">export default</span> developer;
            </code>
          </div>
        </div>

        <div className="d1__hero-content">
          <h1 className="d1__title">
            <span className="d1__prompt">{'>'}</span> Hello, World_
          </h1>
          <p className="d1__tagline">
            I build <span className="d1__highlight">production-ready</span> mobile & web apps
            with React, TypeScript, and a focus on developer experience.
          </p>
          <div className="d1__ctas">
            <a href="#contact" className="d1__btn d1__btn--primary">
              <span className="d1__prompt">{'>'}</span> Start Collaboration
            </a>
            <a href="#projects" className="d1__btn d1__btn--secondary">
              <span className="d1__prompt">{'>'}</span> View Projects
            </a>
          </div>
        </div>
      </header>

      <section className="d1__stats">
        {stats.map((stat, i) => (
          <div key={i} className="d1__stat">
            <span className="d1__stat-value">{stat.value}</span>
            <span className="d1__stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="d1__section">
        <h2 className="d1__section-title">
          <span className="d1__prompt">{'>'}</span> Services_
        </h2>
        <div className="d1__services">
          {services.map((service, i) => (
            <div key={service.id} className="d1__service">
              <div className="d1__service-header">
                <span className="d1__service-index">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="d1__service-title">{service.title}</h3>
              </div>
              <p className="d1__service-desc">{service.description}</p>
              <ul className="d1__service-features">
                {service.features.map((feature, j) => (
                  <li key={j}>
                    <span className="d1__bullet">▸</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="d1__section">
        <h2 className="d1__section-title">
          <span className="d1__prompt">{'>'}</span> Projects_
        </h2>
        <div className="d1__projects">
          {projects.filter(p => p.featured).map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="d1__project"
            >
              <div className="d1__project-header">
                <span className="d1__project-folder">📁</span>
                <span className="d1__project-name">{project.title}</span>
              </div>
              <p className="d1__project-desc">{project.description}</p>
              <div className="d1__project-tech">
                {project.tech.map((tech, j) => (
                  <span key={j} className="d1__tech-tag">{tech}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="d1__section d1__skills">
        <h2 className="d1__section-title">
          <span className="d1__prompt">{'>'}</span> Stack_
        </h2>
        <div className="d1__skills-grid">
          {skills.core.map((skill, i) => (
            <div key={i} className="d1__skill">
              <div className="d1__skill-header">
                <span className="d1__skill-name">{skill.name}</span>
                <span className="d1__skill-level">{skill.level}%</span>
              </div>
              <div className="d1__skill-bar">
                <div
                  className="d1__skill-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="d1__section d1__testimonials">
        <h2 className="d1__section-title">
          <span className="d1__prompt">{'>'}</span> Testimonials_
        </h2>
        <div className="d1__testimonial-grid">
          {testimonials.slice(0, 3).map((testimonial, i) => (
            <div key={testimonial.id} className="d1__testimonial">
              <div className="d1__testimonial-header">
                <span className="d1__quote-symbol">"</span>
                <span className="d1__testimonial-number">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <p className="d1__testimonial-content">{testimonial.content}</p>
              <div className="d1__testimonial-author">
                <span className="d1__author-name">{testimonial.name}</span>
                <span className="d1__author-role">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="d1__section d1__contact">
        <h2 className="d1__section-title">
          <span className="d1__prompt">{'>'}</span> Contact_
        </h2>
        <div className="d1__contact-content">
          <div className="d1__contact-terminal">
            <div className="d1__terminal-header">
              <span className="d1__terminal-dot d1__terminal-dot--red"></span>
              <span className="d1__terminal-dot d1__terminal-dot--yellow"></span>
              <span className="d1__terminal-dot d1__terminal-dot--green"></span>
              <span className="d1__terminal-title">~/contact-form.tsx</span>
            </div>
            <form className="d1__form">
              <div className="d1__form-line">
                <label><span className="d1__keyword">const</span> name =</label>
                <input type="text" placeholder='"Your name"' />
              </div>
              <div className="d1__form-line">
                <label><span className="d1__keyword">const</span> email =</label>
                <input type="email" placeholder='"your@email.com"' />
              </div>
              <div className="d1__form-line d1__form-line--textarea">
                <label><span className="d1__keyword">const</span> message =</label>
                <textarea placeholder="Let's work together..." rows={4}></textarea>
              </div>
              <button type="submit" className="d1__submit">
                <span className="d1__prompt">{'>'}</span> Send Message()
              </button>
            </form>
          </div>
          <div className="d1__contact-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
              <span className="d1__prompt">{'>'}</span> GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
              <span className="d1__prompt">{'>'}</span> LinkedIn
            </a>
            <a href={personalInfo.twitter} target="_blank" rel="noopener noreferrer">
              <span className="d1__prompt">{'>'}</span> Twitter
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <span className="d1__prompt">{'>'}</span> Email
            </a>
          </div>
        </div>
      </section>

      <footer className="d1__footer">
        <p>
          <span className="d1__comment">// Built with React + TypeScript</span>
        </p>
        <p className="d1__copyright">© 2024 {personalInfo.name}. All rights reserved.</p>
      </footer>

      <a href="/glm" className="d1__back-link">← Back to designs</a>
    </div>
  )
}

export default Design1
