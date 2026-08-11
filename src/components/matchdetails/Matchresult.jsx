import React, { useContext } from 'react'
import Context from '../../context/Context'

const Matchresult = () => {
    const {matchDetails} = useContext(Context)
  return (
    <>
          {matchDetails.map((match) => (
                <div
                    className="details" key={match.fixture.id}>
                    <h1>{match.teams.home.name}</h1>
                    <img src={match.teams.home.logo} alt="home-logo" loading='lazy' />
                   
                      <div className="result">
                        <p>Full Time</p>
                        <h2>
                        {match.goals.home} - {match.goals.away}
                       </h2>
                      </div>
                     <img src={match.teams.away.logo} alt="home-logo" loading='lazy' />
                    <h1>{match.teams.away.name}</h1>
                   
                </div>
            ))}
      
    </>
  )
}

export default Matchresult
