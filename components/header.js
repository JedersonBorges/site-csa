// cria header
document.getElementById("header").innerHTML = `
<header>
  <a href="/"><img src="logos/f1.png" alt="F1 Esports Logo" /></a>

  <div class="menu-toggle" id="menuToggle">
    ☰
  </div>

  <nav id="mainNav">
    <a href="standings.html">Classificação</a>
    <a href="drivers.html">Pilotos</a>
    <a href="h2h.html">Head to head</a>
    <a href="punicoes.html">Punições</a>
    <a href="ranking.html">Ranking</a>

    <span class="dropdown">
      <a href="#" class="dropdown-toggle">More</a>
      <span class="dropdown-content">
        <a href="contact.html">Contact</a>
        <a href="rules.html">Rules</a>
      </span>
    </span>
  </nav>
</header>
`;

/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

/* =========================
   DROPDOWN MOBILE
========================= */

const dropdownToggle = document.querySelector(".dropdown-toggle");

dropdownToggle.addEventListener("click", function (e) {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
  }
});