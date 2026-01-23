// ========== Toggle Navbar with Staggered Links ==========
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

menuIcon.onclick = () => {
    const isOpening = !navbar.classList.contains('active');

    if (isOpening) {
        // Open navbar
        navbar.classList.add('active');
        navLinks.forEach((link, i) => {
            link.style.transitionDelay = `${i * 0.08}s`; // stagger open
        });
    } else {
        // Close navbar
        navLinks.forEach((link, i) => {
            link.style.transitionDelay = `${(navLinks.length - 1 - i) * 0.08}s`; // stagger close
        });

        // Delay removing active until animations finish
        const totalDuration = 400 + (navLinks.length - 1) * 80; // 400ms transition + last delay
        setTimeout(() => {
            navbar.classList.remove('active');
        }, totalDuration);
    }

    menuIcon.classList.toggle('bx-x');
};

// ========== Scroll Section Active Links ==========
let sections = document.querySelectorAll("section");
let navHeaderLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    let top = window.scrollY;
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navHeaderLinks.forEach(link => link.classList.remove('active'));
            let targetLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (targetLink) targetLink.classList.add('active');
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

// ========== Smooth Scroll for Anchors ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const headerHeight = 80;
            const targetPosition = targetElement.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

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
const form = document.getElementById("contact-form");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalBtn = document.getElementById("modal-btn");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  modal.style.display = "flex";
  modalTitle.textContent = "⏳ Sending Message...";
  modalText.textContent = "Please wait a moment.";
  modalBtn.style.display = "none";

  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  })
  .then(response => {
    if (response.ok) {
      modalTitle.textContent = "✅ Sent Successfully!";
      modalText.textContent = "We will get back to you soon.";
      modalBtn.style.display = "inline-block";
      form.reset();
      setTimeout(closeModal, 3000);
    } else {
      modalTitle.textContent = "❌ Failed!";
      modalText.textContent = "Something went wrong. Try again.";
      modalBtn.style.display = "inline-block";
      setTimeout(closeModal, 3000);
    }
  })
  .catch(error => {
    modalTitle.textContent = "⚠️ Error!";
    modalText.textContent = error;
    modalBtn.style.display = "inline-block";
    setTimeout(closeModal, 3000);
  });
});

function closeModal() {
  modal.style.display = "none";
}
