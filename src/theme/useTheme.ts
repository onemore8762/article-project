import {LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext} from "./ThemeContext";
import {useCallback, useContext} from "react";

interface UseThemeResult {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = useCallback(() => {
        const newTheme: Theme = theme === 'dark' ? 'light': 'dark'
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme)
    }, [theme])


    return {
        theme,
        toggleTheme
    }

}
