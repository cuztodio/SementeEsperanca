// Menu responsivo
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("show");
});

// Formulário (simulação)
const form = document.getElementById("form");
const msgStatus = document.getElementById("msg-status");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msgStatus.textContent = "Mensagem enviada com sucesso!";
  msgStatus.style.color = "green";
  form.reset();
});

// Scroll suave na navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const alvo = document.querySelector(this.getAttribute("href"));
    alvo.scrollIntoView({ behavior: "smooth" });
  });
});
