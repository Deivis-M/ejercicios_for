function generarTablas() {
    let Usuario = document.getElementById("txtNumero");
    let contenedor = document.getElementById("tablasMultiplicar");
    let numero = Usuario.value;
    let contenido = "";
    for (let i = 0; i <= 12; i++) {
        let total = i * numero;
        contenido = contenido + "<li class='tabla-fila'><span class='operacion'>" +numero+ "×" +i+"</span><span class='resultado'>"+total+"</span></li>"
        contenedor.innerHTML = contenido;
    }
}