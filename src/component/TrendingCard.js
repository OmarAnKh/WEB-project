
import React from 'react';
import "./TrendingCard.css";


const Trending = (video) => {
  
  return (
    <div className="color">
      <iframe
        width="100%"
        height="200px"
        src={video.link}
        title={video.title}
        
      ></iframe>
      <div className="card-body">
            <h5 className="card-title">{video.title}</h5>
            <div className="owner-info">
            
          <img src={video.photo} alt={video.owner}   className="owner-photo" />
          <h6 className="card-text">{video.owner}</h6>
          <div>
          
            <h6 className="card-views">{video.views}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;

