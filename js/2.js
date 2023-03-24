let nota = parseInt(prompt("Ingrese el numero de nota: "))
alert(`
Rangos de nota :
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente`);
if(nota>=0 && nota<11){
switch (nota){
    case 0:
    case 1:
    case 2:
    document.write("Muy deficiente");
    break;
    case 3:
    case 4:
    document.write("Insuficiente");
    break;
    case 5:
    case 6:
        document.write("Suficiente");
    break;
    case 7:
        document.write("Bien");
    break;
    case 8:
    case 9:
        document.write("Notable");
    break;
    case 10:
        document.write("Sobresaliente");
    break;
}
}else{
    document.write("Número erróneo.  ");
}if(nota>100){
    document.write("Introduce un numero valido");
}