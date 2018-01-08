import React from 'react'
import Header from './header'
import Description from './description'
import { Project, Task } from './project'

const Job = ({ children, company, title, startTime, endTime}) => (
    <div className='item'>
        <Header company={company} title={title} startTime={startTime} endTime={endTime} />
        {children}
    </div>
)

export {
    Description,
    Job,
    Project,
    Task
}

