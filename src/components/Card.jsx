import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
  <div className="card-container">
   <div>{props.logo && props.logo}</div>
    <div>{props.name}</div>
  </div>
  );
  }
Card.propTypes = {
  logo: PropTypes.element,
  name: PropTypes.string
};

export default Card;
