import React from "react";
import WorkCard from "../components/WorkCard";

const Works = () => {
  return (
    <div className="container-works">
      <div>
        <h2>Works</h2>
        <div className="container-works-list">
            <WorkCard
              image={"worksImages/landing.png"}
              altText={"landing page"}
            />
              <WorkCard
              image={"worksImages/recipes.png"}
              altText={"recipes page"}
            />
        </div>
      </div>
    </div>
  );
};

export default Works;
