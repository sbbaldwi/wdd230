let lastModified = document.getElementById("lastModified");
let time = document.getElementById("year");

time.innerHTML = new Date().getFullYear();
lastModified.innerHTML = document.lastModified;