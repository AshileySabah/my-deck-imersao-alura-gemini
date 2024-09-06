function pesquisar() {
  let section = document.getElementById("section-results");

  let resultados = "";

  for (let dado of dados) {
    resultados += `
      <div class="item-result ${dado.tipo}">
        <div>
          <img src="img/logo.png" alt="Logo do MyDeck - Baralhos" />
          <strong>${dado.nome}</strong>
          <p>${dado.descricao}</p>
        </div>
        <div class="item-result-points">
          <span class="item-result-dano">${dado.dano}</span>/<span class="item-result-defesa">${dado.defesa}</span>
        </div>
      </div>
    `;
  }

  section.innerHTML = resultados;
}
