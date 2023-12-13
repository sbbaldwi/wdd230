document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    function handleSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        if (name.trim() === '' || email.trim() === '' || comment.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

        window.location.href = "thank-you.html";
    }

    contactForm.addEventListener('submit', handleSubmit);
});
