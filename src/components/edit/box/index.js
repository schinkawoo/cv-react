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
                    {fields.toArray().map((index) => {
                        return this._field(index, index, this._handleFieldChange)
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

    _field = (name, index, change, fieldsPath = []) => {
        const { path, cursor } = this.props
        const targetPath = cursor.getIn(path.concat(['path']))
        const targetCursor = cursor.getIn(targetPath.concat(fieldsPath))
        const field = targetCursor.get(name)

        switch (field.constructor.name) {
            case 'String':
                return this._renderField(name, index, change, fieldsPath)
            case 'IndexedIterable': {
                return (
                    <div className='edit-items' key={index}>
                        {field.toArray().map((item, index) => index).map((index) => 
                            this._field(index, index, change, fieldsPath.concat([name])))}
                    </div>
                )
            }
            case 'KeyedIterable': {
                return (
                    <div className='edit-items' key={index}>
                        {Object.keys(field.toObject()).map((key, index) => 
                            this._field(key, index, change, fieldsPath.concat([name])))}
                    </div>
                )
            }
            default: 
                console.log('default: ', field.constructor.name)
                console.log(field.toJS())
                return null
        }  
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