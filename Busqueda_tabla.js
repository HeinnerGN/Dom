function buscar() {
    const termino=document.getElementById('terminoBusqueda').value.toLowerCase();
    const tabla=document.getElementById('tabla');
    const filas=tabla.getElementsByTagName('tr');
    let contador = 0;

    document.getElementById('resultado').textContent = '';

    for (let i=1; i<filas.length; i++) {
        const celdas=filas[i].getElementsByTagName('td');
        let encontrado=false;

        for (let j=0; j<celdas.length; j++) {
            const textoCelda=celdas[j].textContent.toLowerCase();

            if (textoCelda.includes(termino)) {
                encontrado=true;
            }
        }

        if (encontrado) {
            filas[i].style.display='';
        } else {
            filas[i].style.display='none';
        }
    }

    const resultadoDiv = document.getElementById('resultado');
    if (contador > 0) {
        resultadoDiv.textContent = `Se encontraron ${contador} coincidencias.`;
    } else {
        resultadoDiv.textContent = 'No se encontraron coincidencias.';
    }
}
