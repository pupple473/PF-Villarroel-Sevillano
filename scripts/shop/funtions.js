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

// const carrito = [];

// const agregarAlCarrito = (producto) => {
//     carrito.push(producto);
//     console.log('Producto agregado al carrito:', producto);
// };

// // Obtener referencia al contenedor de productos
// const productosContainer = document.getElementById('container-shop');

// // Crear las cards y agregarlas al DOM
// products.forEach(product => {
//     const card = document.createElement('div');
//     card.classList.add('col'); // Para usar el sistema de grid de Bootstrap

//     card.innerHTML = `
//         <div class="card card-small">
//             <img src="${product.image}" class="card-img-top" alt="${product.name}">
//             <div class="card-body">
//                 <h5 class="card-title">${product.name}</h5>
//                 <p class="card-text">Precio: $${product.price}</p>
//                 <div class="d-flex justify-content-start"> <!-- Alineación a la izquierda -->
//                     <button class="btn btn-primary add-to-cart">Añadir al carrito</button>
//                 </div>
//             </div>
//         </div>
//     `;

//     // Evento para añadir al carrito
//     card.querySelector('.add-to-cart').addEventListener('click', () => {
//         addToCart(product);
//     });

//     productosContainer.appendChild(card);
// });

// // Función para añadir al carrito y guardar en localStorage
// function addToCart(product) {
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];

//     // Verifica si el producto ya está en el carrito
//     const existingProductIndex = cart.findIndex(item => item.name === product.name);

//     if (existingProductIndex !== -1) {
//         // Si el producto ya existe, incrementar la cantidad
//         cart[existingProductIndex].quantity += 1; // Aumentar cantidad
//     } else {
//         // Si no existe, agregar el producto con cantidad 1
//         product.quantity = 1; // Establecer cantidad inicial
//         cart.push(product);
//     }

//     localStorage.setItem('cart', JSON.stringify(cart));
//     updateCartMenu();
// }



// // Actualizar el menú flotante con los productos del carrito
// function updateCartMenu() {
//     const cartItems = document.getElementById('cart-items');
//     const totalElement = document.createElement('p'); // Para mostrar el total
//     let total = 0; // Inicializar total

//     cartItems.innerHTML = ''; // Limpiar el menú antes de actualizar

//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.forEach((product) => {
//         const li = document.createElement('li');
//         li.style.color = '#fff';

//         // Mostrar cantidad y precio
//         li.textContent = `${product.name} - $${product.price} (x${product.quantity})`;
//         cartItems.appendChild(li);

//         // Calcular el total acumulado para este producto
//         total += product.price * product.quantity; // Sumar el precio total del producto
//     });

//     totalElement.textContent = `Total: $${total.toFixed(2)}`; // Formato del total
//     totalElement.style.color = '#fff'; // Estilo del texto del total
//     cartItems.appendChild(totalElement); // Agregar total al final de la lista
// }




// // Limpiar el carrito
// document.getElementById('clear-cart').addEventListener('click', () => {
//     localStorage.removeItem('cart');
//     updateCartMenu();
// });

// // Obtener referencias a los elementos
// const toggleCartButton = document.getElementById('toggle-cart');
// const cartContent = document.getElementById('cart-content');

// // Evento para mostrar/ocultar el carrito
// toggleCartButton.addEventListener('click', () => {
//     if (cartContent.style.display === "none") {
//         cartContent.style.display = "block"; // Mostrar el carrito
//         toggleCartButton.textContent = "Ocultar Carrito"; // Cambiar texto del botón
//     } else {
//         cartContent.style.display = "none"; // Ocultar el carrito
//         toggleCartButton.textContent = "Mostrar Carrito"; // Cambiar texto del botón
//     }
// });

// // Actualizar el carrito cuando se carga la página
// updateCartMenu();

// // Obtener referencia al input de búsqueda
// const searchInput = document.getElementById('search-input');

// // Agregar evento de entrada al input de búsqueda
// searchInput.addEventListener('input', () => {
//     const searchTerm = searchInput.value.toLowerCase(); // Convertir el término a minúsculas
//     const productos = document.querySelectorAll('#container-shop .card'); // Obtener todas las cards

//     productos.forEach((card) => {
//         const productName = card.querySelector('.card-title').textContent.toLowerCase(); // Obtener el nombre del producto
//         if (productName.includes(searchTerm)) {
//             card.style.display = 'block'; // Mostrar si el nombre incluye el término de búsqueda
//         } else {
//             card.style.display = 'none'; // Ocultar si no incluye
//         }
//     });
// });
