import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
import styles from 'src/components/MainNavigation.module'
import classnames from 'classnames'

export default () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div className={styles.MainNavigation}>
            <div
                className={styles.mobileToggle}
                onClick={() => setShowMobileMenu((value) => !value)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={showMobileMenu && styles.showMobileMenu}>
                <li>
                    <NavHashLink
                        className={({ isActive }) =>
                            classnames([styles.link, isActive && styles.active])
                        }
                        smooth
                        to="/#"
                    >
                        Home
                    </NavHashLink>
                </li>
                <li>
                    <NavLink
                        to="/experience"
                        className={({ isActive }) =>
                            classnames([styles.link, isActive && styles.active])
                        }
                    >
                        Experience
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            classnames([styles.link, isActive && styles.active])
                        }
                    >
                        Projects
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
