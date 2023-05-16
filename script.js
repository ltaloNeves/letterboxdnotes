function calcularNota() {
    var nota = 5.0;
    
    var pausaCheckbox = document.getElementById("pausa");
    var entediadoCheckbox = document.getElementById("entediado");
    var assistirNovamenteCheckbox = document.getElementById("assistirNovamente");
    var efeitosCheckbox = document.getElementById("efeitos");
    var roteiroCheckbox = document.getElementById("roteiroBom");
    var ruimCheckbox = document.getElementById("ruim");
    var finalRuimCheckbox = document.getElementById("finalRuim");
    var marvelCheckbox = document.getElementById("marvel");
    
    if (pausaCheckbox.checked) {
        nota -= 0.5;
    }
    
    if (entediadoCheckbox.checked) {
        nota -= 1.0;
    }
    
    if (assistirNovamenteCheckbox.checked) {
        nota -= 0.5;
    }
    
    if (efeitosCheckbox.checked) {
        nota -= 0.5;
    }
    
    if (roteiroCheckbox.checked) {
        nota -= 0.5;
    }
    
    if (ruimCheckbox.checked) {
        nota -= 1.0;
    }
    
    if (finalRuimCheckbox.checked) {
        nota -= 0.5;
    }
    
    if (marvelCheckbox.checked) {
        nota -= 1.0;
    }
    
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "" + nota.toFixed(1);
}
