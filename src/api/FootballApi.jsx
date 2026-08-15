import React from 'react'

const FootballApi = () => {
 const API_key = ''
 
 const _getplayers = async(search)=>{
    const result = await fetch(`https://v3.football.api-sports.io/players/profiles?&search=${search}`,{
        headers:{
            "x-apisports-key":API_key
        }
    })
    const data = await result.json()
    console.log(data)
    return data.response
 }

 const _getteams = async(search) =>{
      const result = await fetch(`https://v3.football.api-sports.io/teams?search=${search}`,{
        headers:{
            "x-apisports-key":API_key
        }
      
      })
            const data = await result.json()
            console.log(data)
            return data.response
 }

 const _getMatches = async() =>{
    const result = await fetch( `https://v3.football.api-sports.io/fixtures?team=541&league=2&season=2022`,{
         headers:{
            "x-apisports-key":API_key
         }

    })
    const data = await result.json()
    console.log(data)
    return data.response
 }
 const _getstate = async(id) =>{
    const result = await fetch( `https://v3.football.api-sports.io/fixtures/statistics?fixture=${id}`,{
         headers:{
            "x-apisports-key":API_key
         }

    })
    const data = await result.json()
    console.log(data)
    return data.response
 }
 
 const _getMatchById = async (id) => {
    const result = await fetch(
        `https://v3.football.api-sports.io/fixtures?id=${id}`,
        {
            headers: {
                "x-apisports-key": API_key
            }
        }
    )

    const data = await result.json()

    return data.response
}
 const _getPlayersById = async (id) => {
    const result = await fetch(
        `https://v3.football.api-sports.io/players?id=${id}&season=2022`,
        {
            headers: {
                "x-apisports-key": API_key
            }
        }
    )

    const data = await result.json()

    console.log(data)

    return data.response
}


 return {
    _getplayers,
    _getteams,
    _getMatches,
    _getMatchById,
    _getstate,
    _getPlayersById
 }
}

export default FootballApi
