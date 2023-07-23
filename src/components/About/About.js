import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import './About.css';

const About = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? 'dark' : 'light';
  const headingClass = isDarkTheme ? 'nameColor' : '';

  return (
    <div className={`about ${themeClass}`}>
      <h1  className={`about-heading ${headingClass}`}  data-aos-delay="200" data-aos="fade-right">Who I am</h1>
      <p className='about-description' data-aos="fade-left">Hello, I'm Anusha, a skilled web developer proficient in HTML, CSS, JavaScript, ReactJS, Node.js, Python, SQL, Bootstrap, and Flexboxes. With a focus on creating visually appealing and user-friendly websites, I excel in front-end development and utilize frameworks like ReactJS and Bootstrap to build dynamic and responsive web applications. Additionally, my expertise in back-end technologies such as Node.js and Python, along with my experience in working with SQL databases, allows me to develop robust and scalable web solutions. I am committed to delivering high-quality code and staying up-to-date with the latest industry trends. Let's collaborate on innovative web projects.</p>
    </div>
  );
};

export default About;
