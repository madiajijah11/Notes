import React from 'react'
import SearchInput from './SearchInput'

const Navbar = ({onSearch}) => {
    return (
        <nav className='note-app__header'>
            <h1>Notes</h1>
            <SearchInput onSearch={onSearch} />
        </nav>
    )
}

export default Navbar