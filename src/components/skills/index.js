import React from 'react'
import Skill from './skill'
import Section from '../container/section'
import './style.css'
import connect from 'react-redux/lib/connect/connect';

const Skills = ({ cursor, path, dispatch }) => {
    if (!cursor || cursor.size === 0) return null

    return (
        <Section icon='line-chart' type='skills' title='Skills & Proficiency'>
            <div className="skillset">
                {cursor.toArray().map((skill, index) => 
                    <Skill 
                        title={skill.get('name')} 
                        level={skill.get('level')} 
                        key={index} 
                    />
                )}
            </div>
        </Section>
    )
}

export default connect()(Skills)