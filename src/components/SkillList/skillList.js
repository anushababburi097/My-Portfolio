import React from 'react';
import "./skillList.css"

const skillList=props=>{
    const { skillDetails, themeClass } = props; // Receive themeClass as a prop
    const {imageUrl,name}=skillDetails    

    return(
        <li className={`list-items ${themeClass}`} data-aos="fade-left">
            <img src={imageUrl} alt="" className="skill-image"/>
            <p className='name'>{name}</p>
        </li>
    )
}
export default skillList