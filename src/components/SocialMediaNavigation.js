import React from 'react'
import styles from 'src/components/SocialMediaNavigation.module'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faSkype,
    faViber,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { useSelector } from 'react-redux'
import { provideData } from 'src/pages/about/slice'

export default () => {
    const socialMidiaLinks = useSelector(provideData).socialMidiaLinks
    const socialMidiaLinksIcons = {
        facebook: faFacebook,
        skype: faSkype,
        viber: faViber,
        github: faGithub,
    }
    return (
        <div className={styles.socialMediaNavigation}>
            <div className={styles.container}>
                <ul>
                    {socialMidiaLinks
                        .filter((socialMidiaLink) =>
                            Object.keys(socialMidiaLinksIcons).includes(
                                socialMidiaLink.name
                            )
                        )
                        .map((socialMidiaLink) => (
                            <li>
                                <Link
                                    key={socialMidiaLink.name}
                                    to={socialMidiaLink.link}
                                    target="_blank"
                                    component="a"
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            socialMidiaLinksIcons[
                                                socialMidiaLink.name
                                            ]
                                        }
                                    />
                                </Link>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}
