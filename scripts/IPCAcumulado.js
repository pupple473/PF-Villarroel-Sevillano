function anhosomeses(periodo) {
    if (periodo == "A" || periodo == "a") {
        return "años";
    } else if (periodo == "M" || periodo == "m") {
        return "meses";
    }
}

function CalcularIPCAcumulado(periodos) {
    let valores = [];

    // Usamos forEach para solicitar y almacenar los valores
    Array.from({ length: periodos }).forEach((_, i) => {
        let valor = parseFloat(prompt("Introduce el valor para el periodo " + (i + 1) + " :"));
        valor = valor / 100;
        valores.push(valor);
    });

    const valoresPorcentaje = valores.map(valor => valor * 100); // Usamos map para convertir a porcentajes
    alert("Se han ingresado los valores: " + valoresPorcentaje.join("\n"));

    let acumulado = 0;
    valores.forEach((valor, i) => {
        if (i === 0) {
            acumulado = valor + 1;
        } else {
            acumulado = acumulado * (1 + valor);
        }
        console.log("Acumulado parcial: " + ((acumulado - 1) * 100).toFixed(2) + "%");
    });

    acumulado = (acumulado * 100) - 100;
    acumulado = acumulado.toFixed(2);

    return { acumulado, valores };
}

function obtenerValorMaximoYIndice(valores) {
    const valorMaximo = Math.max(...valores);
    const indice = valores.indexOf(valorMaximo);
    return { valorMaximo, indice };
}

// Obtener el periodo
let periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
while (periodo !== "A" && periodo !== "a" && periodo !== "M" && periodo !== "m") {
    alert("Debe ingresar 'A' para calcular el IPC acumulado en años o 'M' para calcularlo en meses.");
    periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
}

let p = anhosomeses(periodo);
let nperiodos = parseInt(prompt("Ingrese el número de " + p));

if (isNaN(nperiodos)) {
    alert("Debe ingresar un número.");
    do {
        nperiodos = parseInt(prompt("Ingrese el NÚMERO de " + p));
    } while (isNaN(nperiodos));
}

const retorno = CalcularIPCAcumulado(nperiodos);
const IPCAcumulado = retorno.acumulado;
const valores = retorno.valores;

// Usamos sort para ordenar los valores de menor a mayor
const valoresOrdenados = [...valores].sort((a, b) => a - b);
console.log("Valores ordenados de menor a mayor: " + valoresOrdenados.map(v => (v * 100).toFixed(2)).join(", "));

// Obtener el valor máximo y el índice
const reporte = obtenerValorMaximoYIndice(valores);
const valorMaximo = reporte.valorMaximo;
const indiceMaximo = reporte.indice + 1;

alert("El IPC acumulado es: " + IPCAcumulado + "%");
alert("El " + periodo + " con mayor aumento de precios fue el número: " + indiceMaximo + " con el valor " + (valorMaximo * 100).toFixed(2) + "%");

// function anhosomeses(periodo){
//     if (periodo == "A" || periodo == "a"){
//         return "años"
//     }
//     else if (periodo == "M" || periodo == "m"){
//         return "meses"
//     }
// }
// function CalcularIPCAcumulado(periodos){
//     let valores = []
//     for (let i = 0; i < periodos; i++) {
//         let valor = parseFloat(prompt("Introduce el valor para el periodo "+(i + 1)+" :"));
//         valor = valor/100
//         valores.push(valor);
//     }
//     valoresconsalto = valores.join("\n")
//     alert ("Se han ingresado los valores: "+valoresconsalto)
//     let acumulado = 0
//     for (let i = 0; i < valores.length; i++) {
//         if (i == 0){
//             acumulado = valores[i] +1
//         }
//         else{
//             acumulado = acumulado * (1 + valores[i]);
//         }
//         console.log((acumulado-1)*100);
//     }
//     acumulado = (acumulado * 100) - 100
//     acumulado = acumulado.toFixed(2)
//     return {acumulado, valores};
// }
// function obtenerValorMaximoYIndice(valores) {
//     const valorMaximo = Math.max(...valores); // encuantra valor máximo
//     const indice = valores.indexOf(valorMaximo); // índice del máximo
//     return { valorMaximo, indice };
// }


// let periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
// while (periodo != "A" && periodo != "a" && periodo != "M" && periodo != "m"){
//     alert("Debe ingresar 'A' para calcular el IPC acumulado en años o 'M' para calcularlo en meses.");
//     periodo = prompt("Desea calcular el acumulado en años(A) o meses(M)");
// }
// let p = anhosomeses(periodo)
// let nperiodos = parseInt(prompt("Ingrese el numero de " + p + " "))
// if (isNaN(nperiodos)) {
//     alert("Debe ingresar un número.");
//     do {
//         nperiodos = parseInt(prompt("Ingrese el NUMERO de " + p))
//     }
//     while (isNaN(nperiodos))
// }
// const retorno = CalcularIPCAcumulado(nperiodos)
// const IPCAcumulado =retorno.acumulado
// const valores = retorno.valores
// const reporte = obtenerValorMaximoYIndice(valores)
// const valorMaximo = reporte.valorMaximo
// const indiceMaximo = reporte.indice + 1
// alert("El IPC acumulado es: " + IPCAcumulado + "%")
// alert("El " +periodo+ " con mayor aumento de precios fue el numero: "+indiceMaximo+ " con el valor " +valorMaximo)