import { useEffect, useRef, useState } from "react";
import songs from "./data/songs";
import "./App.css";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import Playlist from "./components/Playlist";

function App() {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("music-player-theme");
    return savedTheme === "dark";
  });
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(() => {
    const savedVolume = localStorage.getItem("music-player-volume");
    return savedVolume !== null ? Number(savedVolume) : 1;
  });
  const [previousVolume, setPreviousVolume] = useState(1);

  useEffect(() => {
    setCurrentSong(songs[currentIndex]);
    setCurrentTime(0);
  }, [currentIndex]);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const handleSongEnd = () => {
      if (isRepeat) {
        audio.currentTime = 0;
        audio.play();
        setIsPlaying(true);
      } else {
        nextSong();
        setIsPlaying(true);
      }
    };
    audio.addEventListener("ended", handleSongEnd);
    return () => {
      audio.removeEventListener("ended", handleSongEnd);
    };
  }, [isRepeat]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error(error);
      });
    }
  }, [currentSong, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentSong]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener("timeupdate", updateTime);
    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    localStorage.setItem("music-player-volume", volume);
  }, [volume]);
  
  useEffect(() => {
    localStorage.setItem(
      "music-player-theme",
      isDarkMode ? "dark" : "light"
    );
  }, [isDarkMode]);

  const playSong = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (error) {
      console.log(error);
    }
  };
  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const nextSong = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === songs.length - 1 ? 0 : prevIndex + 1
    );
  };
  const previousSong = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );
  };
  const shuffleSong = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * songs.length);
    } while (randomIndex === currentIndex);
    setCurrentIndex(randomIndex);
    setIsPlaying(true);
  };
  const repeatSong = () => {
    setIsRepeat((prev) => !prev);
  };
  const toggleMute = () => {
    if (volume === 0) {
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
    }
  };
  const handleSeek = (e) => {
    const audio = audioRef.current;
    const seekTime = (e.target.value / 100) * duration;
    audio.currentTime = seekTime;
    setCurrentTime(seekTime);
  };
  const selectSong = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
  };
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Space → Play / Pause
      if (e.code === "Space") {
        e.preventDefault();
        if (isPlaying) {
          pauseSong();
        } else {
          playSong();
        }
      }
      // Arrow Right → Next Song
      if (e.code === "ArrowRight") {
        nextSong();
      }
      // Arrow Left → Previous Song
      if (e.code === "ArrowLeft") {
        previousSong();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isPlaying]);

  return (
     <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Navbar
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />

      <main className="container py-4">
        <Player
          currentSong={currentSong}
          playSong={playSong}
          pauseSong={pauseSong}
          previousSong={previousSong}
          nextSong={nextSong}
          isPlaying={isPlaying}
          duration={duration}
          currentTime={currentTime}
          handleSeek={handleSeek}
          volume={volume}
          setVolume={setVolume}
          toggleMute={toggleMute}
          shuffleSong={shuffleSong}
          repeatSong={repeatSong}
          isRepeat={isRepeat}
        />
        <Playlist
          songs={songs}
          selectSong={selectSong}
          currentIndex={currentIndex}
          isPlaying={isPlaying}
          playSong={playSong}
          pauseSong={pauseSong}
        />
        <audio
          ref={audioRef}
          src={currentSong.audio}
        />
      </main>
    </div>
  );
}

export default App;