// Function to create and load a table with upcoming shows
document.addEventListener("DOMContentLoaded", () => {
    const shows = [
        { date: "February 27th", venue: "Rio Mart", city: "Austin, TX" },
        { date: "February 28th", venue: "Nontopolis Bridge", city: "Austin, TX" },
        { date: "March 2nd", venue: "The Far Out Lounge", city: "Austin, TX" },
        { date: "March 7th", venue: "The Porch", city: "San Marcos, TX" },
    ];

    const tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");

    const title = document.createElement("h2");
    title.textContent = "Upcoming Shows";
    title.classList.add("table-title");
    tableContainer.appendChild(title);

    const table = document.createElement("table");
    table.classList.add("shows-table");

    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    ["Date", "Venue", "City"].forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");

    shows.forEach(show => {
        const row = document.createElement("tr");

        Object.values(show).forEach(value => {
            const td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    document.body.appendChild(tableContainer);
});