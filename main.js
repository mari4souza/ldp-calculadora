let display = document.querySelector('.resultado');
let expressao = '';

// Definindo os botões e suas funções associadas
const botoes = [
    { id: 'btn0', value: '0', tipo: 'digito' },
    { id: 'btn1', value: '1', tipo: 'digito' },
    { id: 'btn2', value: '2', tipo: 'digito' },
    { id: 'btn3', value: '3', tipo: 'digito' },
    { id: 'btn4', value: '4', tipo: 'digito' },
    { id: 'btn5', value: '5', tipo: 'digito' },
    { id: 'btn6', value: '6', tipo: 'digito' },
    { id: 'btn7', value: '7', tipo: 'digito' },
    { id: 'btn8', value: '8', tipo: 'digito' },
    { id: 'btn9', value: '9', tipo: 'digito' },
    { id: 'btnSoma', value: '+', tipo: 'operador' },
    { id: 'btnSubtracao', value: '-', tipo: 'operador' },
    { id: 'btnMultiplicacao', value: '*', tipo: 'operador' },
    { id: 'btnDivisao', value: '/', tipo: 'operador' },
    { id: 'btnLimpar', value: 'C', tipo: 'limpar' },
    { id: 'btnIgual', value: '=', tipo: 'calcular' }
];

// Adicionando os eventos aos botões
botoes.forEach(botao => {
    document.getElementById(botao.id).addEventListener('click', () => {
        if (botao.tipo === 'digito') {
            adicionarDigito(botao.value);
        } else if (botao.tipo === 'operador') {
            adicionarOperador(botao.value);
        } else if (botao.tipo === 'limpar') {
            limpar();
        } else if (botao.tipo === 'calcular') {
            calcular();
        }
    });
});

function adicionarDigito(digito) {
    expressao += digito;
    atualizarDisplay();
}

function adicionarOperador(operador) {
    expressao += operador;
    atualizarDisplay();
}

function atualizarDisplay() {
    display.textContent = expressao;
}

function limpar() {
    expressao = '';
    atualizarDisplay();
}

function calcular() {
    try {
        let resultado = eval(expressao);
        expressao = resultado.toString();
        atualizarDisplay();
    } catch (error) {
        display.textContent = 'Erro';
        expressao = '';
    }
}
