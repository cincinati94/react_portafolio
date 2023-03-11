import React from "react";

const Input = ({ type = "text", name, label, placeholder = "" }) => {
  return (
    <div className="form-input">
        <input type={type} name={name} placeholder={placeholder} /> 
    </div>
  );
};

export default Input;
