import { MusicPlayer } from './MusicPlayer.js';
import { IconLink } from './IconLink.js';
import { UpcomingShows } from './UpcomingShows.js';

// --- Music Players ---
const tracks = [
    { title: "Our demos will arrive on February 24th", src: "songs/nonsense.mp3" }
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
    { name: "Bandcamp", src: "icons/bandcamp.png", url: "https://hotspitofficial.bandcamp.com" },
    { name: "SoundCloud", src: "icons/soundcloud.png", url: "https://soundcloud.com/hotspitofficial" },
    { name: "YouTube", src: "icons/youtube.png", url: "https://youtube.com/@hotspitofficial" }
];

const iconContainer = document.querySelector(".icon-links");
icons.forEach(iconData => new IconLink(iconContainer, iconData));

// --- Upcoming Shows ---
const shows = [
    { date: "Feb 27", venue: "Rio Mart", city: "Austin, TX" },
    { date: "Feb 28", venue: "Montopolis Bridge", city: "Austin, TX" },
    { date: "Mar 2", venue: "The Far Out Lounge", city: "Austin, TX" },
    { date: "Mar 7", venue: "The Porch", city: "San Marcos, TX" }
];

new UpcomingShows("shows", shows);

// --- About Section ---
fetch('./assets/about.txt')
    .then(response => response.text())
    .then(text => {
        const aboutTextContainer = document.querySelector('.about-text');
        aboutTextContainer.innerHTML = `<h2>We are Hot Spit</h2><p>${text}</p>`;
    })
    .catch(error => console.error('Error loading about text:', error));

// --- Navigation Links ---
const navLinks = [
    { text: "Music", target: "#players" },
    { text: "Shows", target: "#shows" },
    { text: "Contact", target: "#tagline-email" }
];

const navContainer = document.querySelector('.navigation-links');
navContainer.innerHTML = navLinks.map((link, index) => {
    const separator = index < navLinks.length - 1 ? ' | ' : '';
    return `<a href="${link.target}" class="nav-link">${link.text}</a>${separator}`;
}).join('');

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
