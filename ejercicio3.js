let alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    },
    {
        nombre: 'Pedro Rodriguez',
        nota: 4
    },
    {
        nombre: 'Roxana García',
        nota: 8
    },
    {
        nombre: 'Luciano Lopez',
        nota: 5
    },
    {
        nombre: 'Fernanda Gimenez',
        nota: 6
    },
    {
        nombre: 'Florencia Martinez',
        nota: 10
    },
    {
        nombre: 'Raul Sanchez',
        nota: 7
    },
    {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];


let aprobados = alumnos.filter(function(alumno) {
    return alumno.nota >= 7;
});
let desaprobados = alumnos.filter(function(alumno){
    return alumno.nota < 7 ;
})


let aprobadosList = document.getElementById('aprobados');
aprobados.forEach(function(alumno) {
    let li = document.createElement('li');
    li.textContent = alumno.nombre + ' - Nota: ' + alumno.nota;
    aprobadosList.appendChild(li);
});
let desaprobadosList = document.getElementById('desaprobados');
desaprobados.forEach(function (alumno) {
    let li = document.createElement('li');
    li.textContent = alumno.nombre + ' - Nota: ' + alumno.nota;
    desaprobadosList.appendChild(li);
    });
