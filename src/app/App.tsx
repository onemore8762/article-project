import React from 'react';
import {Link} from "react-router-dom";
import '@/app/styles/index.scss'
import {cn} from "@/shared/lib/classNames/classNames";
import {useTheme} from "./providers/ThemeProvider";
import {AppRouter} from "./providers/router";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={cn('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <AppRouter/>
        </div>
    );
};
