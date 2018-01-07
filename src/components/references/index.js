import React from 'react'
import ContainerBlock from '../container/block'
import Icon from 'react-fontawesome'
import './style.css'

const References = ({ children }) => (
    <ContainerBlock title='References'>
        {children}
    </ContainerBlock>
)

References.Reference = ({ name, title}) => (
    <div className='reference'>
        <div className='name'>{name}</div>
        <div className='role'><Icon name='briefcase' /> {title}</div>
    </div>
)

export default References