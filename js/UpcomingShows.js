export class UpcomingShows {
    constructor(containerId, showsArray) {
        this.container = document.getElementById(containerId);
        if (!this.container) { console.error("Container not found:", containerId); return; }

        this.tableBody = this.container.querySelector("tbody");
        if (!this.tableBody) { console.error("No tbody found in container:", containerId); return; }

        this.shows = showsArray;
        this.loadShows();
    }

    loadShows() {
        this.tableBody.innerHTML = "";
        this.shows.forEach(show => {
            const row = document.createElement("tr");
            row.appendChild(this.makeCell(show.date));
            row.appendChild(this.makeCell(show.venue));
            row.appendChild(this.makeCell(show.city));
            this.tableBody.appendChild(row);
        });
    }

    makeCell(text) {
        const td = document.createElement("td");
        td.textContent = text;
        return td;
    }
}
