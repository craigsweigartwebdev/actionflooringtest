(function(){
const products=[
{name:'Natural Oak Hardwood',type:'hardwood',color:'natural',price:'premium',img:'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=300&q=60'},
{name:'Gray Oak LVP',type:'lvp',color:'gray',price:'mid',img:'https://images.unsplash.com/photo-1484154218962-a1c429d4c713?w=300&q=60'},
{name:'White Marble LVT',type:'lvt',color:'light',price:'mid',img:'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=300&q=60'},
{name:'Rustic Laminate',type:'laminate',color:'natural',price:'budget',img:'https://images.unsplash.com/photo-1588365664124-78536f01fd8c?w=300&q=60'},
{name:'Beige Carpet',type:'carpet',color:'natural',price:'budget',img:'https://images.unsplash.com/photo-1522771772030-2f588605ce01?w=300&q=60'},
{name:'Dark Walnut',type:'hardwood',color:'dark',price:'premium',img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&q=60'}
];
const render=list=>list.map(p=>`<div class="product-card bg-white rounded-xl overflow-hidden border hover:shadow-lg transition" data-type="${p.type}" data-color="${p.color}" data-price="${p.price}"><img src="${p.img}" alt="${p.name}" class="w-full h-32 object-cover" loading="lazy"><div class="p-3"><span class="text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">${p.type.toUpperCase()}</span><h4 class="font-bold text-slate-800 mt-1 text-sm">${p.name}</h4><div class="flex justify-between items-center mt-2"><span class="text-xs ${p.price==='budget'?'text-green-600':p.price==='mid'?'text-amber-600':'text-purple-600'}">${p.price==='budget'?'$ Budget':p.price==='mid'?'$$ Mid':'$$$ Premium'}</span><a href="#quote" class="text-amber-600 text-xs font-semibold">Quote →</a></div></div></div>`).join('');
const html=`<section id="products" class="py-16 bg-gray-50">
<div class="max-w-7xl mx-auto px-4">
<div class="text-center mb-10"><span class="text-amber-600 font-bold uppercase text-sm">Browse Options</span><h2 class="text-slate-800 text-3xl font-serif font-bold mt-2">Flooring Products</h2></div>
<div class="bg-white rounded-xl p-4 mb-6 border flex flex-wrap gap-3 items-center">
<span class="font-bold text-sm">Filter:</span>
<select id="fType" class="px-3 py-1.5 border rounded-lg text-sm"><option value="all">All Types</option><option value="hardwood">Hardwood</option><option value="lvp">LVP</option><option value="lvt">LVT</option><option value="laminate">Laminate</option><option value="carpet">Carpet</option></select>
<select id="fColor" class="px-3 py-1.5 border rounded-lg text-sm"><option value="all">All Colors</option><option value="light">Light</option><option value="natural">Natural</option><option value="gray">Gray</option><option value="dark">Dark</option></select>
<select id="fPrice" class="px-3 py-1.5 border rounded-lg text-sm"><option value="all">All Prices</option><option value="budget">Budget</option><option value="mid">Mid-Range</option><option value="premium">Premium</option></select>
<button onclick="resetFilters()" class="text-amber-600 text-sm font-semibold ml-auto">Reset</button>
</div>
<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" id="productGrid">${render(products)}</div>
</div></section>`;
const services=document.getElementById('services');
if(services)services.insertAdjacentHTML('afterend',html);
const filter=()=>{const t=document.getElementById('fType').value,c=document.getElementById('fColor').value,p=document.getElementById('fPrice').value;
const f=products.filter(x=>(t==='all'||x.type===t)&&(c==='all'||x.color===c)&&(p==='all'||x.price===p));
document.getElementById('productGrid').innerHTML=f.length?render(f):'<p class="col-span-full text-center text-gray-500 py-8">No products match filters</p>'};
['fType','fColor','fPrice'].forEach(id=>document.getElementById(id).onchange=filter);
window.resetFilters=()=>{['fType','fColor','fPrice'].forEach(id=>document.getElementById(id).value='all');filter()};
})();
