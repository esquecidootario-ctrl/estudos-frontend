// NÍVEL 1 – FÁCIL

function calcularDobro(numero) {
  return numero * 2;
}

console.log("=== NÍVEL 1 – FÁCIL ===");
console.log("1. Dobro de 8:", calcularDobro(8));

function calcularIdadeEmDias(idade) {
  return idade * 365;
}

console.log(`2. 20 anos em dias: ${calcularIdadeEmDias(20)} dias.`);

function calcularPagamento(valorProduto, quantidade) {
  return valorProduto * quantidade;
}

console.log(`3. Total da compra: R$ ${calcularPagamento(25, 4).toFixed(2)}`);


// NÍVEL 2 – MEDIANO

function calcularIMC(peso, altura) {
  const imc = peso / (altura * altura);
  return Number(imc.toFixed(2));
}

console.log("\n=== NÍVEL 2 – MEDIANO ===");
console.log("4. IMC (70kg, 1.75m):", calcularIMC(70, 1.75));

function calcularComissao(totalVendido, porcentagem) {
  return totalVendido * (porcentagem / 100);
}

console.log(`5. Comissão (5% de R$ 5000): R$ ${calcularComissao(5000, 5).toFixed(2)}`);

function converterMinutos(totalMinutos) {
  const horas = Math.floor(totalMinutos / 60);
  const minutosRestantes = totalMinutos % 60;
  return `${horas} horas e ${minutosRestantes} minutos.`;
}

console.log("6. 150 minutos:", converterMinutos(150));


// NÍVEL 3 – DESAFIOS DE LÓGICA

function verificarNumero(numero) {
  if (numero > 0) {
    return "Positivo";
  } else if (numero < 0) {
    return "Negativo";
  } else {
    return "Igual a zero";
  }
}

console.log("\n=== NÍVEL 3 – DESAFIOS DE LÓGICA ===");
console.log("7. Verificando 10:", verificarNumero(10));
console.log("7. Verificando -5:", verificarNumero(-5));
console.log("7. Verificando 0:", verificarNumero(0));

function calculadora(num1, num2, operacao) {
  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Erro: Não é possível dividir por zero.";
      }
      return num1 / num2;
    default:
      return "Operação inválida.";
  }
}

console.log("8. Calculadora (10 + 5):", calculadora(10, 5, "+"));
console.log("8. Calculadora (10 / 0):", calculadora(10, 0, "/"));

function contarPares(limite) {
  let contador = 0;

  for (let i = 1; i <= limite; i++) {
    if (i % 2 === 0) {
      contador++;
    }
  }

  return contador;
}

console.log(`9. Quantidade de pares até 10: ${contarPares(10)} números pares.`);

function gerarTabuada(numero, limite = 10) {
  console.log(`\nTabuada do ${numero} até ${limite}:`);
  let linhas = [];

  for (let i = 1; i <= limite; i++) {
    const linha = `${numero} x ${i} = ${numero * i}`;
    console.log(linha);
    linhas.push(linha);
  }

  return linhas;
}

const tabuadaCinco = gerarTabuada(5);
const tabuadaSete = gerarTabuada(7, 5);

if (typeof document !== "undefined") {
  document.getElementById("resultados-nivel1").innerHTML = `
    <article>
      <h3>1. Calculadora de Dobro</h3>
      <p><strong>Entrada:</strong> 8 | <strong>Saída:</strong> ${calcularDobro(8)}</p>
    </article>
    <article>
      <h3>2. Conversor de Idade</h3>
      <p><strong>Entrada:</strong> 20 anos | <strong>Saída:</strong> ${calcularIdadeEmDias(20)} dias</p>
    </article>
    <article>
      <h3>3. Calculadora de Pagamento</h3>
      <p><strong>Produto:</strong> R$ 25,00 (4 un.) | <strong>Total:</strong> R$ ${calcularPagamento(25, 4).toFixed(2)}</p>
    </article>
  `;

  document.getElementById("resultados-nivel2").innerHTML = `
    <article>
      <h3>4. Calculadora de IMC</h3>
      <p><strong>Peso:</strong> 70 kg, <strong>Altura:</strong> 1.75 m | <strong>IMC:</strong> ${calcularIMC(70, 1.75)}</p>
    </article>
    <article>
      <h3>5. Calculadora de Comissão</h3>
      <p><strong>Vendido:</strong> R$ 5.000,00 (5%) | <strong>Comissão:</strong> R$ ${calcularComissao(5000, 5).toFixed(2)}</p>
    </article>
    <article>
      <h3>6. Calculadora de Tempo</h3>
      <p><strong>Entrada:</strong> 150 minutos | <strong>Resultado:</strong> ${converterMinutos(150)}</p>
    </article>
  `;

  document.getElementById("resultados-nivel3").innerHTML = `
    <article>
      <h3>7. Verificador de Números</h3>
      <ul>
        <li><strong>10:</strong> ${verificarNumero(10)}</li>
        <li><strong>-5:</strong> ${verificarNumero(-5)}</li>
        <li><strong>0:</strong> ${verificarNumero(0)}</li>
      </ul>
    </article>
    <article>
      <h3>8. Simulador de Calculadora</h3>
      <ul>
        <li><strong>10 + 5:</strong> ${calculadora(10, 5, "+")}</li>
        <li><strong>10 / 0:</strong> ${calculadora(10, 0, "/")}</li>
      </ul>
    </article>
    <article>
      <h3>9. Contador de Números Pares</h3>
      <p><strong>Até 10:</strong> ${contarPares(10)} números pares</p>
    </article>
    <article>
      <h3>10. Sistema de Tabuada</h3>
      <p><strong>Tabuada do 5 (até 10):</strong></p>
      <ul>${tabuadaCinco.map((item) => `<li>${item}</li>`).join("")}</ul>
      <p><strong>Desafio adicional — Tabuada do 7 (até 5):</strong></p>
      <ul>${tabuadaSete.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `;
}
