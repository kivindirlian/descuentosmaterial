
function descuento1() {
    let nuevo  = document.querySelector('.error').style.display = 'none'; 
    let ancho1 = document.getElementById('ventana1').value;
    let alto1 = document.getElementById('ventana1alto').value;
    let decuentos = document.querySelector('.descuentos').style.display = 'flex';
    
    if (ancho1 == 0 && alto1 == 0 ) {

        let nuevo  = document.querySelector('.error').style.display = 'flex';
        let decuentos = document.querySelector('.descuentos').style.display = 'none';
        
    }else{
        document.querySelector('.horizontal').innerHTML=(ancho1 - 3) / 2;
        document.querySelector('.jamba').innerHTML=alto1 - 1.8;
        document.querySelector('.topengan').innerHTML=alto1 - 3;
        let nuevo  = document.querySelector('.error').style.display = 'none';
    }
}


function descuento2() {
    let nuevo2  = document.querySelector('.error2').style.display = 'none'; 
    let ancho2 = document.getElementById('ventana2').value;
    let alto2 = document.getElementById('ventana2alto').value;
    let decuentos2 = document.querySelector('.descuentos2').style.display = 'flex';
    
    if (ancho2 == 0 && alto2 == 0 ) {

        let nuevo2  = document.querySelector('.error2').style.display = 'flex';
        let decuentos2 = document.querySelector('.descuentos2').style.display = 'none';
        
    }else{
        document.querySelector('.pvAncho2').innerHTML=ancho2 + 1;
        document.querySelector('.pvAltoFija').innerHTML=alto2 - 4.5;
        document.querySelector('.pvAltoCorredisa').innerHTML=alto2 - 5.5;
        document.querySelector('.warAlto').innerHTML=alto2 - 3;
        let nuevo2  = document.querySelector('.error2').style.display = 'none';
    }
}


function descuento3() {
    let nuevo3  = document.querySelector('.error3').style.display = 'none'; 
    let ancho3 = document.getElementById('ventana3').value;
    let alto3 = document.getElementById('ventana3alto').value;
    let decuentos3 = document.querySelector('.descuentos3').style.display = 'flex';
    
    if (ancho3 == 0 && alto3 == 0 ) {

        let nuevo3  = document.querySelector('.error3').style.display = 'flex';
        let decuentos3 = document.querySelector('.descuentos3').style.display = 'none';
        
    }else{
        document.querySelector('.marcoAncho').innerHTML=ancho3;
        document.querySelector('.marcoAlto').innerHTML=alto3 - 5.2;
        document.querySelector('.fijaAlto').innerHTML=alto3 - 5.2;
        document.querySelector('.fijaAncho').innerHTML=(ancho3 - 9) / 2;
        document.querySelector('.corredizaAncho').innerHTML=((ancho3 - 9) / 2) + 3.8;
        document.querySelector('.corrediAlto').innerHTML=alto3 - 9.9;
        let nuevo2  = document.querySelector('.error3').style.display = 'none';
    }
}