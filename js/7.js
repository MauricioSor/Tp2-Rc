let num= parseInt(prompt("Ingrese numero:"));
var piramide
for(let i=num;i>=1;i--){
    document.write("<br>");
    piramide=i;
    for(let j=i;j>0;j--){
    document.write(piramide);
    }
}