import React from 'react'
import Section from '../container/section'
import EditButton from '../edit/button'
import Job from './job'
import './style.css'

export default ({ data, icon, title }) => data && data.length > 0
    ? (
        <Section title={title || 'Experiences'} type='experience' icon={icon || 'briefcase'}>
            {data.map((job, index) => <Job {...job} key={index} />)}
            <EditButton inverted />
        </Section>
    )
    : null