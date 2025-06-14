const toggleButton = document.getElementById('mode-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  toggleButton.textContent = isDarkMode ? '☀️' : '🌙';
});