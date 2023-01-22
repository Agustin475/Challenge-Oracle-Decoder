// Al iniciar hace foco en el Texto de Entrada
$nombre = document.querySelector("#textoEncriptado");
$nombre.focus();

// Funcion que muestra imagenes al inicio de la pagina web
function inicio(){
    var div = document.getElementById("logoChallenges");                      
    div.style.display = "block";                                           
    setTimeout(function() {
        div.style.display = "none";
        var div2 = document.getElementById("titulo");                      
        div2.style.display = "block";
        setTimeout(function() {
            div2.style.display = "none";
        }, 3000);
    }, 3000);
}

// Funcion para hacer que el fondo del body se mueva con el movimiento del mouse
function fondoConMovimiento(){
    document.addEventListener('mousemove', function(event) {
        var x = event.clientX * 0.1;
        var y = event.clientY * 0.1;
        document.body.style.backgroundPosition = -x + 'px ' + -y + 'px';
    });
}

// Código a ejecutar cuando la página web haya sido cargada completamente
window.onload = function() {
    inicio();
    fondoConMovimiento();
};

// Funcion para Animacion de sacudida horizontal en el TextArea
function animacionSacudida(){
    setTimeout(function() {                                                                
        document.getElementById("textoEncriptado").style.transform="translateX(-50px)";         
        setTimeout(function() {
            document.getElementById("textoEncriptado").style.transform="translateX(+50px)";
            setTimeout(function() {
                document.getElementById("textoEncriptado").style.transform="translateX(0px)";
            }, 100);
        }, 100);
    }, 100);
}

// Funcion, recibe parametro frase texto y lo Encripta
function encriptarTexto(frase){                                               // recibe parametro frase texto
    var textoEncriptado = frase.replace(/e/img, "enter");                     // i= letas mayus y minus, m= multi lineas, g= toda la oracion
    textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    textoEncriptado = textoEncriptado.replace(/u/img, "ufat");
    return textoEncriptado;                                                   // retorna el texto encriptado
}

// Funcion para ocultar imagenes de la columna 2 y muestra el mensaje Encriptado
function ocultar(){
    document.getElementById("imgSalida").style.display="none";                // Oculta imagen
    document.getElementById("msg1").style.display="none";                     // Oculta mensaje 1
    document.getElementById("msg2").style.display="none";                     // Oculta mensaje 2
    document.getElementById("textoDesencriptado").style.display="inherit";    // Muestra texto desencriptado
    document.getElementById("botonCopiar").style.display="inherit";           // Muestra boton copiar  
}

// Funcion que muestra el icono de Candado Cerrado
function animacionCandadoCerrado(){
    var div = document.getElementById("candadoCerrado");                      // Muestra imagen de candado cerrado
    div.style.display = "block";                                              
    div.style.opacity = "100%";
    setTimeout(function() {
        div.style.opacity = "0%";                                             // Hace Transparente la imagen
        div.style.transition = "all 1s";                                      // Animacion de 1 Segundo
        setTimeout(function() {
            div.style.display = "none";                                       
        }, 1000);                                                             // 1 segundo
    }, 1000);   
}

// Funcion para encriptar el mensaje
function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();                // Guarda el mensaje en minuscula en la var. frase 
    if(frase == ""){                                                                           // Si no escribio nada avisar
        $nombre.focus();                                                                       // Ubica el foco en textoEncriptado
        animacionSacudida();
    }else{                                                                        // Si frase tiene contenido replazar bocales
        var textoEncriptado = encriptarTexto(frase);
        ocultar();                                                                // Oculta imagenes de la columna 2 y muestra el mensaje Encriptado
        document.getElementById("textoDesencriptado").innerHTML=textoEncriptado;  // Envia el resultado a textoEncriptado
        animacionCandadoCerrado();
        $nombre.focus();
    }					
}


// Asigno la funcion encriptar() a el boton Encriptar
var btn = document.querySelector("#botonEncriptado");
btn.onclick = function() {
    encriptar();
}

// Funcion, recibe parametro frase texto y lo Desencripta
function desencriptarTexto(frase){
    var textoDesencriptado = frase.replace(/enter/img, "e");                       
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/ufat/img, "u");
    return textoDesencriptado;
}

// Funcion que muestra el icono de Candado Abierto
function animacionCandadoAbierto(){
    var div = document.getElementById("candadoAbierto");                      
    div.style.display = "block";
    div.style.opacity = "100%";
    setTimeout(function() {
        div.style.opacity = "0%";
        div.style.transition = "all 1s";
        setTimeout(function() {
            div.style.display = "none";
        }, 1000);                                                           
    }, 1000);
}

// Funcion para desencriptar el codigo 
function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    if(frase == ""){                                                                           
        $nombre.focus();
        animacionSacudida();
    }else{
        var textoDesencriptado = desencriptarTexto(frase);
        ocultar();
        document.getElementById("textoDesencriptado").innerHTML=textoDesencriptado;  
        animacionCandadoAbierto();
        $nombre.focus();
    }					
}

// Asigno la funcion desencriptar() a el boton Desencriptar
var btn2 = document.querySelector("#botonDesencriptado");
btn2.onclick = function() {
    desencriptar();
}

// Funcion que muestra el icono de copiar
function animacionCopiar(){
    var div = document.getElementById("copiado");                              
    div.style.display = "block";
    div.style.opacity = "100%";
    setTimeout(function() {
        div.style.opacity = "0%";
        div.style.transition = "all 1s";
        setTimeout(function() {
            div.style.display = "none";
        }, 1000);                                                             
    }, 1000); 						
}

// Funcion para copiar el texto 
async function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    try {
        await navigator.clipboard.writeText(contenido.textContent);
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
    $nombre.focus();
    animacionCopiar();	
}

// Asigno la funcion copiar() a el boton Copiar
var btn3 = document.querySelector("#botonCopiar");
btn3.onclick = function() {
    copiar();
}

