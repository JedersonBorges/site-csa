var instagramLink = "https://www.instagram.com/csa_sombrasdoasfalto"
var youtubeLink = "https://www.youtube.com/@CSA_e-racing"
var discordLink = "https://discord.com/invite/KS6PuRd5"

document.getElementById("footer").innerHTML = `
<footer>
  <div class="footer-content">
    <span>© 2026 Campeonato Sombras do Asfalto. All rights reserved.</span>

    <div class="social-icons">
      <a href="${instagramLink}" target="_blank">
        <img src="imagens/instagram.png" alt="Instagram" class="social-icon">
      </a>

      <a href="${youtubeLink}" target="_blank">
        <img src="imagens/youtube.png" alt="YouTube" class="social-icon">
      </a>

      <a href="${discordLink}" target="_blank">
        <img src="imagens/discord.png" alt="Discord" class="social-icon">
      </a>
    </div>
  </div>

  <span class="footer-note">
    Desenvolvido por Jederson Borges
  </span>
</footer>
`;