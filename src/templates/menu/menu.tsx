import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiCog } from 'react-icons/bi'

import { MainButton } from '../../components/menu/button/mainButton'
import { SettingButton } from '../../components/menu/button/settingButton'
import { useMenuTheme } from '../../hooks/menu/useMenuTheme'
import { MenuObjects } from './menuobjects'
import { MenuSettings } from './menusettings'

export function Menu() {
    const [isSettingOpen, setSettingOpen] = useState(false)

    const onClickSettings = useCallback(() => {
        setSettingOpen(!isSettingOpen)
    }, [isSettingOpen])

    const { theme, prevTheme, nextTheme, controls } = useMenuTheme()

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
            zIndex: 100,
        },
    }

    return (
        <>
            <motion.main
                className="flex absolute top-0 left-0 w-[100vw] h-[100vh]"
                animate={controls}
                transition={{
                    duration: 10,
                    type: 'tween',
                    repeat: Infinity,
                }}
                style={{ ...prevTheme.radialGradient, zIndex: 1, opacity: 1 }}
            />
            <main
                className="flex flex-col justify-center items-center relative h-[100vh]"
                style={theme.radialGradient}
            >
                <motion.section
                    animate={isSettingOpen ? 'visible' : 'hidden'}
                    variants={settingAnimation}
                    className={`absolute h-[235px] w-[130px] top-[-80px] left-[-40px] rotate-45 text-white z-20`}
                    style={{
                        ...theme.backgrounds.dark,
                        transition:
                            'color 0.2s ease-in-out, background 10s ease-in-out',
                    }}
                >
                    <SettingButton
                        onClick={onClickSettings}
                        theme={theme}
                        className="items-center h-[220px]"
                    >
                        <BiCog className="relative mt-2 ml-9 text-[4vw] z-10" />
                        {isSettingOpen && <span>Settings</span>}
                    </SettingButton>
                    <MenuSettings />
                </motion.section>
                <section
                    className={`title flex items-center text-[6vw] px-10 rounded-2xl bg-white relative z-20`}
                    style={{
                        ...theme.texts.dark,
                        boxShadow: '1px 1px 10px gray',
                    }}
                >
                    <AiOutlineLineChart className="mr-6" />
                    Board Game
                </section>
                <section className="flex flex-col items-center justify-center w-[40vw] relative z-20 mt-20">
                    <MainButton theme={theme} className="w-[40vw] mb-12">
                        Resume
                    </MainButton>
                    <MainButton theme={theme} order="even" className="w-[25vw]">
                        New Game
                    </MainButton>
                    <MainButton theme={theme} className="w-[25vw]">
                        Exit
                    </MainButton>{' '}
                </section>
                <MenuObjects />
            </main>
        </>
    )
}
