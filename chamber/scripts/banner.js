const today = new Date().getDay();

const banner = document.getElementById('banner');

if (today >= 1 && today <= 3) {
    banner.style.display = 'block';
}

const closeBtn = document.getElementById('closeBtn');
closeBtn.addEventListener('click', () => {
    banner.style.display = 'none';
});
