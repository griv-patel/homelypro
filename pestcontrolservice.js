document.addEventListener('DOMContentLoaded', () => {
    // Add click listeners to book buttons
    const bookButtons = document.querySelectorAll('.btn-book');
    bookButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            alert('Booking feature coming soon!');
        });
    });

    // Add click listeners to login/register buttons
    const loginBtn = document.querySelector('.btn-login');
    const registerBtn = document.querySelector('.btn-register');

    if(loginBtn) {
        loginBtn.addEventListener('click', () => {
            alert('Login modal will open here.');
        });
    }

    if(registerBtn) {
        registerBtn.addEventListener('click', () => {
            alert('Registration page will open here.');
        });
    }
});
