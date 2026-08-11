function Navbar({ toggleTheme, isDarkMode }) {
  return (
    <nav
      className={`navbar sticky-top shadow-sm py-3 music-navbar ${
        isDarkMode
          ? "bg-dark navbar-dark"
          : "bg-white"
      }`}
    >
      <div className="container">

        <a
          href="#"
          className="navbar-brand d-flex align-items-center"
        >
          <img
            src="/logo.png"
            alt="Music Player Logo"
            className="music-logo me-3"
          />

          <div>
            <h4 className="mb-0 fw-bold">
              Music Player
            </h4>
            <small>
              Enjoy Your Favorite Songs
            </small>
            <div className="created-by">
              Made by <strong>Rajput Shraddha</strong>
            </div>
          </div>
        </a>

        <button
          className={`btn rounded-circle ${
            isDarkMode
              ? "btn-warning text-dark"
              : "btn-dark"
          }`}
          style={{
            width: "45px",
            height: "45px",
          }}
          onClick={toggleTheme}
        >
          <i
            className={`fa-solid ${
              isDarkMode
                ? "fa-sun"
                : "fa-moon"
            }`}
          ></i>
        </button>

      </div>
    </nav>
  );
}

export default Navbar;