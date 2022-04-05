import { motion } from 'framer-motion'
import card1 from '../../assets/menu/card1.svg'
import card2 from '../../assets/menu/card2.svg'
import card3 from '../../assets/menu/card3.svg'
import office from '../../assets/menu/office.svg'
import React from 'react'

export function MenuObjects() {
    return (
        <>
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
        </>
    )
}
