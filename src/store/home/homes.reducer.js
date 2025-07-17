export const SET_HOMES = 'SET_HOMES'
export const SET_HOME = 'SET_HOME'
export const REMOVE_HOME = 'REMOVE_HOME'
export const ADD_HOME = 'ADD_HOME'
export const UPDATE_HOME = 'UPDATE_HOME'
export const ADD_HOME_MSG = 'ADD_HOME_MSG'

const initialState = {
    homes: [],
}

export function homeReducer(state = initialState, action) {
    var newState = state
    var homes
    switch (action.type) {
        case SET_HOMES:
            newState = { ...state, homes: action.homes }
            break
        case SET_HOME:
            newState = { ...state, home: action.home }
            break
        case REMOVE_HOME:
            const lastRemovedHome = state.homes.find(home => home._id === action.homeId)
            homes = state.homes.filter(home => home._id !== action.homeId)
            newState = { ...state, homes, lastRemovedHome }
            break
        case ADD_HOME:
            newState = { ...state, homes: [...state.homes, action.home] }
            break
        case UPDATE_HOME:
            homes = state.homes.map(home => (home._id === action.home._id) ? action.home : home)
            newState = { ...state, homes }
            break
        case ADD_HOME_MSG:
            newState = { ...state, home: { ...state.home, msgs: [...state.home.msgs || [], action.msg] } }
            break
        default:
    }
    return newState
}



