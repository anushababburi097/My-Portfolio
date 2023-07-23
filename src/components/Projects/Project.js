import React, { useContext } from 'react';
import {Chrono} from 'react-chrono'
import ThemeContext from '../context/ThemeContext';
import ProjectTimeLine from "../ProjectTimelineCard/ProjectTimeLine";
import "./Project.css"

const projectDetailsList=[
    {
        id:'1',
        projectTitle:'Nxt Trendz',
        description:'The React web application allows users to log in with specific credentials and browse products, including Prime deals, with filter options and detailed product information. Prime User credentials:Username: rahul, Password: rahul@2021. Non-Prime User credentials:Username: raja,Password: raja@2021',
        imageUrl:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690114649/nnnn_f9rcbs.png',
        projectUrl:'https://anushaNxttrendz.ccbp.tech'
    },

    {
        id:'2',
        projectTitle: 'Todo Application',
        description:
        'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
        imageUrl:
        'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
        projectUrl: 'https://anusha1todo.ccbp.tech/',
        
    },
    {
        id:'3',
        projectTitle: 'Food Munch',
        description: 'Food Much Website is a user-centric food tech website.',
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
        projectUrl: 'https://anushafoodap.ccbp.tech/',
        
    },
    {
        id:'4',
        projectTitle: 'IPL',
        description: 'The IPL Dashboard project is a ReactJS-based web app providing a user-friendly interface for accessing Indian Premier League (IPL) team and match data.',
        imageUrl: 'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690111109/ipl_ephpyb.png',
        projectUrl:'https://anushaipldb.ccbp.tech'
    },
    {
        id:'5',
        projectTitle: 'Landing Page',
        description: 'A clean and modern website showcasing Royal Enfield motorcycles with a responsive design, essential sections, and Bootstrap classes for seamless styling.',
        imageUrl: 'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1687009579/dribbble_fd9qse.webp',
        projectUrl: 'https://anusharenfield.ccbp.tech/'
    },
]

const Projects=()=>{
    const { isDarkTheme } = useContext(ThemeContext);
    const themeClass = isDarkTheme ? 'dark' : 'light';
    const headingClass=isDarkTheme? 'heading-dark':''

    return(
        <div className={`projects ${themeClass}`}>
            <h1 className={`project-heading ${headingClass}`} >projects</h1>
            <Chrono
            theme={{secondary: 'white'}}
            mode="VERTICAL_ALTERNATING">
                {projectDetailsList.map(eachProject=>(
                    <ProjectTimeLine projectDetails={eachProject} key={eachProject.id}/>
                ))}
            </Chrono>
        </div>
    )
}
export default Projects