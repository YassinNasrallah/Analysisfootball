import React from 'react'
import heroimage from '../../assest/hero-image.png'
const Header = () => {
  return (
  <div className="hero">
  
      <div className="hero-content">

        <span className="hero-tag">FOOTBALL ANALYSIS</span>

        <h1>
          Understand
          <br />
          The Game
          <br />
          Beyond
          <br />
          The Score
        </h1>

        <h2>
          Matches, Players & Statistics
        </h2>

        <p className="descrption">
          Explore match results, player performances, team statistics,
          and detailed football data — all in one place.
        </p>

      </div>

  <div className="hero-image">
    <img
      src={heroimage}
      alt='hero-image'
      loading='lazy'
    />
   
  </div>
</div>
  )
}

export default Header
