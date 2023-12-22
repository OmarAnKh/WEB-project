
import React from 'react';
import "./TrendingCard.css";
import { Link } from "react-router-dom";
const Trending = (video) => {
  {console.log(video)}
  return (
      

   

    <div className="  col-md-2 p-2"  >
        
        <div className="card v-100 h-100 " 
        style={{ borderRadius: '12px'}}>
          
        <div class="card h-100">
          <div className="row ">
            <div className="card-body">

              
              <div className="row justify-content-center"  >

                <iframe

                  width="100%"
                  height="80%"
                  src={video.link}     
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
