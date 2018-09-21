import React from 'react'
import moment from 'moment'
import ContainerBlock from '../container/block'
import './style.css'
import { connect } from 'react-redux';

const Education = ({ cursor, path, dispatch }) => { 
    if (!cursor || cursor.size <= 0) return null
    const keys = ['education']

    return (
        <ContainerBlock icon='graduation-cap' type='education-container' title='Education'>
            {cursor.toArray().map((item, index) => (
                <Item
                    key={index}
                    degree={item.get('level')}
                    university={item.get('school')}
                    graduationTime={moment(item.get('finishDate'), 'YYYY/MM/DD').format('YYYY')}
                />
            ))}
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

export default connect()(Education)