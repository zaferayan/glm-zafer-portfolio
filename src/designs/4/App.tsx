import './styles.css'
import { personalInfo, skills, services, projects, testimonials, stats, trainingPrograms, blogPosts } from '../../data/content'

function Design4() {
  return (
    <div className="d4">
      <nav className="d4__nav">
        <div className="d4__nav-inner">
          <a href="/glm" className="d4__logo">Zafer AYAN</a>
          <div className="d4__nav-links">
            <a href="#about">About</a>
            <a href="#mentorship">Mentorship</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
          </div>
          <a href="#contact" className="d4__cta">Let's Connect</a>
        </div>
      </nav>

      <header className="d4__hero">
        <div className="d4__hero-inner">
          <div className="d4__hero-content">
            <div className="d4__hero-intro">
              <span className="d4__wave">👋</span>
              <span>Hi, I'm Zafer</span>
            </div>
            <h1 className="d4__hero-title">
              I teach developers to build
              <span className="d4__highlight"> production-ready apps</span>
            </h1>
            <p className="d4__hero-desc">
              Frontend developer with 5+ years of experience. I help startups ship
              faster and mentor developers to level up their careers through hands-on
              training and real-world projects.
            </p>
            <div className="d4__hero-buttons">
              <a href="#mentorship" className="d4__btn d4__btn--primary">
                Start Learning
              </a>
              <a href="#projects" className="d4__btn d4__btn--secondary">
                See My Work
              </a>
            </div>
          </div>
          <div className="d4__hero-image">
            <div className="d4__avatar">
              <div className="d4__avatar-placeholder">ZA</div>
            </div>
            <div className="d4__floating-card d4__floating-card--1">
              <span className="d4__card-emoji">⚛️</span>
              <span>React Expert</span>
            </div>
            <div className="d4__floating-card d4__floating-card--2">
              <span className="d4__card-emoji">📱</span>
              <span>Mobile Apps</span>
            </div>
            <div className="d4__floating-card d4__floating-card--3">
              <span className="d4__card-emoji">🤖</span>
              <span>AI Integration</span>
            </div>
          </div>
        </div>
      </header>

      <section className="d4__stats">
        <div className="d4__stats-inner">
          {stats.map((stat, i) => (
            <div key={i} className="d4__stat">
              <span className="d4__stat-value">{stat.value}</span>
              <span className="d4__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="d4__section">
        <div className="d4__section-inner">
          <div className="d4__about">
            <div className="d4__about-text">
              <h2 className="d4__section-title">
                <span className="d4__title-number">01</span>
                A bit about me
              </h2>
              <div className="d4__about-content">
                <p>
                  I'm a frontend developer who's passionate about teaching and sharing
                  knowledge. My journey started with a simple curiosity about how websites
                  work, and today I build production applications for startups and mentor
                  developers around the world.
                </p>
                <p>
                  I believe in learning by doing. Every project I take on is an opportunity
                  to solve real problems and create value. I bring that same approach to
                  my mentorship – practical, hands-on, and focused on outcomes.
                </p>
              </div>
            </div>
            <div className="d4__about-skills">
              <h3 className="d4__skills-title">Technologies I work with</h3>
              <div className="d4__skills-grid">
                {skills.core.map((skill, i) => (
                  <div key={i} className="d4__skill">
                    <div className="d4__skill-header">
                      <span className="d4__skill-name">{skill.name}</span>
                      <span className="d4__skill-percent">{skill.level}%</span>
                    </div>
                    <div className="d4__skill-bar">
                      <div className="d4__skill-fill" style={{ width: `${skill.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mentorship" className="d4__section d4__mentorship">
        <div className="d4__section-inner">
          <div className="d4__section-header">
            <h2 className="d4__section-title">
              <span className="d4__title-number">02</span>
              Mentorship & Training
            </h2>
            <p className="d4__section-desc">
              Whether you're starting your journey or looking to level up,
              I offer personalized programs to help you reach your goals.
            </p>
          </div>
          <div className="d4__programs">
            {trainingPrograms.map((program) => (
              <div
                key={program.id}
                className={`d4__program ${program.featured ? 'd4__program--featured' : ''}`}
              >
                {program.featured && (
                  <span className="d4__program-badge">Recommended</span>
                )}
                <div className="d4__program-header">
                  <h3 className="d4__program-title">{program.title}</h3>
                  <p className="d4__program-duration">{program.duration}</p>
                </div>
                <p className="d4__program-desc">{program.description}</p>
                <ul className="d4__program-features">
                  {program.features.map((feature, i) => (
                    <li key={i}>
                      <span className="d4__check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="d4__program-footer">
                  <span className="d4__program-price">{program.price}</span>
                  <a href="#contact" className="d4__btn d4__btn--small">
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="d4__section">
        <div className="d4__section-inner">
          <h2 className="d4__section-title">
            <span className="d4__title-number">03</span>
            Recent Projects
          </h2>
          <div className="d4__projects">
            {projects.filter(p => p.featured).map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="d4__project"
              >
                <div className="d4__project-image">
                  <div className="d4__project-icon">{project.title[0]}</div>
                </div>
                <div className="d4__project-content">
                  <span className="d4__project-category">{project.category}</span>
                  <h3 className="d4__project-title">{project.title}</h3>
                  <p className="d4__project-desc">{project.description}</p>
                  <div className="d4__project-tech">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i} className="d4__tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="d4__section d4__services-section">
        <div className="d4__section-inner">
          <h2 className="d4__section-title">
            <span className="d4__title-number">04</span>
            How I Can Help
          </h2>
          <div className="d4__services">
            {services.map((service, i) => (
              <div key={service.id} className="d4__service">
                <span className="d4__service-number">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="d4__service-title">{service.title}</h3>
                <p className="d4__service-desc">{service.description}</p>
                <ul className="d4__service-list">
                  {service.features.map((feature, j) => (
                    <li key={j}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="d4__section d4__blog">
        <div className="d4__section-inner">
          <div className="d4__section-header">
            <h2 className="d4__section-title">
              <span className="d4__title-number">05</span>
              Latest Articles
            </h2>
            <a href="#" className="d4__view-all">View all posts →</a>
          </div>
          <div className="d4__posts">
            {blogPosts.map((post) => (
              <a key={post.id} href="#" className="d4__post">
                <div className="d4__post-meta">
                  <span className="d4__post-date">{post.date}</span>
                  <span className="d4__post-time">{post.readTime}</span>
                </div>
                <h3 className="d4__post-title">{post.title}</h3>
                <p className="d4__post-excerpt">{post.excerpt}</p>
                <div className="d4__post-tags">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="d4__tag">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="d4__section d4__testimonials">
        <div className="d4__section-inner">
          <h2 className="d4__section-title">
            <span className="d4__title-number">06</span>
            What People Say
          </h2>
          <div className="d4__testimonial-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="d4__testimonial">
                <p className="d4__testimonial-text">"{testimonial.content}"</p>
                <div className="d4__testimonial-author">
                  <div className="d4__author-avatar">{testimonial.name[0]}</div>
                  <div className="d4__author-info">
                    <span className="d4__author-name">{testimonial.name}</span>
                    <span className="d4__author-role">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="d4__section d4__contact">
        <div className="d4__section-inner">
          <div className="d4__contact-grid">
            <div className="d4__contact-content">
              <h2 className="d4__section-title">
                <span className="d4__title-number">07</span>
                Let's Work Together
              </h2>
              <p className="d4__contact-desc">
                Have a project in mind or want to learn more about mentorship?
                I'd love to hear from you. Let's chat about how I can help.
              </p>
              <div className="d4__contact-info">
                <a href={`mailto:${personalInfo.email}`} className="d4__contact-item">
                  <span className="d4__contact-icon">✉️</span>
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="d4__contact-item">
                  <span className="d4__contact-icon">💻</span>
                  <span>GitHub</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="d4__contact-item">
                  <span className="d4__contact-icon">💼</span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
            <form className="d4__form">
              <div className="d4__form-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              <div className="d4__form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              <div className="d4__form-group">
                <label htmlFor="interest">I'm interested in...</label>
                <select id="interest">
                  <option value="">Select an option</option>
                  <option value="project">Working on a project</option>
                  <option value="mentorship">Mentorship program</option>
                  <option value="training">Team training</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="d4__form-group">
                <label htmlFor="message">Your Message</label>
                <textarea id="message" placeholder="Tell me about your project or goals..." rows={4}></textarea>
              </div>
              <button type="submit" className="d4__btn d4__btn--primary d4__btn--full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="d4__footer">
        <div className="d4__footer-inner">
          <div className="d4__footer-left">
            <a href="/glm" className="d4__logo">Zafer AYAN</a>
            <p>Frontend Developer & Mentor</p>
          </div>
          <div className="d4__footer-right">
            <p>© 2024 Zafer AYAN. Made with ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Design4
