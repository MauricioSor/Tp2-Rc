let edad1 = parseInt(prompt("Ingrese edad de la persona 1"));
let nombre1 = prompt("Ingrese nombre de la persona 1");
let edad2 = parseInt(prompt("Ingrese edad de la persona 2"));
let nombre2 = prompt("Ingrese nombre de la persona 2");
let edad3 = parseInt(prompt("Ingrese edad de la persona 3"));
let nombre3 = prompt("Ingrese nombre de la persona 3");
document.write('El mas viejo es: ');
switch (Math.max(edad1,edad2,edad3)){
    case edad1:
        document.write(nombre1);
        break;
    case edad2:
        document.write(nombre2);
        break;
    case edad3:
        document.write(nombre3);
        break;
}
