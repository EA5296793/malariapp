function calcular() {
    let parasitos = parseFloat(document.getElementById('parasitos').value);
    let leucocitosReales = parseFloat(document.getElementById('leucocitosReales').value);
    let alta = document.getElementById('altaParasitemia').checked;
    let recuento;

    if (isNaN(parasitos) || parasitos <= 0) {
        document.getElementById('resultado').innerHTML = "Ingrese un número válido de parásitos.";
        return;
    }

    if (alta) {
        // Fórmula para parasitemia muy alta
        if (isNaN(leucocitosReales) || leucocitosReales <= 0) {
            document.getElementById('resultado').innerHTML = "Ingrese el número real de leucocitos contados.";
            return;
        }
        recuento = (500 * 8000) / leucocitosReales;
    } else {
        // Reglas automáticas
        if (parasitos >= 10) {
            recuento = (parasitos * 8000) / 200;
        } else {
            recuento = (parasitos * 8000) / 500;
        }
    }

    document.getElementById('resultado').innerHTML =
        `Recuento: ${recuento.toFixed(2)} parásitos/µL`;
}