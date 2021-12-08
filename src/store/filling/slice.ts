import {createSlice} from "@reduxjs/toolkit";


const initState = {
    persons: [{id: 1, name: "Степан", photo: ""}, {id: 2, name: "Алексей", photo: ""}],
    food: [{id: 1, name: "Мандарины"}, {id: 2, name: "Бананы"}],
    music: [{id: 1, name: "Let It Snow!", author: "Frank Sinatra"}, {id: 2, name: "Blue Christmas", author: "Elvis Presley"}],
    stuff: [{id: 1, name: "Стлья", count: 2}, {id: 2, name: "Петарды", count: 5}],
}
export const slice = createSlice({
    name: "filling",
    initialState: {},
    reducers: {
        get(state, action) {},
        update(state, action) {},
        delete(state, action) {},
    }
})