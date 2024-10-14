const visitMessage = document.getElementById('visit-message');
const currentDate = Date.now();
const lastVisitDate = localStorage.getItem('lastVisitDate');

if (!lastVisitDate) {
    visitMessage.innerHTML = "Welcome to the Athens Chamber of Commerce Discover Page!";

} else {
    const timeDifference = currentDate - lastVisitDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (daysDifference < 1) {
        visitMessage.innerHTML = "Back already?"
    } else {
        visitMessage.innerHTML = `You last visited ${daysDifference} ${daysDifference === 1 ? "day" : "days"} ago.`;
    }
}

localStorage.setItem("lastVisitDate", currentDate);

