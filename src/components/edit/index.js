import React, { Component } from 'react'
import Icon from 'react-fontawesome'
import './style.css'
class Edit extends Component {
    render () {
        return (
            <div className='edit-button'>
                <Icon name='cog' size='2x'/>
            </div>
        )
    }
}

export default Edit