import React from 'react'
import Icon from 'react-fontawesome'
import './style.css'

const projectPeriod = (startTime, endTime) => !startTime
    ? null
    : !endTime 
        ? <span className="time">({startTime})</span>
        : <span className="time">({startTime} - {endTime})</span>

const Project = ({ children, title, startTime='', endTime='' }) => !title || !children
    ? null
    : (
        <div className="project">
            <span className="project-title">{title}</span>
            {projectPeriod(startTime, endTime)}
            {children}
        </div>
    )

const Task = ({ children }) => (
    <div className="details">
        <Icon name="check-square-o"/>
        {children}
    </div>
)

export {
    Project,
    Task
}