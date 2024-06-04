//funcion que calcula las cuotas y el importe financiado en base a la cantidad de cuotas y el procentaje correspondiente. 
//La función tiene como parametros el importe sy la cantidad de cuotas
//devuelve el importe original, procentaje de interes, importe de la ciuota e importe financiado

//definicion de la funcion
function calculoCuotas(importe, cuotas) {
    if (importe != 0) {
        if (cuotas == 0 || cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 6 || cuotas == 12) {
            switch (cuotas) {
                case 0:
                    porcentaje = 0;
                    impCuota = parseFloat(importe);
                    impFinanciado = impCuota;
                    break;

                case 1:
                    porcentaje = 2
                    impCuota = parseFloat(importe * 1.02);
                    impFinanciado = impCuota;
                    break;
                case 2:
                    porcentaje = 4;
                    impFinanciado = parseFloat(importe * 1.04);
                    impCuota = parseFloat(impFinanciado / 2);
                    break;
                case 3:
                    porcentaje = 6;
                    impFinanciado = parseFloat(importe * 1.06);
                    impCuota = parseFloat(impFinanciado / 3);
                    break;
                case 6:
                    porcentaje = 12;
                    impFinanciado = parseFloat(importe * 1.12);
                    impCuota = parseFloat(impFinanciado / 6);
                    break;
                case 12:
                    porcentaje = 20;
                    impFinanciado = parseFloat(importe * 1.20);
                    impCuota = parseFloat(impFinanciado / 12);
                    break;

                default:
                    alert("Cantidad de cuotas posibles 0, 1, 2, 3, 6 y 12");
            }
        }
        else {
            alert("Cantidad de cuotas posibles 0, 1, 2, 3, 6 y 12");
        }
    }
    else {
        alert("El importe debe ser mayor a cero");
    }
    return (importe, porcentaje, impCuota, impFinanciado)
}

//let importe = parseInt(prompt("Ingresar importe"));
//let cuotas = parseInt(prompt("Ingresar cantidad de cuotas"));
//let impCuota = 0;
//let impFinanciado = 0;
//let porcentaje = 0;

//llamado de la funcion
/*
calculoCuotas(importe, cuotas)

    if (importe > 0) {
        if (cuotas == 0 || cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 6 || cuotas == 12) {
            alert("Importe =  $" + importe);
            alert("Porcentaje = " + porcentaje + "%");
            alert("Importe cuota = $" + impCuota);
            alert("Importe financiado = $" + impFinanciado);
        }
        else {
            alert("Cantidad de cuotas posibles 0, 1, 2, 3, 6 y 12");
        }
    }
    else {
        alert("el importe debe ser numerico y mayor a cero")
    }
    */

