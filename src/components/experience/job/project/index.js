import React from 'react'
import Icon from 'react-fontawesome'
import './style.css'

const Project = ({ children, title, startTime='', endTime='' }) => !title || !children
    ? null
    : (
        <div className="project">
            <div className="title">{title}</div>
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