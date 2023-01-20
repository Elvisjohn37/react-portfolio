import React from 'react'
import styles from 'src/pages/Experience.module'
import { provideData } from 'src/pages/experience/slice'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Technologies = ({ technologies = [] }) => {
    return (
        <div className={styles.technologies}>
            {technologies.map(({ technology, rate }) => (
                <div className={styles.technology}>
                    <div>{technology}</div>
                    <div>{rate}</div>
                </div>
            ))}
        </div>
    )
}

export default () => {
    const experience = useSelector(provideData)
    const frontend = experience.technologies.frontend
    const backend = experience.technologies.backend
    return (
        <div className={styles.experience}>
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faBriefcase} /> My Experience
                    </div>
                    {experience.introduction}
                </div>
                <div className={styles.content}>
                    <div className={styles.frontend}>
                        <div>Frontend Development</div>
                        <div className={styles.technologies}>
                            <Technologies technologies={frontend} />
                        </div>
                    </div>
                    <div className={styles.backend}>
                        <div>Backend Development</div>
                        <Technologies technologies={backend} />
                    </div>
                </div>
            </div>
        </div>
    )
}
