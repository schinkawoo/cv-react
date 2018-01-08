import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const Interests = ({ children }) => (
    <ContainerBlock type='interests' title='Interests'>
        {children}
    </ContainerBlock>
)

Interests.Subject = ({ text }) => <div>{text}</div>

export default Interests