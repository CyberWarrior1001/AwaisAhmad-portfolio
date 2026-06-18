import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import whatsapp from '../../assets/whatsapp.svg'
import facebook from '../../assets/facebook.svg'


export function Footer() {
  return (
    <Container className="footer">
      <a href="https://AwaisAhmad-portfolio.vercel.app" target='_blank' className="logo">
        <span>www.AwaisAhmad</span>
        <span>-portfolio.vercel.app</span>
      </a>
      
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/awais-ahmad-dev"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/CyberWarrior1001"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://wa.me/923401096664?text=Hello%20Awais%20Ahmad%20I%20found%20your%20contact%20through%20portfolio%20site."
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=61571123619572"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="telegram" />
        </a>
        
      </div>
    </Container>
  )
}
