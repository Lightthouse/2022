import {createSlice} from "@reduxjs/toolkit";

interface CommonObj {
    id: string
    name: string
}

interface PersonObj extends CommonObj{
    photo: string
}

interface FoodObj extends CommonObj{
    volume?: string
    count?: number
}


interface MusicObj extends CommonObj{
    author: string
}

interface StuffObj extends CommonObj{
    count: number
}

interface NoteObj extends CommonObj{
}


interface StateI {
    person: PersonObj[]
    food: FoodObj[]
    music: MusicObj[]
    stuff: StuffObj[]
    note: NoteObj[]
}


type fillingEntities = "person" | "music" | "stuff" | "food" | "note"

type Action = {payload: {fillingType: fillingEntities, value: any }}

const initState: StateI = {
    person: [{id: "1", name: "Степан", photo: "https://n1s1.elle.ru/89/25/c1/8925c155074d6a8c930c80823f6d705f/728x974_1_f0bb3f0f7fb8a1c9054b8b38495bd7cc@2243x3000_0xc0a839a4_2592546691474196282.jpeg"}, {id: "2", name: "Алексей", photo: "https://n1s2.starhit.ru/40/65/85/406585fbc2973466c027395eee2523ea/480x497_0_3fb193a83f594f412626a99b1373bd10@480x497_0xac120003_14492419171588864292.jpg"}],
    food: [{id: "1", name: "Мандарины", volume: "2кг"}, {id: "2", name: "Шампанское", volume: "0.7л", count: 3}],
    music: [{id: "1", name: "Let It Snow!", author: "Frank Sinatra"}, {id: "2", name: "Blue Christmas", author: "Elvis Presley"}],
    stuff: [{id: "1", name: "Стулья", count: 2}, {id: "2", name: "Петарды", count: 5}],
    note: [{id: "1", name: "Не сломать телевизор"}]

}

export const slice = createSlice({
    name: "filling",
    initialState: initState,
    reducers: {

        add(state, action:Action) {
            state[action.payload.fillingType].push(action.payload.value)
        },
        // update(state, action) {
        //     state[action.payload.fillingType].push(action.payload.value)
        // },

        remove(state: { [key: string]: any[] }, action: Action) {
            state[action.payload.fillingType] = state[action.payload.fillingType].filter(i => i.id !== action.payload.value)
        },
    }
})

