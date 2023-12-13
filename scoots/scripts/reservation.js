document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('category');
    const scooterRental = document.getElementById('scooterRental');
    const atvRental = document.getElementById('atvRental');
    const jeepRental = document.getElementById('jeepRental');
    const contactForm = document.getElementById('contactForm');

    scooterRental.style.display = 'none';
    atvRental.style.display = 'none';
    jeepRental.style.display = 'none';

    function toggleRentalFields(selectedCategory) {
        scooterRental.style.display = 'none';
        atvRental.style.display = 'none';
        jeepRental.style.display = 'none';

        if (selectedCategory === 'scooter') {
            scooterRental.style.display = 'block';
            atvRental.removeAttribute('required');
            jeepRental.removeAttribute('required');
            scooterRental.setAttribute('required', 'required');
        } else if (selectedCategory === 'ATV') {
            atvRental.style.display = 'block';
            scooterRental.removeAttribute('required');
            jeepRental.removeAttribute('required');
            atvRental.setAttribute('required', 'required');
        } else if (selectedCategory === 'Jeep') {
            jeepRental.style.display = 'block';
            scooterRental.removeAttribute('required');
            atvRental.removeAttribute('required');
            jeepRental.setAttribute('required', 'required');
        }
    }

    categorySelect.addEventListener('change', function () {
        const selectedCategory = categorySelect.value;

        toggleRentalFields(selectedCategory);
    });

    function handleSubmit(event) {
        event.preventDefault();
        window.location.href = "thank-you.html";
    }

    contactForm.addEventListener('submit', handleSubmit);

    toggleRentalFields(categorySelect.value);
});
