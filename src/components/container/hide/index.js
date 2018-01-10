import React from 'react';
import classNames from 'classnames'
import './style.css';

export default ({ children, xsmall = false, small = false, medium = false, large = false, xlarge = false }) => {    
    const classes = classNames({
        xsmall,
        small,
        medium,
        large,
        xlarge,
    })
    return (
        <div className={classes}>
            {children}
        </div>
    )
}