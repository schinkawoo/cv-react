import React from 'react'
import ContainerBlock from '../container/block'
import './style.css'

const References = ({ data }) => (
    <ContainerBlock icon='address-card-o' title='References' type='references'>
        {data.map((item, index) => (
            <Reference
                company={item.company}
                name={item.name}
                title={item.title}
                key={index}
            />
        ))}
    </ContainerBlock>
)

function Reference ({ company, name, title}) {
    return name && company ? (
            <div>
                <h4 className='name'>{name}</h4>
                {title ? <div className='role'>{title}</div> : null}
                <div className='company'>{company}</div>
            </div>
        )
        : null
}

export default References