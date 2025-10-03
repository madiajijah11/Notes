import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'

import reducer from './reducers'

/**
 * The main Redux store for the application.
 * It is configured with the root reducer and the thunk middleware.
 * @type {import('@reduxjs/toolkit').EnhancedStore}
 */
const store = configureStore({
    reducer,
    middleware: [thunk]
})

/**
 * The Redux persistor, which is used to persist the store's state to local storage.
 * @type {import('redux-persist').Persistor}
 */
const persistor = persistStore(store)

export {store, persistor}