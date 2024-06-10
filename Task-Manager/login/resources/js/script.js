function togglePasswordVisibility() {
  const passwordInput = document.getElementById('password');
  const togglePassword = document.getElementById('toggle-password');

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    togglePassword.innerHTML = '&#128065;'; // Show open eye icon
  } else {
    passwordInput.type = 'password';
    togglePassword.innerHTML = '&#128064;'; // Show closed eye icon
  }
}


const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Define the valid username and password combinations
  const validCredentials = [
    { username: 'admin', password: 'admin' },
    { username: 'MikkieyAdex', password: 'Mikeli22' },
    { username: 'Ifeoluwa', password: 'user2' },
    { username: 'Ismail', password: 'user3' },
    { username: 'Mariam', password: 'user4' },
    { username: 'Lateefah', password: 'user5' }
  ];

  // Check if the username and password match any of the valid combinations
  const isValidCredentials = validCredentials.some(
    (cred) => cred.username === username && cred.password === password
  );

  if (isValidCredentials) {
    window.location.href = 'main-page/index.html'; // Redirect to homepage.html
  } else {
    alert('Invalid username or password');
  }
});


