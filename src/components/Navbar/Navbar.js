import React, { Component } from "react";
import ThemeContext from "../context/ThemeContext";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "./Navbar.css"

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav: false,
    };
  }

  closeNav = () => {
    this.setState({
      nav: false,
    });
  };

  toggleNav = () => {
    this.setState((prevState) => ({
      nav: !prevState.nav,
    }));
  };

  render() {
    const { nav } = this.state;

    const links = [
      {
        id: 1,
        link: "home",
        item:'Home'
      },
      {
        id: 2,
        link: "about",
        item:'About'
      },
      {
        id: 3,
        link: "experience",
        item:'Experience'
      },
      {
        id: 4,
        link: "skills",
        item:'Skills'
      },
      {
        id: 5,
        link: "projects",
        item:'Projects'
      },
      {
        id:6,
        link:'education',
        item:'Education'
      },
      {
        id:7,
        link:'contact',
        item:'Contact'
      }
    ];


    return (
      <ThemeContext.Consumer>
        {(value) => {
          const { isDarkTheme, toggleTheme } = value;

      const toggleThemeIconUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

          const onToggleTheme = () => {
            toggleTheme();
          };

          return (
            <div className={`nav-container ${isDarkTheme ? "black" : "white"} `}>
              <div>
                <h1 className="nav-name">Anusha</h1>
              </div>
              <ul className="nav-list-items">
                {links.map(({ id, link,item }) => (
                  <li
                    key={id}
                    className="navbar-link-list"
                  >
                    <Link to={link} smooth duration={500}>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <div
                onClick={this.toggleNav}
                className="navbar-icon-container"
              >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
              </div>

              {nav && (
                <div className="full-screen-nav">
                <ul className="navbar-list-context">
                  {links.map(({ id, link,item}) => (
                    <li
                      key={id}
                      className=""
                    >
                      <Link
                        onClick={this.closeNav} // Close the full-screen nav when a link is clicked
                        to={link}
                        smooth
                        duration={500}
                      >
                       {item}
                      </Link>
                    </li>
                  ))}
                </ul>
                </div>
              )}

              <button
                type="button"
                className="toggle-btn"
                onClick={onToggleTheme}
              >
                <img
                src={toggleThemeIconUrl}
                alt="theme"
                className="toggle-icon"
              />
              </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default NavBar;
