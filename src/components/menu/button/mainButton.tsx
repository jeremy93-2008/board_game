import React from 'react'
import { useAtom } from 'jotai'
import { ThemedAtom } from '../../../store'
import { Button as Btn } from '../../../styled/button'
import { ITheme } from '../../../theme/typing'

interface IButton extends JSX.ElementChildrenAttribute {
    theme: ITheme
    className?: string
    order?: 'even' | 'odd'
    onClick?: () => void
}

export function MainButton(props: IButton) {
    return (
        <Btn.Menu
            color={props.theme.dark}
            order={props.order}
            onClick={props.onClick}
            className={`flex justify-center rounded-2xl text-4xl mb-8
                font-bold px-4 py-4 cursor-pointer relative ${props.className}`}
            style={{
                boxShadow: '1px 1px 10px gray',
                transition:
                    'color 0.2s ease-in-out, background 10s ease-in-out',
            }}
        >
            <span className="text">{props.children}</span>
        </Btn.Menu>
    )
}
