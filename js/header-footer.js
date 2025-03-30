// Questo file JavaScript contiene i componenti riutilizzabili per header e footer
// Da includere in tutte le pagine per evitare codice duplicato

document.addEventListener("DOMContentLoaded", function () {
  // Inserisci l'header
  const headerPlaceholder = document.querySelector(".header-placeholder");
  if (headerPlaceholder) {
    insertHeader(headerPlaceholder);
  }

  // Inserisci il footer
  const footerPlaceholder = document.querySelector(".footer-placeholder");
  if (footerPlaceholder) {
    insertFooter(footerPlaceholder);
  }

  // Evidenzia la voce di menu attiva
  highlightActiveMenuItem();

  // Inizializza il toggle menu mobile
  initMobileMenu();
});

// Funzione per inserire l'header
function insertHeader(placeholder) {
  const header = `
    <header>
        <div class="container">
            <div class="logo">
                <a href="index.html">Dott.ssa Maria Rossi</a>
            </div>
            <nav>
                <button class="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="menu">
                    <li><a href="index.html" data-page="index">Home</a></li>
                    <li><a href="chi-sono.html" data-page="chi-sono">Chi Sono</a></li>
                    <li><a href="contatti.html" data-page="contatti" class="cta-button">Contattami</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `;

  placeholder.outerHTML = header;
}

// Funzione per inserire il footer
function insertFooter(placeholder) {
  const footer = `
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <h3>Dott.ssa Maria Rossi</h3>
                    <p>Psicologa e Psicoterapeuta</p>
                    <p>Iscrizione Albo n° [numero]</p>
                    <address>
                        Via Roma 123, [Città]<br>
                        Tel: 123 456 7890<br>
                        Email: info@mariarossipsicologa.it
                    </address>
                </div>
                <div class="footer-nav">
                    <h3>Link Utili</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="chi-sono.html">Chi Sono</a></li>
                        <li><a href="contatti.html">Contatti</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </div>
                <div class="footer-hours">
                    <h3>Orari</h3>
                    <ul>
                        <li>Lunedì - Venerdì: 9:00 - 19:00</li>
                        <li>Sabato: Su appuntamento</li>
                        <li>Domenica: Chiuso</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Dott.ssa Maria Rossi - Tutti i diritti riservati | P.IVA: 12345678901</p>
            </div>
        </div>
    </footer>
    `;

  placeholder.outerHTML = footer;
}

// Funzione per evidenziare la voce di menu attiva
function highlightActiveMenuItem() {
  const currentPage = window.location.pathname.split("/").pop().split(".")[0];
  const menuItems = document.querySelectorAll(".menu a");

  menuItems.forEach((item) => {
    const dataPage = item.getAttribute("data-page");

    if (
      currentPage === dataPage ||
      (currentPage === "" && dataPage === "index")
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

// Funzione per inizializzare il menu mobile
function initMobileMenu() {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".menu");

  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  // Chiudi menu quando si clicca fuori
  document.addEventListener("click", function (event) {
    if (
      !menu.contains(event.target) &&
      !menuToggle.contains(event.target) &&
      menu.classList.contains("active")
    ) {
      menu.classList.remove("active");
      menuToggle.classList.remove("active");
    }
  });
}
