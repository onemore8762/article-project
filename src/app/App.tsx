import React, {Suspense, useContext, useState} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import '@/app/styles/index.scss'
import {useTheme} from "./providers/lib/useTheme";
import {AboutPage} from "@/pages/AboutPage";
import {MainPage} from "@/pages/MainPage";
import {cn} from "@/shared/lib/classNames/classNames";

export const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={cn('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};
