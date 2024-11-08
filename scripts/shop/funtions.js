// Agrega productos al carrito
const carrito = [];

// Obtener referencia al contenedor de productos y al input de búsqueda
const productosContainer = document.getElementById('container-shop');
const searchInput = document.getElementById('search-input');

// Función para crear las cards y agregarlas al DOM
function crearCards(products) {
    productosContainer.innerHTML = ''; // Limpiar el contenedor antes de crear nuevas cards
    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col'); // Para usar el sistema de grid de Bootstrap

        card.innerHTML = `
            <div class="card card-small">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Precio: $${product.price}</p>
                    <button class="btn btn-primary add-to-cart">Añadir al carrito</button>
                </div>
            </div>
        `;

        // Evento para añadir al carrito
        card.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });

        productosContainer.appendChild(card);
    });
}

// Crear las cards inicialmente
crearCards(products);



// Actualizar el menú flotante con los productos del carrito
function updateCartMenu() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar el menú antes de actualizar

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0; // Inicializar el total

    cart.forEach((product) => {
        const li = document.createElement('li');
        li.style.color = '#fff';

        // Mostrar la cantidad si es más de 1
        const quantityText = product.quantity > 1 ? ` x${product.quantity}` : '';
        li.textContent = `${product.name} - $${product.price}${quantityText}`;
        cartItems.appendChild(li);

        total += product.price * product.quantity; // Calcular el total
    });

    const totalLi = document.createElement('li');
    totalLi.style.color = '#fff';
    totalLi.textContent = `Total: $${total.toFixed(2)}`; // Mostrar el total
    cartItems.appendChild(totalLi);
}
// Función para añadir al carrito y guardar en localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === product.name);

    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar la cantidad si el producto ya existe
    } else {
        cart.push({ ...product, quantity: 1 }); // Agregar producto al carrito
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartMenu();
}
// Función para buscar productos
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Convertir el término a minúsculas
    const allProducts = products; // Almacenar la lista completa de productos

    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) // Filtrar productos según el término
    );

    crearCards(filteredProducts); // Crear las cards filtradas
});

// Limpiar el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    updateCartMenu();
});

// Actualizar el carrito cuando se carga la página
updateCartMenu();

//Mostrar carrito
document.getElementById('toggle-cart').addEventListener('click', () => {
    const cartContent = document.getElementById('cart-content');
    // Alternar la visibilidad del contenido del carrito
    if (cartContent.style.display === 'none') {
        cartContent.style.display = 'block';
        updateCartMenu(); // Actualiza el contenido del carrito al mostrarlo
    } else {
        cartContent.style.display = 'none';
    }
});
