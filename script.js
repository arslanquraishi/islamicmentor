

// Toggle Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll Section Active Links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            });
        }
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Go to WhatsApp
function gotowhatsapp() {
    var name = document.getElementById("name").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var email = document.getElementById("email").value.trim();
    var service = document.getElementById("service").value.trim();

    if (!name || !phone || !email || !service) {
        alert("Please fill all the fields!");
        return;
    }

    var url = "https://wa.me/923080026609?text="
        + "Name: " + encodeURIComponent(name) + "%0a"
        + "Phone: " + encodeURIComponent(phone) + "%0a"
        + "Email: " + encodeURIComponent(email) + "%0a"
        + "Service: " + encodeURIComponent(service);

    window.open(url, '_blank').focus();
}

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Online Teachers', 'Tajweed', 'Experienced Teachers'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




// ======================== scroll reveel==============================
ScrollReveal({ 
    reset: true ,
    distance:'80px',
    duration:2000,
    delay:20
});

ScrollReveal().reveal('.home-content, .heading', { origin: top });
ScrollReveal().reveal('.home-img, .')


// -------gallery -----------
    
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.getElementById("close-btn");
  const galleryImages = document.querySelectorAll(".gallery-img");

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







// ======popup+++++++++++++
 const form = document.getElementById('contact-form');
  const popup = document.getElementById('popup');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default form submission

    // Show popup
    popup.style.display = 'block';

    // Hide popup after 3 seconds
    setTimeout(() => {
      popup.style.display = 'none';
      
      // Now submit the form for real
      form.submit(); // Let FormSubmit do its job
    }, 3000); // 3 seconds
  });