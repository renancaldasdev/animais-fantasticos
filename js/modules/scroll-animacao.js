export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  sections[0].classList.add("ativo");

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top - 800;
        if (sectionTop < 0) {
          section.classList.add("ativo");
        }
      });
    }
    window.addEventListener("scroll", animaScroll);
  }
}
