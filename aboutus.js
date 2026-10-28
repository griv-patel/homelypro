// aboutus.js
// Small interactive behaviours for the Homely Pro "About Us" page

document.addEventListener("DOMContentLoaded", () => {

    // 1. "Join Our Mission" button click
    const joinBtn = document.getElementById("joinBtn");
    if (joinBtn) {
        joinBtn.addEventListener("click", () => {
            alert("Thank you for wanting to join Homely Pro! We'll redirect you to the registration page.");
            // window.location.href = "register.html"; // uncomment when register page is ready
        });
    }

    // 2. Login / Register buttons (placeholder actions)
    const loginBtn = document.querySelector(".btn-outline");
    const registerBtn = document.querySelectorAll(".btn-solid")[0];

    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            console.log("Login button clicked");
            // window.location.href = "login.html";
        });
    }

    // 3. Highlight active nav link on click
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // 4. Simple fade-in animation for cards when they scroll into view
    const animatedItems = document.querySelectorAll(".card, .value-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(20px)";
        item.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(item);
    });

});