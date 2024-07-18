document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let valid = true;

    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required.';
        valid = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
        valid = false;
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if (valid) {
        alert('Login Successful');
    }
});