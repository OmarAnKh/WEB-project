import "./TrendingVideoSection.css"
import TrendingCard from './TrendingCard';
import "./TrendingCard.css";
import { useFireStore } from "../../../firebase/useFirestore";
import React, { useState } from 'react';

const TrendingVideoSection = () => {
  const { data } = useFireStore("Trending");
  const [visibleDataCount, setVisibleDataCount] = useState(6);
  const handleViewMoreClick = () => {
    setVisibleDataCount(prevCount => prevCount + 7);

  };


  return (

    <div className="container-xxl px-4">
      <div className="d-flex justify-content-between">
        <h3 >  Trending </h3>
        <button onClick={handleViewMoreClick} type="button" className="btn btn-primary " >
          View more video
        </button></div>
      <div className="row row-cols-1 row-cols-md-5 ">
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
    </div>

  );

};

export default TrendingVideoSection;

