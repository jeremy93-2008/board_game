import React from 'react'
import { useAtom } from 'jotai'
import { ThemedAtom } from '../../store'

interface IButton extends JSX.ElementChildrenAttribute {
    variant: 'primary' | 'secondary'
    onClick?: () => void
}
export function Button(props: IButton) {
    const [theme] = useAtom(ThemedAtom)
    if (props.variant === 'secondary')
        return (
            <section
                onClick={props.onClick}
                className="flex justify-center rounded-2xl text-4xl mb-8
                    w-[30vw] self-center font-bold px-4 py-4 cursor-pointer"
                style={{
                    ...theme.texts.dark,
                    ...theme.borders.dark,
                }}
            >
                {props.children}
            </section>
        )
    return (
        <section
            onClick={props.onClick}
            className="flex justify-center rounded-2xl text-4xl mb-8
                    font-bold text-white px-4 py-4 cursor-pointer"
            style={{
                ...theme.backgrounds.dark,
                ...theme.boxShadows.regular,
            }}
        >
            {props.children}
        </section>
    )
}
