import React, { useContext } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Lastmatches = () => {
  const { matches } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="lastMatches">
      <h2>Match results</h2>

      {matches.slice(0, 5).map((match) => (
        <div
          className="match-card"
          key={match.fixture.id}
          onClick={() => navigate(`/fixtures/${match.fixture.id}`)}
        >
          <div className="team">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              loading="lazy"
            />

            <h2>{match.teams.home.name}</h2>

            <div className="result">
              <h2>{match.goals.home}</h2>
            </div>
          </div>

          <span>VS</span>

          <div className="team">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              loading="lazy"
            />

            <h2>{match.teams.away.name}</h2>

            <div className="result">
              <h2>{match.goals.away}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lastmatches;