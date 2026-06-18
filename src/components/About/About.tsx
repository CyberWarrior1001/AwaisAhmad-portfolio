import { Container } from "./styles";
// import VinayakSingh from "../../assets/VinayakSingh.webp";
import AwaisAhmad from '../../assets/AwaisAhmad.png';
import python from "../../assets/python.svg";
// import java from "../../assets/java.svg";
import cpp from '../../assets/cpp.svg'
// import wordpress from "../../assets/wordpress.svg";
import nodejs from '../../assets/NodeJs.svg';
// import shopify from "../../assets/shopify.svg";
import tallwind from '../../assets/Tailwind CSS.svg'
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
// import nodeIcon from "../../assets/node-icon.svg";
import git from '../../assets/Git.svg';
import github from '../../assets/github.svg';
import linux from '../../assets/Linux.svg';
import mongodb from '../../assets/MongoDB.svg';
import express from '../../assets/Express.svg';
import mySql from '../../assets/MySQL.svg';
import postman from '../../assets/Postman.svg';
import flask from '../../assets/Flask.svg';
import gsap from '../../assets/gsap.svg'
import frammerMotion from '../../assets/frammer-motion.svg'
import swiperJs from '../../assets/swiperJs.svg'

import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={100}>
          <p>
            Hi! I'm Awais Ahmad, a Full Stack MERN Developer from Mardan, Pakistan,
            passionate about building modern, scalable, and user-friendly web applications.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={200}>
          <p className="about-para">
            I specialize in MongoDB, Express.js, React.js, and Node.js, with additional
            experience in Python and Flask development. I enjoy creating complete
            solutions from responsive frontends to secure backend APIs.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={300}>
          <p className="about-para">
            My projects include recruitment platforms, Learning Management Systems,
            and e-commerce applications featuring JWT authentication, RESTful APIs,
            database design, and modern UI/UX practices.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={400}>
          <div className="education">
            <h3>Education:</h3>
            <h4> Bs Software Engineering (BSCE)</h4>
            <p>Virtual University of Pakistan <span>(Distance Learning)</span> | Jan 2026 - Present</p>
            <p>0.0 CGPA <span>(first semister)</span></p>
          </div>
        </ScrollAnimation>
        {/* <ScrollAnimation animateIn="fadeInLeft" delay={550}>
          <div className="experience">
            <h3>Experience:</h3><h4>Software Developer</h4>
            <p>company Name | starting month year - Present</p>
            <p>city, pakistan</p>
          </div>
        </ScrollAnimation> */}

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={python} alt="python" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={cpp} alt="cpp" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodejs} alt="NodeJs" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={tallwind} alt="Tallwind" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={boostrapIcon} alt="bootstrap" />
            </ScrollAnimation>
          </div>
        </div>
          

          {/* Line 2 */}
         <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={git} alt="git" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}>
              <img src={github} alt="github" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={linux} alt="Linux" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={mongodb} alt="mongodb" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={express} alt="Express" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={mySql} alt="My-sql" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={postman} alt="postman" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={flask} alt="flask" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={gsap} alt="gsap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={frammerMotion} alt="frammer-motion" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.20 * 1000}>
              <img src={swiperJs} alt="swiperJs" />
            </ScrollAnimation>
          </div>
        </div>
          
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" className="profile-outer-div" delay={0.21 * 1000}>

          <img src={AwaisAhmad} className="profile-img" alt="AwaisAhmad" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
