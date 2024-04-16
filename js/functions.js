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


/* CODIGO PARA SELECCIONAR LA IMAGEN */
let seleccionarImagen = d.getElementsByClassName("contenedorImg");

seleccionarImagen[0].addEventListener("click",()=>{
    let urlImg = prompt("Ingresar la URL de la imagen");
    d.getElementById("imagenSeleccionada").src = urlImg;
});




/* CODIGO PARA IMPRIMIR */
function imprimir() {
    window.print();
}

var customSelects = document.querySelectorAll('.custom-select');
    customSelects.forEach(function(select) {
        var selectSelected = select.querySelector('.select-selected');
        var selectItems = select.querySelector('.select-items');
        var options = select.querySelectorAll('.select-items div');

        selectSelected.addEventListener('click', function() {
            selectItems.style.display = 'block';
        });

        options.forEach(function(option) {
            option.addEventListener('click', function() {
                selectSelected.textContent = this.textContent;
                selectItems.style.display = 'none';
            });
        });

        document.addEventListener('click', function(e) {
            if (!select.contains(e.target)) {
                selectItems.style.display = 'none';
            }
        });
    });
