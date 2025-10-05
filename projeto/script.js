// Menu responsivo
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav ul");
menuBtn.addEventListener("click", () => nav.classList.toggle("show"));

// Scroll suave na navbar
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  });
});

// Formulário simulado
const form = document.getElementById("form");
const msgStatus = document.getElementById("msg-status");
form.addEventListener("submit", e => {
  e.preventDefault();
  msgStatus.textContent = "Mensagem enviada com sucesso!";
  msgStatus.style.color = "green";
  form.reset();
});

// Scroll reveal
const revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', () => {
  const trigger = window.innerHeight * 0.85;
  revealElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

// Contadores animados
const numeros = document.querySelectorAll('.numero');
numeros.forEach(num => {
  const valorFinal = +num.dataset.num;
  let count = 0;
  const interval = setInterval(() => {
    count += Math.ceil(valorFinal/100);
    if(count >= valorFinal){
      num.textContent = '+' + valorFinal;
      clearInterval(interval);
    } else {
      num.textContent = '+' + count;
    }
  }, 20);
});

// Carrossel de depoimentos
let idx = 0;
const depoimentos = document.querySelectorAll('.depoimento');
function mostrarDepoimento(){
  depoimentos.forEach(d => d.style.display = 'none');
  depoimentos[idx].style.display = 'block';
  idx = (idx + 1) % depoimentos.length;
}
mostrarDepoimento();
setInterval(mostrarDepoimento, 5000);
