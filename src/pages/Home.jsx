import React, {useEffect} from "react";
import Label from "../components/Label";
import "../styles/style.scss";
import { colorText } from "../function";

const Home = () => {

  
  useEffect(() => {
   colorText()
  }, []);

  return (
      <div id="home-container">
      <div>
        <Label
          dark
          labelStart={"<h1>"}
          labelEnd={"</h1>"}
          children={
            <h1 id="coloredText">
             &lt; FrontEnd developer &gt;
            </h1>
          }
        />
        <div>
          <Label
          dark
            labelEnd={"</p>"}
            labelStart={"<p>"}
            children={
              <p className="text-black">React / HTML / CSS / JavaScript</p>
            }
          />
        </div>
      </div>
    </div>
  
  );
};

export default Home;
