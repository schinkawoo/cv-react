import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const Languages = ({ data }) => {
    if (!data || data.length <= 0) return null

    return (
        <ContainerBlock icon='globe' title='Languages' type='languages'>
            {data.map((item, index) => (
                <Language name={item.language} level={item.level} key={index} />
            ))}
        </ContainerBlock>
    )
}

function Language ({ name, level }) {
    return <div className='language'>{name}<span className='level'>({level})</span></div>
}

export default Languages