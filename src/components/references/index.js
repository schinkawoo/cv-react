import React from 'react'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'
import { connect } from 'react-redux';
import { edit } from '../edit/actions';

const References = ({ cursor, path, dispatch }) => (
    <ContainerBlock icon='address-card-o' title='References' type='references'>
        {cursor.toArray().map((item, index) => (
            <Reference
                company={item.get('company')}
                name={item.get('name')}
                title={item.get('title')}
                key={index}
            />
        ))}
        <EditButton inverted onClick={() => dispatch(edit(path, ['references']))} />
    </ContainerBlock>
)

function Reference ({ company, name, title }) {
    return name && company ? (
            <div>
                <h4 className='name'>{name}</h4>
                {title ? <div className='role'>{title}</div> : null}
                <div className='company'>{company}</div>
            </div>
        )
        : null
}

export default connect()(References)