// MusicPlayer.js
export class MusicPlayer {
    // Registry to manage multiple players
    static allPlayers = [];

    constructor(container, track) {
        this.container = container;
        this.audio = new Audio(track.src);

        this.btn = container.querySelector(".play-btn");
        this.icon = container.querySelector(".play-icon");
        this.progress = container.querySelector(".progress");
        this.title = container.querySelector(".track-title");

        this.playIcon = "icons/play_button.png";
        this.pauseIcon = "icons/pause_button.png";

        this.title.textContent = track.title;
        this.progress.dragging = false;

        // Add this player to global registry
        MusicPlayer.allPlayers.push(this);

        this.bindEvents();
    }

    bindEvents() {
        // Play/Pause toggle
        this.btn.addEventListener("click", () => this.toggle());

        // Update progress bar as audio plays
        this.audio.addEventListener("timeupdate", () => {
            if (!isNaN(this.audio.duration)) {
                // Always update progress, even on mobile
                this.progress.value = (this.audio.currentTime / this.audio.duration) * 100;
            }
        });

        // Ensure progress max is set
        this.audio.addEventListener("loadedmetadata", () => {
            this.progress.max = 100;
        });

        // Handle slider changes (desktop & mobile)
        this.progress.addEventListener("input", () => {
            if (!isNaN(this.audio.duration)) {
                const pct = this.progress.value / 100;
                this.audio.currentTime = pct * this.audio.duration;
            }
        });

        // Touch + Mouse dragging
        const startDrag = () => (this.progress.dragging = true);
        const endDrag = () => (this.progress.dragging = false);

        this.progress.addEventListener("mousedown", startDrag);
        this.progress.addEventListener("mouseup", endDrag);
        this.progress.addEventListener("touchstart", startDrag);
        this.progress.addEventListener("touchend", endDrag);
    }

    toggle() {
        if (this.audio.paused) {
            // Pause all other players
            MusicPlayer.allPlayers.forEach(player => {
                if (player !== this) {
                    player.audio.pause();
                    player.icon.src = player.playIcon;
                    player.btn.setAttribute("aria-label", "Play");
                }
            });

            this.audio.play();
            this.icon.src = this.pauseIcon;
            this.btn.setAttribute("aria-label", "Pause");
        } else {
            this.audio.pause();
            this.icon.src = this.playIcon;
            this.btn.setAttribute("aria-label", "Play");
        }
    }
}
