const { BUY_CAKE, BUY_ICECREAM } = require('./Types');

// action creator return action object that will 
// get dispatched

// only way to change the state in the store is 
// dispatch a action
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'first redux action'
    }
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        payload: 'Buy Ice Cream'
    }
}

module.exports = {
    buyCake,
    buyIceCream
}