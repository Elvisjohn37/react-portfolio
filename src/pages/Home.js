import React, { useEffect } from 'react'
import styles from 'src/pages/Home.module'
import { useSelector, useDispatch } from 'react-redux'
import { provideData } from 'src/pages/about/slice'
import classnames from 'classnames'
import { updateRenderStatus } from 'src/pages/home/slice'
import Button from 'src/components/Button'

export default () => {
    const details = useSelector(provideData)
    const homeState = useSelector((state) => state.home)
    const dispatch = useDispatch()
    const startAimation = !homeState.isRendered
    const fullName = `${details.firstName} ${details.lastName}`

    useEffect(() => () => dispatch(updateRenderStatus(true)), [])

    return (
        <div className={styles.home} id="home">
            <div className={styles.container}>
                <div className={styles.mainContent}>
                    <div
                        className={classnames([
                            styles.greetings,
                            startAimation
                                ? styles.startAimation
                                : styles.doneAnimation,
                        ])}
                    >
                        <span>Hello</span>{' '}
                        <div className={styles.im}>
                            <span>I'm</span>
                        </div>
                    </div>
                    <h1
                        className={
                            startAimation
                                ? styles.startAimation
                                : styles.doneAnimation
                        }
                    >
                        {fullName}
                    </h1>
                    <div
                        className={classnames([
                            styles.role,
                            startAimation
                                ? styles.startAimation
                                : styles.doneAnimation,
                        ])}
                    >
                        {details.role}
                    </div>
                    <div
                        className={classnames([
                            styles.itroduction,
                            startAimation
                                ? styles.startAimation
                                : styles.doneAnimation,
                        ])}
                    >
                        {details.introduction}
                    </div>
                </div>
                <div
                    className={classnames([
                        styles.about,
                        startAimation
                            ? styles.startAimation
                            : styles.doneAnimation,
                    ])}
                >
                    <Button
                        className={styles.button}
                        component="hash"
                        label="About Me"
                        type="secondary"
                        to="/#about"
                    />
                </div>
            </div>
        </div>
    )
}
