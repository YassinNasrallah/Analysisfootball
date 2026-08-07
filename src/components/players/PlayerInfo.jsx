import React, { useContext } from 'react'
import Context from '../../context/Context'

const PlayerInfo = () => {
    const {result} = useContext(Context)
  return (
     <div className="player-container">
            {result.map((players) => (
                <h1 key={players.player.id}>
                    {players.player.name}
                </h1>
            ))}
        </div>
  )
}

export default PlayerInfo
