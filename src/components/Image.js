import React, { useState } from 'react'
import styles from 'src/components/Image.module'
import placeholder from 'src/utils/assets/images/placeholder.png'
import Skeleton from 'src/components/Skeleton'

export default ({
    src = placeholder,
    success = () => null,
    error = () => null,
}) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <div className={styles.image}>
            <div>{isLoading && <Skeleton height="164px" />}</div>
            <img
                src={src}
                onLoad={() => {
                    setIsLoading(false)
                    success()
                }}
                onError={() => error()}
            />
        </div>
    )
}
