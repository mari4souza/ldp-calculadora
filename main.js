let display = document.querySelector('.resultado');
let expressao = '';

window.adicionarDigito = function(digito) {
    expressao += digito;
    atualizarDisplay();
}

window.adicionarOperador = function(operador) {
    expressao += operador;
    atualizarDisplay();
}

window.atualizarDisplay = function() {
    display.textContent = expressao;
}

window.limpar = function() {
    expressao = '';
    atualizarDisplay();
}

window.calcular = function() {
    try {
        let resultado = eval(expressao);
        expressao = resultado.toString();
        atualizarDisplay();
    } catch (error) {
        display.textContent = 'Erro';
        expressao = '';
    }
}
