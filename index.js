const audio = new Audio('music/sunset.mp3')
audio.autoplay = true;
audio.loop = true;
audio.volume = 0.1;

const textarea = document.getElementById('passwordInput');

textarea.addEventListener('keydown', (e) => {
  if (e.key === 13) {
    e.preventDefault();
  }
});

function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const passwords = ['gockelhahn', 'yaraxtendo', 'bulachi'];

  if (passwords.includes(password)) {
    window.location.href = 'success.html';
  } else {
    document.getElementById('message').textContent = 'Try Again.';
  }
}
