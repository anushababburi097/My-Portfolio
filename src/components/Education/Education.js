import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import EducationItem from "../EducationItem/EducationItem";
import './Education.css';

const EducationDetailsList=[
  {id:'1',
  start:2023,
  end:'Present',
  institution:'NxtWave',
  course:'Full Stack Development',
  img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689859146/PngItem_6164887_t0wch8.png'
  },
  {id:'2',
  start:2018,
  end:2021,
  institution:'Ekashila Degree College',
  course:'Bsc Computer Science',
  img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689859146/PngItem_6164887_t0wch8.png'
  },
  {id:'3',
  start:2016,
  end:2018,
  institution:'ABV Junior College',
  course:'MPC',
  img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689859146/PngItem_6164887_t0wch8.png'
  },
  {id:'4',
  start:2011,
  end:2016,
  institution:'ZPPSS Ganugupahad',
  course:'',
  img:'https://res.cloudinary.com/dt1gmlj2h/image/upload/v1689859146/PngItem_6164887_t0wch8.png'
  }

]

const Education = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const themeClass = isDarkTheme ? 'dark' : 'light';
  const educationHeading=isDarkTheme?'dark-heading':'';

  
  return (
    <div className={`education ${themeClass}`}>
      <h1 className={`education-heading ${educationHeading}`} data-aos="fade-right">Education</h1>
      <ul className='education-item-container'>
        {EducationDetailsList.map(eachItem=>(
          <EducationItem educationDetails={eachItem} key={eachItem.id} themeClass={themeClass} />
        ))}
      </ul>
    </div>
  );
};

export default Education;
