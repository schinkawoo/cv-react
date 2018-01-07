import React from 'react'
import ContainerBlock from '../container/block'

const Interests = ({ children }) => (
    <ContainerBlock type='interests-container' title='Interests'>
        {children}
    </ContainerBlock>
)

Interests.Subject = ({ text }) => <div>{text}</div>

export default Interests