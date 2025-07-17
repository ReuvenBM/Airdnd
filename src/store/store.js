//import { legacy_createStore as createStore, combineReducers } from 'redux'
import { configureStore } from "@reduxjs/toolkit"
import { homeReducer } from "./home/homes.reducer"

export const store = configureStore({
  reducer: {
    homeModule: homeReducer,
  },
})

// For debug:
// store.subscribe(() => {
//     console.log('**** Store state changed: ****')
//     console.log('storeState:\n', store.getState())
//     console.log('*******************************')
// })
