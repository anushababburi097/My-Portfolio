import React, {useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import SkillList from "../SkillList/skillList";
import './skills.css';


const SkillsList=[
        {
        id: '1',
        name: 'HTML',
        imageUrl:
          'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689757055/HTML5_Badge_gkpyfl.svg',
        },
        {
        id: '2',
        name: 'CSS',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689757905/640px-CSS3_logo.svg_yzoplu.png',
        },
        {
        id: '3',
        name: 'Bootsrap',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689763882/Bootstrap_logo_rivpdx.svg',
        },
        {
        id: '4',
        name: 'JavaScript',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689764943/javascript-1_fjxqub.svg',
        },
        {
        id: '5',
        name: 'ReactJS',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689757485/1200px-React-icon.svg_gxceop.png',
        },
        {
        id: '6',
        name: 'Python',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689757438/640px-Python-logo-notext.svg_wpwwrj.png',
        },
        {
        id: '7',
        name: 'SQL',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689764845/ASSET-SOFTWARE-SQL-DATABASE_a6kjah.png',
        },
        {
        id: '8',
        name: 'NodeJS',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689757496/nodejs-45adbe594d_gg1kxr.png',
        },
        {
        id: '9',
        name: 'Github',
        imageUrl:
            'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689764217/external_integrations-github-icon_utuqp3.png',
        },
    
    ]


const Skills=()=>{
    const { isDarkTheme } = useContext(ThemeContext);
    const themeClass = isDarkTheme ? 'dark' : 'light';
    const skillHeading=isDarkTheme? 'name-dark':'name-light'
   
    return(
        <div className={`skills ${themeClass}`}>
            <h1 className={`skill-heading ${skillHeading}`} data-aos="fade-right">Skills</h1>
            <ul className='skill-list-container'>
                {SkillsList.map(eachSkill => (
                <SkillList themeClass={themeClass} key={eachSkill.id} skillDetails={eachSkill} />
                ))}
            </ul>
        </div>
    )
}

export default Skills;
