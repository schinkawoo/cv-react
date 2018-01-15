import React from 'react'
import Header from './header'
import Description from './description'
import Summary from './summary'
import { Project, Task } from './project'
import './style.css'

const Job = ({ children, company, companyUrl, title, startTime, endTime}) => (
    <div className='job'>
        <Header company={company} companyUrl={companyUrl} title={title} startTime={startTime} endTime={endTime} />
        {children}
    </div>
)

export {
    Description,
    Job,
    Project,
    Summary,
    Task
}

