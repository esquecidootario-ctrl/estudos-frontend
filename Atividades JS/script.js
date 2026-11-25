// EXERCÍCIO 1: SISTEMA DE FUNCIONÁRIOS

class Funcionario {
  #salario;

  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.#salario = salario;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e trabalho como ${this.cargo}.`;
  }

  calcularBonus() {
    return this.#salario * 0.10;
  }

  verSalario() {
    return this.#salario;
  }

  aumentarSalario(valor) {
    if (valor > 0) {
      this.#salario += valor;
      console.log(`Salário de ${this.nome} aumentado em R$ ${valor.toFixed(2)}.`);
    } else {
      console.log("O valor de aumento deve ser positivo.");
    }
  }
}

class Desenvolvedor extends Funcionario {
  constructor(nome, salario, linguagem) {
    super(nome, "Desenvolvedor(a)", salario);
    this.linguagem = linguagem;
  }

  apresentar() {
    return `${super.apresentar()} Minha principal linguagem é ${this.linguagem}.`;
  }

  calcularBonus() {
    return this.verSalario() * 0.20;
  }
}

class Designer extends Funcionario {
  constructor(nome, salario, ferramenta) {
    super(nome, "Designer", salario);
    this.ferramenta = ferramenta;
  }

  apresentar() {
    return `${super.apresentar()} Uso principalmente o ${this.ferramenta}.`;
  }

  calcularBonus() {
    return this.verSalario() * 0.15;
  }
}

console.log("=== SISTEMA DE FUNCIONÁRIOS ===\n");

const dev = new Desenvolvedor("Lucas Silva", 6500, "JavaScript");
const designer = new Designer("Mariana Costa", 5000, "Figma");

console.log(dev.apresentar());
console.log(`Salário atual: R$ ${dev.verSalario().toFixed(2)}`);
console.log(`Bônus calculado: R$ ${dev.calcularBonus().toFixed(2)}\n`);

console.log(designer.apresentar());
console.log(`Salário atual: R$ ${designer.verSalario().toFixed(2)}`);
console.log(`Bônus calculado: R$ ${designer.calcularBonus().toFixed(2)}\n`);

dev.aumentarSalario(500);
console.log(`Novo salário de ${dev.nome}: R$ ${dev.verSalario().toFixed(2)}`);


// EXERCÍCIO 2: SISTEMA DE LOCADORA DE VEÍCULOS

class Veiculo {
  #diaria;

  constructor(marca, modelo, diaria) {
    this.marca = marca;
    this.modelo = modelo;
    this.#diaria = diaria;
  }

  getDiaria() {
    return this.#diaria;
  }

  descricao() {
    return `${this.marca} ${this.modelo} - Diária base: R$ ${this.#diaria.toFixed(2)}`;
  }

  calcularAluguel(dias) {
    return this.#diaria * dias;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, diaria, portas) {
    super(marca, modelo, diaria);
    this.portas = portas;
  }

  descricao() {
    return `${super.descricao()} | ${this.portas} portas`;
  }

  calcularAluguel(dias) {
    const taxaSeguro = 50;
    return (this.getDiaria() * dias) + taxaSeguro;
  }
}

class Moto extends Veiculo {
  constructor(marca, modelo, diaria, cilindradas) {
    super(marca, modelo, diaria);
    this.cilindradas = cilindradas;
  }

  descricao() {
    return `${super.descricao()} | ${this.cilindradas}cc`;
  }

  calcularAluguel(dias) {
    const valorBruto = this.getDiaria() * dias;
    return valorBruto * 0.90; 
  }
}

class Locadora {
  constructor() {
    this.veiculos = [];
  }

  adicionarVeiculo(veiculo) {
    this.veiculos.push(veiculo);
    console.log(`Veículo adicionado: ${veiculo.marca} ${veiculo.modelo}`);
  }

  listarVeiculos() {
    console.log("\n--- Frota Disponível na Locadora ---");
    if (this.veiculos.length === 0) {
      console.log("Nenhum veículo cadastrado.");
      return;
    }
    this.veiculos.forEach((v, index) => {
      console.log(`${index + 1}. ${v.descricao()}`);
    });
  }

  calcularTotal(dias) {
    return this.veiculos.reduce((total, veiculo) => {
      return total + veiculo.calcularAluguel(dias);
    }, 0);
  }

  removerVeiculo(modelo) {
    const tamanhoInicial = this.veiculos.length;
    this.veiculos = this.veiculos.filter(
      (v) => v.modelo.toLowerCase() !== modelo.toLowerCase()
    );

    if (this.veiculos.length < tamanhoInicial) {
      console.log(`\nVeículo modelo "${modelo}" removido com sucesso.`);
    } else {
      console.log(`\nModelo "${modelo}" não encontrado na frota.`);
    }
  }
}

console.log("\n=== SISTEMA DE LOCADORA DE VEÍCULOS ===\n");

const locadora = new Locadora();

const carro1 = new Carro("Toyota", "Corolla", 200, 4);
const moto1 = new Moto("Honda", "CB 500F", 120, 500);

locadora.adicionarVeiculo(carro1);
locadora.adicionarVeiculo(moto1);

locadora.listarVeiculos();

const dias = 3;
console.log(`\n--- Valores de Aluguel para ${dias} dias ---`);
console.log(`${carro1.modelo} (com taxa de seguro): R$ ${carro1.calcularAluguel(dias).toFixed(2)}`);
console.log(`${moto1.modelo} (com 10% de desconto): R$ ${moto1.calcularAluguel(dias).toFixed(2)}`);

const totalLocadora = locadora.calcularTotal(dias);
console.log(`\nValor total da locadora para ${dias} dias: R$ ${totalLocadora.toFixed(2)}`);

if (typeof document !== "undefined") {
  const containerFunc = document.getElementById("lista-funcionarios");
  const listaFuncionarios = [dev, designer];

  listaFuncionarios.forEach((func) => {
    containerFunc.innerHTML += `
      <article>
        <h3>${func.nome} - ${func.cargo}</h3>
        <p>${func.apresentar()}</p>
        <ul>
          <li><strong>Salário atual:</strong> R$ ${func.verSalario().toFixed(2)}</li>
          <li><strong>Bônus calculado:</strong> R$ ${func.calcularBonus().toFixed(2)}</li>
        </ul>
      </article>
    `;
  });

  const containerVeiculos = document.getElementById("lista-veiculos");
  const resumoLocadora = document.getElementById("resumo-locadora");

  locadora.veiculos.forEach((veiculo) => {
    containerVeiculos.innerHTML += `
      <article>
        <h3>${veiculo.marca} ${veiculo.modelo}</h3>
        <p>${veiculo.descricao()}</p>
        <p><strong>Valor do aluguel (${dias} dias):</strong> R$ ${veiculo.calcularAluguel(dias).toFixed(2)}</p>
      </article>
    `;
  });

  resumoLocadora.innerHTML = `
    <p><strong>Valor total da locadora (${dias} dias):</strong> R$ ${totalLocadora.toFixed(2)}</p>
  `;
}

locadora.removerVeiculo("CB 500F");
locadora.listarVeiculos();
