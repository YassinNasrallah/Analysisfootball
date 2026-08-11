import React, { useContext } from 'react'
import Context from '../../context/Context'

const Statitistics = () => {
    const {statistics} = useContext(Context)
  return (
     <div className="statistics">
    <div className="statistics-header">
        <h2>{statistics[0]?.team.name}</h2>
        <h2>Statistics</h2>
        <h2>{statistics[1]?.team.name}</h2>
    </div>

    {statistics[0]?.statistics.map((stat, index) => {
        const awayStat = statistics[1]?.statistics[index]

        return (
            <div className="stat-row" key={stat.type}>
                <span>{stat.value ?? 0}</span>

                <strong>{stat.type}</strong>

                <span>{awayStat?.value ?? 0}</span>
            </div>
        )
    })}
       </div>
  )
}

export default Statitistics
