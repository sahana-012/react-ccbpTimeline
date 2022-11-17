// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = item

  return (
    <div className="project-container">
      <img src={imageUrl} className="image" alt="project" />
      <div className="top-container">
        <h1 className="top-heading">{projectTitle}</h1>
        <div className="icon-container">
          <AiFillCalendar />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} target="__blank" className="website-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
