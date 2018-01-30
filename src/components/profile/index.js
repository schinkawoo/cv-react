import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { edit } from '../edit/actions'
import EditButton from '../edit/button'
import { fieldTypes } from '../fields'

function profileFields () {
    return {
        name: fieldTypes.TEXT,
        summary: fieldTypes.TEXT,
        photo: fieldTypes.URL,
        title: fieldTypes.TEXT
    }
}

export default connect()(({ name, summary, photo, title, dispatch }) => (
    <div className="profile">
        { !!photo ? <img className="photo" src={photo} alt="profile" /> : null }
        { !!name ? <h1 className="name">{name}</h1> : null }
        { !!title ? <h3 className="title">{title}</h3> : null }
        { !!summary ? <h4 className="summary">{summary}</h4> : null }
        <EditButton onClick={() => dispatch(edit(profileFields()))} />
    </div>
))