function pesquisar() {
  const tipo = document.getElementById("tipo").value;
  const nome = document.getElementById("nome").value.toLowerCase();
  const descricao = document.getElementById("descricao").value.toLowerCase();
  const dano = document.getElementById("dano").value;
  const defesa = document.getElementById("defesa").value;

  let section = document.getElementById("section-results");
  section.innerHTML = "";

  let resultados = dados.filter((dado) => {
    return (
      (tipo === "" || dado.tipo === tipo) &&
      (nome === "" || dado.nome.toLowerCase().includes(nome)) &&
      (descricao === "" || dado.descricao.toLowerCase().includes(descricao)) &&
      (dano === "" || dado.dano == dano) &&
      (defesa === "" || dado.defesa == defesa)
    );
  });

  if (resultados.length > 0) {
    let html = "";
    for (let dado of resultados) {
      html += `
        <div class="item-result ${dado.tipo}">
          <div>
            <img src="${dado.imagem}" alt="Carta ${dado.nome}" />
            <strong>${dado.nome}</strong>
            <p>${dado.descricao}</p>
          </div>
          <div class="item-result-points">
            <span class="item-result-dano">${dado.dano}</span>/<span class="item-result-defesa">${dado.defesa}</span>
          </div>
        </div>
      `;
    }
    section.innerHTML = html;
  } else {
    section.innerHTML = "<p>Nenhum resultado encontrado.</p>";
  }
}
