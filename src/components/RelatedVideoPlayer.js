import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import './OmarCompStyle.css'
const VideoPlayer = ({ videoUrl, thumbnailUrl, publication_time, time }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="video-player-container">
            {!isPlaying && (
                <div className="thumbnail-container">
                    <img src={thumbnailUrl} alt="Thumbnail" />
                    <button className="play-button" onClick={handlePlayPause}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                    </button>
                    <div className="badge bg-dark text-white position-absolute" style={{ bottom: "1rem", left: "0.5rem", zIndex: "2" }}>
                        {time}
                    </div>
                    <div className="badge bg-dark text-white position-absolute" style={{ bottom: "1rem", right: "0.5rem", zIndex: "2" }}>
                        {publication_time}
                    </div>
                </div>
            )}

            {isPlaying && (
                <div >
                    <ReactPlayer
                        url={videoUrl}
                        playing={isPlaying}
                        controls
                        width={394}
                    />
                </div>
            )}
        </div>
    );
};

export default VideoPlayer;