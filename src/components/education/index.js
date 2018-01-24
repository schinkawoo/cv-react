import React from 'react'
import moment from 'moment'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'

const Education = ({ data }) => {  
    if (!data || data.length <= 0) return null
    
    return (
        <ContainerBlock icon='graduation-cap' type='education-container' title='Education'>
            {data.map((item, index) => (
                <Item
                    key={index}
                    degree={item.level}
                    university={item.school}
                    graduationTime={moment(item.finishDate, 'YYYY/MM/DD').format('YYYY')}
                />
            ))}
            <EditButton inverted />
        </ContainerBlock>
    )
}

function Item ({ degree, university, graduationTime }) {
    return (
        <div>
            <h4 className="degree">{degree}</h4>
            <div className="university">{university}</div>
            <div className="graduationTime">{graduationTime}</div>
        </div>
    )
}

export default Education