function SongCard({
  song,
  index,
  selectSong,
  currentIndex,
  isPlaying,
  playSong,
  pauseSong
}) {
  const isCurrentSong = index === currentIndex;

  const handlePlayPause = (e) => {
    e.stopPropagation();

    if (isCurrentSong) {
      if (isPlaying) {
        pauseSong();
      } else {
        playSong();
      }
    } else {
      selectSong(index);
    }
  };

  return (
    <div
      className={`song-card d-flex align-items-center justify-content-between p-3 mb-3 ${
        isCurrentSong ? "active-song" : ""
      }`}
      onClick={() => selectSong(index)}
    >

      <div className="d-flex align-items-center">

        <img
          src={song.image}
          alt={song.title}
          className="song-image"
        />

        <div className="ms-3">

          <h6 className="mb-1 song-name">
            {song.title}
          </h6>

          <small className="artist">
            {song.artist}
          </small>

        </div>

      </div>

      <button
        className="btn song-play-btn"
        onClick={handlePlayPause}
      >
        <i
          className={`fa-solid ${
            isCurrentSong && isPlaying
              ? "fa-pause"
              : "fa-play"
          }`}
        ></i>
      </button>

    </div>
  );
}

export default SongCard;