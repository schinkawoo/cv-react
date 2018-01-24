import React from 'react'
import './style.css'


export default ({ content }) => content ? (
        <div className='job-summary'>
            {content}
        </div>
    )
    : null