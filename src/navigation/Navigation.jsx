import React from 'react'
import Logo from '../components/Logo'
import Navlinks from '../components/Navlinks'
import Search from '../components/Search'

const Navigation = () => {
  return (
    <div className='navigation'>
        <Logo />
        <Navlinks />
        <Search />
    </div>
  )
}

export default Navigation
