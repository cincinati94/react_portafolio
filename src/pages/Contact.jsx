import React from "react";
import Input from "../components/Input";

const Contact = () => {
  return(
  <div className="contact-container">
    <h2>Contact</h2>
    <form>
    <Input type="email" placeholder={'Name'}/>
    <Input type="email" placeholder={"Email"} />
    <Input type="email" placeholder={"Message"}/>
    </form>
  </div>
  )
};

export default Contact;
