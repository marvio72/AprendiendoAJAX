var btnCargar = document.getElementById('cargar');

function cargarContenidoAjax() {
   // Crear nuestro xmlhttprequest
   var xhr = new XMLHttpRequest();

   // Abrimos la conexion
   xhr.open("GET", "servidor.php", true);
   xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
         var json = JSON.parse(xhr.responseText); 
         var contenido = document.getElementById('contenido');
         contenido.innerHTML = json.fullstack;
      }
   }

   xhr.send();
}

btnCargar.addEventListener('click', cargarContenidoAjax);


