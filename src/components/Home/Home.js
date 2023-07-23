import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import {FaLinkedin,FaGithub,FaInstagram} from "react-icons/fa";
import './Home.css';

const Home = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? 'dark' : 'light';
  const nameClass = isDarkTheme ? 'nameColor' : '';
  const outlineClass=isDarkTheme? 'outlineBtn':'btn-light'
  const buttonClass=isDarkTheme? 'button-dark':'button-light'
  const iconClass=isDarkTheme? 'github-dark':''  

  const openResume = () => {
   // Function to open the resume goes here
    window.open('https://docs.google.com/document/d/1Glj4Z1ARcIv_vXbYo0SaoUJ134drzmuE77C30GQLBPM/edit?usp=sharing', '_blank');
  };

  return (
    <div className={`home ${themeClass}`}>
        <img src="https://res.cloudinary.com/dt1gmlj2h/image/upload/v1686052945/WhatsApp_Image_2023-06-06_at_5.06.34_PM_ebsffb.jpg" alt="" className='profile-pic'/>
     <div className='home-content'>
      <h1 className={`home-name ${nameClass}`} data-aos-delay="200" data-aos="fade-right">Babburi Anusha</h1>
      <p className='home-description' data-aos="fade-left">I am Anusha Babburi, a passionate programmer in my daily life and a quick learner with a self-learning attitude. I love exploring new technologies and solving problems.</p>
     <div className='btn-container'>
     <button className= {`home-button ${outlineClass}`} onClick={openResume}>Downloard CV</button>
      <button  className={`home-button buttonClass ${buttonClass}`}>Contact</button>
     </div>
     <div className="social-icons-container">
      <a href='https://www.linkedin.com/in/anushababburi' className='social-icons-links'><FaLinkedin className='social-icon'/></a>
      <a href='https://github.com/anushababburi097' className='social-icons-links'><FaGithub className={`social-icon github ${iconClass}`}/></a>
      <a href='https://instagram.com/devbytes_097?igshid=NGExMmI2YTkyZg==' className='social-icons-links'><FaInstagram className='social-icon instagram'/></a>
     </div>
    </div>
    </div>
  
  );
};


export default Home;
