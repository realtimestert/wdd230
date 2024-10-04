const pageVisitCounter = document.getElementById("pageVisits");
let pageVisits = 0;

function updateVisitCounter() {
    pageVisitCounter.textContent = 'Page Visits: ${pageVisits}';
    localStorage.setItem("pageVisits", pageVisits);
}

function loadPageVisits() {
    const storedPageVisits = localStorage.getItem("pageVisits");
    if (storedPageVisits) {
        pageVisits = parseInt(storedPageVisits);
    }
    updateVisitCounter();
}

loadPageVisits();

window.addEventListener("load", () => {
    pageVisits++;
    updateVisitCounter();
});