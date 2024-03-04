
function descuento1() {
    let ancho1 = document.getElementById('ventana1').value;
    let alto1 = document.getElementById('ventana1alto').value;
    let decuentos = document.querySelector('.descuentos').style.display = 'flex';
    document.querySelector('.horizontal').innerHTML=(ancho1 - 3) / 2;
    document.querySelector('.jamba').innerHTML=alto1 - 1.8;
    document.querySelector('.topengan').innerHTML=alto1 - 3;

    if (ancho1 == 0 && alto1 == 0 ) {
        

    }
}