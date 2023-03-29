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

botonCotizar.addEventListener("click", () => {
    const precio = vehiculoPrecio.find((vehiculo) =>
        vehiculo.marca === document.getElementById("vehiculosMarca").value &&
        vehiculo.modelo === document.getElementById("vehiculosmodelos").value &&
        vehiculo.anio === document.getElementById("vehiculosFabricacion").value
    );

    console.log(precio.precio * 1000);

    const selectCobertura = document.getElementById("cobertura").value

    console.log(selectCobertura)

    let cotizacionPrint

    if (selectCobertura === "RC") {
        cotizacionPrint = tasaRC
    }
    else if (selectCobertura === "TCG") {
        cotizacionPrint = (tasaTC * precio.precio * 1000) + tasaRC
    }
    else if (selectCobertura === "TR") {
        cotizacionPrint = (tasaTR * precio.precio * 1000) + tasaRC
    }
    console.log(cotizacionPrint)

    alertify.alert(`La cotizacion para ${document.getElementById("vehiculosMarca").value} ${document.getElementById("vehiculosmodelos").value} del año ${document.getElementById("vehiculosFabricacion").value} es de $${cotizacionPrint}`).set({ title: "Resultado Cotizacion" })


    resultadoCotizacion.textContent = `La cotizacion para ${document.getElementById("vehiculosMarca").value} ${document.getElementById("vehiculosmodelos").value} del año ${document.getElementById("vehiculosFabricacion").value} es de $${cotizacionPrint}`
});

botonBorrar.addEventListener("click", () => {

    nombre.innerHTML = "";
    selectMarca.innerHTML = "";
    selectModelo.innerHTML = "";
    selectFabricacion.innerHTML = "";


})
