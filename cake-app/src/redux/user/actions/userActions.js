import { FETCH_USERS_REQUEST, 
         FETCH_USERS_SUCCESS, 
         FETCH_USERS_FAILURE } from '../userTypes'
import axios from 'axios';

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: ''
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// used for async api calls
// thunk allows for this

export const fetchUsers = () => (dispatch) => {
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        const users = res.data;
        dispatch(fetchUserSuccess(users))
    }).catch(err => {
        const errMessage = err.message;
        dispatch(fetchUserFailure(errMessage));
    })
}