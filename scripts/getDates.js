// Testing
const currentYear = new Date().getFullYear()
const lastModified = document.lastModified;

document.getElementById("copyright-year").textContent = currentYear;
document.getElementById("last-modified").textContent = 'Last Modified: ${lastModified}';