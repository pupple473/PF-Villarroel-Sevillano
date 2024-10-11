// Agrega productos al carrito
const carrito = [];

const agregarAlCarrito = (producto) => {
    carrito.push(producto);
    console.log('Producto agregado al carrito:', producto);
};


// Obtener referencia al contenedor de productos
const productosContainer = document.getElementById('container-shop');

// Crear las cards y agregarlas al DOM
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

// Función para añadir al carrito y guardar en localStorage
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartMenu();
}

// Actualizar el menú flotante con los productos del carrito
function updateCartMenu() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar el menú antes de actualizar

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach((product) => {
        const li = document.createElement('li');
        li.textContent = `${product.name} - $${product.price}`;
        cartItems.appendChild(li);
    });
}

// Limpiar el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    localStorage.removeItem('cart');
    updateCartMenu();
});

// Actualizar el carrito cuando se carga la página
updateCartMenu();

// // ...  Crear las cards
// const productosContainer = document.getElementById('container-shop');
// products.forEach(products => {
// const card = document.createElement('div');
// card.classList.add('card');
// card.innerHTML = `
//     <img src="${products.image}" alt="${products.name}">
//     <h3>${products.name}</h3>
//     <p>Precio: $${products.price}</p>`;
// productosContainer.appendChild(card);
// });

// // escoger filtrado

// const parametrosOrden = ["mayor a menor precio", "menor a mayor precio", "alfabeticamente"];
// const parametrosFiltro = ["discos", "ropa", "instrumentos"];
// const shopMain = document.getElementById("shop-main");

// const filtrosContainer = document.createElement('form');
// filtrosContainer.classList.add('filtros');

// parametrosOrden.forEach(opcion => {
//     const radio = document.createElement("input");
//     radio.type = "radio";
//     radio.name = "orden";
//     radio.value = opcion;

//     const label = document.createElement("label");
//     label.textContent = opcion;

//     filtrosContainer.appendChild(radio);
//     filtrosContainer.appendChild(label);
//     filtrosContainer.appendChild(document.createElement("br"));
// })



// filtrosContainer.appendChild(filtros);
// shopMain.appendChild(filtrosContainer);
