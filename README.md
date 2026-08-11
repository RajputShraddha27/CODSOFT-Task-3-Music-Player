# Music Player

A modern and responsive Music Player application built with React.
This project provides a smooth music listening experience with playback controls, playlist management, volume control, shuffle, repeat, dark mode, and keyboard shortcuts.

## Live Demo

[View Live Project](https://codsoft-task-3-music-player.netlify.app/)

## Features

- Play / Pause songs
- Previous song
- Next song
- Shuffle songs
- Repeat current song
- Music progress bar
- Current time and total duration
- Volume control
- Mute / Unmute
- Dark Mode / Light Mode
- Saves theme preference using LocalStorage
- Saves volume preference using LocalStorage
- Playlist with active song indicator
- Play-Pause button inside playlist
- Keyboard shortcuts
- Responsive design for mobile, tablet and desktop

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` | Play / Pause |
| `Arrow Right` | Next Song |
| `Arrow Left` | Previous Song |

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Font Awesome
- Vite
- LocalStorage
- HTML5 Audio API

## Author

Made by Rajput Shraddha

## Project Structure

```text
src/
├── assets/
│   ├── images/
│   └── songs/
│
├── components/
│   ├── Controls.jsx
│   ├── Navbar.jsx
│   ├── Player.jsx
│   ├── Playlist.jsx
│   ├── ProgressBar.jsx
│   ├── SongCard.jsx
│   └── VolumeControl.jsx
│
├── data/
│   └── songs.js
│
├── App.jsx
├── App.css
├── index.css
└── main.jsx