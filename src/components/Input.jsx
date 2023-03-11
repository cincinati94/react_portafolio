import React from "react";


const Input = ({type='text', name, label}) => {
    return(      
       <div>
        <form>
        <label>{label}</label>
<input type={type} name={name} />
</form>
</div>
    )
}

export default Input;