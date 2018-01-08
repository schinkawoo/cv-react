import React from 'react'
import Section from '../container/section'
import './style.css'

const Skills = ({ children }) => (
    <Section icon='rocket' type='skills' title='Skills & Proficiency'>
        <div className="skillset">
            {children}
        </div>
    </Section>
)

Skills.Skill = ({ title, level }) => (
    <div className='item'>
        <h3 className="level-title">{title}</h3>
        <div className="level-bar">
            <div className="level-bar-inner" style={{ width: level || 0 }}/>
            <div className="level-bar-fields">
                {Array.from(Array(10).keys()).map(key => <div className='level-bar-field'/>)}
            </div>
        </div> 
    </div>
)

export default Skills