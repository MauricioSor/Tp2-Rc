let suma=0;
while(confirm("Presione cancelar para detener")!=false){
    let num = parseInt(prompt("Ingrese numeros"));
    if(typeof(num)!='number'){
        alert("el dato ingresado no es un numero, ingrese un umero");
    }else{
        suma=suma+num;
    }
}
document.write(suma);