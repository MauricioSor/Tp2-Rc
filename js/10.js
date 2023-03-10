let fil=parseInt(prompt("Ingrese el numero de filas:"));
let col=parseInt(prompt("Ingrese el numero de columnas:"));
let num= fil*col;
document.write('<table><tbody>');

for(let i=0;i<fil;i++){
    document.write("<tr>");
    for(let j=0;j<fil;j++){
        document.write('<td>'+num+'<td>');
        num--
    }
    document.write("<tr>");
}
