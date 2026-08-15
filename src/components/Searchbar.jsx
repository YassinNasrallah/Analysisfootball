import React, { useContext } from 'react'
import Context from '../context/Context'
import { Search } from 'lucide-react';
const Searchbar = () => {
    const {search, handleChange} = useContext(Context)
  return (
    <div className='search-input'>
         <Search className='search-icon'/>
        <input type="text" placeholder='SEARCH' value={search} onChange={handleChange} />
    </div>
  )
}

export default Searchbar
