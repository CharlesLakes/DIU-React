import React, { useState, useEffect, useRef } from 'react';
import '../stylesheets/sound-player/SoundPlayer.css';

function SoundPlayer({ audioFile }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(new Audio(audioFile));

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
    });

    return () => {
      audioRef.current.removeEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
      });
    };
  }, []);

  const progressBarStyle = {
    width: `${(currentTime / audioRef.current.duration) * 100}%`,
  };

  return (
    <div className="sound-player">
      <div className="progress-bar">
        <div className="progress" style={progressBarStyle}></div>
      </div>
      <button className="play-button" onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default SoundPlayer;