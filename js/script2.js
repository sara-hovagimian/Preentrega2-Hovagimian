

//Definicion de la clase Producto con constructor y un metodo para calcular el IVA
class Producto { 
constructor(codigo, descripcion, precio){
this.codigo=codigo;
this.descripcion=descripcion;
this.precio=parseFloat(precio);
}
calculaIva (){this.precio=this.precio*1.21;}
}

//Definición de array de productos
const ListaProductos=[];
ListaProductos.push(new Producto(101,"Heladera",300000));
ListaProductos.push(new Producto(102,"Cocina",300000));
ListaProductos.push(new Producto(103,"Lavarropa",400000));
ListaProductos.push(new Producto(104,"Horno",200000));
ListaProductos.push(new Producto(105,"Batidora",20000));
ListaProductos.push(new Producto(106,"Cafetera",42000));
ListaProductos.push(new Producto(107,"Licuadora",33000));
ListaProductos.push(new Producto(108,"Televisor",450000));
ListaProductos.push(new Producto(109,"Estufa",18000));
ListaProductos.push(new Producto(110,"Tostadora",12000));

//calculo del precio con IVA incorporado
for (const i of ListaProductos) {
i.calculaIva();
}
//impresión de productos en la consola
ListaProductos.forEach(producto => console.log("Producto: "+" "+ producto.descripcion +" - Precio: "+ " " + producto.precio));


//Impresión de productos en la pagina principal
const body = document.body
const divProducto = document.createElement('div');
const tituloProductos = document.createElement ('h3');
tituloProductos.innerText="Lista de productos";
body.appendChild(tituloProductos); 
body.appendChild(divProducto);
for ( const producto of ListaProductos) {
    let literal = `Codigo: ${producto.codigo} - Nombre: ${producto.descripcion} - Precio: $${producto.precio}`;
    const parrafo = document.createElement('p');
    parrafo.innerHTML = literal;
    divProducto.appendChild(parrafo);
}

//definición de cuotas prevista y sus correspondientes porcentajes
const financiacion= [
{cuotas: 0,porcentaje: 0},
{cuotas: 1,porcentaje: 2},
{cuotas: 2,porcentaje: 4},
{cuotas: 3,porcentaje: 6},
{cuotas: 6,porcentaje: 12},
{cuotas: 12,porcentaje: 20},
]

//Impresión en la consola de cuotas y porcentajes permitidos
console.log(financiacion);
financiacion.forEach(cuota => console.log("Cuota: "+" "+ cuota.cuotas +" - Porcentaje: "+ " " + cuota.porcentaje));

//Impresión de cuotas y porcentajes en la pagina principal
const divCuotas = document.createElement('div');
const tituloFinanciacion = document.createElement ('h3');

tituloFinanciacion.innerText="Financiación:";
body.appendChild(tituloFinanciacion); 
body.appendChild(divCuotas);
for ( const cuota of financiacion) {
    let textoCuotas = `Cuota: ${cuota.cuotas} - Porcentaje: ${cuota.porcentaje}`;
    const parrafo = document.createElement('p');
    parrafo.innerHTML = textoCuotas;
    divCuotas.appendChild(parrafo);
}

//definicion de clase para el carrito con los productos seleccionados
class prodCarrito{
    constructor(codigo, descripcion, precio){
        this.codigo=codigo;
        this.descripcion=descripcion;
        this.precio=parseFloat(precio);
               }
}
const Carrito=[];

//ingreso de productos al carrito
let ingreseCodigo=0
do {
 ingreseCodigo=prompt("Ingrese Código de producto:  "+ ingreseCodigo);
 console.log(ingreseCodigo);
if (ingreseCodigo>100 && ingreseCodigo<111) {
const elegido = ListaProductos.find( (elemento) => elemento.codigo == ingreseCodigo);
console.log("El código es: "+ ingreseCodigo +" "+ ", Descripcion: "+elegido.descripcion +" "+ ", Precio: "+ elegido.precio);
Carrito.push(new prodCarrito( elegido.codigo, elegido.descripcion, elegido.precio));
console.log(Carrito);


}else if (ingreseCodigo!=999) {
        alert("Código erróneo");
    }
}
//calculo del importe total de la compra
while ((ingreseCodigo>100 && ingreseCodigo<111) || ingreseCodigo!=999)
    let total=0;
for (let index = 0; index < Carrito.length; index++) {
    total = total + Carrito[index].precio;
}

//impresión en la consola del total de la compra
console.log("El total de la compra es: "+" "+total);

//solicitud de la cantidad de cuotas 
let cantCuotas=0;
do {
    cantCuotas = parseInt(prompt("Ingrese la cantidad de cuotas:"));}
while (cantCuotas!=0 && cantCuotas!=1 && cantCuotas!=2 && cantCuotas!=3 && cantCuotas!=6 
    && cantCuotas!=12);

// definición de variables para la función del calculo de cuotas e importes (se comentaron en script.js)
let importe=total;
let cuotas=cantCuotas;
let impCuota = 0;
let impFinanciado = 0;
let porcentaje = 0;

//llamado a la función de script.js
calculoCuotas(total, cantCuotas)

//impresión resultante de la compra realizada con importes, porcentaje de financiacion, importe de la cuota e importe financiado
    if (importe > 0) {
        if (cuotas == 0 || cuotas == 1 || cuotas == 2 || cuotas == 3 || cuotas == 6 || cuotas == 12) {
            alert("Importe =  $ " + importe +" ,"+ " Porcentaje = " + porcentaje + "% ," +" Importe cuota = $" + impCuota+" ,"+"Importe financiado = $" + impFinanciado);
        }
        else {
            alert("Cantidad de cuotas posibles 0, 1, 2, 3, 6 y 12");
        }
    }
    else {
        alert("el importe debe ser numerico y mayor a cero")
    }

