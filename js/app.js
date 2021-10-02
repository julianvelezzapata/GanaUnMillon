escogerPregunta(0)
function escogerPregunta(n) {
    //guarda en la variable baseDatos la informacion completa en formato jso
    let baseDatosJson =leerJson("json/baseDatos.json")
    //  creo una variable que funcionará como interprete de la base de Datos
    let interpreteBd = JSON.parse(baseDatosJson)
    // en la pregunta se le coloca se le asigna la posicion n en el formato json
    pregunta = interpreteBd[n]
    //traigo los objetos del json que contiene la informacion pertinente
    select_id("categoria").innerHTML = pregunta.categoria
    select_id("pregunta").innerHTML = pregunta.pregunta
    select_id("imagen").setAttribute("src",pregunta.imagen)
    select_id("btn1").innerHTML = pregunta.respuesta
    select_id("btn2").innerHTML = pregunta.respuestaincorrecta1
    select_id("btn3").innerHTML = pregunta.respuestaincorrecta2
    select_id("btn4").innerHTML = pregunta.respuestaincorrecta3


    
}

        // seleccionar objeto segun id
        function select_id(id) {
        return document.getElementById(id)
        }
        // seleccionar el estilo de un objeto segun su id
       /* function style(id) {
        return select_id(id).style
        }*/
        // para leer el json en la ruta local funcion sincronica
        function leerJson(ruta_local) {
        var texto = null;
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", ruta_local, false);
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            texto = xmlhttp.responseText;
        }
        return texto;
        }
