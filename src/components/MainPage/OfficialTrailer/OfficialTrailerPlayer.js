import React, { useEffect } from 'react';
import { useRef } from 'react';
import Plyr from 'plyr';
import '../../OmarCompStyle.css';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ link }) => {
    const playerRef = useRef(null);

    useEffect(() => {

        if (playerRef.current) {
            new Plyr(playerRef.current, {
                controls: [
                    'volume',
                    'play-large',
                    'progress',
                    'play',
                    'fullscreen',
                    'duration',
                    'pip',
                    'settings',
                    'mute',
                ],
            });
        }
    }, []);

    return (
        <div style={{ borderRadius: '10px 10px 0px 0px', overflow: 'hidden' }}>
            <div ref={playerRef} data-plyr-provider="youtube" data-plyr-embed-id={link}></div>
        </div>
    );
};

export default VideoPlayer;