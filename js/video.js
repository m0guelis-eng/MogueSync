document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  app.innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="musica.html">Música</a>
      <a href="video.html">Vídeo</a>
    </nav>
    <h1>🎬 Moguesync</h1>
    <p>Escolha um vídeo do seu dispositivo:</p>
    <input type="file" id="arquivo-video" accept="video/*">
    <div id="nome-video"></div>
    <video id="player-video" controls width="100%" style="max-width:720px; margin-top:20px;"></video>
  `;

  const input = document.getElementById('arquivo-video');
  const player = document.getElementById('player-video');
  const nomeVideo = document.getElementById('nome-video');

  input.addEventListener('change', function () {
    const arquivo = this.files[0];
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      player.src = url;
      nomeVideo.textContent = `🎥 Reproduzindo: ${arquivo.name}`;
      player.play();
    }
  });

  // Proteções leves
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

  document.addEventListener("keydown", function (e) {
    if (
      (e.ctrlKey && e.key.toLowerCase() === "u") ||
      (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
      e.key === "F12"
    ) {
      e.preventDefault();
      alert("Ação bloqueada!");
    }
  });
});
