// -------------------------------
// MENÚ HAMBURGUESA RESPONSIVE
// -------------------------------
const burgerBtn = document.getElementById("burgerBtn");
const navLinks = document.getElementById("navLinks");

burgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burgerBtn.classList.toggle("open");
});

// Cierra el menú cuando se hace clic en un enlace
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    burgerBtn.classList.remove("open");
  });
});

// -------------------------------
// MODALES DE LOS PROYECTOS
// -------------------------------
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".modal");
const closeBtns = document.querySelectorAll(".close");

// Abrir modal correspondiente
cards.forEach(card => {
  card.addEventListener("click", () => {
    const modalId = card.dataset.modal;
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Evita scroll del fondo
    }
  });
});

// Cerrar modal al pulsar la X
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
    document.body.style.overflow = "auto";
  });
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});

// -------------------------------
// EFECTO SUAVE AL ABRIR MODALES
// -------------------------------
modals.forEach(modal => {
  modal.addEventListener("transitionend", () => {
    modal.classList.remove("fade-in");
  });
});
