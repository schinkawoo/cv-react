import React from 'react'
import Icon from 'react-fontawesome'
import classNames from 'classnames'
import './style.css'

export default ({ children, icon, type, title ='' }) => {
    const classes = classNames({
        'section': true,
        [`${type}-section`]: !!type
    })

    return (
        <section className={classes}>
            <h2 className="section-title">
                {icon ? <Icon name={icon} /> : null}
                {title}
            </h2>
            {children}
        </section>
    )
}

