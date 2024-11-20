// Lista de productos
const products = [
    { id: 1, name: "Top Crema", price: "US $20", link: "detalleProducto.php?id=1", image: "imgWomens/1.png" },
    { id: 2, name: "Top Negro", price: "US $35", link: "detalleProducto.php?id=2", image: "imgWomens/2.png" },
    { id: 3, name: "Top Rosa", price: "US $35", link: "detalleProducto.php?id=3", image: "imgWomens/3.png" },
    { id: 4, name: "Conjunto Negro", price: "US $35", link: "detalleProducto.php?id=4", image: "imgWomens/4.png" },
    { id: 5, name: "Top Blanco", price: "US $35", link: "detalleProducto.php?id=5", image: "imgWomens/5.png" },
    { id: 6, name: "T-Shirt Verde", price: "US $35", link: "detalleProducto.php?id=6", image: "imgWomens/6.png" },
    { id: 8, name: "T-Shirt Negra", price: "US $35", link: "detalleProducto.php?id=8", image: "imgWomens/8.png" },
    { id: 9, name: "Jacket Morada", price: "US $35", link: "detalleProducto.php?id=9", image: "imgWomens/9.png" },
    { id: 10, name: "T-Shirt Verde Nike", price: "US $35", link: "detalleProducto.php?id=10", image: "imgWomens/10.png" },
    { id: 11, name: "T-Shirt Azul", price: "US $35", link: "detalleProducto.php?id=11", image: "imgWomens/11.png" },
    { id: 12, name: "Top Negro", price: "US $35", link: "detalleProducto.php?id=12", image: "imgWomens/12.png" },
    { id: 13, name: "Top Amarillo", price: "US $35", link: "detalleProducto.php?id=13", image: "imgWomens/13.png" },
    { id: 14, name: "Top Verde", price: "US $35", link: "detalleProducto.php?id=14", image: "imgWomens/14.png" },
    { id: 15, name: "Top rosa", price: "US $35", link: "detalleProducto.php?id=15", image: "imgWomens/15.png" },
    { id: 16, name: "Conjunto Azul", price: "US $35", link: "detalleProducto.php?id=16", image: "imgWomens/16.png" },
    { id: 17, name: "Bolsa Adidas", price: "US $35", link: "detalleProducto.php?id=17", image: "imgWomens/17.png" },
    { id: 18, name: "Conjunto Blanco", price: "US $35", link: "detalleProducto.php?id=18", image: "imgWomens/18.png" },
    { id: 19, name: "T-Shirt Gris Reebok", price: "US $35", link: "detalleProducto.php?id=19", image: "imgWomens/19.png" },
    { id: 20, name: "Tenis Reebok", price: "US $35", link: "detalleProducto.php?id=20", image: "imgWomens/20.png" },
    { id: 21, name: "Leggins Negras Under Armour", price: "US $35", link: "detalleProducto.php?id=21", image: "imgWomens/21.png" },
    { id: 22, name: "Conjunto Completo Reebok", price: "US $35", link: "detalleProducto.php?id=22", image: "imgWomens/22.png" },
    { id: 23, name: "Jacket Crema", price: "US $35", link: "detalleProducto.php?id=23", image: "imgWomens/23.png" },
    { id: 24, name: "Jacket Gris", price: "US $35", link: "detalleProducto.php?id=24", image: "imgWomens/24.png" },
    { id: 7, name: "T-Shirt Blanca", price: "US $35", link: "detalleProducto.php?id=7", image: "imgWomens/7.png" }
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
