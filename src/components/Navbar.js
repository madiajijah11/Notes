import React from 'react'
import SearchInput from './SearchInput'

/**
 * The navigation bar component for the application.
 * It displays the application title and a search input field.
 * @param {Object} props - The component's props.
 * @param {function(string): void} props.onSearch - The function to call when the search input changes.
 * @returns {JSX.Element} The rendered component.
 */
const Navbar = ({onSearch}) => {
    return (
        <nav className='note-app__header'>
            <h1>Notes</h1>
            <SearchInput onSearch={onSearch} />
        </nav>
    )
}

export default Navbar