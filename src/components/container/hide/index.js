import React from 'react';
import classNames from 'classnames'
import './style.css';

export default ({ children, xsmall = false, small = false, medium = false, large = false, print = false, xlarge = false }) => {    
    const classes = classNames({
        hide: true,
        xsmall,
        small,
        medium,
        large,
        print,
        xlarge
    })
    return (
        <div className={classes}>
            {children}
        </div>
    )
}