// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting the traditional way

    // Capture form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate the input
    if (name && email && message) {
        document.getElementById('formStatus').innerHTML = 'Thank you for your message! We will get back to you soon.';
        document.getElementById('formStatus').style.color = 'green';

        // Optionally, clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('formStatus').innerHTML = 'Please fill in all the fields.';
        document.getElementById('formStatus').style.color = 'red';
    }
});




