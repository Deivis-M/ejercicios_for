function generarTablas() {
    let contenedor = document.getElementById("tablasMultiplicar");
    contenedor.innerHTML = "<h1>PROBANDO</h1>";
    let numero = 8;
    let contenido = "";
    for (let i = 0; i <= 12; i++) {
        let total = i * numero;
        contenido = contenido + "<li class='tabla-fila'><span class='operacion'>" +numero+ "×" +i+"</span><span class='resultado'>"+total+"</span></li>"
        contenedor.innerHTML = contenido;
    }
}