document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    let valid = true;

    if (name === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name must contain only letters and spaces.';
        valid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }


    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        valid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (phone === '') {
        document.getElementById('phoneError').textContent = 'Phone number is required.';
        valid = false;
    } else if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').textContent = 'Phone number must be 10 digits.';
        valid = false;
    } else {
        document.getElementById('phoneError').textContent = '';
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
        alert('Registration Successful');
    }
});