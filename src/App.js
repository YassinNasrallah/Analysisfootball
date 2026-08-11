import FootballApi from './api/FootballApi';
import './App.css';
import Context from './context/Context';
import Main from './pages/Main';
import { useEffect, useState } from 'react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Matchdetails from './pages/Matchdetails';
const API= FootballApi()
function App() {
  
  const [search, setSearch] = useState("")
  const [Players, setPlayers] = useState([])
  const [Team, setTeams] = useState([])
  const [loading, setloading,]= useState(true)
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  useEffect(()=>{
    if(search.trim()===""){
      return
    }

    const timer = setTimeout(async()=>{
      const players = await API._getplayers(search)
      const teams = await API._getteams(search)
      setTeams(
        teams
      )
      setPlayers(
        players
      )
      console.log(players,
        teams
      )
    },300)
    return()=>{
      clearTimeout(timer)
    }
  },[search])
  
  return (
    <div className="App">
      <Context.Provider value={{
        handleChange,
        search,
        Team,
        Players,
        setloading,
        loading,
        API
      }}>
        <Routes>
         <Route path='/' element={<Main />} />
         <Route path='/fixtures/:id' element={<Matchdetails />} />
        </Routes>
      </Context.Provider>
    </div>
  );
}

export default App;
