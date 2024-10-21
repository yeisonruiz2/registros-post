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

