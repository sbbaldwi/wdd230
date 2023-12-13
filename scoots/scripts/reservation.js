document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const scooterRental = document.getElementById('scooterRental');
    const atvRental = document.getElementById('atvRental');
    const jeepRental = document.getElementById('jeepRental');

    scooterRental.style.display = 'none';
    atvRental.style.display = 'none';
    jeepRental.style.display = 'none';

    categorySelect.addEventListener('change', function () {
        const selectedCategory = categorySelect.value;

        scooterRental.style.display = 'none';
        atvRental.style.display = 'none';
        jeepRental.style.display = 'none';

        if (selectedCategory === 'scooter') {
            scooterRental.style.display = 'block';
        } else if (selectedCategory === 'ATV') {
            atvRental.style.display = 'block';
        } else if (selectedCategory === 'Jeep') {
            jeepRental.style.display = 'block';
        }
    });
});