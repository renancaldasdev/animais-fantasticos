import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `
    <h3>${animal.especie}</h3>
    <span data-numero>${animal.total}</span>
    `;
    return div;
  }

  // Preenche animal no DOM
  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  // Anima os números de cada animal
  function animaisAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // Puxa os animais através de uma rquivo json e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      // Fetch e espera a resposta
      const animaisResponse = await fetch(url);
      // Trasnsforma a resposta em json
      const animaisJSON = await animaisResponse.json();

      // Após a transformação de json, ativa as funções para preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));

      animaisAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
