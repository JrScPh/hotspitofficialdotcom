// Function to load About Us text from a file with a fallback description
document.addEventListener("DOMContentLoaded", () => {
    const aboutTextDiv = document.querySelector(".about-text");

    if (aboutTextDiv) {
        fetch("assets/about.txt")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Failed to load About Us text");
                }
                return response.text();
            })
            .then(text => {
                aboutTextDiv.innerHTML = `<h2>We are Hot Spit</h2><p>${text}</p>`;
            })
            .catch(error => {
                console.error("Error loading About Us text:", error);
                aboutTextDiv.innerHTML = `<h2>About Us</h2><p>We are Hot Spit</p>`;
            });
    }
});
