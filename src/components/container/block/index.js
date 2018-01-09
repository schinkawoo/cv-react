import React from 'react';
import classNames from 'classnames'
import Icon from 'react-fontawesome'
import './style.css';

export default ({ icon, children, title, type }) => {
    const classes = classNames({
        'container-block': true,
        [type]: !!type
    })
    
    return (
        <div className={classes}>
            <div className='title'>
                {!!icon ? <Icon name={icon} /> : null}
                {!!title ? <h2 className="title-text">{title}</h2> : null}
            </div>
            {React.Children.map(children, child => <div className='block-item'>{child}</div>)}
        </div>
    )
}