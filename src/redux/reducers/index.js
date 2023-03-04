import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import notes from './notes'

const notesConfig = {
    key: 'notes',
    storage
}

const reducer = combineReducers({
    notes: persistReducer(notesConfig, notes)
})

export default reducer