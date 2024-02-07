// Função para aplicar desconto de 10% nas quartas-feiras
function aplicarDesconto(valorTotal, diaDaSemana) {
  if (diaDaSemana === 1) { // 1 representa segunda-feira
      return valorTotal * 0.95; // Aplica desconto de 5%
  } else if (diaDaSemana === 3) { // 3 representa quarta-feira
      return valorTotal * 0.9; // Aplica desconto de 10%
  } else {
      return valorTotal; // Sem desconto
  }
}

document.getElementById('compraForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const nomeCliente = document.getElementById('nomeCliente').value;
  const diaSemana = parseInt(document.getElementById('diaSemana').value);
  const carneBoi = parseFloat(document.getElementById('carneBoi').value);
  const carneFrango = parseFloat(document.getElementById('carneFrango').value);
  const linguica = parseFloat(document.getElementById('linguica').value);

  const valorTotal = (carneBoi * 25) + (carneFrango * 15) + (linguica * 20);

  const valorFinal = aplicarDesconto(valorTotal, diaSemana);

  document.getElementById('resultado').innerHTML = `<p>Cliente: ${nomeCliente}</p>
                                                    <p>Valor Total da Compra: R$ ${valorFinal.toFixed(2)}</p>`;
});

function exemplo() {
  const dias = document.getElementById('dias').value;
  let total = 1; // Fator de multiplicação do desconto, padrão sem desconto

  if (dias === '3') { // Se for quarta-feira
      total = 0.9; // Aplica desconto de 10%
  }

  const LING = 20;
  const frang = 15;
  const boi = 25;
  const suino = 30;

  const maria = (LING * 1) + (frang * 2) + (suino * 3);
  const joao = (LING * 1) + (frang * 1) + (boi * 2);

  document.getElementById('resultado2').innerHTML = `<p> João tem que pagar  ${joao * total}</p>
                                                     <p> Maria tem que pagar ${maria * total}</p>`;
}