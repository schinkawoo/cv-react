import React from 'react'
import Icon from 'react-fontawesome'
import ContainerBlock from '../container/block'
import EditButton from '../edit/button'
import './style.css'
import { connect } from 'react-redux';
import { edit } from '../../components/edit/actions'
import { fieldTypes } from '../fields'

const Contact = ({ address, email, visa, phone, dispatch }) => {
    return address || email || visa || phone ? (
            <ContainerBlock type='contact'>
                <Visa text={visa} />
                <Phone text={phone} />
                <Address address={address} />
                <Email text={email} />
                <EditButton inverted onClick={() => dispatch(edit(contactFields()))}/>
            </ContainerBlock>
        )
        : null
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

function Address ({ address: { street, number, city, postalCode, country }}) {
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

function contactFields () {
    return {
        address: fieldTypes.ADDRESS,
        email: fieldTypes.TEXT,
        phone: fieldTypes.TEXT,
        visa: fieldTypes.TEXT
    }
}

export default connect()(Contact)