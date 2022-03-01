import { atom } from 'jotai'
import { createTheme } from '../theme'
import { IEntryColor } from '../theme/typing'
import { internalThemeAtom } from './internals'

export const ThemedAtom = atom(
    (get) => get(internalThemeAtom),
    (get, set, _args) => {
        set(internalThemeAtom, createTheme(_args as IEntryColor))
    }
)
