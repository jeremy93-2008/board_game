import { IEntryColor, ITheme } from './typing'
import { Colors } from './colors'

export const DEFAULT_THEME = createTheme(Colors.green)

export function createTheme(colors: IEntryColor): ITheme {
    return {
        ...colors,
        texts: {
            light: createTextColor(colors.light),
            regular: createTextColor(colors.regular),
            dark: createTextColor(colors.dark),
        },
        backgrounds: {
            light: createBackgroundColor(colors.light),
            regular: createBackgroundColor(colors.regular),
            dark: createBackgroundColor(colors.dark),
        },
        boxShadows: {
            light: createShadowColor(colors.light),
            regular: createShadowColor(colors.regular),
            dark: createShadowColor(colors.dark),
        },
        borders: {
            light: createBorderColor(colors.light),
            regular: createBorderColor(colors.regular),
            dark: createBorderColor(colors.dark),
        },
        radialGradient: {
            background: `radial-gradient(${colors.light}, ${colors.regular})`,
        },
        linearGradient: {
            background: `linear-gradient(${colors.light}, ${colors.regular})`,
        },
    }
}

function createTextColor(color: string) {
    return {
        color: color,
        transition: 'color 10s ease-in-out, background 10s ease-in-out',
    }
}

function createBackgroundColor(color: string) {
    return {
        backgroundColor: color,
        transition: 'color 10s ease-in-out, background 10s ease-in-out',
    }
}

function createShadowColor(color: string) {
    return {
        boxShadow: `1px 1px 10px ${color}`,
        transition: 'color 10s ease-in-out, background 10s ease-in-out',
    }
}

function createBorderColor(color: string) {
    return {
        border: `2px solid ${color}`,
        transition: 'color 10s ease-in-out, background 10s ease-in-out',
    }
}
