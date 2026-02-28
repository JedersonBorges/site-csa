const currentPage = window.location.pathname.split("/").pop() || "index.html";
const basePage = currentPage.replace(".html", "");

document.getElementById("header").innerHTML = `
  <header>
    <a href="/"><img src="logos/f1.png" alt="F1 Esports Logo" class="logo" /></a>
    
    <button class="menu-toggle">☰</button>
    
    <nav class="nav-menu">
      <a href="standings.html">Classificação</a>
      
      <a href="h2h.html">Head to head</a>
      <a href="punicoes.html">Punições</a>
      <a href="ranking.html">Ranking</a>
      <span class="dropdown">
        <a href="#">Estatísticas</a>
        <span class="dropdown-content">
          <a href="drivers.html">Pilotos</a>
          <a href="etapas.html">Etapas</a>
        </span>
      </span>
      <span class="dropdown">
        <a href="#">More</a>
        <span class="dropdown-content">
          <a href="contact.html">Contact</a>
          <a href="rules.html">Rules</a>
        </span>
      </span>
    </nav>
  </header>
`;

// Seleção correta dos elementos após a inserção no DOM
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.onclick = function() {
        navMenu.classList.toggle('active');
        this.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰';
    };
}