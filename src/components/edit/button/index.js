import React, { Component } from 'react'
import Icon from 'react-fontawesome'
import classNames from 'classnames'
import './style.css'
class Edit extends Component {
    render () {
        const classes = classNames({ 'edit-button': true, inverted: this.props.inverted })
        return (
            <div className={classes} onClick={this.props.onClick}>
                <Icon name='cog' className='edit-button-icon'/>
            </div>
        )
    }
}

export default Edit