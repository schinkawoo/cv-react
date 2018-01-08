import React from 'react'
import Section from '../container/section'
import { Description, Job, Project, Task } from './job'

const Experience = ({ children }) => (
    <Section title='Experience' type='experienc' icon='briefcase'>
        {children}
    </Section>
)

export {
    Description,
    Experience,
    Job,
    Project,
    Task
}