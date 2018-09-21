import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'
import connect from 'react-redux/lib/connect/connect';

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function interestItems (type, cursor) {
    return type === 'compact'
        ? <div>{cursor.toArray().reduce((acc, item, index) => (index === 0) ? `${capitalize(item)}`: `${acc}, ${item}`, '')}</div>
        : cursor.toArray().map((item, index) => <div>{capitalize(item)}</div>)
}

const Interests = ({ cursor, path, dispatch, type = 'compact' }) => (
    <ContainerBlock icon='bicycle' type='interests' title='Interests'>
        {interestItems(type, cursor)}
    </ContainerBlock>
)

export default connect()(Interests)