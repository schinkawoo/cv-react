import React, { Component } from 'react'
import './style.css'
import InlineEdit from '../inline'
import Icon from 'react-fontawesome'
import { connect } from 'react-redux'
import { edit, updateProperty } from '../actions'
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
                    {fields.toArray().map((paramName, index) => {
                        return this._field(paramName, index, this._handleFieldChange)
                    })}
                    <div className='edit-box-close' onClick={this._handleClose}>
                        <Icon name='times-circle-o' />
                    </div>
                </div>
            </div>
        )
    }

    _handleFieldChange = (fieldsPath) => (fields) => {
        const key = Object.keys(fields)[0]
        const { dispatch, cursor, path } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        dispatch(updateProperty(targetPath.concat(fieldsPath).concat([key]), fields[key]))
    }

    _handleClose = () => {
        this.props.dispatch(edit())
    }

    _field = (name, index, change) => {
        const { path, cursor } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        const targetCursor = cursor.getIn(targetPath)
        const field = targetCursor.get(name)

        return field.constructor.name === 'KeyedIterable' 
            ? (
                <div className='edit-items' key={index}>
                    {Object.keys(field.toObject()).map((key, index) => 
                        this._renderField(key, index, change, [name]))}
                </div>
            )
            : this._renderField(name, index, change)     
    }
    
    _renderField = (name, index, change, fieldsPath = []) => {
        const { path, cursor } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        const targetCursor = cursor.getIn(targetPath.concat(fieldsPath))
        const targetField = cursor.getIn(path.concat(['targetField']))
    
        const text = targetCursor.get(name)
        if (!text) return null
    
        return (
            <div className='edit-item' key={index}>
                <div className='edit-item-name'>{name}</div>
                <InlineEdit
                    className='edit-item-value'
                    activeClassName='edit-item-value-active'
                    change={change(fieldsPath)}
                    paramName={name}
                    editing={name === targetField}
                    text={text}
                />
            </div>
        )
    }
}



export default connect()(EditBox)