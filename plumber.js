// electrician.js - basic interactivity for Homely Pro Electrician Service page

document.addEventListener('DOMContentLoaded', function () {

  // Book Now buttons
  const bookButtons = document.querySelectorAll('.btn-book');
  bookButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const service = btn.getAttribute('data-service');
      const price = btn.getAttribute('data-price');
      alert('Booking request for "' + service + '" (starting from ₹' + price + ') received!\nOur team will contact you shortly.');
      // Yahan aap apna booking form / API call add kar sakte hain
    });
  });

  // Login button
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', function () {
      alert('Login page yahan open hogi.');
    });
  }

  // Register button
  const registerBtn = document.getElementById('registerBtn');
  if (registerBtn) {
    registerBtn.addEventListener('click', function () {
      alert('Register page yahan open hogi.');
    });
  }

  // Highlight active nav link on click
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      navLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');
    });
  });

});