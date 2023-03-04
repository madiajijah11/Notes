import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from './redux/store'
import NotesApp from './components/NotesApp';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <NotesApp />
            </PersistGate>
        </Provider>
    )
}

export default App