const products = [{
        id: 101,
        name: 'Vinilo Artaud',
        price: 79.90,
        tipe: 'discos',
        imagen: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 102,
        name: 'Vinilo Spinettalandia y sus amigos',
        price: 38.80,
        tipe: 'discos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 103,
        name: 'Vinilo Almendra',
        price: 45.49,
        tipe: 'discos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 204,
        name: 'Cuerda para guitarra',
        price: 59.90,
        tipe: 'instrumentos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 205,
        name: 'Cuerda para bajo',
        price: 49.00,
        tipe: 'instrumentos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 206,
        name: 'Cuerda para violín',
        price: 29.99,
        tipe: 'instrumentos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 307,
        name: 'Remera Artaud',
        price: 11.99,
        tipe: 'ropa',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 308,
        name: 'Remera Almendra',
        price: 11.99,
        tipe: 'ropa',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 309,
        name: 'Remera Durazno Sangrando',
        price: 11.99,
        tipe: 'ropa',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 3010,
        name: 'Remera de las Bandas Eternas',
        price: 11.99,
        tipe: 'ropa',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 2011,
        name: 'Guitarra Electrica',
        price: 209.10,
        tipe: 'instrumentos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    },
    {
        id: 2012,
        name: 'Bajo',
        price: 189.90,
        tipe: 'instrumentos',
        image: '../../media/meta/picture-icon-260nw-323592404.webp'
    }
];
// ...  Crear las cards
const productosContainer = document.getElementById('container-shop');
products.forEach(products => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <img src="${products.image}" alt="${products.name}">
        <h3>${products.name}</h3>
        <p>Precio: $${products.price}</p>`;
    productosContainer.appendChild(card);
});