import Label from "../components/Label";
import Skills from "./Skills";

const Resume = (props) => {
  return (
    <div id="container-resume">
        <div className="about">
           <h2 className="title-section">About me</h2>   
                <p>
                  Hi, I'm Cintia and I'm a junior frontend developer. I have
                  worked with technologies such as React, Angular, PHP, CSS
                  (SASS, BEM, MaterialUI), HTML, javaScript, TypeScript and
                  finally some SQL.
                </p>
            </div>
            <div>
            <div>
              <Skills />
            </div>
            </div>
          </div>     
  );
};

export default Resume;
