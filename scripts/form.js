document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const formData = new FormData(this);

    fetch('https://example.com/api/submit', { // Cambia esto por tu URL de API
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Éxito:', data);