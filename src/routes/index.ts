import React, {FC, ReactElement} from "react";
import {Home} from "pages/Home/Home";
import {Edit} from "pages/Edit/Edit";

interface Route {
    path: string,
    component: FC,
    exact: true
}

enum PathList {
    HOME = "/",
    FOOD = "/edit"
}

export const routesList: Array<Route> = [
    {path: PathList.HOME, exact: true, component: Home},
    {path: PathList.FOOD, exact: true, component: Edit},
]