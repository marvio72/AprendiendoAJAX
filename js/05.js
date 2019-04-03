var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
   // Crear nuestro xmlhttprequest
   var xhr = new XMLHttpRequest();

   // Abrimos la conexion
   xhr.open("GET", "texto_prueba.txt", true);
   xhr.onreadystatechange = function() {
       if(xhr.readyState == 4 && xhr.status == 200) {
          var contenido = document.getElementById('contenido');
          contenido.innerHTML = xhr.responseText;
       }  
   }

   xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);
