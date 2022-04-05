import { useEffect, useMemo } from 'react'
import { Colors, createTheme } from '../../theme'
import { useAtom } from 'jotai'
import { ThemedAtom } from '../../store'
import { useAnimation } from 'framer-motion'

export function useMenuTheme() {
    const [theme, setTheme] = useAtom(ThemedAtom)
    const controls = useAnimation()

    const nextTheme = useMemo(() => {
        const keys = Object.keys(Colors)
        const currentIndex = keys.findIndex((key) => key === theme.key)
        const nextIndex = currentIndex > keys.length - 2 ? 0 : currentIndex + 1
        return createTheme(
            Colors[keys[nextIndex] as 'blue' | 'green' | 'brown']
        )
    }, [theme])

    const prevTheme = useMemo(() => {
        const keys = Object.keys(Colors)
        const currentIndex = keys.findIndex((key) => key === theme.key)
        const prevIndex = currentIndex <= 0 ? keys.length - 1 : currentIndex - 1
        return createTheme(
            Colors[keys[prevIndex] as 'blue' | 'green' | 'brown']
        )
    }, [theme])

    useEffect(() => {
        setTheme(nextTheme)
        controls.start({ opacity: 0 }).then()
    }, [])

    useEffect(() => {
        const interval = window.setInterval(() => {
            setTheme(nextTheme)
            controls.stop()
            controls.set({ opacity: 1 })
            controls.start({ opacity: 0 })
        }, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [theme])

    return { theme, prevTheme, nextTheme, controls }
}
