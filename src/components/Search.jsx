import React, { useContext } from 'react'
import Context from '../context/Context'

const Search = () => {
    const {search, handleChange} = useContext(Context)
  return (
    <form className='search-input'>
        <input type="text" value={search} onChange={handleChange} />
    </form>
  )
}

export default Search
