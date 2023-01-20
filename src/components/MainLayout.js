import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from 'src/components/MainNavigation'
import LoadingScreen from 'src/components/LoadingScreen'
import styles from 'src/components/MainLayout.module'
import SocialMediaNavigation from 'src/components/SocialMediaNavigation'

export default () => {
    const [isLoading, setIsLoading] = useState(true)

    setTimeout(() => {
        setIsLoading(false)
    }, 300)

    return (
        <>
            {isLoading ? (
                <LoadingScreen key="mainLoadingScreen" startFadeOut={true} />
            ) : (
                <div className={styles.MainLayout}>
                    <MainNavigation />
                    <SocialMediaNavigation />
                    <Outlet />
                </div>
            )}
        </>
    )
}
