import React, { Component } from 'react'
import './style.css'
import { path } from 'ramda'
import InlineEdit from '../inline'
import Icon from 'react-fontawesome'
import { connect } from 'react-redux'
import { closeEdit } from '../actions'

class EditBox extends Component {
    state = {
        appState: undefined,
        fields: undefined,
        path: undefined,
        values: {}
    }

    render () {
        const { appState, fields, path: dataPath } = this.state
        if (!appState || !fields || !dataPath) return null

        return (
            <div className='edit-box-wrapper'>
                <div className='edit-box'>
                    {Object.keys(fields).map((paramName, index) => {
                        return (
                            <div className='edit-item' key={index}>
                                <div className='edit-item-name'>{paramName}</div>
                                <InlineEdit
                                    className='edit-item-value'
                                    activeClassName='edit-item-value-active'
                                    change={this._handleFieldChange}
                                    paramName={paramName}
                                    text={path(dataPath.concat([paramName]), appState)}
                                />
                            </div>
                        )
                    })}
                    <div className='edit-box-close' onClick={this._handleClose}>
                        <Icon name='times-circle-o' />
                    </div>
                </div>
            </div>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps)
    }

    _handleFieldChange = (params) => {
        this.setState({
            values: {
                ...this.state.values,
                ...params
            }
        })
    }

    _handleClose = () => {
        this.props.dispatch(closeEdit(this.state.values, this.state.path))
    }
}

export default connect()(EditBox)