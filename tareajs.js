//TAREA. crear el codigo que dada una distancia determine el medio de tranporte de  acuerdo a las siguientes reglas


// usando if... else flujo
let distance = true

if (distance < 1000) {
    return ('pie');
}   else if (distance > 1000) && (distance < 10000) {
    return ('bicicleta');
}   else if (distance > 10000) && (distance < 30000) {
    return ('colectivo');
}   else if (distance > 30000) && (distance < 100000) {
    return ('auto');
}   else if (distance > 100000) {  // sino tambien podria poner  } else { retur ('avion')}
    return ('avion')
};


//usando switch statments

switch (distance) {
    case distance > 1000 && distance < 10000
        return ('pie')
        break;
            case distance > 10000 && distance < 30000
        return ('bicicleta')
        break;
    case distance > 10000 && distance < 30000
        return ('colectivo')
        break;
    case distance > 30000 && distance < 100000
        return ('auto')
        break;
    case distance > 100000
        return ('avion')
        break;
}



// crear el codigo que reciba como paramentro un array de numeros y devuelva el mayor

let numeros = [3, 7, 12, 34, 76, 156]