import React from 'react'

const FootballApi = () => {
 const API_key = 'your-own-code'
 const _getplayers = async(search)=>{
    const result = await fetch(`https://v3.football.api-sports.io/players/profiles?&search=${search}&`,{
        headers:{
            "x-apisports-key":API_key
        }
    })
    const data = await result.json()
    console.log(data)
    return data.response
 }

 return {
    _getplayers
 }
}

export default FootballApi
