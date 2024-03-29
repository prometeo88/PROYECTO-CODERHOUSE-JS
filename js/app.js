// Cotizador - ajustado de las versiones anteriores

//tasas seguros - tasaRC hay que agregarle el factor edad
/* const tasaRC = [
    { tipo: "mas18", costo: 1900 },
    { tipo: "mas35", costo: 1800 },
    { tipo: "mas55", costo: 1950 },
    { tipo: "mas65", costo: 2100 }] */
const tasaRC = 1900
const tasaTC = 0.0015
const tasaTR = 0.0023

//función para cotizar

const botonCotizar = document.getElementById("cotizar");
const resultadoCotizacion = document.getElementById("resultadoCotizacion")
const botonBorrar = document.getElementById("reset")
const inputNombre = document.getElementById('nombre');
const inputEdad = document.getElementById('edad');
const selectCobertura = document.getElementById("cobertura")
const botonGuardar = document.getElementById("save")
const historialCotizacion = document.getElementById("historialCotizacion")
const botonBorrarHistorial = document.getElementById("deletHistorial")

botonCotizar.addEventListener("click", () => {
    // verificar campos completos
    if (!inputNombre.value || !inputEdad.value) {
        alertify.alert("Por favor, ingrese su nombre y edad antes de cotizar.").set({ title: "Error" });
        return;
    }

    if (document.getElementById("vehiculosMarca").value &&
        document.getElementById("vehiculosmodelos").value &&
        document.getElementById("vehiculosFabricacion").value &&
        selectCobertura.value === "Abrir y seleccionar") {
        alertify.alert("Por favor, seleccione un vehículo y cobertura antes de cotizar.");
        return;
    }


    const precio = vehiculoPrecio.find((vehiculo) =>
        vehiculo.marca === document.getElementById("vehiculosMarca").value &&
        vehiculo.modelo === document.getElementById("vehiculosmodelos").value &&
        vehiculo.anio === document.getElementById("vehiculosFabricacion").value
    );

    let cotizacionPrint

    if (selectCobertura.value === "RC") {
        cotizacionPrint = tasaRC
    }
    else if (selectCobertura.value === "TCG") {
        cotizacionPrint = (tasaTC * precio.precio * 1000) + tasaRC
    }
    else if (selectCobertura.value === "TR") {
        cotizacionPrint = (tasaTR * precio.precio * 1000) + tasaRC
    }

    alertify.alert(`La cotizacion para ${document.getElementById("vehiculosMarca").value} ${document.getElementById("vehiculosmodelos").value} del año ${document.getElementById("vehiculosFabricacion").value} es de $${cotizacionPrint}`).set({ title: "Resultado Cotizacion" })


    resultadoCotizacion.innerHTML = `La cotizacion para el auto ${document.getElementById("vehiculosMarca").value} ${document.getElementById("vehiculosmodelos").value} del año ${document.getElementById("vehiculosFabricacion").value} es de $${cotizacionPrint}. <br.`;
});

//borrar los datos del formulario

botonBorrar.addEventListener("click", () => {

    inputNombre.value = "";
    inputEdad.value = "";
    selectMarca.selectedIndex = 0;
    selectModelo.innerHTML = "";
    selectFabricacion.selectedIndex = 0;
    selectCobertura.selectedIndex = 0;

}

)

// guardad la coti en localstorage

botonGuardar.addEventListener("click", () => {
    const nombre = inputNombre.value;
    const cotizacion = resultadoCotizacion.innerText;
    const nuevaCotizacion = { nombre, cotizacion };

    let cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];
    cotizaciones.push(nuevaCotizacion);
    localStorage.setItem("cotizaciones", JSON.stringify(cotizaciones));

    historialCotizacion.innerHTML = "";
    cotizaciones.forEach((cotizacion, index) => {
        historialCotizacion.innerHTML += `${index + 1}- ${cotizacion.nombre} : ${cotizacion.cotizacion}<br>`;
    });

    function efectoSombra() {
        setTimeout(historialCotizacion.classList.add("sombra1"), 0)
        setTimeout(() => { historialCotizacion.classList.remove("sombra1") }, 200)
        setTimeout(() => { historialCotizacion.classList.add("sombra2") }, 200)
        setTimeout(() => { historialCotizacion.classList.remove("sombra2") }, 200)
        setTimeout(() => { historialCotizacion.classList.add("sombra3") }, 200)
        setTimeout(() => { historialCotizacion.classList.remove("sombra3") }, 200)
    }

    setTimeout(efectoSombra(),0)
    setTimeout(efectoSombra(),1500)



});

//borrar el historial de cotizacion guardads en localstorage

botonBorrarHistorial.addEventListener("click", () => {
    localStorage.clear()
    historialCotizacion.innerHTML = ""
    resultadoCotizacion.innerHTML = ""
});

//cargar historial de cotizacion con el reload

document.addEventListener("DOMContentLoaded", () => {
    const cotizaciones = JSON.parse(localStorage.getItem("cotizaciones")) || [];

    let historialText = "";
    for (let i = 0; i < cotizaciones.length; i += 1) {
        historialText += `${i + 1}- ${cotizaciones[i].nombre} : ${cotizaciones[i].cotizacion}\n <br>`;
    }

    historialCotizacion.innerHTML = historialText;


});


