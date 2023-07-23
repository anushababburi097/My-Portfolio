import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import './Experience.css';

const experienceDetailsList=[
  {
    id:'1',
    start:'Jan 2023',
    end:'Present',
    role:'Teaching Assistant',
    company:'NxtWave',
    certificate:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120257/TA_certificate_b9b9rf.png',
    lor:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120283/TA_POSTER_dxsdsz.png',
    img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689936915/blue-circle-handbag-experience-icon-9_lbmigk.png'
  },
  {
    id:'2',
    start:'May 2023',
    end:'Jun 2023',
    role:'Web Development Intern',
    company:'LetsGrowMore',
    certificate:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120378/lgmv_intern_certificate_xinpkc.png',
    lor:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120235/Anusha_letsgrowmore_LOR_certificate_d5epr3.png',
    img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689936915/blue-circle-handbag-experience-icon-9_lbmigk.png'
  },
  {
    id:'3',
    start:'May 2023',
    end:'Jun 2023',
    company:'GlobalTech(I) Pvt.Ltd',
    role:'Web Development Intern',
    certificate:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120083/Anusha_Global_Tech_Intern_Certificate_gg4vd7.png',
    lor:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1690120087/Anusha_GlobalTech_Intern_LOR_v9zowr.png',
    img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689936915/blue-circle-handbag-experience-icon-9_lbmigk.png'
  }
]

const Experience = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? 'dark' : 'light';
  const experienceHeading=isDarkTheme?'dark-heading':'';

  return (
    <div className={`experience ${themeClass}`}>
      <h1  className={`experience-heading ${experienceHeading}`} data-aos="fade-right">Experience</h1>
    <ul className='experience-item-container'>
      {experienceDetailsList.map(each=>(
        <ExperienceItem experienceDetails={each} key={each.id}/>
      ))}
    </ul>
    </div>
  );
};

export default Experience;
