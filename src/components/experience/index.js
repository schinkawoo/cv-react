import React from 'react'
import Section from '../container/section'
import Job from './job'
import './style.css'
import connect from 'react-redux/lib/connect/connect';
import { fromJS } from 'immutable';

const Experiences = ({ cursor, path, dispatch, field, icon, title }) => cursor && cursor.size > 0
    ? (
        <Section title={title || 'Experiences'} type='experience' icon={icon || 'briefcase'}>
            {cursor.toArray().map((job, index) => 
                <Job
                    company={job.get('company', job.get('conference', fromJS({}))).toJS()} 
                    title={job.get('title')} 
                    projects={job.get('projects', fromJS([])).toJS()} 
                    summary={job.get('summary')} 
                    startDate={job.get('startDate')} 
                    endDate={job.get('endDate')} 
                    key={index} 
                />
            )}
        </Section>
    )
    : null

export default connect()(Experiences)