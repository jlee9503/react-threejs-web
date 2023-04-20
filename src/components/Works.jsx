import React from 'react'
import '../styles/Works.css'
import PageInfo from "../Data";

const Works = () => {
  return (
    <div id='works'>
      <div id='work-left'>
        <ul id='workList'>
          {PageInfo.map((data) =>
            data.workItems.map((work) =>
              <li key={work.id}>{work.description}</li>
            )
          )}
        </ul>
      </div>

      <div id='work-right'>

      </div>
    </div>
  )
}

export default Works