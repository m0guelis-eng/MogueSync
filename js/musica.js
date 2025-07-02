document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  app.innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="musica.html">Música</a>
      <a href="video.html">Vídeo</a>
    </nav>
    <h1>🎵 Moguesync</h1>
    <p>Escolha uma música do seu dispositivo:</p>
    <input type="file" id="arquivo-musica" accept="audio/*">
    <div id="nome-musica"></div>
    <audio id="player" controls></audio>
  `;

  const input = document.getElementById('arquivo-musica');
  const player = document.getElementById('player');
  const nomeMusica = document.getElementById('nome-musica');

  input.addEventListener('change', function () {
    const arquivo = this.files[0];
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      player.src = url;
      nomeMusica.textContent = `🎶 Tocando: ${arquivo.name}`;
      player.play();
    }
  });

  // Bloqueia clique direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
  });

  // Bloqueia seleção de texto
  document.addEventListener('selectstart', function (e) {
    e.preventDefault();
  });

  // Bloqueia Ctrl+U, F12, Ctrl+Shift+I
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
