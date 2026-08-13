import { useContext, useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Navigation from '../navigation/Navigation'
import '../style/Main.css'
import Context from '../context/Context'
import Lastmatches from '../components/body/Lastmatches'
import Loading from '../components/loading/Loading'


const Main = () => {
    const {API,  setloading, loading}= useContext(Context)
    const [matches, setMatches]= useState([])
    
    useEffect(()=>{
         const Matches = async()=>{
          setloading(true)
          try{
            const data = await API._getMatches()
            setMatches(data)
            console.log(data)
         } finally{
          setTimeout(()=>{
            setloading(false)
          },3000) 
         }
          }
          Matches()
        
    },[])

  return (
    <div className='main-container'>
    {loading ? (
    <Loading />
     ) : (
    <>
        <Navigation />
        <Context.Provider value={{ matches }}>
            <Header />
            <Lastmatches />
        </Context.Provider>
    </>
)}  
    </div>
  )
}

export default Main
