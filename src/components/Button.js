import React from 'react'
import classnames from 'classnames'
import { HashLink } from 'react-router-hash-link'
import styles from 'src/components/Button.module'

export default ({
    onClick = () => null,
    label = '',
    type = 'primary',
    component = 'button',
    to = '/',
    size = 'medium',
    ...props
}) => {
    const defaultProps = {
        className: classnames([
            styles.button,
            type == 'primary' ? styles[type] : styles['secondary'],
            size == 'medium'
                ? styles[size]
                : size == 'large'
                ? styles['large']
                : styles['small'],
            props.className,
        ]),
    }
    switch (component) {
        case 'hash':
            return (
                <HashLink smooth {...defaultProps} to={to}>
                    {label}
                </HashLink>
            )
        default:
            return (
                <button {...defaultProps} onClick={onClick}>
                    {label}
                </button>
            )
    }
}
