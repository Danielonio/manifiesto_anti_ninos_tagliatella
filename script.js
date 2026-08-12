// Pequeño efecto: al hacer scroll, las tarjetas del flujo aparecen con un poco de gracia.
document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".flow-step, .recurso-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.15 }
  );

  steps.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(16px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });
});
