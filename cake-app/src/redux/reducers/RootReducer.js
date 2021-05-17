import { combineReducers } from 'redux'
import { cakeReducer } from './CakeReducers'
import { iceCreamReducer } from './IceCreamReducer'

export const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer 
})