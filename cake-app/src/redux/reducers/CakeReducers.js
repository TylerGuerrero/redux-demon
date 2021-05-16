// state object will be binded to the initial object
// action object will be binded to the action object

// (prevState, action) => newState

// state is immutable, so every time you want to make a 
// change to the state you must make a copy of the state
// then make your changes to that copied state, it will
// replace the prevState with your new State

// must return the same type and structure of 
// the state you had before

import { BUY_CAKE } from '../actions/CakeTypes'

const initialState = {
    numOfCake: 10    
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCake: state.numOfCake - 1
            }
        default:
            return state;
    }
}