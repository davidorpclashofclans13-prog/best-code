const readline = require("readline");

const conta = {
  titular: "Marina Alves",
  agencia: "1234",
  numero: "56789-0",
  saldo: 1500,
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(texto) {
  return new Promise((resolve) => {
    rl.question(texto, (resposta) => resolve(resposta));
  });
}

function formatarReais(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function lerValor(texto) {
  return perguntar(texto).then((resposta) => {
    const normalizado = resposta.trim().replace(/\./g, "").replace(",", ".");
    return Number(normalizado);
  });
}

function mostrarMenu() {
  console.log("\n=== Caixa eletrônico ===");
  console.log("1 - Consultar dados da conta");
  console.log("2 - Consultar saldo");
  console.log("3 - Realizar débito");
  console.log("4 - Realizar crédito");
  console.log("0 - Sair");
}

async function main() {
  let executando = true;

  while (executando) {
    mostrarMenu();
    const opcao = (await perguntar("Escolha uma opção: ")).trim();

    switch (opcao) {
      case "1":
        console.log(`Titular: ${conta.titular}`);
        console.log(`Agência: ${conta.agencia}`);
        console.log(`Conta: ${conta.numero}`);
        break;
      case "2":
        console.log(`Saldo atual: ${formatarReais(conta.saldo)}`);
        break;
      case "3": {
        const valor = await lerValor("Valor do débito: R$ ");
        if (!Number.isFinite(valor) || valor <= 0) {
          console.log("Informe um valor maior que zero.");
          break;
        }
        if (valor > conta.saldo) {
          console.log("Saldo insuficiente para este débito.");
          break;
        }
        conta.saldo -= valor;
        console.log(`Débito realizado. Saldo atual: ${formatarReais(conta.saldo)}`);
        break;
      }
      case "4": {
        const valor = await lerValor("Valor do crédito: R$ ");
        if (!Number.isFinite(valor) || valor <= 0) {
          console.log("Informe um valor maior que zero.");
          break;
        }
        conta.saldo += valor;
        console.log(`Crédito realizado. Saldo atual: ${formatarReais(conta.saldo)}`);
        break;
      }
      case "0":
        executando = false;
        console.log("Operação encerrada. Até logo.");
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
    }
  }

  rl.close();
}

main();
