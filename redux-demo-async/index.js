const { createStore, 
        combineReducers, 
        applyMiddleware } = require('redux');

const { createLogger } = require('redux-logger')
const logger = createLogger();
const thunk = require('redux-thunk').default;

// actions
const { fetchUsersRequest,
        fetchUsersSuccess,
        fetchFailure,
        fetchUsers } = require('./actions/FetchUsersActions')

// reducers
const { usersReducer } = require('./reducers/UsersReducer');

// names will be binded to reducers state object
const rootReducer = combineReducers({
    users: usersReducer
});

const store = createStore(rootReducer, 
    applyMiddleware(
        logger,
        thunk
));

store.subscribe(() => console.log(store.getState()))
store.dispatch(fetchUsers())