function validarDni(inputDni){
    var letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dniPatron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = inputDni.toString().toUpperCase();
    
    if (!dniPatron.test(str)) return false;

    var dni = str
    var letra = str.substr(-1);
    var posicionLetras = parseInt(dni.substr(0, 8)) % 23;

    if (letrasValidas.charAt(posicionLetras) === letra) return true;

    return false;
}