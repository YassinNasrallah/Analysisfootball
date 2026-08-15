import React from 'react'
import Logo from '../components/Logo'
import Navlinks from '../components/Navlinks'
import Search from '../components/Searchbar'
import Suggestions from './Suggestions'
import Searchwrapper from './Searchwrapper'

const Navigation = () => {
  return (
    <div className='nav-container'>
      
        <Logo />
        <Navlinks />
        <Searchwrapper />
    </div>
    
  )
}

export default Navigation
