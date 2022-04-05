import { atom } from 'jotai'
import { createTheme } from '../theme'
import { IEntryColor } from '../theme/typing'
import { internalThemeAtom } from './internals'

export const ThemedAtom = atom(
    (get) => get(internalThemeAtom),
    (get, set, _args: IEntryColor) => {
        set(internalThemeAtom, createTheme(_args))
    }
)
