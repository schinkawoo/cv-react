import React from 'react'
import Header from './header'
import Summary from './summary'
import Project from './project'
import './style.css'

export default ({ company, title, projects = [], summary, startDate, endDate }) => (
    <div className='job'>
        <Header company={company} title={title} startDate={startDate} endDate={endDate} />
        <Summary content={summary} />
        {projects.length > 0 ? projects.map((project, index) => <Project {...project} key={index} />) : null}
    </div>
)