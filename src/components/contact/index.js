import React from 'react'
import Icon from 'react-fontawesome'
import ContainerBlock from '../container/block'
import './style.css'

const Contact = ({ children }) => (
    <ContainerBlock type='contact'>
        {children}
    </ContainerBlock>
)

Contact.Visa = ({ text }) => <div className="permit"><Icon name="id-card-o"/>Visa/Permit {text}</div>
Contact.Phone = ({ text }) => <div className="phone"><Icon name='phone' />{text}</div>
Contact.Address = ({ text }) => <div className="address"><Icon name='location-arrow' />{text}</div>
Contact.Email = ({ text }) => (
    <div className="email">
        <Icon name='envelope' />
        <a href={`mailto: ${text}`}>{text}</a>
    </div>
)

export default Contact