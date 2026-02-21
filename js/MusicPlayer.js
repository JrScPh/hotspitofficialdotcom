document.addEventListener("DOMContentLoaded", () => {
    // Select the players container (after the email)
    const playersContainer = document.getElementById("players");

    // Example tracks
    const tracks = [
        { title: "Demos arrive on February 24th", src: "songs/nonsense.mp3" },
        { title: "Inventing the Question Mark", src: "songs/questionmark.mp3" }
    ];

    tracks.forEach(track => {
        const playerContainer = document.createElement("div");
        playerContainer.classList.add("music-player");

        // Play button
        const playButtonContainer = document.createElement("div");
        playButtonContainer.classList.add("play-button-container");

        const playButton = document.createElement("img");
        playButton.src = "icons/play_button.png";
        playButton.alt = "Play Button";
        playButton.classList.add("play-button");
        playButtonContainer.appendChild(playButton);

        // Progress bar and title
        const progressBarTitleContainer = document.createElement("div");
        progressBarTitleContainer.classList.add("progress-bar-title-container");

        const progressBar = document.createElement("input");
        progressBar.type = "range";
        progressBar.min = 0;
        progressBar.max = 100;
        progressBar.value = 0;
        progressBar.classList.add("progress-bar");

        const songTitle = document.createElement("div");
        songTitle.textContent = track.title;
        songTitle.classList.add("song-title");

        progressBarTitleContainer.appendChild(progressBar);
        progressBarTitleContainer.appendChild(songTitle);

        // Append to player container
        playerContainer.appendChild(playButtonContainer);
        playerContainer.appendChild(progressBarTitleContainer);

        // Append to the correct container in HTML
        playersContainer.appendChild(playerContainer);

        // Play/pause functionality
        let isPlaying = false;
        const audio = new Audio(track.src);

        playButton.addEventListener("click", () => {
            if (isPlaying) {
                audio.pause();
                playButton.src = "icons/play_button.png";
            } else {
                audio.play();
                playButton.src = "icons/pause_button.png";
            }
            isPlaying = !isPlaying;
        });

        audio.addEventListener("timeupdate", () => {
            if (!isNaN(audio.duration)) {
                progressBar.value = (audio.currentTime / audio.duration) * 100;
            }
        });

        progressBar.addEventListener("input", () => {
            if (!isNaN(audio.duration)) {
                audio.currentTime = (progressBar.value / 100) * audio.duration;
            }
        });
    });
});