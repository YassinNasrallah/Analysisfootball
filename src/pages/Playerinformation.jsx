import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'
import Playerinfo from '../components/playerinfo/Playerinfo'
import Playerstatistics from '../components/playerinfo/Playerstatistics'
import Navigation from '../navigation/Navigation'
import '../style/Player.css'

const Playerinformation = () => {
     const { API } = useContext(Context)
     const { id } = useParams()
     const [playerinfo, setPlayerinfo] = useState([])

     useEffect(()=>{
        const players = async()=>{
            const data = await API._getPlayersById(id)
            setPlayerinfo(data)
            console.log('player', data)
        }
        players()
     },[id])
  return (
    <>
    <Navigation />
    <div className="player-container">
      <Context.Provider value={{
        playerinfo,
      }}>
        <Playerinfo />
        <Playerstatistics />
      </Context.Provider>
    </div>
    </>
  )
}

export default Playerinformation
