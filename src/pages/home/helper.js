import { useState } from 'react'

const useScrollClass = (defaultValue) => {
    let [scrollStatus, setScrollStatus] = useState(null)
    let [previousScroll, setPreviousScroll] = useState(defaultValue)

    window.addEventListener('scroll', () => {
        let currentScroll = window.pageYOffset
        if (currentScroll <= 0) {
            setScrollStatus(null)
        }
        if (currentScroll > previousScroll) {
            setScrollStatus('scrollDown')
        }
        if (currentScroll < previousScroll && currentScroll != 0) {
            setScrollStatus('scrollUp')
        }
        setPreviousScroll(currentScroll)
    })
    return { scrollStatus }
}

export { useScrollClass }
