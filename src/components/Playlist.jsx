import SongCard from "./SongCard";

function Playlist({ songs, selectSong, currentIndex, isPlaying, playSong, pauseSong }) {
  return (
    <div className="playlist-card card border-0  rounded-4 mt-4">

      <div className="card-body">

        <h4 className="fw-bold mb-4">
          Playlist
        </h4>

        {
          songs.map((song, index) => (
            <SongCard
              key={song.id}
              song={song}
              index={index}
              selectSong={selectSong}
              currentIndex={currentIndex}
              isPlaying={isPlaying}
              playSong={playSong}
              pauseSong={pauseSong}
            />
          ))
        }

      </div>

    </div>
  );
}

export default Playlist;