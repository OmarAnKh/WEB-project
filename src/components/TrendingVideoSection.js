import "./TrendingVideoSection.css"
import TrendingCard from './TrendingCard';
import "./TrendingCard.css";
import { useFireStore } from "../firebase/useFirestore";
import React, { useState } from 'react';

const TrendingCards = (video) => {
  const { data } = useFireStore("Trending");
  const [visibleDataCount, setVisibleDataCount] = useState(6);
  const handleViewMoreClick = () => {
    setVisibleDataCount(prevCount => prevCount + 7);

  };


  return (

    <div className="n">
      <div class="trending">
        <h3 class="t" >  Trending </h3>

        <div class="btn-text-right">

          <button onClick={handleViewMoreClick} type="button" className="btn btn-primary">
            View more video
          </button>
        </div>
      </div>


      {data.slice(0, visibleDataCount).map((video) => (


        <TrendingCard

          key={video.id}
          link={video.link}
          owner={video.owner}
          photo={video.photo}
          title={video.title}
          views={video.views}
          index={video.index}
          collectionName={video.collection_name}
          commentsSection={video.coments_section}

        />


      ))}

    </div>


  );

};

export default TrendingCards;

