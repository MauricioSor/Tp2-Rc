let text = prompt("Ingrese texto");
let cont = 0;
for (let i = 0; i < text.length; i++) {
    if (text.charAt(i)=="a") {
        cont++
    }
    if (text.charAt(i)=="e") {
        cont++
    }
    if (text.charAt(i)=="i") {
        cont++
    }
    if (text.charAt(i)=="o") {
        cont++
    }
    if (text.charAt(i)=="u") {
        cont++
    }
}
document.write("Hay "+cont+" vocales");