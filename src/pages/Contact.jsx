import React from "react";
import Logo from "../components/Logo";


const Contact = () => {
  return(
  <div className="contact-container" id="contact-container">
    <h2>Contact</h2>
    <div>
      <div className="info-contact">
        <Logo icon={'ic:round-email'} />
        <a href="mailto:cintiamartinezmarcellan@gmail.com" target="_blank" rel="noreferrer">cintiamartinezmarcellan@gmail.com</a>
      </div>
      <div className="info-contact">
        <Logo icon={'uil:linkedin'} />
        <a href="https://www.linkedin.com/in/cintia-martinez-marcellan" target="_blank" rel="noreferrer">Linkedin</a>
      </div>
      <div className="info-contact">
        <Logo icon={'icon-park:github'} />
        <a href="https://www.linkedin.com/in/cintia-martinez-marcellan" target="_blank" rel="noreferrer">gitHub</a>
      </div>
    </div>
  
  </div>
  )
};

export default Contact;
