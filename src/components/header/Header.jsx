import React from 'react'
import uclwiner from '../../assest/uclWinner.jfif'
const Header = () => {
  return (
  <div className="hero">
  <div className="hero-content">
    <span className="hero-tag">CHAMPIONS LEAGUE</span>

    <h1>
      PSG 
      <br />Make 
      <br />History 
      <br />Again
    </h1>

    <h2>
      Back-to-Back Champions League Champions
    </h2>

      <p className='descrption'>
      Paris Saint-Germain defeat Arsenal on penalties
      to claim another European crown.
    </p>

   
  </div>

  <div className="hero-image">
    <img
      src={uclwiner}
      alt="PSG celebrating Champions League victory"
      loading='lazy'
    />
   
  </div>
</div>
  )
}

export default Header
