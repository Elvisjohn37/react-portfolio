import React from 'react'
import { FallingLines } from 'react-loader-spinner'
import styles from 'src/components/LoadingSpinner.module'

export default () => {
    return (
        <div className={styles.loadingSpinner}>
            <FallingLines
                color={styles.colors_primary}
                width="100"
                visible={true}
                ariaLabel="falling-lines-loading"
            />
        </div>
    )
}
