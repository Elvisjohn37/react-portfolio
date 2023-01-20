import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faReact,
    faCss3,
    faHtml5,
    faSass,
    faPhp,
    faLaravel,
} from '@fortawesome/free-brands-svg-icons'
import Webpack from 'src/utils/assets/svg/webpack.svg'
import Jest from 'src/utils/assets/svg/jestTest.svg'
import styles from 'src/pages/about/CurrentTechnologies.module'

export default ({ currentTechnologies }) => {
    const technologiesIcons = {
        react: faReact,
        css3: faCss3,
        html5: faHtml5,
        sass: faSass,
        php: faPhp,
        laravel: faLaravel,
    }
    const customIcons = {
        webpack: Webpack,
        jest: Jest,
    }
    return (
        <div className={styles.currentTechnologies}>
            Current Technologies:
            {currentTechnologies
                .filter((currentTechnologie) =>
                    Object.keys({
                        ...technologiesIcons,
                        ...customIcons,
                    }).includes(currentTechnologie)
                )
                .map((currentTechnology) => {
                    if (technologiesIcons[currentTechnology] != undefined) {
                        return (
                            <FontAwesomeIcon
                                title={currentTechnology}
                                icon={technologiesIcons[currentTechnology]}
                            />
                        )
                    } else {
                        const CustomIcon = customIcons[currentTechnology]
                        return (
                            <div title={currentTechnology}>
                                <CustomIcon />
                            </div>
                        )
                    }
                })}
            {/* <Webpack /> */}
        </div>
    )
}
