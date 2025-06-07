// Espera o carregamento completo do DOM antes de executar
document.addEventListener("DOMContentLoaded", function() {
  
  // Seleciona os elementos de busca
  const inputBusca = document.querySelector(".busca input");
  const botaoBusca = document.querySelector(".busca button");

  // Função para realizar a busca (aqui só simula com alert)
  function realizarBusca() {
    const termo = inputBusca.value.trim();
    if (termo === "") {
      alert("Por favor, digite algo para buscar.");
    } else {
      alert(`Você buscou por: "${termo}"`);
      // Aqui você poderia futuramente redirecionar ou filtrar produtos
    }
  }

  // Evento de clique no botão
  botaoBusca.addEventListener("click", realizarBusca);

  // Evento de pressionar Enter no campo de texto
  inputBusca.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      realizarBusca();
    }
  });

});