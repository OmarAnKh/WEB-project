import React, { useState } from "react";
import { useFirestore } from "../firebase/useFirestore";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import "./music.css";


const Music = () => {
    const { data } = useFirestore("music");
    const [playingVideo, setPlayingVideo] = useState(null);
    const [likedVideos, setLikedVideos] = useState([]);
  
    const addToFavorite = (id) => {
      if (likedVideos.includes(id)) {
        setLikedVideos(likedVideos.filter((likedId) => likedId !== id));
      } else {
        setLikedVideos([...likedVideos, id]);
      }
    };
  
    const isVideoLiked = (id) => {
      return likedVideos.includes(id);
    };
  

    const playVideo = (id) => {
        setPlayingVideo(id);
    };
    return (
        <div className="container-xxl px-4">
        <div className="row row-cols-2 py-4">
            <div className="col">
            <h3 className="">Music</h3>
            </div>
            <div className="col text-end"></div>
        </div>

        <div className="row row-cols-5">
            {data.map((video) => (
            <div className="col" key={video.id}>
                <div className="card" style={{ maxHeight: "300px" }}>
                <div className="card-img-top position-relative" style={{ height: "50%" }}>
                    {playingVideo === video.id ? (
                    <ReactPlayer
                        url={video.link}
                        alt={video.title}
                        width={"100%"}
                        height={"100%"}
                        playing={true}
                        controls={true}
                    />
                    ) : (
                    <>
                        <img
                        src={video.photo}
                        alt={video.title}
                        width={"100%"}
                        height={"100%"}
                        onClick={() => playVideo(video.id)}
                        style={{ cursor: "pointer" }}
                        />
                        <div
                        className="play-icon position-absolute top-40 start-50 translate-middle"
                        onClick={() => playVideo(video.id)}
                        style={{ top: "45%", transform: "translate(-50%, -50%)" }}
                    >
                        <a className="icon-md bg-danger text-white rounded-circle">
                        <i className="bi bi-play-fill fs-5"></i>
                        </a>
                    </div>
                        <div className="card-overlay position-absolute bottom-0 start-0 p-3 d-flex w-100">
                        <span className="bg-dark bg-opacity-50 px-2 rounded text-white small">
                            {video.Duration}
                        </span>
                        <span
                        className={`bg-dark bg-opacity-50 px-2 rounded text-white small ms-auto heart ${
                        isVideoLiked(video.id) ? "liked" : ""
                        }`}
                        onClick={() => addToFavorite(video.id)}
                        >
                        <i className="fa-solid fa-heart"></i>
                        </span>
                        </div>
                    </>
                    )}
                </div>
                <div className="card-body">
                    <link to={`/post/${video.index}/${video.collection_name}/${video.comments_section}`} className="card-title fs-6">{video.title}
                    </link>
                    <span className="small">{video.views}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default Music;