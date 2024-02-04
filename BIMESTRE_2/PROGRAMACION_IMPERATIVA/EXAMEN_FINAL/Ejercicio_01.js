const autos = [
    {
        marca: 'Toyota',
        modelo: 2022,
        color: 'rojo'
    },
    {
        marca: 'Renault',
        modelo: 2015,
        color: 'gris'
    },
    {
        marca: 'Peugeot',
        modelo: 2017,
        color: 'rojo'
    },
    {
        marca: 'Fiat',
        modelo: 2021,
        color: 'negro'
    }
];

function filtrar_Autos_X_Modelo(arrayAutos) {
    return arrayAutos.filter(auto => auto.modelo >= 2020);
}


const autos_Filtrados = filtrar_Autos_X_Modelo(autos);
console.log(autos_Filtrados);
