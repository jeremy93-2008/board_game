import React from 'react'

export interface ITheme extends IEntryColor {
    key: string
    texts: ICSSColors
    backgrounds: ICSSColors
    boxShadows: ICSSColors
    borders: ICSSColors
    radialGradient: React.CSSProperties
}

export interface ICSSColors {
    light: React.CSSProperties
    regular: React.CSSProperties
    dark: React.CSSProperties
}

export interface IColors {
    green: IEntryColor
    blue: IEntryColor
    brown: IEntryColor
}

export interface IEntryColor {
    idx: number
    key: string
    light: string
    regular: string
    dark: string
}
