import React, { useEffect, useRef, useState, useTransition } from 'react'
import styles from 'src/components/LoadingScreen.module'
import classNames from 'classnames'

export default ({ startFadeOut = false }) => {
    return (
        <div className={styles.LoadingScreen}>
            <div
                className={classNames([
                    styles.content,
                    startFadeOut == true && styles.fadeOut,
                ])}
            >
                <div className={styles.openTag}>&lt;Loading&gt;</div>
                <h1>LVS</h1>
                <div className={styles.closeTag}>&lt;/Loading&gt;</div>
            </div>
        </div>
    )
}
