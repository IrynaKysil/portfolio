import React from "react";
import Typed from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




const Header = () => {
  const githubIconWhite = <FontAwesomeIcon color="white" size="4x" icon={faGithub} />; 
  const linkedinIconWhite = <FontAwesomeIcon color="white" size="4x" icon={faLinkedin} />;  
  
  return (
    <div className="header-wraper" id="home">
      <div className="main-info">
        <h1>Hello, I'm Iryna</h1>        
        <Typed
          className="typed-text"
          strings={["Web Developer", "Frontend Developer", "Full Stack Developer"]}
          typeSpeed={40}
          backSpeed={60}
          loop
         />         
         <div className="contact-links">        
         <a href="https://github.com/IrynaKysil" >{githubIconWhite}</a>
          
         <a href="https://www.linkedin.com/in/iryna-kysil/" >{linkedinIconWhite}</a>          
         </div>         
      </div>
    </div>
  )
}

export default Header
