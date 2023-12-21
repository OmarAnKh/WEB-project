
import React from 'react';
import "./TrendingCard.css";
import { Link } from "react-router-dom";
const Trending = (video) => {
  {console.log(video)}
  return (


    <div class="row row-cols-1 row-cols-md-1 g-4">
      <div class="col">

        <div class="card h-100">
          <div className="row row-cols-1 row-cols-md-5">
            <div className="card-body">


              <div className="color">

                <iframe

                  width="100%"
                  height="100%"


                  src={video.link}
                  title={video.title}

                ></iframe>


                <h6 className="card-title"> <Link to={`/PostPageLayout/${video.index}/${video.collectionName}/${video.commentsSection} `} className="card-text" target="blank">
                  {video.title}
                </Link></h6>
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
    </div>


  );
};

export default Trending;

