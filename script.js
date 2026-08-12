document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".flow-step, .recurso-card, .sociedad-card");

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

  // --- Botón de compartir ---
  const shareUrl = "https://danielonio.github.io/manifiesto_anti_ninos_tagliatella/";
  const shareTitle = "Manifiesto Anti Niños Tagliatella 🍝📱";
  const shareText = "Firma el Manifiesto Anti Niños Tagliatella: la lucha contra las pantallas como niñera en los restaurantes.";
  const feedback = document.getElementById("compartir-feedback");

  const showFeedback = (msg) => {
    if (!feedback) return;
    feedback.textContent = msg;
    setTimeout(() => { feedback.textContent = ""; }, 3000);
  };

  const nativeBtn = document.getElementById("btn-compartir-nativo");
  if (nativeBtn) {
    if (navigator.share) {
      nativeBtn.addEventListener("click", async () => {
        try {
          await navigator.share({ title: shareTitle, text: shareText, url: shareUrl });
        } catch (err) {
          // el usuario canceló el share, no hacemos nada
        }
      });
    } else {
      nativeBtn.style.display = "none";
    }
  }

  const whatsappLink = document.getElementById("compartir-whatsapp");
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
  }

  const xLink = document.getElementById("compartir-x");
  if (xLink) {
    xLink.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
  }

  const copyBtn = document.getElementById("btn-copiar-enlace");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(shareUrl);
        showFeedback("¡Enlace copiado! Ya puedes pegarlo donde quieras.");
      } catch (err) {
        showFeedback("No se pudo copiar automáticamente: " + shareUrl);
      }
    });
  }
});
