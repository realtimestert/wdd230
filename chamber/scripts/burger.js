const menuButton = document.getElementById("menu-toggle");
const menuItems = document.querySelector(".menu");

menuButton.addEventListener("click", function () {
    // Toggle classes for menu and button
    menuItems.classList.toggle("open");
    menuButton.classList.toggle("open");

    // Change button text and aria-label for accessibility
    if (menuButton.classList.contains("open")) {
        menuButton.textContent = "✖";
        menuButton.setAttribute("aria-label", "Close menu");
    } else {
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    }
});

// Optional: Close menu when clicking outside
document.addEventListener("click", function (event) {
    if (!menuButton.contains(event.target) && !menuItems.contains(event.target)) {
        menuItems.classList.remove("open");
        menuButton.classList.remove("open");
        menuButton.textContent = "☰";
        menuButton.setAttribute("aria-label", "Open menu");
    }
});