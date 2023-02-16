import React from 'react';
import "../styles/HeroImageExp.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool, MdWork } from "react-icons/md";

function HeroImageEx() {
  return (
    <div className="hero-exp">
      <div className='title-exp'>
        <h2>Experience.</h2>
      </div>
        <div className="subtitle-exp">
          <p>My work and educational background.</p>
        </div>
      <VerticalTimeline className='timeline'>
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">
              Application Developer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color:"#fff"}}>
              Federated Hermes
            </h4>
            <p style={{color:"#fff"}}>
              Improved business processes by writing and testing analytics reports (Visual Basic/SQL) and batch scripts.
            </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        date="2020 - 2023"
        iconStyle={{ background: "#3e497a", color: "#fff" }}
        icon={<MdSchool />}>

        <h3 className="vertical-timeline-element-title">
          University of Pittsburgh
        </h3>
        <h4 className="vertical-timeline-element-subtitle" style={{color:"#fff"}}>
          Pittsburgh
        </h4>
        <p style={{color:"#fff"}}>
          BS, Computer Science
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="2021 - 2022"
            iconStyle={{ background: "#e9d35b", color: "#fff" }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title" style={{color:"#fff"}}>
              IT/Office Assistant
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color:"#fff"}}>
              University of Pittsburgh
            </h4>
            <p style={{color:"#fff"}}>
              Provided technical assistance to all departments within the Office of the Provost.
            </p>
          </VerticalTimelineElement>
      <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            date="2017 - 2019"
            iconStyle={{ background: "#3e497a", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Community College of Allegheny County
            </h3>
            <h4 className="vertical-timeline-element-subtitle" style={{color:"#fff"}}>
              Pittsburgh, PA
            </h4>
            <p style={{color:"#fff"}}> AS, Mathematics and Sciences</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default HeroImageEx