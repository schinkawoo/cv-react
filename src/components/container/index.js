import React, { Component } from 'react';
import classNames from 'classnames'
import './style.css';

export default class extends Component {
    render () {
        const classes = classNames({
            'main-container': !this.props.type,
            [`${this.props.type}-container`]: !!this.props.type
        })

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}