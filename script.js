document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const dropdowns = document.querySelectorAll(".dropdown > a");

    // Mobile Menu Toggle
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
        if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("open");
        }
    });

    // Mobile Dropdown Toggle
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", (event) => {
            event.preventDefault();
            const parent = dropdown.parentElement;
            parent.classList.toggle("open");
        });
    });

    // Smooth Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
                navLinks.classList.remove("open");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for fixed header
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile menu toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    menuToggle.addEventListener("click", function() {
        mobileNav.classList.toggle("active");
    });

    // Close menu when a link is clicked (for mobile)
    document.querySelectorAll(".mobile-nav a").forEach(link => {
        link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
        });
    });

    // Optional: Modal popup for service details
    const serviceItems = document.querySelectorAll(".service-item");

    serviceItems.forEach(item => {
        item.addEventListener("click", function() {
            const serviceName = this.querySelector("h3").textContent;
            const serviceDescription = this.querySelector("p").textContent;

            alert(`Service: ${serviceName}\n\n${serviceDescription}`);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inquiry-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert("Please fill out all fields before submitting.");
        }
    });
});

// Smooth Scroll for Booking Buttons
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".book-btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const targetId = button.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

// CTA Button Functionality
const scheduleBtn = document.getElementById('schedule-btn');
const downloadBtn = document.getElementById('download-btn');
const newsletterBtn = document.getElementById('newsletter-btn');

scheduleBtn.addEventListener('click', () => {
    alert('Redirecting to the consultation booking page...');
    window.location.href = '#contact';
});

downloadBtn.addEventListener('click', () => {
    alert('Your wellness guide is being downloaded...');
    window.location.href = 'assets/files/wellness-guide.pdf';
});

newsletterBtn.addEventListener('click', () => {
    alert('Join our newsletter to receive weekly health tips!');
    window.location.href = '#newsletter';
});

const testimonials = document.querySelectorAll('.testimonial-item');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((item, i) => {
        item.style.transform = `translateX(${(i - index) * 100}%)`;
    });
}

prevBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    showTestimonial(currentTestimonial);
});

// Initialize slider
showTestimonial(currentTestimonial);

// Footer Interaction
console.log('Footer loaded successfully.');