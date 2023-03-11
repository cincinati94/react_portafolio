import React, {useEffect} from "react";
import Label from "../components/Label";
import "../styles/style.scss";
const Home = () => {

  useEffect(() => {
    const text = document.getElementById("coloredText");
    const letters = text.textContent.split("");
    text.innerHTML = "";
  

    letters.forEach((letter, index) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.className='span-animated';
    

      span.addEventListener("mouseenter", () => {
        span.style.color = `hsl(${(360 / letters.length) * index}, 100%, 50%)`;
        span.style.fontSize = '2em';
      });

      span.addEventListener("mouseleave", () => {
       span.style.color='black';
        span.style.fontSize = "";

      });
      text.appendChild(span);
    });
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
