import { useContext } from 'react'
import Context from '../../context/Context'

const Playerstatistics = () => {

    const { playerinfo } = useContext(Context)

    const state = playerinfo[0]?.statistics ?? []

    const totalstate = state.reduce(
        (sum, stat) => ({
            assists:
                sum.assists +
                (stat.goals?.assists ?? 0),

            goals:
                sum.goals +
                (stat.goals?.total ?? 0),

            dribbles:
                sum.dribbles +
                (stat.dribbles?.success ?? 0)
        }),
        {
            assists: 0,
            goals: 0,
            dribbles: 0
        }
    )

    return (
        <div className="player-state">

            <div>
                <span>ASSISTS</span>
                <strong>
                    {totalstate.assists}
                </strong>
            </div>

            <div>
                <span>GOALS</span>
                <strong>
                    {totalstate.goals}
                </strong>
            </div>

            <div>
                <span>DRIBBLES</span>
                <strong>
                    {totalstate.dribbles}
                </strong>
            </div>

        </div>
    )
}

export default Playerstatistics