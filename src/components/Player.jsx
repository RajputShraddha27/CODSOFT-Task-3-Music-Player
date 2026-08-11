import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

function Player({ currentSong, playSong, pauseSong, previousSong, nextSong, shuffleSong, isPlaying, duration, currentTime, handleSeek, volume, setVolume, toggleMute, repeatSong, isRepeat }) {
  return (
    <div className="card border-0  rounded-4 player-card">

      <div className="card-body text-center">

        <img
          src={currentSong.image}
          alt={currentSong.title}
          className="album-cover img-fluid"
        />

        <h3 className="mt-4 fw-bold song-title">
          {currentSong.title}
        </h3>

        <p className="artist-name">
          {currentSong.artist}
        </p>
        <ProgressBar
          duration={duration}
          currentTime={currentTime}
          handleSeek={handleSeek}
        />
        <Controls
          playSong={playSong}
          pauseSong={pauseSong}
          previousSong={previousSong}
          nextSong={nextSong}
          shuffleSong={shuffleSong}
          repeatSong={repeatSong}
          isRepeat={isRepeat}
          isPlaying={isPlaying}
        />
        <VolumeControl
          volume={volume}
          setVolume={setVolume}
          toggleMute={toggleMute}
        />

      </div>

    </div>
    
  );
}

export default Player;