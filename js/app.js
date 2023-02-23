// Mensajes Bienvenida

console.log("Bienvenido, vamos a cotizar el seguro de tu vehículo. Responde las preguntas con las opciones indicadas. Gracias")
document.write("Bienvenido, vamos a cotizar el seguro de tu vehículo.", "<br>", "Responde las preguntas con las opciones indicadas. Gracias", "<br><br>")

//preguntas al usuario que tienen seguro

let tieneSeguro

do { tieneSeguro = prompt("Bienvenido. ¿Su vehículo tiene contratado un seguro? si/no");}
while (tieneSeguro !== "si" && tieneSeguro !== "no");

if (tieneSeguro == "si") {
    let quiereComparar = prompt("¿Desea cotizar su vehículo? si/no");
    if (quiereComparar == "no") {
        alert("Gracias por visitarnos! Dudas comentarios al 3854855796");
    }
    if (quiereComparar == "si") {
        let autooMoto = prompt("¿Quiere cotizar un auto o una moto? auto/moto");
        if (autooMoto == "auto") {
            let tercerosAuto = prompt("¿Quiere un seguro solo de Responsabilidad Civil o una cobertura mas amplia? terceros/amplia");
            if (tercerosAuto == "terceros") {
                console.log("La responsabilidad Civil de un automóvil tiene un costo actual de $1900. Para contratar le pedimos que se comunique al 3854855796")
                document.write("La responsabilidad Civil de un automóvil tiene un costo actual de $1900. Para contratar le pedimos que se comunique al 3854855796")
            }
            if (tercerosAuto == "amplia") {
                console.log("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
                document.write("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
            }
        }
        if (autooMoto == "moto") {
            let tercerosMoto = prompt("¿Quiere un seguro solo de Responsabilidad Civil o una cobertura mas amplia? terceros/amplia")
            if (tercerosMoto == "terceros") {
                console.log("La responsabilidad Civil de un motovehículos tiene un costo actual de $450. Para contratar le pedimos que se comunique al 3854855796")
                document.write("La responsabilidad Civil de un motovehículos tiene un costo actual de $450. Para contratar le pedimos que se comunique al 3854855796")
            }
            if (tercerosMoto == "amplia") {
                console.log("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
                document.write("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
            }
        }
    }
}

//preguntas al usuario cuando no tiene seguro

else if (tieneSeguro == "no") {
    quiereComparar = prompt("¿Desea cotizar su vehículo? si/no");
    if (quiereComparar == "no") {
        alert("Gracias por visitarnos! Dudas comentarios al 3854855796");
    }
    if (quiereComparar == "si") {
        let autooMoto = prompt("¿Quiere cotizar un auto o una moto? auto/moto");
        if (autooMoto == "auto") {
            let tercerosAuto = prompt("¿Quiere un seguro solo de Responsabilidad Civil o una cobertura mas amplia? terceros/amplia");
            if (tercerosAuto == "terceros") {
                console.log("La responsabilidad Civil de un automóvil tiene un costo actual de $1900. Para contratar le pedimos que se comunique al 3854855796")
                document.write("La responsabilidad Civil de un automóvil tiene un costo actual de $1900. Para contratar le pedimos que se comunique al 3854855796")
            }
            if (tercerosAuto == "amplia") {
                console.log("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
                document.write("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
            }
        }
        if (autooMoto == "moto") {
            let tercerosMoto = prompt("¿Quiere un seguro solo de Responsabilidad Civil o una cobertura mas amplia? terceros/amplia")
            if (tercerosMoto == "terceros") {
                console.log("La responsabilidad Civil de un motovehículos tiene un costo actual de $450. Para contratar le pedimos que se comunique al 3854855796")
                document.write("La responsabilidad Civil de un motovehículos tiene un costo actual de $450. Para contratar le pedimos que se comunique al 3854855796")
            }
            if (tercerosMoto == "amplia") {
                console.log("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
                document.write("Para hacer una cobertura amplia le pedimos que se comunique por teléfono o por Whatsapp al 3854855796")
            }
        }
    }
} else {
    console.log("Lo siento, no puedo entender su respuesta. Por favor, responda con las opciones permitidas");
    document.write("<br>", "Lo siento, no puedo entender su respuesta. Por favor, responda con las opciones permitidas")
}




