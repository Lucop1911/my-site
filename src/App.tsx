import { useState, useEffect } from 'react';
import {
  Github,
  Twitter,
  MessageSquare,
  ExternalLink,
  Code2,
  Terminal,
  Sparkles,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import './App.css';

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
  colorClass: string;
}

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav-container ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="nav-content">
        <a href="#" className="nav-logo">
          Portfolio
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
  const phrases: string[] = [
    "19 Years Old",
    "Full Stack Developer", 
    "Rust Enthusiast",
    "I use arch btw"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>('');
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150);

  useEffect(() => {
    const handleTyping = (): void => {
      const fullText: string = phrases[currentPhrase];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(100);
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentPhrase((currentPhrase + 1) % phrases.length);
        }
      }
    };

    const timer: ReturnType<typeof setTimeout> = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhrase, typingSpeed, phrases]);

  return (
    <section className="hero-section">
      <div className="hero-bg"></div>
      
      <div className="hero-content">
        <div className="hero-badge animate-fade-in">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="hero-badge-text">Italian Software Developer</span>
        </div>
        
        <h1 className="hero-title animate-gradient animate-fade-in">
          Lucop1911
        </h1>
        
        <div className="hero-typing-container">
          <div className="hero-typing">
            <Terminal className="w-8 h-8 text-blue-400" />
            <span>{currentText}</span>
            <span className="hero-cursor animate-pulse"></span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll animate-bounce">
        <div className="hero-scroll-indicator">
          <div className="hero-scroll-dot animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section section-bg-gray">
      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="about-grid">
          <div className="about-text animate-fade-in-up delay-100">
            <p>
              I'm Luca, a software developer from Italy whose journey began at 15 with HTML, CSS, and Python. That early introduction to programming opened up a world of possibilities, and I've been passionate about learning and building ever since.
            </p>
            <p>
              I specialize in desktop application development, but my expertise extends across the full stack—from responsive frontends to scalable backend architectures and database design. I'm particularly drawn to systems-level programming and performance optimization, which is why I've invested significant time in languages like Rust and C. I believe in choosing the right tool for each project and continuously improving my craft through hands-on exploration.
            </p>
          </div>
          
          <div className="about-cards animate-fade-in-up delay-200">
            <div className="about-card">
              <div className="about-card-icon">
                <Code2 className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="about-card-title">Technical Skills</h3>
              <p className="about-card-text">Rust, C, Javascript, Typescript, Node.js, React, Next.js, Vue.js, Nw.js, Vite, Docker, MySQL/ MariaDB, SQLite, Linux</p>
            </div>
            
            <div className="about-card">
              <div className="about-card-icon">
                <Terminal className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="about-card-title">Experience</h3>
              <p className="about-card-text">4+ years in software development,</p>
              <p className='about-card-text'>Linux user since 2021</p>
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
      name: "Rtop",
      description: "The famous linux htop command rewritten in Rust using ratatui library",
      github: "https://github.com/Lucop1911/rtop",
      tags: ["Rust", "Ratatui", "System Monitoring"]
    },
    {
      name: "Quick search",
      description: "A Rust quick search bar built for Linux tiling window managers that integrates perfectly with the system",
      github: "https://github.com/Lucop1911/quick_search",
      tags: ["Rust", "Linux", "Tiling Window Managers"]
    },
    {
      name: "CLI search tool",
      description: "Yet another CLI based tool built in C that can perform fast searches through directories and files",
      github: "https://github.com/Lucop1911/CLI-search-tool",
      tags: ["C", "CLI", "Lightweight"]
    },
    {
      name: "Rsquid",
      description: "A terminal based client used to connect and execute queries on MySQL, MariaDB, PostgreSQL and SQLite databases",
      github: "https://github.com/Lucop1911/rsquid",
      tags: ["Rust", "MySQL", "MariaDB", "PostgreSQL", "SQLite", "SQL"]
    },
    {
      name: "Tech Scraper",
      description: "A Chrome extension that helps users identify the technologies used to build websites",
      github: "https://github.com/Lucop1911/tech-scraper",
      tags: ["Browser-extension", "Vue.js", "Vite", "Typescript"]
    },
    {
      name: "My-site",
      description: "The site you are currently on, built in React",
      github: "https://github.com/Lucop1911/my-site",
      tags: ["Typescript", "React", "Vite", "Website"]
    },
  ];

  return (
    <section id="projects" className="section section-bg-gradient">
      <div className="section-container-wide">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="projects-grid">
          {projects.map((project: Project, index: number) => (
            <div
              key={index}
              className="project-card animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-header">
                <Github className="w-10 h-10 project-icon" />
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              <h3 className="project-title">
                {project.name}
              </h3>
              
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
    { icon: Github, url: "https://github.com/Lucop1911", label: "GitHub", colorClass: "hover-purple" },
    { icon: Twitter, url: "https://x.com/Luca1911_", label: "X", colorClass: "hover-blue" },
    { icon: MessageSquare, url: "https://discord.com/users/luca_1911", label: "Discord", colorClass: "hover-indigo" },
  ];

  return (
    <section id="contact" className="section section-bg-gray">
      <div className="contact-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title">Let's Connect</h2>
          <div className="section-divider" style={{ margin: '0 auto' }}></div>
        </div>
        
        <p className="contact-description animate-fade-in-up delay-100">
          I'm always open to discussing new projects, creative ideas, or opportunities.
        </p>
        
        <div className="social-links">
          {socialLinks.map((link: SocialLink, index: number) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${link.colorClass} animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <link.icon className="w-8 h-8 social-icon" />
              <span className="social-label">{link.label}</span>
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
      <p>© 2026 Lucop1911. Built with React & TypeScript</p>
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