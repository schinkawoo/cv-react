import React from 'react';
import classNames from 'classnames'
import './style.css';

export default ({ children, title, type }) => {
    const classes = classNames({
        'container-block': true,
        [type]: !!type
    })
    
    return (
        <div className={classes}>
            {!!title ? <h2 className="title">{title}</h2> : null}
            {React.Children.map(children, child => <div className='block-item'>{child}</div>)}
        </div>
    )
}