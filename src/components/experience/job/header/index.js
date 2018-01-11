import React from 'react'
import './style.css'

const companyComponent = (company, companyUrl) => companyUrl 
        ? <div className="company"><a href={companyUrl}>{company}</a></div>
        : <div className="company">{company}</div>

export default ({ company, companyUrl, title, startTime, endTime='Present' }) => !company || !title || !startTime 
? null
: (
    <div className="job-header">
        <h3 className="title">{title}</h3>
        <div className="period">{startTime} - {endTime}</div>
        {companyComponent(company, companyUrl)}
    </div>
)