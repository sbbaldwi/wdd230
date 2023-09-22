let time = document.getElementById("currentYear");

var lastModificationDate = new Date(document.lastModified);

time.innerHTML= new Date().getFullYear();
let lastModified = document.getElementById("lastModificationDate");
lastModified.innerHTML= lastModificationDate;
