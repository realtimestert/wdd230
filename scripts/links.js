const baseURL = "https://realtimestert.github.io/wdd230/";

const linksURL = baseURL + "data/links.json";

async function getLinks() {
    try {
        const response = await fetch(linksURL);
        const data = await response.json();
        console.log(data);
        displayLinks(data.weeks);
    } catch (error) {
        console.error("Error fetching links:", error);
    }
}

getLinks();

function displayLinks(weeks) {
    const learnList = document.getElementById("learn-list");

    weeks.forEach(week => {
        const listItem = document.createElement("li");
        listItem.textContent = `${week.week}: `;

        week.links.forEach((link, index) => {
            const anchor = document.createElement("a");
            anchor.href = baseURL + link.url;
            anchor.textContent = link.title;
            listItem.appendChild(anchor);
            if (index < week.links.length - 1) {
                const separator = document.createTextNode(" | ");
                listItem.appendChild(separator);
            }
        });
        learnList.appendChild(listItem);
    });
}