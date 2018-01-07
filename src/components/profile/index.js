import React, { Component } from 'react'
import './style.css'

export default class extends Component {
    render () {
        const { photo, name, title } = this.props
        return (
            <div className="profile">
                { !!photo ? <img className="photo" src={this.props.photo} alt="profile" /> : null }
                { !!name ? <h1 className="name">{this.props.name}</h1> : null }
                { !!title ? <h3 className="title">{this.props.title}</h3> : null }
            </div>
        )
    }
}