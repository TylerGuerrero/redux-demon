// actions creators will return a action object
// with a type and payload

// actions are the only way to update the store and
// change the global state management system

import { BUY_CAKE } from '../cakeTypes'

export const buyCake = (number = 1) => {
    return {
        type: BUY_CAKE,
        payload: number
    }
}