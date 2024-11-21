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

    // Si todo está correcto
    alert(`Pago procesado correctamente. Tarjeta asociada al banco: ${bank}`);
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
