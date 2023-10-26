
if (localStorage.getItem('visitCount') === null) {

    localStorage.setItem('visitCount', '0');
}


let visitCount = parseInt(localStorage.getItem('visitCount'));

visitCount++;


document.getElementById('visitCount').textContent = visitCount;

localStorage.setItem('visitCount', visitCount.toString());

