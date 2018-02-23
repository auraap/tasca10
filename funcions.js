function validarDni(inputDni){
    /* Letras que puede contener el DNI */
    var letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKET';
    /* Patrón de cualquier DNI */
    var dniPatron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    /* 
    * Creamos una variable "str" 
    * para que contenga el DNI en string y en mayusculas
    * Esto nos facilitará la comprobación del dni
    */
    var str = inputDni.toString().toUpperCase();

    /* Si no se encuentran elementos del dniPatron en el str se devolverá false */
    if (!dniPatron.test(str)) return false;

    var dni = str
    var letra = str.substr(-1);
    var posicionLetras = parseInt(dni.substr(0, 8)) % 23;

    /* Se mira que para la combinación de numeros, el DNI contenga la letra correcta */
    if (letrasValidas.charAt(posicionLetras) === letra) return true;

    return false;
}