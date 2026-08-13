import { useContext } from 'react'
import Context from '../context/Context'
import { useNavigate } from 'react-router-dom'
const Suggestions = () => {
    const {Team, Players} = useContext(Context)
    const navigate = useNavigate()
  return (
     <div className="search-suggestion">
            {Players.slice(0, 5).map((players) => (
                <div key={players.player.id} className="details" onClick={()=>
                  navigate(`/players/${players.player.id}`)
                }>
                  
                  <div className="image">
                    <img src={players.player.photo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {players.player.name}
                      </h3>
                      <p>Player / {players.player.position}</p>
                  </div>
                    
                
                </div> 
            ))}
            
            
            {Team.slice(0, 5).map((clubs) => (
                <div key={clubs.team.id} className="details">
                  
                  <div className="image">
                    <img src={clubs.team.logo} loading='lazy' /> 
                 </div>

                  <div className="name">
                      <h3>
                        {clubs.team.name}
                      </h3>
                      <p>club / {clubs.team.country}</p>
                  </div>
                </div> 
            ))}
        </div>
  )
}

export default Suggestions
