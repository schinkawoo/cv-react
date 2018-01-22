import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const References = ({ data }) => (
    <ContainerBlock icon='address-card-o' title='References' type='references'>
        {data.map((item, index) => (
            <Reference
                company={item.company}
                name={item.name}
                title={item.role}
            />
        ))}
    </ContainerBlock>
)

function Reference ({ company, name, title}) {
    return (
        <div>
            <h4 className='name'>{name}</h4>
            <div className='role'>{title}</div>
            <div className='company'>{company}</div>
        </div>
    )
}

export default References