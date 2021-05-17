// actions creators will return a action object
// with a type and payload

// actions are the only way to update the store and
// change the global state management system

import { BUY_CAKE } from './Types'

export const buyCake = () => {
    return {
        type: BUY_CAKE,
        payload: ''
    }
}