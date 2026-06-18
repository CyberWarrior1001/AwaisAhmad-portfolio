import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/CyberWarrior1001/JobPortal_Mern_Stack_Project" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3> Job Portal Web Application (MERN Stack) </h3>
              <p>
                ➢ Developed a full-stack recruitment platform using the MERN stack with role-based
                authentication and JWT security. <br />
                ➢ Designed RESTful APIs to handle job postings, user profiles, and application tracking.<br />
                ➢ Implemented resume upload functionality and advanced search/filter system.<br />
                ➢ Structured backend using modular MVC architecture for scalability and maintainability.<br />
                ➢ Built responsive UI ensuring cross-browser compatibility and optimized performance.<br />
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Tailwind CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CyberWarrior1001/E-Learning-Platform-Udemy-Like-MERN-Stack-project" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                {/* <a href="Live Hosted Website link" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>  */}
              </div>
            </header>
            <div className="body">
              <h3>Learning Management System (MERN Stack)</h3>
              <p>
                ➢ Engineered a scalable LMS platform supporting instructor and student dashboards. <br />
                ➢ Implemented course publishing, enrollment, and protected routes using JWT authentication. <br />
                ➢ Designed CRUD-based REST APIs for course and user management. <br />
                ➢ Applied modular backend architecture for improved maintainability and scalability. <br />
                ➢ Developed responsive UI with performance-focused component structure.  <br />
              </p>
            </div>
            <footer> 
              <ul className="tech-list"> 
                <li>React.js</li> 
                <li>Node.js</li> 
                <li>Express</li> 
                <li>MongoDB</li> 
                <li>Tailwind CSS</li> 
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/CyberWarrior1001/React-Food-Delivery-frontend" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://react-food-delivery-frontend.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Tasty Burger – Food Delivery Frontend (React.js)</h3>
              <p>
                A modern and responsive food delivery web application built with React and Vite. The project features an intuitive user interface for browsing food items and menu categories, providing a smooth user experience across desktop and mobile devices. Built using React functional components and modern JavaScript for fast performance and scalable frontend development.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Vite</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>



      </div>
    </Container>
  );
}