import React from 'react'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'
import connect from 'react-redux/lib/connect/connect';
import { edit } from '../edit/actions';

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
        <EditButton inverted onClick={() => dispatch(edit(path, ['interests']))} />
    </ContainerBlock>
)

export default connect()(Interests)