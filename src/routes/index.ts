import React, {FC, ReactElement} from "react";
import {Home} from "pages/Home/Home";
import {Food} from "pages/Food/Food";

interface Route {
    path: string,
    element: ReactElement
}

enum PathList {
    HOME = "/",
    FOOD = "/food"
}

export const routesList: Array<Route> = [
    // {path: PathList.HOME, element: Home()},
    // {path: PathList.FOOD, element: Food()},
]