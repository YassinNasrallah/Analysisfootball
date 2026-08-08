
import { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Navigation from '../navigation/Navigation'
import '../style/Main.css'
import Context from '../context/Context'
import Lastmatches from '../components/body/Lastmatches'


const Main = () => {
    const {API}= useContext(Context)
    const [matches, setMatches]= useState([])

    useEffect(()=>{
         const Matches = async()=>{
            const data = await API._getMatches()
            setMatches(data)
            console.log(data)
         }
         Matches()
    },[])

  return (
    <div className='main-container'>
        <Navigation />
        <Context.Provider value={{
          matches,
        }}>
          <Header />
          <Lastmatches />

        </Context.Provider>
        
       
       
    </div>
  )
}

export default Main
