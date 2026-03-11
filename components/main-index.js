var titleh1 = "Sombras do Asfalto"
var titleNews = 'Inscrições abertas'
var textBox1 = 'Garanta sua vaga para a 1ª Temporada!'
var button1link = "https://api.whatsapp.com/send?phone=5516999899572&text=Ol%C3%A1.+Gostaria+de+me+inscrever+na+CSA%21"
var button1label = "Inscreva-se →"
var videoLink = "https://www.youtube.com/embed/QPZwL_zFHiY?autoplay=1&mute=1&loop=1&playlist=QPZwL_zFHiY&controls=0&disablekb=1&modestbranding=1&rel=0"

document.getElementById("main-index").innerHTML = `
  <main>
  <h1>${titleh1}</h1>
   <section class="video-section">
    <div class="video-lock">
      <iframe 
        width="100%" 
        height="450" 
        src="${videoLink}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
    </div>
  </section>

  <div class="headline-container">
    <div class="headline-badge">${titleNews}</div>
    <div class="headline-text">
      <span>${textBox1}</span>
      <a href="${button1link}" 
        target="_blank" 
        class="btn-inscricao"> ${button1label} 
      </a>
    </div>
  </div>

  <section class="calendar-container">
    <h1>CALENDAR</h1>
    <div class="carousel-wrapper">
      <button class="arrow left" onclick="scrollCarousel(-1)">&#9664;</button>
      <div class="carousel" id="carousel">
        </div>
      <button class="arrow right" onclick="scrollCarousel(1)">&#9654;</button>
    </div>
  </section>
</main>
`;

