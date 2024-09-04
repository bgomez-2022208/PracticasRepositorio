function Palindromo(cadena){
    let limpiarCadena = cadena.toLowerCase().replace(/\s+/g, "");
    let array = limpiarCadena.split("");
    let reverse = array.reverse();
    let cadenaAlrevez = reverse.join("");
    if (limpiarCadena === cadenaAlrevez) {
        return "Es una palabra palíndroma";
    } else {
        return "No es una palabra palíndroma";
    }
    
}

console.log(Palindromo("Anita lava la tina"));

// resumen de mi codigo cree una funcion tipo cadena el primer let convierte las letras a minusculas y elimina espacios, la 3 covierte la cadena en un array de caracteres
// la 4 invierte el array 5 une el array invertido en una cadena y de de ultimo compara las cadenas.