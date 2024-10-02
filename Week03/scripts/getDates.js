const options = {
    year: "numeric",
};
year.innerHTML = new Date().toLocaleDateString("en-US", options);

let modifiedDate = document.lastModified;

lastModified.innerHTML = `Last Modified: ${modifiedDate}`;