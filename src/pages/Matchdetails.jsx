import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Context from '../context/Context'
const Matchdetails = () => {
    const {API} = useContext(Context)
    const {id} = useParams()
    const [matchDetails, setMatchdetails]= useState([])

    useEffect(()=>{
       const Matches = async()=>{
        const match = await API._getMatches(id)
        setMatchdetails(match)
       }
       Matches()
    },[id])
  return (
    <div className='matchdetails-container'>
        {matchDetails.map((match)=>(
            <div className="deatils">
                <h1>{match.team.home}</h1>
            </div>
        ))}
      
    </div>
  )
}

export default Matchdetails
