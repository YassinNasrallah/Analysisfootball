import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'
import Matchresult from '../components/matchdetails/Matchresult'
import Statitistics from '../components/matchdetails/Statitistics'
import Navigation from '../navigation/Navigation'
import '../style/Matchstate.css'

const Matchdetails = () => {
    const { API } = useContext(Context)
    const { id } = useParams()
    const [matchDetails, setMatchdetails] = useState([])
    const [statistics, setStatistics]= useState([])

    useEffect(() => {
        const Matches = async () => {
            const match = await API._getMatchById(id)
            const state = await API._getstate(id)
            console.log("Match details:", match)
            setMatchdetails(match)
            setStatistics(state)
        }
        Matches()
    }, [id])

    return (
        <>
        <Navigation />
       
        <div className="matchdetails-container">
           <Context.Provider value={{
            matchDetails,
            statistics
           }}>
            <Matchresult />
            <Statitistics />
           </Context.Provider> 
        </div>
         </>
    )
}

export default Matchdetails