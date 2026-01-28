import { MusicPlayer } from './MusicPlayer.js';
import { IconLink } from './IconLink.js';
import { UpcomingShows } from './UpcomingShows.js';

// --- Music Players ---
const tracks = [
    { title: "I Forgot My White Lighter At The 27 Club", src: "./songs/27_club.mp3" },
    { title: "Practice What You Preach", src: "./songs/pwyp.mp3" },
    { title: "Mortal Coil", src: "./songs/mortal_coil.mp3" }
];

const playerContainer = document.getElementById('players');
const playerTemplate = document.getElementById('music-player-template');

tracks.forEach(track => {
    const clone = playerTemplate.content.cloneNode(true);
    const playerEl = clone.querySelector('.music-player');
    playerContainer.appendChild(clone);
    new MusicPlayer(playerEl, track);
});

// --- Icon Links ---
const icons = [
    { name: "Instagram", src: "icons/instagram.png", url: "https://instagram.com/hotspitofficial" },
    { name: "Bandcamp", src: "icons/bandcamp.png", url: "https://itcamefrommars.bandcamp.com" },
    { name: "SoundCloud", src: "icons/soundcloud.png", url: "https://soundcloud.com/hotspitofficial" },
    { name: "YouTube", src: "icons/youtube.png", url: "https://youtube.com/hotspitofficial" }
];

const iconContainer = document.querySelector(".icon-links");
icons.forEach(iconData => new IconLink(iconContainer, iconData));

// --- Upcoming Shows ---
const shows = [
    { date: "Jan 31", venue: "Montopolis Bridge", city: "Austin, TX" },
    { date: "Feb 27", venue: "Rio Mart", city: "Austin, TX" },
    { date: "Mar 2", venue: "The Far Out Lounge", city: "Austin, TX" },
    { date: "Mar 7", venue: "The Porch", city: "San Marcos, TX" }
];

new UpcomingShows("shows", shows);
