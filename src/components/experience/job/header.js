import React from 'react'

const companyComponent = (company, companyUrl) => companyUrl 
        ? <div className="company"><a href={companyUrl}>{company}</a></div>
        : <div className="company">{company}</div>

export default ({ company, companyUrl, title, startTime, endTime='Present' }) => !company || !title || !startTime 
? null
: (
    <div className="meta">
        <div className="upper-row">
            <h3 className="job-title">{title}}</h3>
            <div className="time">{startTime} - {endTime}</div>
        </div>
        {companyComponent(company, companyUrl)}
    </div>
)