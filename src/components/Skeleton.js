import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-skeleton-loading'

export default ({ height = '0px' }) => {
    return (
        <SkeletonTheme color="#000a12" highlightColor="#263238" height="100px">
            <p>
                <Skeleton height={height} />
            </p>
        </SkeletonTheme>
    )
}
