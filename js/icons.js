// Function to load website icons dynamically
document.addEventListener("DOMContentLoaded", () => {
    const icons = [
        { name: "Instagram", url: "https://www.instagram.com/hotspitofficial", icon: "icons/instagram.png" },
        { name: "Bandcamp", url: "https://hotspitofficial.bandcamp.com", icon: "icons/bandcamp.png" },
        { name: "SoundCloud", url: "https://www.soundcloud.com/hotspitofficial", icon: "icons/soundcloud.png" },
        { name: "YouTube", url: "https://www.youtube.com/@hotspitofficial", icon: "icons/youtube.png" }
    ];

    const iconsContainer = document.createElement("div");
    iconsContainer.classList.add("icons-container");

    icons.forEach(({ name, url, icon }) => {
        const link = document.createElement("a");
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.classList.add("icon-link");

        const img = document.createElement("img");
        img.src = icon;
        img.alt = `${name} Icon`;
        img.classList.add("icon-image");

        link.appendChild(img);
        iconsContainer.appendChild(link);
    });

    const emailElement = document.querySelector(".email");
    emailElement.insertAdjacentElement("afterend", iconsContainer);
});