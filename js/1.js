let edad= parseInt(prompt("Ingrese su edad: "))
if(edad!==0 && edad<100){
if(edad>=18){
document.write("Puedes conducir");
}else{
document.write("No puedes conducir");
}
}else{
    document.write("Edad invalida");
}
