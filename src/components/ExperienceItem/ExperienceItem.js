import "./ExperienceItem.css"

const ExperienceItem=props=>{
    const {experienceDetails,themeClass}=props
    const {start,end,role,company,certificate,lor,img}=experienceDetails
    return(
        <li className={`experience-item ${themeClass}`} data-aos="fade-left">
            <img src={img} alt="" className="experience-img"/>
            <div className="experience-content">
                <p className="experience-year">{start}-{end}</p>
                <p className="experience-name">{role}</p>
                <p className="experience-name">{company}</p>
                <div className="experience-certificates-content">
                    <p className="visit-para">Visit:</p>
                    <a href={certificate} >Certificate</a>
                    <a href={lor}>LOR</a>
                </div>
            </div>
        </li>
    )
}
export default ExperienceItem