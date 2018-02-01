import React, { Component } from 'react'
import './style.css'
import InlineEdit from '../inline'
import Icon from 'react-fontawesome'
import { connect } from 'react-redux'
import { edit, updateProperty } from '../actions'
import { fieldTypes } from '../../fields'
import { fromJS } from 'immutable';

class EditBox extends Component {
    static defaultProps = {
        cursor: fromJS({})
    }

    render () {
        const { path, cursor } = this.props
        const fields = cursor.getIn(path.concat(['fields']))
        const targetPath = cursor.getIn(path.concat(['path']))

        if (!targetPath || !fields) return null

        return (
            <div className='edit-box-wrapper'>
                <div className='edit-box'>
                    {Object.keys(fields.toObject()).map((paramName, index) => {
                        return this._field(fields, paramName, index, this._handleFieldChange)
                    })}
                    <div className='edit-box-close' onClick={this._handleClose}>
                        <Icon name='times-circle-o' />
                    </div>
                </div>
            </div>
        )
    }

    _handleFieldChange = (cursor) => (params) => {
        const key = Object.keys(params)[0]
        const { dispatch, cursor, path } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        dispatch(updateProperty(targetPath.concat([key]), params[key]))
    }

    _handleClose = () => {
        this.props.dispatch(edit(this.props.cursor.get('targetCursor'), this.props.cursor.get('fields')))
    }

    _field = (fields, name, index, change) => {
        switch (fields.get(name)) {
            case fieldTypes.TEXT:
                return this._textField(name, index, change)
            case fieldTypes.ADDRESS:
                return this._addressField(name, index, change)
            default:
                return null
        }
        
    }
    
    _textField = (name, index, change) => {
        const { path, cursor } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        const targetCursor = cursor.getIn(targetPath)
        const targetField = cursor.getIn(path.concat(['targetField']))
    
        const text = targetCursor.get(name)
        if (!text) return null
    
        return (
            <div className='edit-item' key={index}>
                <div className='edit-item-name'>{name}</div>
                <InlineEdit
                    className='edit-item-value'
                    activeClassName='edit-item-value-active'
                    change={change(targetCursor)}
                    paramName={name}
                    editing={name === targetField}
                    text={text}
                />
            </div>
        )
    }
    
    _addressField = (name, index, change) => {
        const { path, cursor } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        const targetCursor = cursor.getIn(targetPath)
        const address = targetCursor.get(name)
        return (
            <div className='edit-items' key={index}>
                {address.mapKeys((key, index) => {
                    return this._textField(address, key, index, change)
                })}
            </div>
        ) 
    }
}



export default connect()(EditBox)