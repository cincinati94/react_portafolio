import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
   
  return (
  <div className="card-container">
  <div className="card">
   <div className="logo-card">{props.logo && props.logo}</div>
  </div>
  <div id="hidden-name">{props.name}</div>
  </div>
  );
  }
Card.propTypes = {
  logo: PropTypes.element,
  name: PropTypes.string
};

export default Card;
