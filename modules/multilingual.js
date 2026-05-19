(function(){
const t={en:{home:'Home',services:'Services',about:'About',portfolio:'Portfolio',reviews:'Reviews',contact:'Contact',estimate:'Get Estimate',hero:'Flooring Installation Done Clean, Precise & On Time',cta:'Request Free Estimate'},
es:{home:'Inicio',services:'Servicios',about:'Nosotros',portfolio:'Portafolio',reviews:'Reseñas',contact:'Contacto',estimate:'Cotización',hero:'Instalación de Pisos Limpia, Precisa y a Tiempo',cta:'Solicitar Cotización Gratis'}};
let lang=localStorage.getItem('lang')||'en';
const html=`<div class="fixed top-20 right-4 z-40">
<button id="langBtn" class="flex items-center gap-2 bg-white shadow-lg rounded-full px-3 py-1.5 border text-sm"><span id="langFlag">${lang==='en'?'🇺🇸':'🇲🇽'}</span><span id="langCode">${lang.toUpperCase()}</span></button>
<div id="langMenu" class="hidden absolute right-0 mt-2 bg-white rounded-lg shadow-xl border overflow-hidden">
<button onclick="setLang('en')" class="flex items-center gap-2 w-full px-4 py-2 hover:bg-amber-50 text-sm">🇺🇸 English</button>
<button onclick="setLang('es')" class="flex items-center gap-2 w-full px-4 py-2 hover:bg-amber-50 text-sm">🇲🇽 Español</button>
</div></div>`;
document.body.insertAdjacentHTML('beforeend',html);
document.getElementById('langBtn').onclick=()=>document.getElementById('langMenu').classList.toggle('hidden');
document.onclick=e=>{if(!e.target.closest('#langBtn')&&!e.target.closest('#langMenu'))document.getElementById('langMenu').classList.add('hidden')};
window.setLang=l=>{lang=l;localStorage.setItem('lang',l);document.getElementById('langFlag').textContent=l==='en'?'🇺🇸':'🇲🇽';document.getElementById('langCode').textContent=l.toUpperCase();document.getElementById('langMenu').classList.add('hidden');apply()};
const apply=()=>{document.documentElement.lang=lang;const h1=document.querySelector('#home h1');if(h1)h1.innerHTML=t[lang].hero.replace('Clean',`<br>Clean`);const cta=document.querySelector('#home a[href="#quote"]');if(cta)cta.textContent=t[lang].cta};
if(lang!=='en')apply();
})();
