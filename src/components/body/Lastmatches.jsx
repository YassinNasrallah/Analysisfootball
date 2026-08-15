import React, { useContext } from "react";
import Context from "../../context/Context";
import { useNavigate } from "react-router-dom";
// import Swiper core and required modules
import { Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const Lastmatches = () => {
  const { matches } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="lastMatches">
      <h2>Match results</h2>

     
       <Swiper
      modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={5}
             navigation
      >
         {matches.slice(0, 9).map((match) => (
        <SwiperSlide
          
          key={match.fixture.id}
          
        >
          <div className="match-card" onClick={() => navigate(`/fixtures/${match.fixture.id}`)}>

         
          <h2>full time</h2>
          <div className="team">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              loading="lazy"
            />

            <h2>{match.teams.home.name.slice(0,6)}...</h2>
            
            <div className="result">
              <h2>{match.goals.home}</h2>
            </div>
          </div>

          

          <div className="team">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              loading="lazy"
            />

            <h2>{match.teams.away.name.slice(0,6)}...</h2>

            <div className="result">
              <h2>{match.goals.away}</h2>
            </div>
          </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Lastmatches;