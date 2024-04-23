import React from "react";

const WorkCard = ({image, altText, livePreview, gitLink}) => {
    return(
    <div className="container-work-card">
    <img src={image} height='30' alt={altText}/>
    <div className="container-links">
     <a href={livePreview}>Demo</a>
     <a href={gitLink}>Code</a>
    </div> 
    </div>
    );
}

export default WorkCard;