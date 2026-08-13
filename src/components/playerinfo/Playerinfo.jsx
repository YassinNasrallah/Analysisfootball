import { useContext } from 'react'
import Context from '../../context/Context'

const Playerinfo = () => {

    const { playerinfo } = useContext(Context)

    return (
        <div className="playerinfo">

            {playerinfo.map((item) => (

                <div
                    className="player-profile"
                    key={item.player.id}
                >

                    <div className="playerimage">

                        <img
                            src={item.player.photo}
                            alt={item.player.name}
                        />

                    </div>

                    <div className="player-profile-content">

                        <span className="player-tag">
                            PLAYER PROFILE
                        </span>

                        <h1>
                            {item.player.name}
                        </h1>

                        <p className="player-nationality">
                            {item.player.nationality}
                        </p>

                        <div className="player-meta">

                            <div>
                                <span>AGE</span>
                                <strong>
                                    {item.player.age}
                                </strong>
                            </div>

                            <div>
                                <span>HEIGHT</span>
                                <strong>
                                    {item.player.height}
                                </strong>
                            </div>

                            <div>
                                <span>WEIGHT</span>
                                <strong>
                                    {item.player.weight}
                                </strong>
                            </div>

                        </div>

                    </div>

                </div>

            ))}

        </div>
    )
}

export default Playerinfo