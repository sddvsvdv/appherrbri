"use strict";
(function(){
const toggle=document.querySelector(".menu-toggle"),nav=document.getElementById("nav-links");
function closeMenu(){nav.classList.remove("open");toggle.setAttribute("aria-expanded","false");toggle.setAttribute("aria-label","Abrir menú");}
toggle.addEventListener("click",function(){const open=!nav.classList.contains("open");nav.classList.toggle("open",open);toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú");});
nav.querySelectorAll("a").forEach(function(a){a.addEventListener("click",closeMenu);});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu();});
document.addEventListener("click",function(e){if(!nav.contains(e.target)&&!toggle.contains(e.target))closeMenu();});
const services={
directo:{name:"Transporte directo",description:"Recogida en origen, coordinación de un transporte dedicado y entrega directa en destino.",steps:["Recogida","Transporte directo","Entrega"]},
salud:{name:"Distribución farmacéutica",description:"Coordinación de la entrega de mercancía sanitaria según los requisitos acordados con el cliente.",steps:["Coordinación","Recogida sanitaria","Entrega al centro"]},
aero:{name:"Carga aeroportuaria",description:"Planificación de la documentación, los accesos a la terminal de carga y la recogida o entrega.",steps:["Documentación","Terminal de carga","Destino"]},
reparto:{name:"Reparto y distribución",description:"Organización ilustrativa de rutas de entrega para un operador logístico o empresa.",steps:["Preparar ruta","Distribuir","Confirmar entregas"]},
red:{name:"Envío por red colaboradora",description:"Recogida del paquete y gestión del transporte mediante un operador de paquetería colaborador.",steps:["Recogida","Operador colaborador","Entrega"]}};
const service=document.getElementById("service-select"),destination=document.getElementById("destination-select");
function renderScenario(){const item=services[service.value];document.getElementById("scenario-title-output").textContent=item.name+" → "+destination.value;document.getElementById("scenario-description").textContent=item.description;item.steps.forEach(function(step,i){document.getElementById("flow-"+(i+1)).textContent=step;});}
document.getElementById("scenario-form").addEventListener("submit",function(e){e.preventDefault();renderScenario();});
renderScenario();

  /* Carrusel accesible: avance cada 6 s, flechas, puntos, pausa y deslizamiento táctil.
     No accede a red ni registra datos personales. */
  const carousel = document.querySelector("[data-hero-carousel]");
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll("[data-hero-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));
    const previous = carousel.querySelector("[data-carousel-prev]");
    const next = carousel.querySelector("[data-carousel-next]");
    const status = carousel.querySelector("[data-carousel-status]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let activeIndex = 0;
    let autoTimer = null;
    let paused = false;
    let touchStart = null;

    function renderSlide(index, announce) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        slide.hidden = i !== activeIndex;
      });
      dots.forEach(function (dot, i) {
        if (i === activeIndex) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
      if (announce) {
        const title = slides[activeIndex].querySelector(".hero-slide-caption strong");
        status.textContent = "Fotografía " + (activeIndex + 1) + " de " + slides.length + ": " + title.textContent;
      }
    }

    function stopAuto() {
      if (autoTimer !== null) window.clearInterval(autoTimer);
      autoTimer = null;
    }
    function startAuto() {
      stopAuto();
      if (paused || reducedMotion.matches || document.hidden || slides.length < 2) return;
      autoTimer = window.setInterval(function () { renderSlide(activeIndex + 1, false); }, 6000);
    }
    function navigate(index) {
      renderSlide(index, true);
      startAuto();
    }
    previous.addEventListener("click", function () { navigate(activeIndex - 1); });
    next.addEventListener("click", function () { navigate(activeIndex + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () { navigate(i); });
    });
    carousel.addEventListener("mouseenter", function () { paused = true; stopAuto(); });
    carousel.addEventListener("mouseleave", function () { paused = false; startAuto(); });
    carousel.addEventListener("focusin", function () { paused = true; stopAuto(); });
    carousel.addEventListener("focusout", function (event) {
      if (!carousel.contains(event.relatedTarget)) { paused = false; startAuto(); }
    });
    carousel.addEventListener("touchstart", function (event) {
      if (event.touches.length === 1) touchStart = event.touches[0].clientX;
    }, { passive: true });
    carousel.addEventListener("touchend", function (event) {
      if (touchStart === null || !event.changedTouches.length) return;
      const diff = touchStart - event.changedTouches[0].clientX;
      touchStart = null;
      if (Math.abs(diff) > 45) navigate(activeIndex + (diff > 0 ? 1 : -1));
    }, { passive: true });
    document.addEventListener("visibilitychange", startAuto);
    if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", startAuto);
    else if (reducedMotion.addListener) reducedMotion.addListener(startAuto);
    renderSlide(0, false);
    startAuto();
  }

})();