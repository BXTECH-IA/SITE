// Toggle menu mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("active");
  });
  
  // Animação ao rolar
  const elements = document.querySelectorAll(".animate");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
  