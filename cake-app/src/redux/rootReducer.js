import { combineReducers } from 'redux'
import { cakeReducer } from './cake/reducers/cakeReducer'
import { iceCreamReducer } from './icecream/reducers/iceCreamReducer'
import { userReducer } from './user/reducers/userReducers'

export const rootReducer = combineReducers({
    cakes: cakeReducer,
    iceCreams: iceCreamReducer,
    user: userReducer
})