import "./EducationItem.css"

const EducationItem=props=>{
    const {educationDetails,themeClass}=props
    const {start,end,institution,course,img}=educationDetails
    
 
    return(
        <li className={`education-item ${themeClass}`} data-aos="fade-left">
            <img src={img} alt='' className="education-img"/>
            <div className="education-content">
                <p className="education-year">{start}-{end}</p>
                <p className="education-name">{institution}</p>
                <p className="education-name">{course}</p>
            </div>
        </li>
    )
}
export default EducationItem