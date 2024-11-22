document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('shipping-form');

    form.addEventListener('submit', (event) => {
        // Evita el envío del formulario si hay campos vacíos
        if (!validateForm()) {
            event.preventDefault(); // Evita el envío del formulario
            alert('Por favor, completa todos los campos.');
        }
    });

    function validateForm() {
        // Obtiene todos los inputs, select y el textarea
        const inputs = form.querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error'); // Agrega una clase para resaltar el campo vacío
            } else {
                input.classList.remove('error'); // Limpia la clase si está lleno
            }
        });

        return isValid;
    }
});
