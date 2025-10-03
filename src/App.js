import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from "redux-persist/lib/integration/react";
import { store, persistor } from './redux/store'
import NotesApp from './components/NotesApp';

/**
 * The root component of the application.
 * It wraps the `NotesApp` component with the Redux `Provider` and `PersistGate`
 * to make the Redux store and persisted state available to the entire application.
 * @returns {JSX.Element} The rendered component.
 */
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