// Function to create and load a table with upcoming shows

const shows = [
    { date: "February 27th", venue: "Rio Mart", city: "Austin, TX" },
    { date: "February 28th", venue: "Montopolis Bridge", city: "Austin, TX" },
    { date: "March 2nd", venue: "The Far Out Lounge", city: "Austin, TX" },
    { date: "March 7th", venue: "The Porch", city: "San Marcos, TX" },
    { date: "April 4th", venue: "Jack's Roadhouse", city: "San Marcos, TX" },
    { date: "April 10th", venue: "Emo Nac", city: "Nacogdoches, TX" },
    { date: "May 17th", venue: "Private Park", city: "San Marcos, TX" },
    { date: "June 24th", venue: "Crow Bar", city: "Austin, TX" }
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

const mountPoint = document.getElementById("shows-container");
if (mountPoint) {
    mountPoint.appendChild(tableContainer);
}