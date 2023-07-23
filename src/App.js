import React, { Component } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
import ThemeContext from './components/context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from "./components/About/About";
import Experience from './components/Experience/Experience';
import Skills from "./components/Skills/skills";
import Project from "./components/Projects/Project";
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import './App.css';

class App extends Component {
  state = {
    isDarkTheme: true,
  };
  
  componentDidMount() {
    Aos.init({ duration: 200 }); //AOS - Animate on scroll library
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }));
  };

  

  render() {
    const { isDarkTheme } = this.state;

    return (
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme: this.toggleTheme }}>
        <div className={`app ${isDarkTheme ? 'dark' : 'light'}`}>
          <Navbar />
          <Home/>
          <About/>
          <Experience/>
          <Skills/>
          <Project/>
          <Education/>
          <Contact/>
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
