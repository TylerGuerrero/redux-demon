const { BUY_CAKE, BUY_ICECREAM } = require('../actions/Types')

// state object will bind to the orginal initial state object
// action object will bind to the dispatch object

// (prevState, action) => newState

// state is immutbale so you must make a copy of it then
// change it as you desire, you will return a brand new state

// must return the same exact structure of the start object

const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default: 
            return state

    }    
}

// could put this in another file to
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        default:
            return state
    }
}

module.exports = {
    cakeReducer,
    iceCreamReducer 
}