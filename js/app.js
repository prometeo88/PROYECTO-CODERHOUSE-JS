// Mensajes Bienvenida

console.log("Bienvenido, vamos a cotizar el seguro de tu vehículo. Responde las preguntas con las opciones indicadas. Gracias")
document.write("Bienvenido, vamos a cotizar el seguro de tu vehículo.", "<br>","<br>", "Responde las preguntas con las opciones indicadas. Gracias","<br>")

//variables

const respCivil = [1900.0,350 ]
const tasaAutoA = 0
const tasaAutoB = 0.004
const tasaAutoC = 0.007
const tasaAutoCFULL = 0.002
const tasaMotoA = 0
const tasaMotoB = 0.001
const tasaMotoC = 0.002



//función para cotizar

function cotizarSeguro() {
    let autooMoto = prompt("¿Quiere cotizar un auto o una moto? Auto/Moto");
    let autooMotoLower = autooMoto.toLowerCase();
    if (autooMotoLower == "auto") {
        let tercerosAuto = prompt("Para cotizar Responsabilidad Civil, ingrese A.\nPara cotizar RC + Incendio, Robo/Hurto Total, ingrese B.\nPara Para cotizar RC + Incendio, Robo/Hurto Total + Destrucción Total, ingrese C.\nPara Para cotizar RC + Incendio, Robo/Hurto Total + Destruccion Total + Granizo y Adicionales, ingrese CFULL.");
        let tercerosAutoLower = tercerosAuto.toLowerCase();
        if (tercerosAutoLower == "a") {
            console.log("La responsabilidad Civil de un automóvil tiene un costo actual de $" + respCivil[0])
            document.write("<br>","La responsabilidad Civil de un automóvil tiene un costo actual de $" + respCivil[0])
        }
        else if (tercerosAutoLower == "b") {
            let sumaAsegurada = prompt("Ingrese el valor actual de mercado de su vehiculo")
            let costoAutoB = (respCivil[0]) + (sumaAsegurada * tasaAutoB)
            console.log("El costo de una cobertura B de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoB.toFixed(2) + " mensual.")
            document.write("<br>","El costo de una cobertura B de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoB.toFixed(2) + " mensual.")
        }
        else if (tercerosAutoLower == "c") {
            let sumaAsegurada = prompt("Ingrese el valor actual de mercado de su vehiculo")
            let costoAutoC = (respCivil[0]) + (sumaAsegurada * tasaAutoC)
            console.log("El costo de una cobertura C de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoC.toFixed(2) + " mensual.")
            document.write("<br>","El costo de una cobertura C de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoC.toFixed(2) + " mensual.")
        }
        else if (tercerosAutoLower == "cfull") {
            let sumaAsegurada = prompt("Ingrese el valor actual de mercado de su vehiculo")
            let costoAutoCFULL = (respCivil[0]) + (sumaAsegurada * tasaAutoCFULL)
            console.log("El costo de una cobertura CFull de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoCFULL.toFixed(2) + " mensual.")
            document.write("<br>","El costo de una cobertura CFull, de un auto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoAutoCFULL.toFixed(2) + " mensual.")
        }
        else {
            console.log("Lo siento, no puedo entender su respuesta. Por favor, responda con la letra de la cobertura elegida. A,B,C,CFfull.");
            document.write("<br>", "Lo siento, no puedo entender su respuesta. Por favor, responda con letra de la cobertura elegida. A,B,C,CFull.")

        }

    }
    else if (autooMotoLower == "moto") {
        let tercerosMoto = prompt("Para cotizar Responsabilidad Civil, ingrese A.\nPara cotizar RC + Incendio, Robo/Hurto Total, ingrese B.\nPara Para cotizar RC + Incendio, Robo/Hurto Total + Destrucción Total, ingrese C.");
        let tercerosMotoLower = tercerosMoto.toLowerCase();
        if (tercerosMotoLower == "a") {
            console.log("La responsabilidad Civil de una moto tiene un costo actual de $" + respCivil[1])
            document.write("<br>","La responsabilidad Civil de una moto tiene un costo actual de $" + respCivil[1])
        }
        else if (tercerosMotoLower == "b") {
            let sumaAsegurada = prompt("Ingrese el valor actual de mercado de su vehiculo")
            let costoMotoB = (respCivil[1]) + (sumaAsegurada * tasaMotoB)
            console.log("El costo de una cobertura B para una moto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoMotoB.toFixed(2) + " mensual.")
            document.write("<br>","El costo de una cobertura B para una moto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoMotoB.toFixed(2) + " mensual.")
        }
        else if (tercerosMotoLower == "c") {
            let sumaAsegurada = prompt("Ingrese el valor actual de mercado de su vehiculo")
            let costoMotoC = (respCivil[1]) + (sumaAsegurada * tasaMotoC)
            console.log("El costo de una cobertura C para una moto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoMotoC.toFixed(2) + " mensual.")
            document.write("<br>","El costo de una cobertura C para una moto con una Suma Asegurada de $" + sumaAsegurada + " es de $" + costoMotoC.toFixed(2) + " mensual.")
        }
        else {
            console.log("Lo siento, no puedo entender su respuesta. Por favor, responda con la letra de la cobertura elegida. A,B,C.");
            document.write("<br>", "Lo siento, no puedo entender su respuesta. Por favor, responda con letra de la cobertura elegida. A,B,C.")

        }

    }
    else {
        console.log("Lo siento, no puedo entender su respuesta. Por favor, responda con auto o moto, sino comuníquese a nuestro Whatsapp.");
        document.write("<br>", "Lo siento, no puedo entender su respuesta. Por favor, responda con auto o moto, sino comuníquese a nuestro Whatsapp.")
    }

}



//preguntas al usuario que tienen seguro

let tieneSeguro
let tieneSeguroLower

do {
    tieneSeguro = prompt("Bienvenido. ¿Su vehículo tiene contratado un seguro? Si/No");
    tieneSeguroLower = tieneSeguro.toLowerCase();
}
while (tieneSeguroLower !== "si" && tieneSeguroLower !== "no");


if (tieneSeguroLower == "si") {
    let quiereComparar = prompt("¿Desea cotizar su vehículo? Si/No");
    let quiereCompararLower = quiereComparar.toLowerCase();
    if (quiereCompararLower == "no") {
        alert("Gracias por visitarnos! Dudas comentarios al 3854855796");
    }
    if (quiereCompararLower == "si") {
        cotizarSeguro()
    }
}

//preguntas al usuario cuando no tiene seguro

else if (tieneSeguroLower == "no") {
    quiereComparar = prompt("¿Desea cotizar su vehículo? si/no");
    if (quiereComparar == "no") {
        alert("Gracias por visitarnos! Dudas comentarios al 3854855796");
    }
    if (quiereComparar == "si") {
        cotizarSeguro()
    }
} else {
    console.log("Lo siento, no puedo entender su respuesta. Por favor, responda con las opciones permitidas");
    document.write("<br>", "<br>", "Lo siento, no puedo entender su respuesta. Por favor, responda con las opciones permitidas")
}







