import React  from "react";

const Label = (props) => {

  return (
    <div className={props.dark ? 'label--dark' : 'label'} >
        <span className="label-html">{props.labelStart}</span>
        <div>{props.children}</div>
        <span className="label-html">{props.labelEnd}</span>
    </div>
  );
};


export default Label;
