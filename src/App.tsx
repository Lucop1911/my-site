import {
  Github,
  Twitter,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './App.css';

const currentYear = new Date().getFullYear();
const yearsOfExperience = currentYear - 2022;

interface Project {
  name: string;
  description: string;
  github: string;
  tags: string[];
}

interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

const Navigation: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <a href="#" className="nav-logo">
          Luca.
        </a>
        
        <div className="nav-links">
          {['About', 'Projects', 'Contact'].map((item: string) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-label">Software Developer</span>
        
        <h1 className="hero-title">
          Lucop1911
        </h1>
        
        <p className="hero-subtitle">
          Full-stack developer focused on building reliable, efficient software. 
          I work with Rust, C, and modern web technologies to create applications 
          that perform well and scale properly.
        </p>
        
        <div className="hero-links">
          <a href="#projects" className="hero-link">View Work</a>
          <a href="#contact" className="hero-link">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section section-alt">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a software developer from Italy with over {yearsOfExperience} years of experience building 
              desktop applications, backend systems, and developer tools. I started programming 
              at 15 and have since worked with a variety of technologies across the stack.
            </p>
            <p>
              My focus is on writing clean, maintainable code and building software that solves 
              real problems. I prefer simplicity over complexity and choose the right tool for 
              each job—whether that's Rust for performance-critical systems or TypeScript for 
              web applications.
            </p>
          </div>
          
          <div className="about-info">
            <div className="about-item">
              <div className="about-item-title">Stack</div>
              <div className="about-item-value">Rust, C, TypeScript, Node.js, React, Next.js, Vue.js, Python</div>
            </div>
            <div className="about-item">
              <div className="about-item-title">Tools</div>
              <div className="about-item-value">Linux, Docker, SQLite, PostgreSQL, MySQL/ MariaDB, MongoDB</div>
            </div>
            <div className="about-item">
              <div className="about-item-title">Focus</div>
              <div className="about-item-value">Desktop apps, CLI tools, backend systems</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      name: "g-lang",
      description: "A dynamically-typed programming language built in Rust with closures, structs, modules, and async support.",
      github: "https://github.com/Lucop1911/g-lang",
      tags: ["Rust", "Interpreter"],
    },
    {
      name: "Rtop",
      description: "A Rust reimplementation of the Linux htop command using the ratatui library for the terminal UI.",
      github: "https://github.com/Lucop1911/rtop",
      tags: ["Rust", "TUI"],
    },
    {
      name: "quick_search",
      description: "A quick search bar for Linux tiling window managers, built in Rust for minimal resource usage.",
      github: "https://github.com/Lucop1911/quick_search",
      tags: ["Rust", "Linux"],
    },
    {
      name: "rsquid",
      description: "A terminal SQL client supporting MySQL, MariaDB, PostgreSQL, and SQLite databases.",
      github: "https://github.com/Lucop1911/rsquid",
      tags: ["Rust", "SQL"],
    },
    {
      name: "CLI-search-tool",
      description: "A fast CLI search utility written in C for searching through files and directories.",
      github: "https://github.com/Lucop1911/CLI-search-tool",
      tags: ["C", "CLI"],
    },
    {
      name: "tech-scraper",
      description: "A Chrome extension that identifies technologies used on websites.",
      github: "https://github.com/Lucop1911/tech-scraper",
      tags: ["TypeScript", "Vue.js"],
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          <div className="section-line"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project: Project, index: number) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <span className="project-name">{project.name}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              
              <p className="project-description">
                {project.description}
              </p>
              
              <div className="project-tags">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection: React.FC = () => {
  const socialLinks: SocialLink[] = [
    { icon: Github, url: "https://github.com/Lucop1911", label: "GitHub" },
    { icon: Twitter, url: "https://x.com/Luca1911_", label: "X" },
    { icon: MessageSquare, url: "https://discord.com/users/luca1911__", label: "Discord" },
  ];

  return (
    <section id="contact" className="section section-alt">
      <div className="contact-content">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-line" style={{ margin: '0 auto' }}></div>
        </div>
        
        <p className="contact-text">
          Feel free to reach out for collaborations, questions, or just to say hello.
        </p>
        
        <div className="contact-links">
          {socialLinks.map((link: SocialLink, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <link.icon className="w-5 h-5" style={{ marginRight: '0.5rem' }} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© {currentYear} Lucop1911</p>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;