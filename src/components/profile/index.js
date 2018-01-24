import React from 'react'
import './style.css'
import Edit from '../edit'

export default ({ children, name, photo, title }) => (
    <div className="profile">
        { !!photo ? <img className="photo" src={photo} alt="profile" /> : null }
        { !!name ? <h1 className="name">{name.first} {name.last}</h1> : null }
        { !!title ? <h3 className="title">{title}</h3> : null }
        { !!children ? <h4 className="summary">{children}</h4> : null }
        <Edit />
    </div>
)