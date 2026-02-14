import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");

  // Scroll progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus(""), 3000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

  const projects = [
    {
      title: "NexGenCV – AI-Powered Resume Builder",
      description:
        "Full-stack application using Java Spring Boot (MVC) with RESTful APIs and MySQL integration for automated resume generation with ATS-friendly PDF output",
      tech: ["Spring Boot", "Spring Security", "Hibernate", "MySQL", "Maven"],
      image: "📄",
      link: "https://github.com/Hritikkumarmahto",
    },
    {
      title: "Smart Inventory Management System",
      description:
        "Single page application leveraging Spring Boot microservices and React.js with JWT-based authentication and role-based authorization for secure inventory workflows",
      tech: ["Spring Boot", "React.js", "JWT", "MySQL", "Spring Data JPA"],
      image: "📦",
      link: "https://github.com/Hritikkumarmahto",
    },
    {
      title: "TechBlog Web Application",
      description:
        "Complete blog platform using Java Servlets, JSP, JDBC, and MySQL following MVC design pattern with secure authentication and session handling",
      tech: ["Java Servlets", "JSP", "JDBC", "MySQL", "MVC"],
      image: "✍️",
      link: "https://github.com/Hritikkumarmahto",
    },
    {
      title: "ApexWolf – Crypto Exchange Platform",
      description:
        "Web3-based crypto exchange platform with MetaMask wallet integration, real-time dashboards and interactive charts for blockchain transactions (IEEE Published)",
      tech: ["React", "Web3", "MetaMask", "Blockchain", "JavaScript"],
      image: "₿",
      link: "https://github.com/Hritikkumarmahto",
    },
    {
      title: "Amazon Product Review Sentiment Analysis",
      description:
        "Achieved 85% accuracy using Logistic Regression and Random Forest on Amazon product reviews with comprehensive preprocessing and feature engineering",
      tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "NLP"],
      image: "📊",
      link: "https://github.com/Hritikkumarmahto",
    },
    {
      title: "Stock Price Prediction Model",
      description:
        "Built LSTM-based regression models to forecast stock prices using historical datasets with technical indicators integration",
      tech: ["Python", "LSTM", "TensorFlow", "NumPy", "Matplotlib"],
      image: "📈",
      link: "https://github.com/Hritikkumarmahto",
    },
  ];

  const skills = {
    "Programming Languages": ["Java", "C++", "JavaScript", "SQL", "Python"],
    "Web Technologies": [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JSP",
      "Servlets",
      "REST APIs",
    ],
    "Frameworks & Libraries": [
      "Spring Boot",
      "Spring MVC",
      "React.js",
      "JDBC",
      "Hibernate",
      "PyTorch",
      "Pandas",
      "NumPy",
    ],
    Databases: ["MySQL", "MongoDB"],
    "Data Analytics": [
      "Excel",
      "Power BI",
      "Tableau",
      "Data Modeling",
      "Statistical Analysis",
    ],
    "Developer Tools": [
      "Git",
      "GitHub",
      "VS Code",
      "Eclipse",
      "Maven",
      "Jupyter Notebook",
    ],
    "Core Concepts": [
      "DSA",
      "OOP",
      "OS",
      "DBMS",
      "SDLC",
      "Machine Learning",
      "NLP",
    ],
  };

  const experience = [
    {
      role: "Java Full-Stack Developer Intern",
      company: "Infosys Springboard (Virtual)",
      period: "Nov 2025 - Present",
      description:
        "Developed smart inventory management SPA with Spring Boot microservices and React.js. Designed RESTful APIs with JWT authentication and implemented role-based authorization using MySQL and Spring Data JPA",
    },
    {
      role: "Research Publication",
      company: "IEEE INNOCOMP 2024",
      period: "2024",
      description:
        "Published research paper titled 'Exploring ApexWolf: A Crypto Exchange Website' at the International Conference on Emerging Innovations and Advanced Computing",
    },
    {
      role: "In-House Summer Training on NLP using Machine Learning",
      company: "Chandigarh University",
      period: "June - Aug 2023",
      description:
        "Completed intensive summer training focused on Natural Language Processing and Machine Learning. Gained hands-on experience with NLP techniques, sentiment analysis, text preprocessing, and ML model development",
    },
    {
      role: "BE, Computer Science and Engineering",
      company: "Chandigarh University",
      period: "2021 - 2025",
      description:
        "CGPA: 7.4/10. Focused on full-stack development, data structures & algorithms, and machine learning. Strong foundation in core CS concepts including OOP, DBMS, OS, and SDLC",
    },
  ];

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <span className="logo-bracket">{"<"}</span>
            <span className="logo-text">Hritik</span>
            <span className="logo-bracket">{"/>"}</span>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            {[
              "home",
              "about",
              "skills",
              "projects",
              "experience",
              "contact",
            ].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? "active" : ""}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-label">Full Stack Developer</div>
          <h1 className="hero-title">
            Hi, I'm Hritik
            <span className="gradient-text"> Kumar Mahto</span>
          </h1>
          <p className="hero-description">
            Computer Science graduate specializing in Java, Spring Boot,
            React.js & Data Analytics. Building scalable applications with
            modern technologies. Published IEEE researcher & LeetCode problem
            solver (250+).
          </p>

          {/* Social Links in Hero */}
          <div className="hero-social-links">
            <a
              href="https://github.com/Hritikkumarmahto"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="GitHub"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/hritik-kumar-mahto"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://leetcode.com/u/Hritik-Kumar-Mahto"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="LeetCode"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
              <span>LeetCode</span>
            </a>
            <a
              href="https://auth.geeksforgeeks.org/user/hritikkumarmahto1985"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="GeeksforGeeks"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M21.45 17.93c-1.32-.68-2.94-.42-3.98.71-.34.37-.61.79-.86 1.22-.72 1.24-1.33 2.55-2.42 3.45-1.23 1.02-2.78 1.39-4.36 1.39-2.76 0-5.21-1.42-6.57-3.77-.15-.26-.28-.54-.39-.83C1.85 17.75 2 15.01 3.7 12.85c1.83-2.33 4.89-3.37 7.82-2.67 1.26.3 2.39.99 3.22 1.97.23.27.43.57.61.88.65 1.12 1.45 2.14 2.45 2.96 1.13.93 2.47 1.52 3.92 1.73.39.05.79.08 1.19.08.28 0 .56-.02.84-.05 1.66-.19 3.17-.93 4.25-2.08.82-.87 1.39-1.92 1.67-3.06.28-1.14.25-2.34-.09-3.47-.59-1.95-2.01-3.52-3.91-4.31-1.29-.54-2.71-.67-4.09-.39-1.61.33-3.03 1.17-4.04 2.39-.15.18-.29.37-.41.57-.44.7-.76 1.47-.94 2.28-.19.84-.22 1.71-.09 2.56.27 1.76 1.18 3.32 2.55 4.42.16.13.33.25.51.36.95.6 2.07.83 3.17.66 1.12-.17 2.13-.76 2.82-1.66.16-.21.3-.43.42-.67.55-1.07 1.35-1.97 2.35-2.59 1.12-.7 2.44-.95 3.74-.71 1.32.24 2.49.95 3.31 2.01.43.56.75 1.19.93 1.87.38 1.41.19 2.94-.54 4.23-.28.49-.62.94-1.01 1.34-.97.99-2.26 1.61-3.67 1.76-.24.03-.49.04-.73.04z" />
              </svg>
              <span>GeeksforGeeks</span>
            </a>
            <a
              href="mailto:hritikkumarmahto1985@gmail.com"
              className="hero-social-link"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <span>Email</span>
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-social-link"
              title="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <span>Twitter</span>
            </a>
          </div>

          <div className="hero-cta">
            <button
              className="btn-primary"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </button>
            <button
              className="btn-secondary"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="hero-decoration">
          <div className="floating-card card-1">
            <div className="card-icon">⚡</div>
            <div className="card-text">Fast</div>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎯</div>
            <div className="card-text">Precise</div>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🚀</div>
            <div className="card-text">Scalable</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a Computer Science graduate from Chandigarh University with
                hands-on experience in full-stack development using Java, Spring
                Boot, React.js, and data analytics. I've designed RESTful APIs
                with JWT-based authentication and built scalable applications
                following industry best practices.
              </p>
              <p>
                My expertise spans across DSA, OOP, databases, and the complete
                SDLC. I've published research at IEEE INNOCOMP 2024 on
                blockchain technology and solved 250+ problems on LeetCode,
                demonstrating strong problem-solving skills. I'm passionate
                about building secure, scalable solutions and continuous
                learning.
              </p>
              <p>
                Currently seeking opportunities as a Software Engineer, Java
                Developer, or Data Analyst where I can contribute to innovative
                projects and grow as a versatile professional in the tech
                industry.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat-card">
                <div className="stat-number">7.4</div>
                <div className="stat-label">CGPA (2021-2025)</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">250+</div>
                <div className="stat-label">LeetCode Problems</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Major Projects</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6+</div>
                <div className="stat-label">Certifications</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">IEEE Publication</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">Internship</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">1</div>
                <div className="stat-label">Industry Training</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">100+</div>
                <div className="stat-label">DSA Problems (GFG)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="skill-category-title">{category}</h3>
                <div className="skill-items">
                  {items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">{project.image}</div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <div className="timeline">
            {experience.map((job, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-period">{job.period}</div>
                  <h3 className="timeline-role">{job.role}</h3>
                  <div className="timeline-company">{job.company}</div>
                  <p className="timeline-description">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="certifications">
        <div className="container">
          <h2 className="section-title">Certifications & Achievements</h2>
          <div className="cert-grid">
            <div className="cert-card">
              <div className="cert-icon">🎓</div>
              <h3 className="cert-title">Meta Frontend Development</h3>
              <p className="cert-issuer">Coursera</p>
              <a
                href="https://coursera.org/verify/7VAN4WH68SJU"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate →
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-icon">☕</div>
              <h3 className="cert-title">Java Full-Stack Developer</h3>
              <p className="cert-issuer">Board Infinity (Coursera)</p>
              <a
                href="https://coursera.org/verify/specialization/DRWGX5J3DH0S"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate →
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-icon">🤖</div>
              <h3 className="cert-title">NLP & Machine Learning</h3>
              <p className="cert-issuer">Chandigarh University</p>
              <a
                href="https://drive.google.com/file/d/1YqqZqCjasB5dNKv1X7UDN8_skM-94DZb/view"
                target="_blank"
                rel="noopener noreferrer"
                className="cert-link"
              >
                View Certificate →
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📊</div>
              <h3 className="cert-title">Visual Analytics with Tableau</h3>
              <p className="cert-issuer">Coursera</p>
              <a href="#" className="cert-link">
                Certified
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-icon">💻</div>
              <h3 className="cert-title">SQL (Intermediate)</h3>
              <p className="cert-issuer">HackerRank</p>
              <a href="#" className="cert-link">
                Certified
              </a>
            </div>
            <div className="cert-card">
              <div className="cert-icon">📝</div>
              <h3 className="cert-title">IEEE Research Publication</h3>
              <p className="cert-issuer">INNOCOMP 2024</p>
              <a href="#" className="cert-link">
                Published Paper
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's Work Together</h3>
              <p>
                I'm actively seeking opportunities in Software Engineering, Java
                Development, and Data Analytics. Whether you have a project,
                internship, or full-time role, feel free to reach out!
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="contact-icon">📧</span>
                  <span>hritikkumarmahto1985@gmail.com</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📱</span>
                  <span>+91 96936 35492</span>
                </div>
                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span>Kishanganj, Bihar, India</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/Hritikkumarmahto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/hritik-kumar-mahto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://leetcode.com/u/Hritik-Kumar-Mahto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  LeetCode
                </a>
                <a
                  href="mailto:hritikkumarmahto1985@gmail.com"
                  className="social-link"
                >
                  Email
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-submit"
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </button>
              {formStatus === "success" && (
                <div className="form-message success">
                  Message sent successfully!
                </div>
              )}
              {formStatus === "error" && (
                <div className="form-message error">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Hritik Kumar Mahto. Built with React & Spring Boot.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
