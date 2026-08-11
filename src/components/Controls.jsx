function Controls({ playSong, pauseSong, previousSong, nextSong, shuffleSong, repeatSong, isRepeat, isPlaying }) {
  return (
    <div className="controls d-flex justify-content-center align-items-center mt-4">

      <button
        className="btn control-btn"
        onClick={shuffleSong}
      >
        <i className="fa-solid fa-shuffle"></i>
      </button>

      <button 
        className="btn control-btn"
        onClick={previousSong}
      >
        <i className="fa-solid fa-backward-step"></i>
      </button>

      <button 
        className="btn play-btn mx-4"
        onClick={isPlaying ? pauseSong : playSong}
      >
        <i
          className={`fa-solid ${
            isPlaying ? "fa-pause" : "fa-play"
          }`}
        ></i>
      </button>

      <button 
        className="btn control-btn"
        onClick={nextSong}
      >
        <i className="fa-solid fa-forward-step"></i>
      </button>

      <button
        className={`btn control-btn ${isRepeat ? "repeat-active" : ""}`}
        onClick={repeatSong}
      >
        <i className="fa-solid fa-repeat"></i>
      </button>

    </div>
  );
}

export default Controls;