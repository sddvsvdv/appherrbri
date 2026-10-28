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
const list=Array.from(document.querySelectorAll("#tracking-list li")),next=document.getElementById("tracking-next"),reset=document.getElementById("tracking-reset"),progress=document.getElementById("progress-fill"),live=document.getElementById("tracking-live");
let current=0;
function renderTracking(){list.forEach(function(item,i){item.classList.toggle("current",i===current);item.classList.toggle("done",i<current);if(i===current)item.setAttribute("aria-current","step");else item.removeAttribute("aria-current");});progress.style.width=(current/(list.length-1)*100)+"%";next.disabled=current===list.length-1;live.textContent="Estado ficticio: "+list[current].querySelector("strong").textContent+".";}
next.addEventListener("click",function(){if(current<list.length-1){current++;renderTracking();}});
reset.addEventListener("click",function(){current=0;renderTracking();});renderTracking();
})();