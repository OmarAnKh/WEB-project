import React from 'react';
import "./TrendingCard.css";

const Trending = (props) => {
  
  return (
    <div className="color">
      <iframe
        width="100%"
        height="200px"
        src={props.videoUrl}
        title={props.title}
      ></iframe>
      <div className="card-body">
        <p className="card-title">{props.title}</p>
        <h3 className="card-text">{props.owner}</h3>
        <h3 className="card-text">{props.views}</h3>

      </div>
    </div>
  );
};

export default Trending;


