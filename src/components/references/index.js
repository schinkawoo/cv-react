import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const References = ({ children }) => (
    <ContainerBlock icon='briefcase' title='References' type='references'>
        {children}
    </ContainerBlock>
)

References.Reference = ({ company, name, title}) => (
    <div>
        <h4 className='name'>{name}</h4>
        <div className='role'>{title}</div>
        <div className='company'>{company}</div>
    </div>
)

export default References