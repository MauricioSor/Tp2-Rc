const cadena = [prompt("Ingrese una cadena: ")];
console.log(typeof(cadena));
while(confirm("Presione cancelar para terminar")!== false){
    cadena.push (prompt("Ingrese una cadena: "));
}
    document.write(cadena);

