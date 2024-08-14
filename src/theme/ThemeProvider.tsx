import React, {ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext} from "./ThemeContext";


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_KEY_THEME) as Theme || 'light'

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme
    }),[theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
