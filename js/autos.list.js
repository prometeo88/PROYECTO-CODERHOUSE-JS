//Marcas de autos y complete el select de marcas.
const marcasAutos = [
    { value: 'audi', label: 'Audi' },
    { value: 'citroen', label: 'Citroen' },
    { value: 'chevrolet', label: 'Chevrolet' },
    { value: 'ford', label: 'Ford' },
    { value: 'nissan', label: 'Nissan' },
    { value: 'toyota', label: 'Toyota' },
];

const selectMarca = document.getElementById("vehiculosMarca")

marcasAutos.forEach((marcasAuto) => {
    const option = document.createElement('option');
    option.text = marcasAuto.label;
    selectMarca.add(option);
});


//Modelos de autos y select de modelos

const modelosAutos = {
    Audi: [
        { value: 'a1', label: 'A1' },
        { value: 'a3', label: 'A3' },
    ],
    Citroen: [
        { value: 'c3', label: 'C3' },
        { value: 'c4', label: 'C4' },

    ],
    Chevrolet: [
        { value: 'onix', label: 'Onix' },
        { value: 'corsa', label: 'Corsa' },

    ],
    Ford: [
        { value: 'fiesta', label: 'Fiesta' },
        { value: 'focus', label: 'Focus' },
    ],
    Nissan: [
        { value: 'sentra', label: 'Sentra' },
        { value: 'altima', label: 'Altima' },
    ],
    Toyota: [
        { value: 'corolla', label: 'Corolla' },
        { value: 'rav4', label: 'RAV4' },
    ],
};

const selectModelo = document.getElementById('vehiculosmodelos');
selectMarca.addEventListener('change', (event) => {
    // Limpiar opciones cuando hay cambios
    selectModelo.innerHTML = "";
    const modelos = modelosAutos[event.target.value];
    modelos.forEach((modelos) => {
        const option = document.createElement('option');
        option.text = modelos.label;
        selectModelo.add(option);
    });
});

//Años de fabricacion - limitado a 3 años y valores falsos.

const vehiculoFabricacion = [
    "2022",
    "2023",
]

const selectFabricacion = document.getElementById('vehiculosFabricacion');
vehiculoFabricacion.forEach((anio) => {
    const option = document.createElement('option');
    option.text = anio;
    selectFabricacion.add(option);
});

// array con precios para poder cotizar

const vehiculoPrecio = [
    {
        marca: 'Audi',
        modelo: 'A1',
        anio: '2022',
        precio: 2500
    },
    {
        marca: 'Audi',
        modelo: 'A1',
        anio: '2023',
        precio: 2800
    },
    {
        marca: 'Audi',
        modelo: 'A3',
        anio: '2022',
        precio: 3100
    },
    {
        marca: 'Audi',
        modelo: 'A3',
        anio: '2023',
        precio: 4500
    },
    {
        marca: 'Citroen',
        modelo: 'C3',
        anio: '2022',
        precio: 4000
    },
    {
        marca: 'Citroen',
        modelo: 'C3',
        anio: '2023',
        precio: 4600
    },
    {
        marca: 'Citroen',
        modelo: 'C4',
        anio: '2022',
        precio: 4300
    },
    {
        marca: 'Citroen',
        modelo: 'C4',
        anio: '2023',
        precio: 4800
    },
    {
        marca: 'Chevrolet',
        modelo: 'Onix',
        anio: '2022',
        precio: 3200
    },
    {
        marca: 'Chevrolet',
        modelo: 'Onix',
        anio: '2023',
        precio: 3600
    },
    {
        marca: 'Chevrolet',
        modelo: 'Corsa',
        anio: '2022',
        precio: 2800
    },
    {
        marca: 'Chevrolet',
        modelo: 'Corsa',
        anio: '2023',
        precio: 3100
    },
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        anio: '2022',
        precio: 4200
    },
    {
        marca: 'Ford',
        modelo: 'Fiesta',
        anio: '2023',
        precio: 4400
    },
    {
        marca: 'Ford',
        modelo: 'Focus',
        anio: '2022',
        precio: 4600
    },
    {
        marca: 'Ford',
        modelo: 'Focus',
        anio: '2023',
        precio: 5100
    },
    {
        marca: 'Nissan',
        modelo: 'Sentra',
        anio: '2022',
        precio: 5000
    },
    {
        marca: 'Nissan',
        modelo: 'Sentra',
        anio: '2023',
        precio: 5500
    },
    {
        marca: 'Nissan',
        modelo: 'Altima',
        anio: '2022',
        precio: 5200
    },
    {
        marca: 'Nissan',
        modelo: 'Altima',
        anio: '2023',
        precio: 5600
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: '2022',
        precio: 6000
    },
    {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: '2023',
        precio: 6400
    },
    {
        marca: 'Toyota',
        modelo: 'RAV4',
        anio: '2022',
        precio: 7000
    },
     {
        marca: 'Toyota',
        modelo: 'RAV4',
        anio: '2023',
        precio: 8000
    },
]

