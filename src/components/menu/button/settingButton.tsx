import React from 'react'
import { useAtom } from 'jotai'
import { ThemedAtom } from '../../../store'
import { Button as Btn } from '../../../styled/button'
import { ITheme } from '../../../theme/typing'

interface IButton extends JSX.ElementChildrenAttribute {
    className?: string
    theme: ITheme
    onClick?: () => void
}

export function SettingButton(props: IButton) {
    return (
        <Btn.Setting
            color={props.theme.dark}
            onClick={props.onClick}
            className={`flex justify-center text-4xl mb-8
                font-bold px-4 py-4 cursor-pointer relative ${props.className}`}
            style={{
                ...props.theme.boxShadows.regular,
                transition:
                    'color 0.2s ease-in-out, background 10s ease-in-out',
            }}
        >
            <span className="text">{props.children}</span>
        </Btn.Setting>
    )
}
