document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    const modal = document.getElementById('success-modal');
    const closeModalButton = document.getElementById('close-modal');

    paymentForm.addEventListener('submit', (event) => {
        // Evitar envío del formulario hasta que se validen los campos
        event.preventDefault();

        if (validateForm()) {
            // Si pasa todas las validaciones, muestra el modal
            modal.style.display = 'flex';

            // Cierra automáticamente después de 2 segundos y redirige al index
            setTimeout(() => {
                modal.style.display = 'none';
                window.location.href = 'index.html'; // Redirige al index
            }, 2000);
        }
    });

    // Cerrar el modal manualmente
    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
        window.location.href = 'index.html'; // Redirige al index al cerrar
    });

    function validateForm() {
        // Campos del formulario
        const cardNumber = document.getElementById('card-number');
        const expiryDate = document.getElementById('expiry-date');
        const cvv = document.getElementById('cvv');
        let isValid = true;

        // Validar que todos los campos estén llenos
        [cardNumber, expiryDate, cvv].forEach((field) => {
            if (!field.value.trim()) {
                field.classList.add('error'); // Resaltar en rojo si está vacío
                isValid = false;
            } else {
                field.classList.remove('error'); // Quitar resaltado si está lleno
            }
        });

        // Validar que la tarjeta tenga 16 dígitos
        const cardNumberValue = cardNumber.value.replace(/\s+/g, ''); // Eliminar espacios
        if (!/^\d{16}$/.test(cardNumberValue)) {
            alert('El número de tarjeta debe tener 16 dígitos.');
            cardNumber.classList.add('error');
            isValid = false;
        } else {
            cardNumber.classList.remove('error');
        }

        // Validar formato de la fecha de expiración (MM/AA)
        const expiryDateValue = expiryDate.value.trim();
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDateValue)) {
            alert('La fecha de expiración debe tener el formato MM/AA.');
            expiryDate.classList.add('error');
            isValid = false;
        } else {
            expiryDate.classList.remove('error');
        }

        // Validar que el CVV tenga exactamente 3 dígitos
        const cvvValue = cvv.value.trim();
        if (!/^\d{3}$/.test(cvvValue)) {
            alert('El CVV debe tener exactamente 3 dígitos.');
            cvv.classList.add('error');
            isValid = false;
        } else {
            cvv.classList.remove('error');
        }

        return isValid; // Retorna verdadero si todas las validaciones pasaron
    }
});
