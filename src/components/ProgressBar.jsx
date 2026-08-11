function ProgressBar({ duration, currentTime, handleSeek }) {
  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };
  const progress =
    duration > 0
      ? (currentTime / duration) * 100
      : 0;
  return (
    <div className="progress-section mt-4">
      <input
        type="range"
        className="form-range progress-slider"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        style={{
          background: `linear-gradient(
            to right,
            #7c3aed 0%,
            #7c3aed ${progress}%,
            #d8d8d8 ${progress}%,
            #d8d8d8 100%
          )`,
        }}
      />

      <div className="d-flex justify-content-between mt-2">
        <span className="time-text">{formatTime(currentTime)}</span>
        <span className="time-text">{formatTime(duration)}</span>
      </div>
    </div>
  );
}

export default ProgressBar;