// Script principale del sito
document.addEventListener("DOMContentLoaded", function () {
  // Inizializza la validazione del form di contatto
  initContactForm();

  // Lazy loading per le immagini
  initLazyLoading();

  // Smooth scroll per i link interni
  initSmoothScroll();
});

// Validazione form di contatto
function initContactForm() {
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const service = document.getElementById("service");
      const privacy = document.getElementById("privacy");

      let isValid = true;

      // Validazione nome
      if (name.value.trim() === "") {
        showError(name, "Il nome è obbligatorio");
        isValid = false;
      } else {
        removeError(name);
      }

      // Validazione email
      if (email.value.trim() === "") {
        showError(email, "L'email è obbligatoria");
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, "Inserisci un'email valida");
        isValid = false;
      } else {
        removeError(email);
      }

      // Validazione servizio
      if (service.value === "") {
        showError(service, "Seleziona un servizio");
        isValid = false;
      } else {
        removeError(service);
      }

      // Validazione messaggio
      if (message.value.trim() === "") {
        showError(message, "Il messaggio è obbligatorio");
        isValid = false;
      } else {
        removeError(message);
      }

      // Validazione privacy
      if (!privacy.checked) {
        showError(privacy, "Devi accettare la privacy policy");
        isValid = false;
      } else {
        removeError(privacy);
      }

      if (!isValid) {
        e.preventDefault();
      }
    });
  }
}

// Visualizzazione errore
function showError(input, message) {
  const formGroup =
    input.closest(".form-group") || input.closest(".checkbox-group");
  let errorElement = formGroup.querySelector(".error-message");

  if (!errorElement) {
    errorElement = document.createElement("div");
    errorElement.className = "error-message";
    formGroup.appendChild(errorElement);
  }

  errorElement.textContent = message;
  input.classList.add("error");
}

// Rimozione errore
function removeError(input) {
  const formGroup =
    input.closest(".form-group") || input.closest(".checkbox-group");
  const errorElement = formGroup.querySelector(".error-message");

  if (errorElement) {
    formGroup.removeChild(errorElement);
  }

  input.classList.remove("error");
}

// Validazione email
function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Lazy loading per le immagini
function initLazyLoading() {
  if ("loading" in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach((img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });
  } else {
    // Fallback per browser che non supportano il lazy loading nativo
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js";
    document.body.appendChild(script);
  }
}

// Smooth scroll per i link interni
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Animazioni al caricamento della pagina (opzionale)
function initAnimations() {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  animatedElements.forEach((element) => {
    observer.observe(element);
  });
}
