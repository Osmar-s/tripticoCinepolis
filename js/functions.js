/* AQUI SE CREAN LAS VARIABLES */
const d = document, btnCrearEncabezado = d.getElementById("btnCrearEncabezado"), contenedorHorarios = d.getElementById("horarios");

let contadorTabla = 0;

/* AQUI VAN LOS LLAMADOS DE LOS BOTONES */

btnCrearEncabezado.addEventListener("click",crearEncabezado);

/*AQUI VAN LAS FUNCIONES */

function crearEncabezado(){
    let horarios = d.getElementsByClassName("horarios");
    if(horarios.length == 0){
        contadorTabla++;
        contenedorHorarios.insertAdjacentHTML('beforeend',
        `
            <table id="horarios${contadorTabla}">
                <thead>
                    <tr>
                        <td colspan="9" class="headerTable">
                            <input type="text" placeholder="INGRESAR FECHA DE LA SEMANA: EJEMPLO Jueves 28 de marzo al miercoles 03 de abril">
                        </td>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
            <button id="btnCrearFila${contadorTabla}" onClick="crearFila(horarios${contadorTabla})" class="abc">Crear Fila Tabla #${contadorTabla}</button>
        `);
    }
}

function crearFila(tablaCrearFila){
    let columnas = parseInt(prompt("¿Cuantos horarios vas a ingresar?"));
    tablaCrearFila.children[1].insertAdjacentHTML('beforeend',crearColumnas(columnas));
}

function crearColumnas(cantidadColumnas){
    let columna;
    if(cantidadColumnas <= 8){
        columna = `<tr>
                    <td style="width:50px">
                        <select class="clasificaciones">
                            <option>DOB MACROXE</option>
                            <option>SUB MACROXE</option>
                            <option>DOB 3D MACROXE</option>
                            <option>SUB 3D MACROXE</option>
                            <option>DOB</option>
                            <option>SUB</option>
                            <option>DOB 3D</option>
                            <option>SUB 3D</option>
                            <option>DOB JUNIOR</option>
                            <option>SUB JUNIOR</option>
                            <option>DOB 3D JUNIOR</option>
                            <option>SUB 3D JUNIOR</option>
                            <option>ESP</option>
                        </select>
                    </td>`;
        for(let i = 1; i <= 8; i++){
            columna += `<td><input type="text"></td>`;
        }
        columna += "</tr>";
    }else{
        columna = `<tr>
                    <td rowspan="2" style="width:50px">
                        <select class="clasificaciones">
                            <option>DOB MACROXE</option>
                            <option>SUB MACROXE</option>
                            <option>DOB 3D MACROXE</option>
                            <option>SUB 3D MACROXE</option>
                            <option>DOB</option>
                            <option>SUB</option>
                            <option>DOB 3D</option>
                            <option>SUB 3D</option>
                            <option>DOB JUNIOR</option>
                            <option>SUB JUNIOR</option>
                            <option>DOB 3D JUNIOR</option>
                            <option>SUB 3D JUNIOR</option>
                            <option>ESP</option>
                        </select>
                    </td>`;
        for(let i = 1; i <= 8; i++){
            columna += `<td><input type="text"></td>`;
        }
        columna += "</tr><tr>";
        for(let i = 1; i <= 8; i++){
            columna += `<td><input type="text"></td>`;
        }
        columna += "</tr>";
    }
    return columna;
}

/* CODIGO PARA BUSCAR LA IMAGEN*/
function seleccionarImagen() {
    document.getElementById('inputImagen').click();
  }
  
  document.getElementById('inputImagen').addEventListener('change', function() {
    var archivo = this.files[0];
    if (archivo) {
      var lector = new FileReader();
      lector.onload = function(e) {
        document.getElementById('imagenSeleccionada').setAttribute('src', e.target.result);
      }
      lector.readAsDataURL(archivo);
    }
  });



/* CODIGO PARA IMPRIMIR */
function imprimir() {
    window.print();
}
