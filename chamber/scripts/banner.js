const day = new Date().getDay();
if (day !== 1 && day !== 2 && day !== 3) {
    document.querySelector('.banner').style.display = "none";
}
const closeButton = document.querySelector('.close-banner');
closeButton.addEventListener('click', () => {
    document.querySelector(".banner").style.display = "none";
})