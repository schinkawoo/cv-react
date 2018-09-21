import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { keyIn } from '../data'

const Profile = ({ cursor, path, dispatch }) => {
    const keys = ['photo', 'name', 'title', 'summary']
    const { 
        photo, 
        name, 
        title, 
        summary 
    } = cursor.filter(keyIn(...keys)).toJS()

    return (
        <div className="profile">
            { !!photo ? <img className="photo" src={photo} alt="profile" /> : null }
            { !!name ? <h1 className="name">{name}</h1> : null }
            { !!title ? <h3 className="title">{title}</h3> : null }
            { !!summary ? <h4 className="summary">{summary}</h4> : null }
        </div>
    )
}

export default connect()(Profile)