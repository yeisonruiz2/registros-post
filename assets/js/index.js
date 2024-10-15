fetch('data/taller.json')
    .then(response => response.json())
    .then(data => {
         console.log(data);

         const tituloPagina = document.getElementById('titulo_pagina');
         tituloPagina.innerHTML = data.titulo_pagina;
  
         const registros = data.registros;
         console.log(registros);
 
         let registrosHTML = '';
         for(i = 0; i < registros.length; i++) {
             console.log(registros[i].Id);
             registrosHTML += `<tr>
                 <td>${registros[i].id}</td>
                 <td>${registros[i].title}</td>
                 <td>${registros[i].body}</td>
             </tr>`;
         }


        const tablaregistros = document.getElementById('registros');
        tablaregistros.innerHTML = registrosHTML;
    })

    function buscar() {
        const idBuscado = document.getElementById('buscando').value;

        fetch('data/taller.json')
            .then(response => response.json())
            .then(data => {
                console.log("Entra aqui");
                const registro = data.registros.find(item => item.id === parseInt(idBuscado));

                // Mostrar el resultado o un mensaje si no se encontró
                const resultadoDiv = document.getElementById('resultado');
                if (registro) {
                    resultadoDiv.innerHTML = `
                        <p><strong>ID:</strong> ${registro.id}</p>
                        <p><strong>Título:</strong> ${registro.title}</p>
                        <p><strong>Descripción:</strong> ${registro.body}</p>
                    `;
                } else {
                    resultadoDiv.innerHTML = '<p>No se encontró ningún registro con ese ID.</p>';
                }
            })
            .catch(error => console.error('Error al cargar el JSON:', error));
    }

    // Seleccionamos los elementos necesarios
const comentarioJson = document.getElementById('comentarioJson');
const editorJson = document.getElementById('editorJson');

// Cargar el contenido del comentario JSON en el textarea al iniciar
window.onload = () => {
  const contenidoComentario = comentarioJson.textContent
    .trim()
    .slice(4, -3); // Quitar <!-- y -->
  editorJson.value = contenidoComentario;
};

// Función para guardar la edición y actualizar el comentario
function guardarEdicion() {
  const nuevoJson = editorJson.value.trim();
  try {
    // Validar si el contenido es un JSON válido
    JSON.parse(nuevoJson);
    comentarioJson.textContent = `<!-- ${nuevoJson} -->`;
    alert('Registro guardado correctamente.');
  } catch (error) {
    alert('JSON inválido, revisa la sintaxis.');
  }

}

// Registro JSON (puede venir de cualquier fuente)
const registro = {
    "userId": 9,
    "id": 87,
    "title": "nostrum quis quasi placeat",
    "body": "eos et molestiae nesciunt ut a dolores perspiciatis repellendus repellat aliquid magnam sint rem ipsum est"
  };
  
  // Función para mostrar el registro en la card
  window.onload = () => {
    document.getElementById('userId').textContent = registro.userId;
    document.getElementById('title').textContent = registro.title;
    document.getElementById('body').textContent = registro.body;
  };