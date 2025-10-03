import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import notes from './notes'

/**
 * The configuration for persisting the notes reducer.
 * @type {import('redux-persist').PersistConfig<any>}
 */
const notesConfig = {
    key: 'notes',
    storage
}

/**
 * The root reducer for the application.
 * It combines all the individual reducers into a single reducer function.
 * The notes reducer is persisted to local storage using redux-persist.
 * @type {import('@reduxjs/toolkit').Reducer}
 */
const reducer = combineReducers({
    notes: persistReducer(notesConfig, notes)
})

export default reducer