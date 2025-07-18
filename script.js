// ========== Toggle Navbar ==========
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ========== Scroll Section Active Links ==========
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ========== WhatsApp Message Form ==========
function gotowhatsapp() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var service = document.getElementById("service").value.trim();

    if (!name || !phone || !email || !service) {
        alert("Please fill all the fields!");
        return;
    }

    var url = "https://wa.me/923080026609?text=" +
        "Name: " + encodeURIComponent(name) + "%0a" +
        "Phone: " + encodeURIComponent(phone) + "%0a" +
        "Email: " + encodeURIComponent(email) + "%0a" +
        "Service: " + encodeURIComponent(service);

    window.open(url, '_blank').focus();
}

// ========== Typed.js Animation ==========
try {
    const typed = new Typed('.multiple-text', {
        strings: ['Online Teachers', 'Tajweed', 'Experienced Teachers'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
} catch (e) {
    console.warn("Typed.js not loaded or not found");
}

// ========== Scroll Reveal ==========
// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });
// ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
// ScrollReveal().reveal('.home-img, .services-container, .gallery, .contact form', { origin: 'bottom' });

// ========== Gallery Lightbox ==========
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");
const galleryImages = document.querySelectorAll(".gallery-img");

if (lightbox && lightboxImg && closeBtn && galleryImages.length > 0) {
    galleryImages.forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            document.body.style.overflow = "hidden";
        });
    });

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        document.body.style.overflow = "auto";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

// ========== Contact Form Popup ==========
const form = document.getElementById('contact-form');
const popup = document.getElementById('popup');

if (form && popup) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        popup.style.display = 'block';
        setTimeout(() => {
            popup.style.display = 'none';
            form.submit();
        }, 3000);
    });
}
