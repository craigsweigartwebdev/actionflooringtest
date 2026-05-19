(function(){
const posts=[
{id:1,cat:'Tips',title:'How to Choose the Right Flooring',excerpt:'A guide to selecting flooring based on lifestyle, budget, and style.',img:'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&q=60',date:'Jan 15, 2026'},
{id:2,cat:'Care',title:'Hardwood Maintenance Do\'s & Don\'ts',excerpt:'Keep your hardwood floors beautiful for decades with these tips.',img:'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&q=60',date:'Jan 10, 2026'},
{id:3,cat:'Trends',title:'2026 Flooring Trends',excerpt:'Discover the latest flooring trends from warm tones to waterproof materials.',img:'https://images.unsplash.com/photo-1484154218962-a1c429d4c713?w=400&q=60',date:'Jan 5, 2026'}
];
const html=`<section id="blog" class="py-16 bg-white">
<div class="max-w-7xl mx-auto px-4">
<div class="text-center mb-10"><span class="text-amber-600 font-bold uppercase text-sm">Resources</span><h2 class="text-slate-800 text-3xl font-serif font-bold mt-2">Flooring Guide & Tips</h2><div class="h-1 w-20 bg-amber-500 mx-auto mt-4 rounded"></div></div>
<div class="grid md:grid-cols-3 gap-6">
${posts.map(p=>`<article class="bg-gray-50 rounded-xl overflow-hidden border hover:shadow-lg transition">
<img src="${p.img}" alt="${p.title}" class="w-full h-40 object-cover" loading="lazy">
<div class="p-5"><div class="flex items-center gap-2 mb-2"><span class="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">${p.cat}</span><span class="text-xs text-gray-500">${p.date}</span></div>
<h3 class="font-bold text-slate-800 mb-2">${p.title}</h3><p class="text-gray-600 text-sm mb-3">${p.excerpt}</p>
<a href="#quote" class="text-amber-600 font-semibold text-sm hover:underline">Read More →</a></div></article>`).join('')}
</div></div></section>`;
const reviews=document.getElementById('reviews');
if(reviews)reviews.insertAdjacentHTML('beforebegin',html);
})();
