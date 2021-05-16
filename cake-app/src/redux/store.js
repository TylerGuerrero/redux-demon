import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/RootReducer'

const logger = createLogger();

const store = createStore(rootReducer,
    applyMiddleware(
        logger,
        thunk
    )
)

export default store