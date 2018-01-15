import React from 'react'
import Section from '../container/section'
import { Description, Job, Project, Task, Summary } from './job'
import './style.css'
const Experience = ({ children, icon }) => (
    <Section title='Experiences' type='experience' icon={icon || 'briefcase'}>
        {children}
    </Section>
)

export {
    Description,
    Experience,
    Job,
    Project,
    Summary,
    Task
}