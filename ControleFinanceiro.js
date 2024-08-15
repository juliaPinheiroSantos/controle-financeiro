let quantidade_inicial = parseFloat(
  prompt("Qual a quantidade inicial de dinheiro?")
);
let opcao = "";
let quantidade_adicionada = 0;
let quantidade_removida = 0;
let quantidade_final = 0;

do {
  opcao = prompt(
    "Quantidade Inicial: " +
      quantidade_inicial +
      "\n" +
      "Escolha uma opção abaixo: \n" +
      "1. Adicionar dinheiro \n" +
      "2. Remover dinheiro \n" +
      "3. Sair"
  );

  if (opcao === "1") {
    quantidade_adicionada = parseFloat(
      prompt("Qual será a quantidade a ser adicionada?")
    );
    quantidade_inicial = quantidade_adicionada + quantidade_inicial;
  } else if (opcao === "2") {
    quantidade_removida = parseFloat(
      prompt("Qual será a quantidade a ser removida?")
    );

    if (quantidade_removida > quantidade_inicial) {
      alert("Essa operação não pode ser realizada");
    } else {
      quantidade_inicial = quantidade_inicial - quantidade_removida;
    }
  }
} while (opcao != "3");
