import React, { Children } from 'react';
import PropTypes from 'prop-types';



const Box = (props) => {

    return (
        <div className='box-container' style={{ borderColor: props.borderColor }} >
            <h3 style={{color:props.color}}>{props.title}</h3>
            {props.description ? <p className='description-box'>{props.description}</p> :null}
            {props.children ? <div>{props.children}</div> : null}
        </div>
    )

};

Box.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string,
    borderColor: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.element,
    color:PropTypes.string
}

export default Box;