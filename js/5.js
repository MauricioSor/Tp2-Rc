while(confirm("Presione cancelar para detener")!=false){
let num = parseInt(prompt("Ingrese una cadea de numeros: "));
let rest = 0
if (num >= 0 && num<=99999999) {
    rest = num %23;
    switch (rest) {
        case 0:
            document.write("<br>Le corresponde la letrea T");
            break;
        case 1:
            document.write("<br>Le corresponde la letrea R");
            break;
        case 2:
            document.write("<br>Le corresponde la letrea W");
            break;
        case 3:
            document.write("<br>Le corresponde la letrea A");
            break;
        case 4:
            document.write("Le corresponde la letrea G");
            break;
        case 5:
            document.write("<br>Le corresponde la letrea M");
            break;
        case 6:
            document.write("<br>Le corresponde la letrea Y");
            break;
        case 7:
            document.write("<br>Le corresponde la letrea F");
            break;
        case 8:
            document.write("<br>Le corresponde la letrea P");
            break;
        case 9:
            document.write("<br>Le corresponde la letrea D");
            break;
        case 10:
            document.write("<br>Le corresponde la letrea X");
            break;
        case 11:
            document.write("<br>Le corresponde la letrea B");
            break;
        case 12:
            document.write("<br>Le corresponde la letrea N");
            break;
        case 13:
            document.write("<br>Le corresponde la letrea J");
            break;
        case 14:
            document.write("<br>Le corresponde la letrea Z");
            break;
        case 15:
            document.write("<br>Le corresponde la letrea S");
            break;
        case 16:
            document.write("<br>Le corresponde la letrea Q");
            break;
        case 17:
            document.write("<br>Le corresponde la letrea V");
            break;
        case 18:
            document.write("<br>Le corresponde la letrea H");
            break;
        case 19:
            document.write("<br>Le corresponde la letrea L");
            break;
        case 20:
            document.write("<br>Le corresponde la letrea C");
            break;
        case 21:
            document.write("<br>Le corresponde la letrea K");
            break;
        case 22:
            document.write("<br>Le corresponde la letrea E");
            break;
    }
}else{
    document.write("<br>El numero ingresado es invalido");
}
}

