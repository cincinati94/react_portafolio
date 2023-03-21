import Label from "../components/Label";
import Skills from "./Skills";

const Resume = (props) => {
  return (
    <div id="container-resume">
      <div>
        <div className="about">
          <Label
            labelStart={"<h2>"}
            labelEnd={"</h2>"}
            children={<h2 className="title-section">About me</h2>}
          />
        
        <div className="content-resume text-white">
          <div>
            <Label
              labelStart={"<p>"}
              labelEnd={"</p>"}
              children={
                <p className="text-white">
                  Hi, I'm Cintia and I'm a junior frontend developer. I have
                  worked with technologies such as React, Angular, PHP, CSS
                  (SASS, BEM, MaterialUI), HTML, javaScript, TypeScript and
                  finally some SQL.
                </p>
              }
            />
            </div>
            </div>
            </div>
            <div>
            <div>
              <Skills />
            </div>
            </div>
          </div>
          </div>
    
     
  );
};

export default Resume;
