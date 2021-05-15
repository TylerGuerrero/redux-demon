const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware;
const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger();

const { buyCake, buyIceCream } = require('./actions/CakeAction')
const { cakeReducer, iceCreamReducer } = require('./reducers/CakeReducers')

// now names have access to the reducers states
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer,
    applyMiddleware(
        logger
    )
);
console.log('Initial state', store.getState());

// store listener
const unsubscribe = store.subscribe(() => {})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();