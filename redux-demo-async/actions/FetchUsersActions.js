// - action creators simply  will return action objects that
//   have a type and payload

// - actions will dispatch a action object to the store 
//  actions are the only way to enter the store and update
//  the global state managment system

const { FETCH_USERS_REQUEST,
        FETCH_USERS_SUCCESS,
        FETCH_USERS_FAILURE } = require('./Types')

const axios = require('axios');

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: ''
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// redux thunk allows for you to return a function
// as a action creator

// has access to dispatch

// function is impure so you can use async functions

const fetchUsers = () => (dispatch) => {
    dispatch(fetchUsersRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
        const users = res.data.map(user => user.id)
        dispatch(fetchUsersSuccess(users))
    }).catch((err) => {
        dispatch(fetchUsersFailure(err));
    })
}

module.exports = {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure,
    fetchUsers
}