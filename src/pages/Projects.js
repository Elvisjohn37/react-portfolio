import React from 'react'
import styles from 'src/pages/Projects.module'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleList } from '@fortawesome/free-regular-svg-icons'
import { useSelector } from 'react-redux'
import Image from 'src/components/Image'
import { provideData } from 'src/pages/projects/slice'
import { Link } from 'react-router-dom'

export default () => {
    const projects = useSelector(provideData)

    return (
        <div id="projects" className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.introduction}>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faRectangleList} /> My Projects
                    </div>
                    {projects.introduction}
                </div>
                <div className={styles.content}>
                    <div className={styles.websites}>
                        {projects.projects.map((project) => (
                            <div key={project.name} className={styles.project}>
                                <Link to={project.url} target="_blank">
                                    <div className={styles.image}>
                                        <Image
                                            src={project.src}
                                            error={() => alert('error')}
                                        />
                                    </div>
                                    <div className={styles.info}>
                                        {project.name}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
