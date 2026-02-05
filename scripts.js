const project = [
  {
    title: "App de Previsão de Tempo",
    description:
      "App de previsão do tempo com API da Open Weather com busca em comando de voz.",
    image: "./src/projetos-imgs/app-previsao.png",
    link: "https://app-previsao-tempo-rose.vercel.app/",
  },
  {
    title: "Mostruário de estilos de botões e cards",
    description:
      "Botões e cards em estilo neon e glass (vidro) utilizando CSS.",
    image: "./src/projetos-imgs/botao-neon.png",
    link: "https://botao-neon.vercel.app/",
  },
  {
    title: "Gerador de box-Shadow",
    description:
      "App que gera box shadow com opacidade, deslocamento e blur utilizando CSS e JavaScript.",
    image: "./src/projetos-imgs/gerador-box-shadow.png",
    link: "https://gerador-de-box-shadow-black.vercel.app/",
  },
  {
    title: "Landing Page com Tailwind",
    description:
      "Landing Page responsiva com tema dark/light usando o tailwind.",
    image: "./src/projetos-imgs/tailwind-land-page.png",
    link: "https://cherrywolfstudios.vercel.app/",
  },
  {
    title: "Landing Page Paralax horizontal",
    description:
      "Landing Page com animação em Paralax que dá a sensação de cenário infinito.",
    image: "./src/projetos-imgs/landing-page-paralax-animation.png",
    link: "https://paralax-landing-page-jl.vercel.app/",
  },
  {
    title: "Clone Disney Plus",
    description:
      "Página inicial clonada do site dos serviço de streaming da Disney.",
    image: "./src/projetos-imgs/clone-disney.png",
    link: "https://clone-disney-plus-8tib.vercel.app/#",
  },
  {
    title: "Relógio Digital",
    description: "Relógio digital utilizando CSS, HTML e JavaScript",
    image: "./src/projetos-imgs/relogio-digital.png",
    link: "https://relogio-digital-jl.vercel.app/",
  },
  {
    title: "Loja de Discos - Crypta Store",
    description: "Site de loja de discos, instrumentos musicais e camisetas.",
    image: "./src/projetos-imgs/crypta-store.png",
    link: "https://crypta-store-finalizado.vercel.app/",
  },
  {
    title: "Landing Page Paralax Vertical",
    description:
      "Landing Page utilizando animação em Paralax no scroll Vertical.",
    image: "./src/projetos-imgs/landing-page-paralax.png",
    link: "https://site-parallax-xi.vercel.app/",
  },
  {
    title: "Landing Page Deadly Vipers",
    description: "Landing Page de um grupo de rock.",
    image: "./src/projetos-imgs/deadly-vipers.png",
    link: "https://deadly-vipers-site-oficial.vercel.app/",
  },
];

const div = document.getElementById("projetos");

function creatProjetctCard(project) {
  return `
  
          <div class="projetos-card">
          <div class="text-box-card">
            <h2 class="projeto-title">${project.title}</h2>
            <p class="projeto-description">
              ${project.description}
            </p>
            <a href="${project.link}" target="_blank">Visite!</a>
          </div>
          <div class='img-box-card'>
          <a href="${project.link}" target="_blank">
            <img
              src="${project.image}"
              alt="imagem do projeto"
              class="projeto-img"
            /></a>
          </div>
        </div>
  `;
}

function renderProjects(project) {
  div.innerHTML = project.map(creatProjetctCard).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects(project);
});
