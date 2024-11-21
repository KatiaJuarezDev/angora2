// Validación del formulario de pago
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const cardNumber = document.getElementById('card-number').value;
    const cvv = document.getElementById('cvv').value;

    // Validar número de tarjeta
    if (!/^\d{16}$/.test(cardNumber)) {
        alert("El número de tarjeta no es válido. Asegúrate de que tenga 16 dígitos.");
        return;
    }

    // Validar CVV
    if (!/^\d{3}$/.test(cvv)) {
        alert("El CVV debe ser de 3 dígitos.");
        return;
    }

    // Validar banco usando BIN (los primeros 6 dígitos de la tarjeta)
    const bin = cardNumber.slice(0, 6); // Extrae los primeros 6 dígitos
    const bank = getBankFromBIN(bin);
    if (!bank) {
        alert("No se pudo validar el banco. Por favor verifica tu tarjeta.");
        return;
    }

    // Mostrar mensaje de éxito
    showSuccessMessage(`Pago procesado correctamente. Tarjeta asociada al banco: ${bank}`);

    // Redirigir a la página principal después de 3 segundos
    setTimeout(() => {
        window.location.href = "index.html"; // Cambia "index.html" por la URL de tu página principal
    }, 3000);
});

// Simulación de validación de bancos con BIN
function getBankFromBIN(bin) {
    const binDatabase = {
        '123456': 'Banco Ejemplo 1',
        '654321': 'Banco Ejemplo 2',
        // Agrega más BINs y sus bancos
    };

    return binDatabase[bin] || null;
}

// Mostrar mensaje de éxito
function showSuccessMessage(message) {
    const successMessage = document.createElement('div');
    successMessage.id = 'success-message';
    successMessage.textContent = message;
    document.body.appendChild(successMessage);

    // Estilo del mensaje (puedes mover esto a tu archivo CSS)
    successMessage.style.position = 'fixed';
    successMessage.style.top = '50%';
    successMessage.style.left = '50%';
    successMessage.style.transform = 'translate(-50%, -50%)';
    successMessage.style.padding = '20px';
    successMessage.style.backgroundColor = '#4caf50';
    successMessage.style.color = '#fff';
    successMessage.style.fontSize = '18px';
    successMessage.style.borderRadius = '8px';
    successMessage.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    successMessage.style.zIndex = '1000';
}
