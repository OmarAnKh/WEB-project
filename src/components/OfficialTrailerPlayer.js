import React, { useEffect } from 'react';
import { useRef } from 'react';
import Plyr from 'plyr';
import './OmarCompStyle.css';
import 'plyr/dist/plyr.css';

const VideoPlayer = ({ link }) => {
    const playerRef = useRef(null);

    useEffect(() => {
        if (playerRef.current) {
            const player = new Plyr(playerRef.current, {
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

            return () => {
                if (player && typeof(player.destroy) === 'function') {
                    player.destroy();
                    
                }
            };
        }
    }, [link]);

    return (
        <div style={{ borderRadius: '10px 10px 0px 0px', overflow: 'hidden' }}>
            <div ref={playerRef} id="player" data-plyr-provider="youtube" data-plyr-embed-id={link}></div>
        </div>
    );
};

export default VideoPlayer;