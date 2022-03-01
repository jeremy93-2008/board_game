import React from 'react'
import { useAtom } from 'jotai'
import { ThemedAtom } from '../store'
import { AiOutlineLineChart } from 'react-icons/ai'
import { BiCog } from 'react-icons/bi'

import card1 from '../assets/menu/card1.svg'
import card2 from '../assets/menu/card2.svg'
import card3 from '../assets/menu/card3.svg'

import office from '../assets/menu/office.svg'
import { Button as MainButton } from '../components/menu/button'

export function Menu() {
    const [theme] = useAtom(ThemedAtom)
    return (
        <main
            className="flex flex-col justify-center items-center relative h-[100vh]"
            style={theme.radialGradient}
        >
            <section className="absolute top-0 left-0 cursor-pointer">
                <BiCog className="relative text-white mt-2 ml-2 text-[4vw] z-10" />
                <section
                    className="z-0 absolute -top-8 -left-36 w-[20vw] h-[10vw] -rotate-45"
                    style={theme.backgrounds.dark}
                />
            </section>
            <section
                className={`title flex items-center text-[6vw] px-10 rounded-2xl bg-white relative z-10`}
                style={{
                    ...theme.texts.dark,
                    ...theme.boxShadows.regular,
                }}
            >
                <AiOutlineLineChart className="mr-6" />
                Board Game
            </section>
            <section className="flex flex-col justify-center w-[40vw] relative z-10 mt-20">
                <MainButton variant="primary">Resume</MainButton>
                <MainButton variant="secondary">New Game</MainButton>
                <MainButton variant="secondary">Exit</MainButton>{' '}
            </section>
            <section className="card-bottom-left absolute w-full h-full z-0">
                <img
                    className="absolute -bottom-32 -left-20 z-10"
                    src={card1}
                />
                <img className="absolute -bottom-4 left-10" src={card2} />
            </section>
            <section className="card-top-right absolute w-full h-full z-0">
                <img
                    className="absolute -top-4 -right-24 rotate-[40deg]"
                    src={card1}
                />
                <img className="absolute -top-4 right-16" src={card3} />
            </section>
            <section className="office-bottom-right absolute z-0 -bottom-[70vh] -right-[30vw]">
                <img src={office} />
            </section>
        </main>
    )
}
