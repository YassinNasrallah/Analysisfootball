import React from 'react'
import Logo from '../components/Logo'
import Navlinks from '../components/Navlinks'
import Search from '../components/Search'
import Suggestions from './Suggestions'
import Searchwrapper from './Searchwrapper'

const Navigation = () => {
  return (
    <div className='navigation'>
      
        <Logo />
        <Navlinks />
        <Searchwrapper />
      
      
        
    </div>
    
  )
}

export default Navigation
