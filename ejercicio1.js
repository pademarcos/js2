const cuadrado1 = document.getElementById('cuadrado1');
const cuadrado2 = document.getElementById('cuadrado2');
const cuadrado3 = document.getElementById('cuadrado3');

cuadrado1.addEventListener('click', () => {
    document.body.style.backgroundColor = '#f08080';
});

cuadrado2.addEventListener('click', () => {
    document.body.style.backgroundColor = '#20b2aa';
});

cuadrado3.addEventListener('click', () => {
    document.body.style.backgroundColor = '#7cfc00';
});
