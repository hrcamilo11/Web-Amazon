// Función Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.querySelector('.menu-toggle');

    if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
        menu.classList.remove('active');
    }
});


// Función Busqueda

// Función de filtro para los productos
function filterProducts() {
    const searchQuery = document.querySelector('.search-bar input').value.toLowerCase();
    const products = document.querySelectorAll('.producto');

    products.forEach(product => {
        const productName = product.querySelector('h2').textContent.toLowerCase();

        if (productName.includes(searchQuery)) {
            product.style.display = 'block'; // Muestra el producto
        } else {
            product.style.display = 'none'; // Oculta el producto
        }
    });
}

document.querySelector('.search-bar button').addEventListener('click', function(event) {
    event.preventDefault();
    filterProducts();
});

