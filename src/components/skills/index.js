import React from 'react'
import Skill from './skill'
import Section from '../container/section'
import EditButton from '../edit/button'
import './style.css'

const Skills = ({ data }) => {
    if (data.length === 0) return null

    return (
        <Section icon='line-chart' type='skills' title='Skills & Proficiency'>
            <div className="skillset">
                {data.map((skill, index) => <Skill title={skill.name} level={skill.level} key={index} />)}
            </div>
            <EditButton inverted />
        </Section>
    )
}

export default Skills