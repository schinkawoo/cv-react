import React from 'react'
import Section from '../container/section'
import { Description, Job, Project, Task, Summary } from './job'
import './style.css'
const Experience = ({ children }) => (
    <Section title='Experiences' type='experience' icon='briefcase'>
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