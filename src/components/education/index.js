import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const Education = ({ children }) => (
    <ContainerBlock icon='graduation-cap' type='education-container' title='Education'>
        {children}
    </ContainerBlock>
)

Education.Item = ({ degree, university, graduationTime }) => (
    <div>
        <h4 className="degree">{degree}</h4>
        <h5 className="university">{university}</h5>
        <div className="graduationTime">{graduationTime}</div>
    </div>
)

export default Education