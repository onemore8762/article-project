import {createContext} from "react";

interface ContextPropsType {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export type Theme = 'dark' | 'light'

export const LOCAL_STORAGE_KEY_THEME = 'theme'

export const ThemeContext = createContext<ContextPropsType>({})




