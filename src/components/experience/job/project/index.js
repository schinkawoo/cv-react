import React from 'react'
import Icon from 'react-fontawesome'
import './style.css'

export default ({ tasks, title, summary='' }) => !title || !tasks || tasks.length === 0
    ? null
    : (
        <div className="project">
            <div className="title">{title}</div>
            {tasks.map((task, index) => <Task content={task} key={index}/>)}
        </div>
    )

function Task ({ content }) {
    return content ? (
            <div className="details">
                <Icon name="check-square-o"/>
                {content}
            </div>
        )
        : null
}