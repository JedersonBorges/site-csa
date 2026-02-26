// pega o nome da página atual
const currentPage = window.location.pathname.split("/").pop() || "index.html";

// remove extensão .html
const basePage = currentPage.replace(".html", "");

// páginas equivalentes F1 / F2
const f1Page = `${basePage}.html`;
const f2Page = `${basePage}f2.html`;

document.getElementById("header").innerHTML = `
  <header>
    <a href="/"><img src="logos/f1.png" alt="F1 Esports Logo" /></a>
    <nav>
      <a href="standings.html">Classificação</a>
      <a href="drivers.html">Pilotos</a>
      <a href="h2h.html">Head to head</a>
      <a href="punicoes.html">Punições</a>
      <a href="ranking.html">Ranking</a>
      <span class="dropdown">
        <a href="#">More</a>
        <span class="dropdown-content">
          <a href="#">Contact</a>
          <a href="#">Rules</a>
        </span>
      </span>
    </nav>
  </header>
`;