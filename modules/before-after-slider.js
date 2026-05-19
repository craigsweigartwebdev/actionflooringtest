(function(){
const html=`<style>.ba-slider{position:relative;overflow:hidden;border-radius:1rem}.ba-before{position:absolute;top:0;left:0;width:50%;height:100%;overflow:hidden}.ba-before img{position:absolute;top:0;left:0;width:200%;max-width:none;height:100%;object-fit:cover}.ba-handle{position:absolute;top:0;left:50%;width:4px;height:100%;background:#fff;cursor:ew-resize;transform:translateX(-50%);box-shadow:0 0 10px rgba(0,0,0,.3);z-index:10}.ba-handle::after{content:'⟷';position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);background:#fff;padding:8px;border-radius:50%;font-size:12px}</style>
<section id="transformations" class="py-16 bg-gray-50">
<div class="max-w-5xl mx-auto px-4">
<div class="text-center mb-10"><span class="text-amber-600 font-bold uppercase text-sm">See The Difference</span><h2 class="text-slate-800 text-3xl font-serif font-bold mt-2">Before & After</h2><div class="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded"></div></div>
<div class="grid md:grid-cols-2 gap-6">
<div class="bg-white rounded-xl shadow-lg overflow-hidden"><div class="ba-slider h-64"><img src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=60" class="w-full h-full object-cover"><div class="ba-before"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=60"></div><div class="ba-handle"></div></div><div class="p-4"><h3 class="font-bold">Living Room Hardwood</h3><p class="text-gray-600 text-sm">Boise, ID</p></div></div>
<div class="bg-white rounded-xl shadow-lg overflow-hidden"><div class="ba-slider h-64"><img src="https://images.unsplash.com/photo-1484154218962-a1c429d4c713?w=600&q=60" class="w-full h-full object-cover"><div class="ba-before"><img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=60"></div><div class="ba-handle"></div></div><div class="p-4"><h3 class="font-bold">Kitchen LVP Install</h3><p class="text-gray-600 text-sm">Meridian, ID</p></div></div>
</div></div></section>`;
const portfolio=document.getElementById('portfolio');
if(portfolio)portfolio.insertAdjacentHTML('afterend',html);
document.querySelectorAll('.ba-slider').forEach(s=>{const h=s.querySelector('.ba-handle'),b=s.querySelector('.ba-before');let down=false;
const update=x=>{const r=s.getBoundingClientRect();let p=((x-r.left)/r.width)*100;p=Math.max(0,Math.min(100,p));b.style.width=p+'%';h.style.left=p+'%'};
h.onmousedown=()=>down=true;document.onmouseup=()=>down=false;s.onmousemove=e=>{if(down)update(e.clientX)};s.onclick=e=>update(e.clientX);
h.ontouchstart=()=>down=true;document.ontouchend=()=>down=false;s.ontouchmove=e=>{if(down)update(e.touches[0].clientX)}});
})();
