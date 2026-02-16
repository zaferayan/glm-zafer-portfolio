import './Landing.css'

const designs = [
  {
    id: 1,
    title: 'Terminal Developer',
    description: 'Code-focused aesthetic with terminal vibes and developer-first design',
    theme: 'dark',
  },
  {
    id: 2,
    title: 'Minimal Portfolio',
    description: 'Clean, sophisticated portfolio with elegant typography and whitespace',
    theme: 'light',
  },
  {
    id: 3,
    title: 'AI Futurist',
    description: 'Modern AI-powered theme with gradient meshes and futuristic elements',
    theme: 'dark',
  },
  {
    id: 4,
    title: 'Education Hub',
    description: 'Mentorship-focused design with approachable warmth and clarity',
    theme: 'light',
  },
  {
    id: 5,
    title: 'Bold Creative',
    description: 'Experimental design with bold typography and unconventional layouts',
    theme: 'dark',
  },
]

function Landing() {
  return (
    <div className="landing">
      <div className="landing__container">
        <header className="landing__header">
          <h1 className="landing__title">Zafer AYAN</h1>
          <p className="landing__subtitle">Frontend Developer & React Native Developer</p>
          <p className="landing__description">
            Five unique designs, five different stories. Choose your experience.
          </p>
        </header>

        <div className="landing__grid">
          {designs.map((design) => (
            <a
              key={design.id}
              href={`/${design.id}`}
              className={`landing__card landing__card--${design.theme}`}
            >
              <span className="landing__card-number">/{design.id}</span>
              <h2 className="landing__card-title">{design.title}</h2>
              <p className="landing__card-description">{design.description}</p>
              <div className="landing__card-arrow">→</div>
            </a>
          ))}
        </div>

        <footer className="landing__footer">
          <p>Choose a design to explore different facets of my work</p>
        </footer>
      </div>
    </div>
  )
}

export default Landing
