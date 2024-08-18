import React, {Suspense} from 'react';
import {useRoutes} from "react-router-dom";
import {routeConfig} from "@/app/providers/router/config/routeConfig";

export const AppRouter = () => {
    const elements = useRoutes(Object.values(routeConfig))
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                {elements}
            </Suspense>
        </div>
    );
};
