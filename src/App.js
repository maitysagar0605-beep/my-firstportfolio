import './App.css';

import ecommercmeIg from './assets/E-COM IMG.jpg';
import portfolioImg from './assets/PORTFOLIO IMG 2.jpeg';
import caseStudyImg from './assets/DESIGN WORK IMG.jpg';
import heroImg from './assets/HERO IMG.jpg';

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', level: 'Intermediate' },
      { name: 'HTML', level: 'Advanced' },
      { name: 'CSS', level: 'Advanced' },
      { name: 'JavaScript', level: 'Intermediate' },
    ],
  },
  {
    category: 'UI/UX',
    items: [
      { name: 'Figma', level: 'Intermediate' },
      { name: 'Design Systems', level: 'Beginner' },
      { name: 'Wireframes', level: 'Intermediate' },
      { name: 'Responsive UI', level: 'Intermediate' },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', level: 'Beginner' },
      { name: 'VS Code', level: 'Advanced' },
      { name: 'CRA', level: 'Intermediate' },
      { name: 'Browser DevTools', level: 'Intermediate' },
    ],
  },
];

const projects = [
  {
    name: 'E-commerce UI',
    type: 'commerce',
    image: ecommercmeIg,
    role: 'UI design and frontend',
    description:
      'A modern shopping interface with product cards, clean filters, and responsive checkout-ready layouts.',
    tech: ['React', 'CSS', 'JavaScript'],
  },
  {
    name: 'Portfolio System',
    type: 'portfolio',
    image: portfolioImg,
    role: 'Frontend developer',
    description:
      'A structured personal site with focused sections for work, skills, resume access, and contact details.',
    tech: ['React', 'CSS Grid', 'Responsive Design'],
  },
  {
    name: 'Design Case Study',
    type: 'case',
    image: caseStudyImg,
    role: 'UI/UX designer',
    description:
      'A compact product story showing the problem, process, wireframes, and final interface direction.',
    tech: ['Figma', 'Design Systems', 'Prototyping'],
  },
];

const socials = [
  { label: 'GitHub', value: 'github.com/sagar', href: 'https://github.com/maitysagar0605-beep' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sagar', href: 'https://www.linkedin.com/in/sagar-maity-54a562407' },
  { label: 'Email', value: 'maitysagar0605@gmail.com', href: 'mailto:maitysagar0605@gmail.com' },
];

function ProjectPreview({ type, image }) {
  return (
    <div className={`project-preview ${type}`} aria-hidden="true">
      <div className="preview-window">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-body">
        {image ? (
          <img src={image} alt="Project preview" className="preview-image" />
        ) : (
          /* Wireframe fallback only when no image exists */
          <div className="preview-content">
            <div className="preview-line wide" />
            <div className="preview-line" />
            <div className="preview-grid">
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Sagar portfolio home">
          Sagar
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">UI Designer / Frontend Developer</p>
            <h1>Hi, I am Sagar</h1>
            <p className="hero-text">
              I design clean and user-friendly digital interfaces, then bring them to life
              with responsive React experiences.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View My Work
              </a>
              <a className="button secondary" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-panel" aria-label="Portfolio overview">
  {/* Background image covering the panel */}
  <img src={heroImg} alt="Hero background" className="hero-panel-bg" />

  {/* Content rendered on top of the image */}
  <div className="hero-panel-content">
    <div className="hero-panel-top">
      <span className="status-dot" />
      <span>Available for UI and Frontend Work</span>
    </div>

    <div className="metric-grid">
      <div>
        <strong>3+</strong>
        <span>Featured projects</span>
      </div>
      <div>
        <strong>4</strong>
        <span>Core frontend skills</span>
      </div>
      <div>
        <strong>100%</strong>
        <span>Responsive focus</span>
      </div>
    </div>
  </div>
</div>
</section>

        <section className="section about-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Me</p>
            <h2 className='eyebrow-text'>Building interfaces that feel simple, useful, and polished.</h2>
          </div>
          <div className="about-card">
            <p>
              I am a student at midnapore college(Autonomous) and currently pursuing a career in frontend development, focusing on UI, UX, and clean web
              interfaces. I try to turn ideas into responsive layouts that are easy to
              scan, pleasant to use, and practical for real users.
            </p>
            <p>
              My goal is to keep growing as a React developer while building stronger
              projects, sharper design systems, and thoughtful digital experiences.Also sharing my learning journey and insights through my portfolio to connect with others in the web development community.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading compact">
            <p className="eyebrow">Skills</p>
            <h2>What I can work with</h2>
          </div>
          <div className="skills-grid">
            {skills.map((group) => (
              <article className="skill-card" key={group.category}>
                <h3>{group.category}</h3>
                <div className="skill-list">
                  {group.items.map((skill) => (
                    <div className="skill-row" key={skill.name}>
                      <span>{skill.name}</span>
                      <small>{skill.level}</small>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Quality-focused work for portfolio review.</h2>
          </div>
 <div className="projects-grid">
  {projects.map((project) => (
    <article className="project-card" key={project.name}>
      
      {/* Pass image directly into ProjectPreview */}
      <ProjectPreview type={project.type} image={project.image} />

      <div className="project-content">
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <div className="project-meta">
          <span>{project.role}</span>
          <div className="tech-list">
            {project.tech.map((item) => (
              <small key={item}>{item}</small>
            ))}
          </div>
        </div>
        <div className="project-actions">
          <a href="#contact">Live Demo</a>
          <a href={socials[0].href} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  ))}
</div>
        </section>

        <section className="section case-study" aria-labelledby="case-study-title">
          <div className="section-heading compact">
            <p className="eyebrow">UI/UX Case Study</p>
            <h2 id="case-study-title">A simple process for better interfaces</h2>
          </div>
          <div className="process-grid">
            <article>
              <span>01</span>
              <h3>Problem</h3>
              <p>Users need pages that are clear, fast and easy to understand, also mobile friendly.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Process</h3>
              <p>Research the goal, sketch wireframes, define primary structure and spacing, then build the UI.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Final UI</h3>
              <p>Deliver polished screens with consistent components and responsive behavior.</p>
            </article>
          </div>
        </section>

        <section className="section resume-contact" id="contact">
          <div className="resume-panel">
            <p className="eyebrow">Resume</p>
            <h2>Want the quick version?</h2>
            <p>
              Use the resume action for a printable version of this portfolio, then add a
              dedicated PDF resume when it is ready.
            </p>
            <button className="button primary" type="button" onClick={() => window.print()}>
              Download Resume
            </button>
          </div>

          <div className="contact-panel">
            <p className="eyebrow">Contact</p>
            <h2>Let us build something clean.</h2>
            <div className="contact-links">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target={social.label === 'Email' ? undefined : '_blank'} rel={social.label === 'Email' ? undefined : 'noreferrer'}>
                  <span>{social.label}</span>
                  <strong>{social.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Sagar</span>
        <span>Copyright {currentYear}. Built with React.</span>
      </footer>
    </div>
  );
}

export default App;
