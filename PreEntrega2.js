////Pre Entrega N°2

function item(producto,marca,exportado,precio){
/////atributos
    this.producto=producto
    this.marca=marca
    this.exportado=exportado
    this.precio=precio
////metodos
     this.mostrar=function(){
        console.log("producto: "+this.producto)
        console.log("marca : "+this.marca)
        console.log("exportado de : "+this.exportado)
        console.log("precio (pesos) : $"+this.precio)
    }
}
    
//creacion de los objetos
const item1=new item("A13 (celular)","Samsung","EE.UU",50000)
const item2=new item("Licuadora","Philco","China",20000)
    
///mostrar los productos
item1.mostrar()
item2.mostrar()



///funcion por orden superior para multiplicar y dividir
function multiplicarOdividir(operador){
    if(operador=="multiplicar"){
        return(numero1,numero2)=>numero1*numero2
    }else if(operador=="dividir"){
        return(numero1,numero2)=>numero1/numero2
    }
}

///invocamos la funcion guardada en una variable
let multiplicar=multiplicarOdividir("multiplicar")
let dividir=multiplicarOdividir("dividir")
///pedimos numeros para multiplicar y dividir
let numero1=parseInt(prompt("Agregue un numero que quiera multiplicar"))
let numero2=parseInt(prompt("Agregue otro numero distinto si es necesario"))
//imprimimos las dos funciones
console.log(multiplicar(numero1,numero2))
console.log(dividir(numero1,numero2))



//creamos un array con un host imaginario, lo podemos utilizar para saltar de paginas a paginas 
let endpoint=["localhost","producto1","1"]
let resultado=endpoint.join("/")
console.log(resultado)


