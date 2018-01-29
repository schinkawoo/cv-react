import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { editProfile } from './actions'
import EditButton from '../edit/button'

export default connect()(({ name, summary, photo, title, dispatch }) => (
    <div className="profile">
        { !!photo ? <img className="photo" src={photo} alt="profile" /> : null }
        { !!name ? <h1 className="name">{name.first} {name.last}</h1> : null }
        { !!title ? <h3 className="title">{title}</h3> : null }
        { !!summary ? <h4 className="summary">{summary}</h4> : null }
        <EditButton onClick={() => dispatch(editProfile({ name, summary, photo, title }))} />
    </div>
))