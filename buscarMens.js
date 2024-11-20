// Lista de productos
const products = [
    { id: 25, name: "T-Shirt Gris", price: "US $20", link: "detalleProducto.php?id=25", image: "imgMens/1.png" },
    { id: 26, name: "Sueter Negro", price: "US $35", link: "detalleProducto.php?id=26", image: "imgMens/2.png" },
    { id: 27, name: "Sueter Negro Premium", price: "US $35", link: "detalleProducto.php?id=27", image: "imgMens/5.png" },
    { id: 28, name: "Sueter Gris", price: "US $35", link: "detalleProducto.php?id=28", image: "imgMens/4.png" },
    { id: 29, name: "T-Shirt Negra", price: "US $35", link: "detalleProducto.php?id=29", image: "imgMens/3.png" },
    { id: 30, name: "T-Shirt Crema", price: "US $35", link: "detalleProducto.php?id=30", image: "imgMens/12.png" },
    { id: 31, name: "Pants Negro", price: "US $35", link: "detalleProducto.php?id=31", image: "imgMens/7.png" },
    { id: 32, name: "Conjunto Blanco Youngla", price: "US $35", link: "detalleProducto.php?id=32", image: "imgMens/8.png" },
    { id: 33, name: "Pants Verde", price: "US $35", link: "detalleProducto.php?id=33", image: "imgMens/9.png" },
    { id: 34, name: "T-Shirt Negra Youngla", price: "US $35", link: "detalleProducto.php?id=34", image: "imgMens/10.png" },
    { id: 35, name: "Conjunto Deportivo Youngla", price: "US $35", link: "detalleProducto.php?id=35", image: "imgMens/11.png" },
    { id: 36, name: "T-Shirt Gris Gymshark", price: "US $35", link: "detalleProducto.php?id=36", image: "imgMens/6.png" },
    { id: 37, name: "Sueter azul", price: "US $35", link: "detalleProducto.php?id=37", image: "imgMens/13.png" },
    { id: 38, name: "Sueter Verde", price: "US $35", link: "detalleProducto.php?id=38", image: "imgMens/14.png" },
    { id: 39, name: "T-Shirt Blanca Adidas", price: "US $35", link: "detalleProducto.php?id=39", image: "imgMens/15.png" },
    { id: 40, name: "T-Shirt Bulls NBA", price: "US $35", link: "detalleProducto.php?id=40", image: "imgMens/16.png" },
    { id: 41, name: "Conjunto Nike", price: "US $35", link: "detalleProducto.php?id=41", image: "imgMens/17.png" },
    { id: 42, name: "Pants Negro Nike", price: "US $35", link: "detalleProducto.php?id=42", image: "imgMens/18.png" },
    { id: 43, name: "Conjunto Azul", price: "US $35", link: "detalleProducto.php?id=43", image: "imgMens/19.png" },
    { id: 44, name: "Conjunto Negro", price: "US $35", link: "detalleProducto.php?id=44", image: "imgMens/20.png" },
    { id: 45, name: "Conjunto Gris", price: "US $35", link: "detalleProducto.php?id=45", image: "imgMens/21.png" },
    { id: 46, name: "Gorra Adidas Azul", price: "US $35", link: "detalleProducto.php?id=46", image: "imgMens/22.png" },
    { id: 47, name: "Mochila Adidas Negra", price: "US $35", link: "detalleProducto.php?id=47", image: "imgMens/23.png" },
    { id: 48, name: "Mochila Adidas Verde", price: "US $35", link: "detalleProducto.php?id=48", image: "imgMens/24.png" }
];

// Función para realizar la búsqueda
function searchProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = products.filter(product => product.name.toLowerCase().includes(query));

    if (results.length > 0) {
        // Guardar los resultados en localStorage para usarlos en la página de resultados
        localStorage.setItem('searchResults', JSON.stringify(results));
        window.location.href = "./resultados.php"; // Redirigir a la página de resultados
    } else {
        alert("No se encontraron productos.");
    }
}
