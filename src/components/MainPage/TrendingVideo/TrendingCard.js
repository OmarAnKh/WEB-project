import React from 'react';
import { Link } from 'react-router-dom';
import './TrendingCard.css';

const TrendingCard = (video) => {
  
  return (
    <div className="col-md-3 p-2">
      <div className="card" style={{ borderRadius: '12px', height: '100%' }}>
        <div className="card-body">
          <div className="row justify-content-center">
            <iframe
              title={video.title}
              width="100%"
              height="80%"
              src={video.link}
            ></iframe>
     
            <div style={{ padding: '16px' }}>
              <h6 className="card-title-trending">
                
                <Link
                  to={`/PostPageLayout/${video.index}/${video.collectionName}/${video.commentsSection} `}
                  className="card-text"
                  target="blank"
                >
                  {video.title}
                </Link>
              </h6>
              <div className="owner-info">
                <img src={video.photo} alt={video.owner} className="owner-photo" />
                <h6 className="card-text">{video.owner}</h6>
                <div>
                  <h6 className="card-views">{video.views}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCard;
