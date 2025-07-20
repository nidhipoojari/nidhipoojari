import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { useCallback } from 'react';
import profileImage from './images/profile_.png';
import educationImage from './images/education.webp';
import workExperienceImage from './images/workexperience.png';

const HERO_IMAGE = profileImage; // Using local profile image
const CARD_IMAGES = [
  educationImage, // Education - using local image
  workExperienceImage, // Experience - using local image
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80', // Projects
];

function Home() {
  const navigate = useNavigate();
  const handleEducationClick = useCallback(() => {
    navigate('/education');
  }, [navigate]);
  
  const handleExperienceClick = useCallback(() => {
    navigate('/experience');
  }, [navigate]);

  const handleProjectsClick = useCallback(() => {
    navigate('/projects');
  }, [navigate]);

  return (
    <main>
      <section className="hero">
        <h1 className="hero-title">
          SOFTWARE <br /> DEVE<span className="hero-title-offset">LOPER</span>
        </h1>
        <img
          src={HERO_IMAGE}
          alt="User cutout"
          className="hero-image"
          draggable="false"
        />
      </section>
      <section className="cards-section" aria-label="Main navigation">
        <div className="card" onClick={handleEducationClick} style={{cursor: 'pointer'}} tabIndex={0} role="button" aria-label="Go to Education" onKeyPress={e => {if(e.key==='Enter'){handleEducationClick();}}}>
          <img src={CARD_IMAGES[0]} alt="Education" className="card-image" />
          <div className="card-overlay">
            <span className="card-label">EDUCATION</span>
          </div>
        </div>
        <div className="card" onClick={handleExperienceClick} style={{cursor: 'pointer'}} tabIndex={0} role="button" aria-label="Go to Experience" onKeyPress={e => {if(e.key==='Enter'){handleExperienceClick();}}}>
          <img src={CARD_IMAGES[1]} alt="Experience" className="card-image" />
          <div className="card-overlay">
            <span className="card-label">EXPERIENCE</span>
          </div>
        </div>
        <div className="card" onClick={handleProjectsClick} style={{cursor: 'pointer'}} tabIndex={0} role="button" aria-label="Go to Projects" onKeyPress={e => {if(e.key==='Enter'){handleProjectsClick();}}}>
          <img src={CARD_IMAGES[2]} alt="Projects" className="card-image" />
          <div className="card-overlay">
            <span className="card-label">PROJECTS</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function EducationPage() {
  const navigate = useNavigate();
  
  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="education-page">
      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        ← Back
      </button>
      
      <section>
        <h2 className="edu-section-title">
          🎓 EDUCATION
        </h2>
        <div className="edu-timeline">
          <div className="edu-timeline-spine" />
          <div className="edu-timeline-entry">
            <span className="edu-timeline-dot" />
            <div className="edu-degree">BE in Electronics and Telecommunication Engineering</div>
            <div className="edu-duration">2016 – 2020</div>
            <div className="edu-institute">SIES Graduate School of Technology</div>
            <div className="edu-description">
              Graduated with First Class, specialized in Software Development. Led final year project on scalable web applications.
            </div>
          </div>
          <div className="edu-timeline-entry">
            <span className="edu-timeline-dot" />
            <div className="edu-degree">High School (Science Stream)</div>
            <div className="edu-duration">2016</div>
            <div className="edu-institute">New English Junior College</div>
            <div className="edu-description">
              Focused on mathematics and computer science.
            </div>
          </div>
          <div className="edu-timeline-entry">
            <span className="edu-timeline-dot" />
            <div className="edu-degree">High School</div>
            <div className="edu-duration">2014</div>
            <div className="edu-institute">Fatima High School</div>
            <div className="edu-description">
              
            </div>
          </div>
        </div>
      </section>
      <section className="certifications-section">
        <h3 className="cert-section-title">🏆 CERTIFICATIONS</h3>
        <div className="cert-list">
          <div className="cert-item">
            <span className="cert-bullet">&#9658;</span>
            <div><strong>CKA Certification Course- Certified Kubernetes Administrator</strong></div>
            <div>by KodeKloud &middot; Issued June 2025</div>
            <a className="cert-link" href="https://learn.kodekloud.com/user/certificate/83e423bc-8b6a-4f96-b28d-1303d92cf2b6" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
          <div className="cert-item">
            <span className="cert-bullet">&#9658;</span>
            <div><strong>Linux Foundation Certified System Administrator(LFCS)</strong></div>
            <div>by KodeKloud &middot; Issued June 2025</div>
            <a className="cert-link" href="https://learn.kodekloud.com/user/certificate/624680cf-f60a-4824-8b96-01555d6d472c" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
          <div className="cert-item">
            <span className="cert-bullet">&#9658;</span>
            <div><strong>Fundamentals Of DevOps</strong></div>
            <div>by KodeKloud &middot; Issued July 2025</div>
            <a className="cert-link" href="https://certificates.kodekloud.com/72b17bf3-21c1-4211-a286-115c129c058d/4f39ca81-2dd4-4b9c-a62c-4a83dd995b96/a56a32df-d8ac-4d67-b05b-b9c381b337a1.pdf" target="_blank" rel="noopener noreferrer">View Certificate</a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExperiencePage() {
  const navigate = useNavigate();
  
  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="experience-page">
      <div className="experience-container">
        {/* Back Button */}
        <button className="back-button" onClick={handleBackClick}>
          ← Back
        </button>

        <div className="experience-content">
          {/* Profile Section */}
          <div className="profile-section">
            <div className="profile-image">
              <img src={profileImage} alt="Nidhi Poojari" className="profile-photo" />
            </div>
            <h1 className="profile-name">Nidhi Poojari</h1>
            <p className="profile-designation">Software Developer</p>
            <p className="profile-company">Freelance</p>
            
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <a href="https://nidhipoojari.com" target="_blank" rel="noopener noreferrer">nidhipoojari.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:nidhipoojari702@gmail.com">nidhipoojari702@gmail.com</a>
              </div>

            </div>
            
            <button className="download-resume-btn">
              📄 Download Resume
            </button>
          </div>

          {/* Work Experience Section */}
          <div className="work-experience-section">
            <h2 className="section-title">Work Experience</h2>
            
            <div className="job-entry">
              <div className="job-header">
                <div className="job-company">Tata Consultancy Services</div>
                <div className="job-date">2021 - 2024</div>
              </div>
              <div className="job-role">System Engineer</div>
              <div className="job-description">
              Provided end-to-end production support for the BSE trading system using C++, MySQL, Linux, and automation tools, ensuring seamless live market operations and earning TCS Gems awards for outstanding performance.
              </div>
            </div>
            
            <div className="job-divider"></div>
            
            <div className="job-entry">
              <div className="job-header">
                <div className="job-company">AppOctet Technologies Private Limited</div>
                <div className="job-date">2021 - 2021</div>
              </div>
              <div className="job-role">Full Stack Developer</div>
              <div className="job-description">
              Developed and maintained multiple client websites using RESTful API web services using Laravel framework in PHP, along with managing ongoing maintenance tasks.
              </div>
            </div>
            
            <div className="job-divider"></div>
            
            <div className="job-entry">
              <div className="job-header">
                <div className="job-company">The Professional Couriers</div>
                <div className="job-date">2020 - 2021</div>
              </div>
              <div className="job-role">Business Developer</div>
              <div className="job-description">
              Performed in-depth market research on comparable products and created a business plan based on these products.
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Technologies Section */}
        <div className="tools-section">
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="tools-grid">
            <div className="tool-item">
              <div className="tool-icon">⚛️</div>
              <span>React</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🟢</div>
              <span>Node.js</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🐘</div>
              <span>PHP</span>
            </div>
            <div className="tool-item">
              <div className="tool-icon">🐬</div>
              <span>MySQL</span>
            </div>
                          <div className="tool-item">
                <div className="tool-icon">🐧</div>
                <span>Linux</span>
              </div>
                          <div className="tool-item">
                <div className="tool-icon">💲</div>
                <span>Scripting</span>
              </div>
                          <div className="tool-item">
                <div className="tool-icon">🤵</div>
                <span>Jenkins</span>
              </div>
                          <div className="tool-item">
                <div className="tool-icon">⚓</div>
                <span>Kubernetes</span>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const navigate = useNavigate();
  
  const handleBackClick = useCallback(() => {
    navigate('/');
  }, [navigate]);

  return (
    <div className="projects-page">
      <div className="projects-container">
        {/* Back Button */}
        <button className="back-button" onClick={handleBackClick}>
          ← Back
        </button>

        <h1 className="page-title">Projects</h1>

        <div className="project">
          <h2 className="project-title">Stock Market Monitoring System</h2>
          <p className="tech-stack">C++, MySQL, Linux, Shell Script</p>
          <p className="project-desc">
            Designed and deployed a production-level system for BSE stock monitoring. Built tools to automate alerts and reporting.
          </p>
          <ul className="project-role">
            <li>End-to-end development & testing</li>
            <li>Live production support</li>
            <li>Performance optimization and monitoring</li>
          </ul>
        </div>

        <div className="project">
          <h2 className="project-title">API Integration Dashboard</h2>
          <p className="tech-stack">PHP (Laravel), JavaScript, MySQL</p>
          <p className="project-desc">
            Built RESTful APIs and integrated a dynamic admin dashboard to manage data pipelines and reporting tools.
          </p>
          <ul className="project-role">
            <li>Full-stack development</li>
            <li>Maintained and debugged critical endpoints</li>
            <li>Database design and optimization</li>
          </ul>
          <a href="https://github.com/your-repo" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>

        <div className="project">
          <h2 className="project-title">E-commerce Platform</h2>
          <p className="tech-stack">React, Node.js, MongoDB, Express</p>
          <p className="project-desc">
            Developed a complete e-commerce solution with user authentication, payment integration, and admin panel.
          </p>
          <ul className="project-role">
            <li>Frontend development with React</li>
            <li>Backend API development</li>
            <li>Payment gateway integration</li>
          </ul>
          <a href="https://github.com/your-repo" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>

        <div className="project">
          <h2 className="project-title">Portfolio Website</h2>
          <p className="tech-stack">React, CSS3, JavaScript</p>
          <p className="project-desc">
            Created a modern, responsive portfolio website with clean design and smooth animations.
          </p>
          <ul className="project-role">
            <li>UI/UX design and implementation</li>
            <li>Responsive design for all devices</li>
            <li>Performance optimization</li>
          </ul>
          <a href="https://github.com/your-repo" className="project-link" target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<>
            <Home />
            <footer className="footer">
              Nidhi Poojari &copy; {new Date().getFullYear()}
            </footer>
          </>} />
          <Route path="/education" element={<>
            <EducationPage />
            <footer className="footer">
              Nidhi Poojari &copy; {new Date().getFullYear()}
            </footer>
          </>} />
          <Route path="/experience" element={<>
            <ExperiencePage />
            <footer className="footer">
              Nidhi Poojari &copy; {new Date().getFullYear()}
            </footer>
          </>} />
          <Route path="/projects" element={<>
            <ProjectsPage />
            <footer className="footer">
              Nidhi Poojari &copy; {new Date().getFullYear()}
            </footer>
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
