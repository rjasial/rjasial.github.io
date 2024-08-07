import React, { useState, useEffect } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [aboutVisible, setAboutVisible] = useState(false);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [resumeVisible, setResumeVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [appVisible, setAppVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      setAboutVisible(scrollPosition > windowHeight / 2);
      setSkillsVisible(scrollPosition > windowHeight);
      setProjectsVisible(scrollPosition > windowHeight * 1.5);
      setResumeVisible(scrollPosition > windowHeight * 2);
      setContactVisible(scrollPosition > windowHeight * 2.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="App">
        <div className={`App-name gupter-bold ${appVisible ? 'visible' : ''}`}>RITIK JASIAL</div>
        <div className={`App-title gupter-regular ${appVisible ? 'visible' : ''}`}>Full Stack Developer</div>
      </div>
      <div className={`About ${aboutVisible ? 'visible' : ''}`}>
        <div className={`background-text gupter-bold ${aboutVisible ? 'visible' : ''}`}>About Me</div>
        <p className="gupter-regular">
          Passionate developer with a portfolio of dynamic full-stack projects showcasing my skills and creativity.
        </p>
      </div>
      <div className={`Skills ${skillsVisible ? 'visible' : ''}`}>
        <div className={`background-text gupter-bold ${skillsVisible ? 'visible' : ''}`}>Skills</div>
        <div className="skills-container">
          {[
            { icon: "fab fa-java", name: "Java" },
            { icon: "fab fa-js-square", name: "JavaScript" },
            { icon: "fab fa-react", name: "React.js" },
            { icon: "fab fa-node", name: "Node.js" },
            { icon: "fab fa-html5", name: "HTML/CSS" },
            { icon: "fab fa-python", name: "Python" },
            { icon: "fas fa-cogs", name: "Agile Methods" },
            { icon: "fas fa-paint-brush", name: "UX/UI" },
            { icon: "fas fa-leaf", name: "MongoDB" },
            { icon: "fas fa-fire", name: "Firebase" },
            { icon: "fab fa-github", name: "Git/GitHub" },
            { icon: "fas fa-database", name: "MySQL" },
            { icon: "fas fa-cloud", name: "Cloud" },
            { icon: "fab fa-microsoft", name: "Azure" },
            { icon: "fab fa-aws", name: "AWS" },
            { icon: "fas fa-code-branch", name: "REST API" }
          ].map((skill, index) => (
            <div key={index} className={`skill-item ${skillsVisible ? 'visible' : ''}`}>
              <i className={skill.icon}></i>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className={`Projects ${projectsVisible ? 'visible' : ''}`}>
        <div className={`background-text gupter-bold ${projectsVisible ? 'visible' : ''}`}>Projects</div>
        <div className="projects-container">
          {[
            { href: "https://github.com/username/cryptographic-secure-messenger", name: "Cryptographic Secure Messenger", description: "In this project, I have used all the cryptographic algorithms to encrypt and decrypt messages." },
            { href: "https://github.com/username/p2p-loan-application", name: "P2P Loan Application", description: "A platform where individuals can send money to someone and keep track of when the money needs to be received or sent in the transaction." },
            { href: "https://github.com/username/project-3", name: "Project 3", description: "Brief description of Project 3." },
            { href: "https://github.com/username/project-4", name: "Project 4", description: "Brief description of Project 4." }
          ].map((project, index) => (
            <div key={index} className="project-box">
              <a href={project.href} className="project-name gupter-regular">{project.name}</a>
              <p className="project-description gupter-regular">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={`Contact ${contactVisible ? 'visible' : ''}`}>
        <div className={`background-text gupter-bold ${contactVisible ? 'visible' : ''}`}>Contact</div>
        <div className="contact-icons">
          <a href="mailto:ritikjasial00@gmail.com" className="contact-icon" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/your-profile" className="contact-icon" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-username" className="contact-icon" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
        </div>
        <a href="/path/to/your/resume.pdf" className="resume-download gupter-regular" download>
          <i className="fas fa-download"></i> My Resume
        </a>
      </div>
    </>
  );
}

export default App;
