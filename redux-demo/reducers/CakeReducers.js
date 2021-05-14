const { BUY_CAKE } = require('../actions/Types')

// state object will bind to the orginal initial state object
// action object will bind to the dispatch object

// (prevState, action) => newState

// state is immutbale so you must make a copy of it then
// change it as you desire, you will return a brand new state

// must return the same exact structure of the start object

const initialState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numofCakes: state.numOfCakes - 1
            }
        default: 
            return state

    }    
}

module.exports = {
    cakeReducer
}