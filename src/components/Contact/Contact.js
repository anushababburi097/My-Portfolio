import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import {AiOutlineMail} from "react-icons/ai";
import { HiLocationMarker } from 'react-icons/hi';
import { FaLinkedin,FaGithub,FaInstagram } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? 'dark' : 'light';
  const contactClass=isDarkTheme? 'heading-dark':'';
  const inputClass=isDarkTheme? 'input-dark':'input-light';
  const iconClass=isDarkTheme ? 'icons-dark':'';

  return (
    <div className={`contact ${themeClass}`} >
      <div className='contact-container'>
       <form className='form-container' > 
       <h1 className={`contact-heading ${contactClass}`}>Contact</h1>
            <label className='lable'>Name:</label>
            <input
              type="text"
              name="name"
              placeholder='Jonh Doe'
              className={`input ${inputClass}`}
              required
            />
            <label className='lable'>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Jonhdoe@gmail.com"
              required
              className={`input ${inputClass}`}
            />
            <label className='lable'>Message:</label>
            <textarea
              name="message"
              placeholder='Type your message....'
              required
              className={`input ${inputClass}`}
              cols={40}
              rows={6}
            ></textarea>
          <button type="submit" className='send-button'>send</button>
        </form>
       <div className='contact-details-content'>
          <div className='address-content'>
            <AiOutlineMail className={`contact-icons ${iconClass}`}/>
            <h1 className='contact-user'>banusha8292@gmail.com</h1>
          </div>
          <div className='address-content'>
              <HiLocationMarker className={`contact-icons ${iconClass}`}/>
              <h1 className='contact-user'>1-34,Ganugupahad,Jangaon</h1>
          </div>
          <div className='contact-social-icons'>
            <a href='https://www.linkedin.com/in/anushababburi' className='social-icons-links'><FaLinkedin className={`contact-icons ${iconClass}`}/></a>
            <a href='https://github.com/anushababburi097' className='social-icons-links'><FaGithub className={`contact-icons ${iconClass}`}/></a>
            <a href='https://instagram.com/devbytes_097?igshid=NGExMmI2YTkyZg==' className='social-icons-links'><FaInstagram className={`contact-icons ${iconClass}`}/></a>
          </div>
       </div>
        </div>
      </div>
  );
};

export default Contact;