import React, { Component } from 'react';
import classNames from 'classnames'
import './style.css';

export default class extends Component {
    render () {
        const classes = classNames({
            'wrapper': !this.props.type,
            [`${this.props.type}-wrapper`]: !!this.props.type
        })

        return (
            <div className={classes}>
                {this.props.children}
            </div>
        )
    }
}