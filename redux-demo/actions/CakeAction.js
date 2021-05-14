const { BUY_CAKE } = require('./Types');

// action creator return action objec that will 
// get dispatched

// only way to change the state in the store is 
// dispatch a action
function buyCake() {
    return {
        type: BUY_CAKE,
        payload: 'first redux action'
    }
}

module.exports = {
    buyCake
}