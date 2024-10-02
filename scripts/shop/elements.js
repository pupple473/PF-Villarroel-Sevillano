// escoger filtrado

const parametrosOrden = ["mayor a menor precio", "menor a mayor precio", "alfabeticamente"];
const parametrosFiltro = ["discos", "ropa", "instrumentos"];
const shopMain = document.getElementById("shop-main");

const filtrosContainer = document.createElement('form');
filtrosContainer.classList.add('filtros');

parametrosOrden.forEach(opcion => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "orden";
    radio.value = opcion;

    const label = document.createElement("label");
    label.textContent = opcion;

    filtrosContainer.appendChild(radio);
    filtrosContainer.appendChild(label);
    filtrosContainer.appendChild(document.createElement("br"));
})



filtrosContainer.appendChild(filtros);
shopMain.appendChild(filtrosContainer);



// Agregar un evento al botón para obtener el valor seleccionado
botonEnviar.addEventListener("click", () => {
    const radios = document.getElementsByName("filtro");
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            const opcionSeleccionada = radios[i].value;
            console.log("Opción seleccionada:", opcionSeleccionada);
            // Aquí puedes realizar la acción correspondiente con la opción seleccionada
            // Por ejemplo, llamar a una función para filtrar los datos
        }
    }
});



//filtro
