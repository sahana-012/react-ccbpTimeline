// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, tagsList, duration} = item

  return (
    <div className="course-container">
      <div className="top-container">
        <h1 className="top-heading">{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list">
        {tagsList.map(eachTag => (
          <li className="list-item" key={eachTag.id}>
            <p className="list-para">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
