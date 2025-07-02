document.addEventListener("DOMContentLoaded", function () {
  const app = document.getElementById("app");

  app.innerHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="musica.html">Música</a>
      <a href="video.html">Vídeo</a>
    </nav>
    <h1>🏠 Bem-vindo ao Moguesync</h1>
    <p>Explore música e vídeos diretamente do seu dispositivo.</p>
    <ul>
      <li>🎵 Acesse a <a href="musica.html">página de Música</a> para curtir suas faixas favoritas.</li>
      <li>🎬 Acesse a <a href="video.html">página de Vídeo</a> para assistir aos seus vídeos.</li>
    </ul>
  `;
});

// Bloqueia atalhos do DevTools e exibição do código-fonte
document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey && e.key.toLowerCase() === "u") || // Ctrl + U
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") || // Ctrl + Shift + I
    e.key === "F12" // F12
  ) {
    e.preventDefault();
    alert("Ação bloqueada!");
  }
});
