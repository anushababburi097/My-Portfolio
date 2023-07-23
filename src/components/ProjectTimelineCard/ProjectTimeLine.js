import "./ProjectTimeLine.css"

const ProjectTimelineCard = props => {
    const {projectDetails} = props
    const {
        imageUrl,
      projectTitle,
      description,
      projectUrl,
      themeClass
    } = projectDetails
  
    return (
      <>
        <div className={`project-container ${themeClass}`}>
          <img src={imageUrl} alt="project" className="project_image" />
          <div className="project-content">
            <h1 className="tittle">{projectTitle}</h1>
          <p className="project_description">{description}</p>
          <a href={projectUrl} className="visit_Link">
            Visit
          </a>
          </div>
        </div>
      </>
    )
  }
  export default ProjectTimelineCard