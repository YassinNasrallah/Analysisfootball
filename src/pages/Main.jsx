import { useContext } from 'react'
import Navigation from '../navigation/Navigation'
import '../style/Main.css'
import Context from '../context/Context'
import PlayerInfo from '../components/players/PlayerInfo'

const Main = () => {
    const {result} = useContext(Context)

    

  return (
    <div className='main-container'>
        <Navigation />
        <Context.Provider value={{
            result
        }}>
          <PlayerInfo />
        </Context.Provider>
       
    </div>
  )
}

export default Main
