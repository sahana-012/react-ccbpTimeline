// Write your code here
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <div className="chrono-container">
        <h1 className="main-heading">
          MY JOURNEY OF <br />
          <span className="sub-heading">CCBP 4.0</span>
        </h1>

        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return <CourseTimelineCard item={eachItem} />
            }
            return <ProjectTimelineCard item={eachItem} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
