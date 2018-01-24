import React from 'react'
import moment from 'moment'
import './style.css'

const companyComponent = (company) => {
    const companyText = company.name + (company.location ? `, ${company.location}` : '')

    return company.url 
    ? <div className="company"><a href={company.url}>{companyText}</a></div>
    : <div className="company">{companyText}</div>
}

function format(date) {
    const formattedDate = moment(date, 'YYYY/MM/DD').format('MMM[/]YYYY')
    return formattedDate === 'Invalid date' ? date : formattedDate
}

export default ({ company, title, startDate, endDate }) => {
    return !company || !title || !startDate 
    ? null
    : (
        <div className="job-header">
            <h3 className="title">{title}</h3>
            <div className="period">{endDate ? `${format(startDate)} - ${format(endDate)}` : (format(startDate))}</div>
            {companyComponent(company)}
        </div>
    )
}