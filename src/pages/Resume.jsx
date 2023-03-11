import Label from "../components/Label";
import Experience from "./Experience";
import Skills from "./Skills";

const Resume = (props) => {
  return (
    <div id="container-resume">
      <div className="margin-side">
        <div style={{marginBottom:'2em'}}>
          <Label
            labelStart={"<h2>"}
            labelEnd={"</h2>"}
            children={<h2 className="title-section">Resume</h2>}
          />
        </div>
        <div className="content-resume text-white">
          <div>
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
            <div style={{marginTop:'2em'}}>
            <Label labelEnd={'</section>'} labelStart={'<section>'} children={<Experience/>}/>
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
    </div>
  );
};

export default Resume;
