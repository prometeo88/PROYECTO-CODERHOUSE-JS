//validar que el nombre no este vacio

const inputNombre = document.getElementById('nombre');

inputNombre.addEventListener('blur', () => {
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alertify.alert('Por favor ingrese un nombre valido').set({ title: "Error de Nombre" });
        inputNombre.value = "";

    }
}


);

//validad edad entre 18 y 85

const inputEdad = document.getElementById('edad');

inputEdad.addEventListener('blur', () => {
    const edad = parseInt(inputEdad.value);

    if (isNaN(edad)) {
        alertify.alert('Por favor, ingresa un número válido').set({ title: "Error de Edad" });
        inputEdad.value = '';
    } else if (edad < 18 || edad > 85) {
        alertify.alert('Por favor, ingresa una edad entre 18 y 85 años').set({ title: "Error de Edad" });
        inputEdad.value = '';
    }
});

