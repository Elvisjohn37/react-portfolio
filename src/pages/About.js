import React from 'react'
import { useSelector } from 'react-redux'
import { provideData } from 'src/pages/about/slice'
import styles from 'src/pages/About.module'
import Image from 'src/components/Image'
import CurrentTechnologies from 'src/pages/about/CurrentTechnologies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPhone,
    faGraduationCap,
} from '@fortawesome/free-solid-svg-icons'
import elvis from 'src/utils/assets/images/elvis.jpg'

export default () => {
    const aboutData = useSelector(provideData)

    return (
        <div id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.image}>
                    <Image src={elvis} error={() => alert('error')} />
                </div>
                <div className={styles.moreInfo}>
                    <div className={styles.content}>
                        <div className={styles.moreInformation}>
                            <div className={styles.title}>About Me</div>
                            {aboutData.moreInformation}
                        </div>
                        <div className={styles.email}>
                            <label>
                                <FontAwesomeIcon icon={faEnvelope} /> Email
                                Address:
                            </label>{' '}
                            {aboutData.email}
                        </div>
                        <div className={styles.mobileNumber}>
                            <label>
                                <FontAwesomeIcon icon={faPhone} /> Mobile
                                Number:{' '}
                            </label>
                            {aboutData.mobileNumber}
                        </div>
                        <div className={styles.education}>
                            <label>
                                <FontAwesomeIcon icon={faGraduationCap} />{' '}
                                Education:{' '}
                            </label>
                            {aboutData.education}
                        </div>
                        <CurrentTechnologies
                            currentTechnologies={aboutData.currentTechnologies}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
