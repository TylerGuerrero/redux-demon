import { combineReducers } from 'redux'
import { cakeReducer } from './CakeReducers'

export const rootReducer = combineReducers({
    cakes: cakeReducer
})