import FootballApi from './api/FootballApi';
import './App.css';
import Context from './context/Context';
import Main from './pages/Main';
import { useEffect, useState } from 'react';
const API= FootballApi()
function App() {
  
  const [search, setSearch] = useState("")
  const [result, setResult] = useState([])
  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  useEffect(()=>{

    const timer = setTimeout(async()=>{
      const data = await API._getplayers(search)
      setResult(data)
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
        result
      }}>
        <Main />
      </Context.Provider>
    </div>
  );
}

export default App;
