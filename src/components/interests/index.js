import React from 'react'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'

function capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

function interestItems (type, data) {
    return type === 'compact'
        ? <div>{data.reduce((acc, item, index) => (index === 0) ? `${capitalize(item)}`: `${acc}, ${item}`, '')}</div>
        : data.map((item, index) => <div>{capitalize(item)}</div>)
}

const Interests = ({ data, type = 'compact' }) => (
    <ContainerBlock icon='bicycle' type='interests' title='Interests'>
        {interestItems(type, data)}
        <EditButton inverted />
    </ContainerBlock>
)

export default Interests