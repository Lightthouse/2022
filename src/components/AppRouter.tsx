import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {routesList} from "routes";


export const AppRouter = () => {
    return (
        <Switch>
            {
                routesList.map(r => <Route key={r.path} {...r}/> )
            }
            <Redirect to={"/"}/>
        </Switch>

    );
};

