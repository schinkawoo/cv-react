import React from 'react'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'
import { connect } from 'react-redux';
import { edit } from '../edit/actions';

const Languages = ({ cursor, path, dispatch }) => {
    if (!cursor || cursor.size <= 0) return null
    const keys = ['languages']
    return (
        <ContainerBlock icon='globe' title='Languages' type='languages'>
            {cursor.toArray().map((item, index) => (
                <Language name={item.get('language')} level={item.get('level')} key={index} />
            ))}
            <EditButton inverted onClick={() => dispatch(edit(path, keys))} />
        </ContainerBlock>
    )
}

function Language ({ name, level }) {
    return <div className='language'>{name}<span className='level'>({level})</span></div>
}

export default connect()(Languages)