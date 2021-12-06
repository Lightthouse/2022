import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {routesList} from "routes";


export const AppRouter = () => {
    return (
        <Routes>
            {
                routesList.map(r => <Route key={r.path} path={r.path} element={r.element}/> )
            }
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>

    );
};

