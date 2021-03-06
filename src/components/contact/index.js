import React from 'react'
import Icon from 'react-fontawesome'
import ContainerBlock from '../container/block'
import './style.css'
import { connect } from 'react-redux';
import { keyIn } from '../data'

const Contact = ({ cursor, path, dispatch }) => {
    const keys = [ 'visa', 'phone', 'address', 'email' ]
    const { 
        visa, 
        phone,
        email,
        address
    } = cursor.filter(keyIn(...keys)).toJS()
    return (
        <ContainerBlock type='contact'>
            <Visa text={visa} />
            <Phone text={phone} />
            <Address {...address} />
            <Email text={email} />
        </ContainerBlock>
    )
}

function Visa ({ text }) {
    return text ? <div className="permit"><Icon name="id-card-o"/>Visa/Permit {text}</div> : null
} 

function Phone ({ text }) {
    return text ? <div className="phone"><Icon name='phone' />{text}</div> : null
}

function Email ({ text }) {
    return text ? (
            <div className="email">
                <Icon name='envelope' />
                <a href={`mailto: ${text}`}>{text}</a>
            </div>
        )
        : null
}

function Address ({ street, number, city, postalCode, country }) {
    if (!street || !number || !city) return null

    const text = `${street} ${number}`
        + format(postalCode)
        + format(city)
        + format(country)
    
        return <div className="address"><Icon name='location-arrow' />{text}</div>
}

function format (string) {
    return string ? `, ${string}` : ''
}

export default connect()(Contact)