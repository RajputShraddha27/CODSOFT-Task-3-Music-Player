function VolumeControl({ volume, setVolume, toggleMute }) {
  const volumePercentage = volume * 100;
  const getVolumeIcon = () => {
    if (volume === 0) {
      return "fa-volume-xmark";
    }
    if (volume <= 0.5) {
      return "fa-volume-low";
    }
    return "fa-volume-high";
  };
  return (
    <div className="volume-section mt-4">

      <div className="d-flex align-items-center gap-3">

        <i
          className={`fa-solid ${getVolumeIcon()} volume-icon`}
          onClick={toggleMute}
        ></i>

        <input
          type="range"
          className="form-range volume-slider"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          style={{
            background: `linear-gradient(
              to right,
              #7c3aed 0%,
              #7c3aed ${volumePercentage}%,
              #d8d8d8 ${volumePercentage}%,
              #d8d8d8 100%
            )`,
          }}
        />

      </div>

    </div>
  );
}

export default VolumeControl;