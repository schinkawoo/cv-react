import React from 'react'
import Section from '../container/section'

export default ({ children }) => (
    <Section title='Career Profile' icon='user' type='summary'>
        <p>{children}</p>
    </Section>
)