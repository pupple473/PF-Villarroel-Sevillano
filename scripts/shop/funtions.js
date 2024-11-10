// Agrega productos al carrito
const carrito = [];

// Obtener referencia al contenedor de productos y al input de búsqueda
const productosContainer = document.getElementById('container-shop');
const searchInput = document.getElementById('search-input');

// Función para crear las cards y agregarlas al DOM
const crearCards = (products) => {
    productosContainer.innerHTML = ''; // Limpiar el contenedor antes de crear nuevas cards
    products.forEach(({ image, name, price }) => {
        const card = document.createElement('div');
        card.classList.add('col'); // Para usar el sistema de grid de Bootstrap

        card.innerHTML = `
            <div class="card card-small">
                <img src="${image}" class="card-img-top" alt="${name}">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">Precio: $${price}</p>
                    <button class="btn btn-primary add-to-cart">Añadir al carrito</button>
                </div>
            </div>
        `;

        // Evento para añadir al carrito
        card.querySelector('.add-to-cart').addEventListener('click', () => addToCart({ name, price, image }));

        productosContainer.appendChild(card);
    });
};

// Crear las cards inicialmente
crearCards(products);

// Actualizar el menú flotante con los productos del carrito
const updateCartMenu = () => {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar el menú antes de actualizar

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0; // Inicializar el total

    cart.forEach(({ name, price, quantity }) => {
        const li = document.createElement('li');
        li.style.color = '#fff';

        // Mostrar la cantidad si es más de 1
        const quantityText = quantity > 1 ? ` x${quantity}` : '';
        li.textContent = `${name} - $${price}${quantityText}`;
        cartItems.appendChild(li);

        total += price * quantity; // Calcular el total
    });

    const totalLi = document.createElement('li');
    totalLi.style.color = '#fff';
    totalLi.textContent = `Total: $${total.toFixed(2)}`; // Mostrar el total
    cartItems.appendChild(totalLi);
};

// Actualizar el menú del carrito
const updateCartItems = () => {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(({ name, price }) => {
        const li = document.createElement('li');
        li.textContent = `${name} - $${price}`;

        // Crear botón de eliminar
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('btn', 'btn-danger', 'remove-button');

        removeButton.dataset.productName = name; // Almacenar el nombre del producto en el dataset

        // Agregar el botón al elemento de la lista
        li.appendChild(removeButton);
        cartItems.appendChild(li);

        // Agregar event listener al botón de eliminar
        removeButton.addEventListener('click', removeProductFromList);
    });
};

const removeProductFromList = (event) => {
    const productName = event.target.dataset.productName;
    removeFromCart(productName);
};

// Función para añadir al carrito y guardar en localStorage
const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(item => item.name === product.name);
    Swal.fire(`Se ha añadido ${product.name} al carrito.`);
    if (existingProduct) {
        existingProduct.quantity += 1; // Incrementar la cantidad si el producto ya existe
    } else {
        cart.push({ ...product, quantity: 1 }); // Agregar producto al carrito
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartMenu();
};

// Función para buscar productos
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase(); // Convertir el término a minúsculas
    const filteredProducts = products.filter(({ name }) => name.toLowerCase().includes