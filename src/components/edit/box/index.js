import React, { Component } from 'react'
import './style.css'
import { path } from 'ramda'
import InlineEdit from '../inline'
import Icon from 'react-fontawesome'
import { connect } from 'react-redux'
import { closeEdit } from '../actions'
import { fieldTypes } from '../../fields'

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
                        return field(appState, fields, dataPath, paramName, index, this._handleFieldChange)
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

    _handleFieldChange = (parent) => (params) => {
        const newValues = !parent ? params
            : { [parent]: { ...this.state[parent], ...params } }
        this.setState({
            values: { ...this.state.values, ...newValues }
        })
    }

    _handleClose = () => {
        this.props.dispatch(closeEdit(this.state.values, this.state.path))
    }
}

function field (state, fields, dataPath, name, index, change) {
    switch (fields[name]) {
        case fieldTypes.TEXT:
            return textField(state, dataPath, name, index, change())
        case fieldTypes.ADDRESS:
            return addressField(state, dataPath, name, index, change(name))
        default:
            return null
    }
    
}

function textField (state, dataPath, name, index, change) {
    const text = path(dataPath.concat([name]), state)
    if (!text) return null

    return (
        <div className='edit-item' key={index}>
            <div className='edit-item-name'>{name}</div>
            <InlineEdit
                className='edit-item-value'
                activeClassName='edit-item-value-active'
                change={change}
                paramName={name}
                text={text}
            />
        </div>
    ) 
}

function addressField (state, dataPath, name, index, change) {
    const address = path(dataPath.concat([name]), state)
    return (
        <div className='edit-items' key={index}>
            {Object.keys(address).map((key, index) => {
                return textField(state, dataPath.concat(['address']), key, index, change)
            })}
        </div>
    ) 
}

export default connect()(EditBox)