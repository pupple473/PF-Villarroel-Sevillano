const products = [{
        id: 1,
        name: 'Vinilo Artaud',
        price: 79.90,
        tipe: 'discos'
    },
    {
        id: 2,
        name: 'Vinilo Spinettalandia y sus amigos',
        price: 38.80,
        tipe: 'discos'
    },
    {
        id: 3,
        name: 'Vinilo Almendra',
        price: 45.49,
        tipe: 'discos'
    },
    {
        id: 4,
        name: 'Cuerda para guitarra',
        price: 59.90,
        tipe: 'cuerdas'
    },
    {
        id: 5,
        name: 'Cuerda para bajo',
        price: 49.00,
        tipe: 'cuerdas'
    },
    {
        id: 6,
        name: 'Cuerda para violín',
        price: 29.99,
        tipe: 'cuerdas'
    },
    {
        id: 7,
        name: 'Remera Artaud',
        price: 11.99,
        tipe: 'ropa'
    },
    {
        id: 8,
        name: 'Remera Almendra',
        price: 11.99,
        tipe: 'ropa'
    },
    {
        id: 9,
        name: 'Remera Durazno Sangrando',
        price: 11.99,
        tipe: 'ropa'
    },
    {
        id: 10,
        name: 'Remera de las Bandas Eternas',
        price: 11.99,
        tipe: 'ropa'
    }
];

// Filtros de búsqueda
alert('Filtros de búsqueda');
let busqueda = true;

do {
    // Preguntar si se desea filtrar
    let deseaFiltrar = prompt('¿Desea filtrar los productos? (true/false)').toLowerCase() === 'true';

    if (deseaFiltrar) {
        // Pedir filtro de precio
        let priceFilter = parseFloat(prompt('Ingrese el valor de precio máximo '));

        // Validar que sea un número válido
        while (isNaN(priceFilter)) {
            priceFilter = parseFloat(prompt('Ingrese un valor de precio máximo válido '));
        }

        // Pedir filtro de tipo de producto
        let tipeFilter = prompt('Ingrese el tipo de producto (discos, cuerdas, ropa)').toLowerCase();

        // Validar que el tipo exista en los productos
        let tipeExist = products.some(product => product.tipe === tipeFilter);
        while (!tipeExist) {
            tipeFilter = prompt('Ingrese un tipo de producto válido (discos, cuerdas, ropa)').toLowerCase();
            tipeExist = products.some(product => product.tipe === tipeFilter);
        }

        // Filtrar productos
        const productosFiltrados = products.filter(product => product.tipe === tipeFilter && product.price < priceFilter);

        // Mostrar resultados usando map()
        if (productosFiltrados.length > 0) {
            const resultado = productosFiltrados.map(product => `- ${product.name}: $${product.price.toFixed(2)}`).join('\n');
            alert(`Productos de ${tipeFilter} con precio menor a ${priceFilter}:\n${resultado}`);
        } else {
            alert(`No se encontraron productos de tipo ${tipeFilter} con precio menor a ${priceFilter}.`);
        }
    } else {
        // Mostrar todos los productos si no se desea filtrar
        const todosProductos = products.map(product => `- ${product.name}: $${product.price.toFixed(2)}`).join('\n');
        alert('Se mostrara la lista por consola ')
        console.log(`Lista de todos los productos:\n${todosProductos}`);
    }

    // Preguntar si continuar con la búsqueda o no
    busqueda = prompt('¿Desea seguir filtrando o viendo productos? (true/false)').toLowerCase() === 'true';

} while (busqueda);