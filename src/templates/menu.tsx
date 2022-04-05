import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useAtom } from 'jotai'
import { motion } from 'framer-motion'
import { ThemedAtom } from '../store'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiCog } from 'react-icons/bi'

import { MainButton } from '../components/menu/button/mainButton'
import { SettingButton } from '../components/menu/button/settingButton'

import card1 from '../assets/menu/card1.svg'
import card2 from '../assets/menu/card2.svg'
import card3 from '../assets/menu/card3.svg'

import office from '../assets/menu/office.svg'
import { Colors, createTheme } from '../theme'
import { SOverlayMenu } from '../styled/menu'

export function Menu() {
    const [theme, setTheme] = useAtom(ThemedAtom)
    const [isSettingOpen, setSettingOpen] = useState(false)

    const onClickSettings = useCallback(() => {
        setSettingOpen(!isSettingOpen)
    }, [isSettingOpen])

    const nextTheme = useMemo(() => {
        const keys = Object.keys(Colors)
        const currentIndex = keys.findIndex((key) => key === theme.key)
        const nextIndex = currentIndex > keys.length - 2 ? 0 : currentIndex + 1
        return createTheme(
            Colors[keys[nextIndex] as 'blue' | 'green' | 'brown']
        )
    }, [theme])

    useEffect(() => {
        const interval = window.setInterval(() => {
            setTheme(nextTheme)
        }, 10000)

        return () => {
            clearInterval(interval)
        }
    }, [theme])

    const settingAnimation = {
        hidden: {
            transform: 'rotate(45deg)',
            height: '235px',
            width: '130px',
            top: '-80px',
            left: '-40px',
        },
        visible: {
            transform: 'rotate(0deg)',
            height: '150vh',
            width: '350px',
            top: '0',
            left: '0',
            backgroundColor: theme.dark,
            zIndex: 100,
        },
    }

    return (
        <main
            className="flex flex-col justify-center items-center relative h-[100vh]"
            style={theme.radialGradient}
        >
            <SOverlayMenu
                animate={{ opacity: 1 }}
                transition={{
                    duration: 10000,
                    repeatType: 'loop',
                    repeat: Infinity,
                }}
                colors={[nextTheme.light, nextTheme.regular]}
            />
            <motion.section
                animate={isSettingOpen ? 'visible' : 'hidden'}
                variants={settingAnimation}
                className={`absolute h-[235px] w-[130px] top-[-80px] left-[-40px] rotate-45 text-white z-20`}
            >
                <SettingButton
                    onClick={onClickSettings}
                    className="items-center h-[220px]"
                >
                    <BiCog className="relative mt-2 ml-9 text-[4vw] z-10" />
                    {isSettingOpen && <span>Settings</span>}
                </SettingButton>
                <section className="px-6 py-2">
                    <section>
                        <span>Color</span>
                        <span>Color Value</span>
                    </section>
                    <section>
                        <span>Color</span>
                        <span>Color Value</span>
                    </section>
                    <section>
                        <span>Color</span>
                        <span>Color Value</span>
                    </section>
                </section>
            </motion.section>
            <section
                className={`title flex items-center text-[6vw] px-10 rounded-2xl bg-white relative z-20`}
                style={{
                    ...theme.texts.dark,
                    ...theme.boxShadows.regular,
                }}
            >
                <AiOutlineLineChart className="mr-6" />
                Board Game
            </section>
            <section className="flex flex-col items-center justify-center w-[40vw] relative z-20 mt-20">
                <MainButton className="w-[40vw] mb-12">Resume</MainButton>
                <MainButton order="even" className="w-[25vw]">
                    New Game
                </MainButton>
                <MainButton className="w-[25vw]">Exit</MainButton>{' '}
            </section>
            <section className="card-bottom-left left-0 bottom-10 absolute w-[250px] h-[200px] z-10">
                <motion.img
                    animate={{
                        rotate: -15,
                        scale: 1.05,
                    }}
                    transition={{
                        duration: 2,
                        type: 'tween',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute -bottom-32 -left-20 z-10"
                    src={card1}
                />
                <motion.img
                    animate={{
                        rotate: 15,
                        scale: 1.15,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 2,
                        type: 'tween',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute -bottom-4 left-10"
                    src={card2}
                />
            </section>
            <section className="card-top-right right-0 top-0 absolute w-[250px] h-[200px] z-10">
                <motion.img
                    animate={{
                        rotate: 50,
                        scale: 1.05,
                    }}
                    transition={{
                        duration: 2,
                        type: 'tween',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute -top-4 -right-24 rotate-[40deg]"
                    src={card1}
                />
                <motion.img
                    animate={{
                        rotate: 35,
                        scale: 1.15,
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 2,
                        type: 'tween',
                        repeat: Infinity,
                        repeatType: 'reverse',
                    }}
                    className="absolute -top-4 right-16"
                    src={card3}
                />
            </section>
            <section className="office-bottom-right absolute z-10 -bottom-[70vh] -right-[30vw]">
                <motion.img src={office} />
            </section>
        </main>
    )
}
