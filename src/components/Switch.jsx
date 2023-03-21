import React, {useState,useContext}from 'react';
import '../styles/Switch.scss';
import { ThemeContext } from "../ThemeContext";
import Logo from './Logo';


const SwitchTheme = ({  handleToggle, icon}) => {

    const [checked,setChecked] = useState(false);
    const { toggleTheme} = useContext(ThemeContext);

    return (
      <>
        <input
          checked={checked}
          onChange={()=>{setChecked(!checked);toggleTheme();}}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
   
        />
        <label
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <Logo icon={'ph:moon-stars'} color={'darkblue'}/>
          <Logo icon={'ph:sun-duotone'} color={'coral'}/>
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };

export default SwitchTheme;