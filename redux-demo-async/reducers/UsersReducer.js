// state will get binded to the initial state object
// action will get binded to the action object

// (prevState, action) => newState

// state is immutable so you have to make a copy of the
// the state then make the changes you want

// you have to return the same type that you initialized
// your initial state as whether it be a object or array
// in your reducer

const { FETCH_USERS_REQUEST,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE } = require('../actions/Types');

const initialState = {
    loading: true,
    users: [],
    error: ''
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }

        default:
            return state;
    }
}

module.exports = {
    usersReducer
}

