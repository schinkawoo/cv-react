import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const Languages = ({ children}) => (
    <ContainerBlock icon='globe' title='Languages' type='languages'>
        {children}
    </ContainerBlock>
)

Languages.Language = ({ name, level }) => <div className='language'>{name}<span className='level'>({level})</span></div>

export default Languages