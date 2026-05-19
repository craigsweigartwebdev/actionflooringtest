/**
 * ==================== FLOORING VISUALIZER ====================
 * Interactive tool to preview flooring in different rooms
 * 
 * Usage: <script src="modules/flooring-visualizer.js"></script>
 */
(function() {
    // Flooring options
    const floors = [
        { id: 'oak', name: 'Natural Oak', color: '#C4A77D' },
        { id: 'walnut', name: 'Dark Walnut', color: '#5C4033' },
        { id: 'gray', name: 'Gray LVP', color: '#9CA3AF' },
        { id: 'blonde', name: 'Blonde Maple', color: '#DEB887' },
        { id: 'slate', name: 'Slate Tile', color: '#708090' },
        { id: 'beige', name: 'Beige Carpet', color: '#D4C4B0' }
    ];
    
    // Room options
    const rooms = [
        { id: 'living', name: 'Living Room' },
        { id: 'kitchen', name: 'Kitchen' },
        { id: 'bedroom', name: 'Bedroom' }
    ];

    // Build section HTML
    const html = `
        <section id="visualizer" class="py-16 bg-slate-900 text-white">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-10">
                    <span class="text-amber-400 font-bold uppercase text-sm">Try It Out</span>
                    <h2 class="text-3xl font-serif font-bold mt-2">Flooring Visualizer</h2>
                    <p class="text-gray-400 mt-2">Preview different flooring options in your space</p>
                </div>
                <div class="grid lg:grid-cols-3 gap-6">
                    <!-- Preview Area -->
                    <div class="lg:col-span-2">
                        <div class="relative rounded-xl overflow-hidden aspect-video bg-gray-800">
                            <div id="vizPreview" class="w-full h-full bg-center bg-cover" style="background-image:url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=60')">
                                <div id="floorOverlay" class="absolute bottom-0 left-0 right-0 h-1/3" style="background:linear-gradient(to bottom,transparent,rgba(196,167,125,0.7))"></div>
                            </div>
                            <div id="vizBadge" class="absolute top-3 left-3 bg-black/70 px-3 py-1 rounded text-sm hidden">
                                <span id="vizName">-</span>
                            </div>
                        </div>
                    </div>
                    <!-- Controls -->
                    <div class="space-y-4">
                        <div class="bg-slate-800 rounded-xl p-4">
                            <h3 class="font-bold mb-3">Select Room</h3>
                            <div class="grid grid-cols-3 gap-2">
                                ${rooms.map(r => `<button class="room-btn px-3 py-2 rounded bg-slate-700 hover:bg-amber-500 text-sm transition" data-room="${r.id}">${r.name}</button>`).join('')}
                            </div>
                        </div>
                        <div class="bg-slate-800 rounded-xl p-4">
                            <h3 class="font-bold mb-3">Select Flooring</h3>
                            <div class="grid grid-cols-6 gap-2">
                                ${floors.map(f => `<button class="floor-btn w-full aspect-square rounded border-2 border-transparent hover:border-white transition" data-name="${f.name}" data-color="${f.color}" style="background:${f.color}" title="${f.name}"></button>`).join('')}
                            </div>
                        </div>
                        <a href="quote.html" class="block w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-xl text-center transition">
                            Get Quote for This Floor
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Insert after main content (before footer)
    const footer = document.querySelector('footer');
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', html);
    } else {
        document.body.insertAdjacentHTML('beforeend', html);
    }

    // Room button handlers
    document.querySelectorAll('.room-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.room-btn').forEach(b => b.classList.remove('bg-amber-500'));
            this.classList.add('bg-amber-500');
        };
    });

    // Floor button handlers
    document.querySelectorAll('.floor-btn').forEach(btn => {
        btn.onclick = function() {
            document.querySelectorAll('.floor-btn').forEach(b => {
                b.classList.remove('border-white', 'ring-2');
            });
            this.classList.add('border-white', 'ring-2');
            document.getElementById('floorOverlay').style.background = 
                `linear-gradient(to bottom, transparent 20%, ${this.dataset.color}ee)`;
            document.getElementById('vizBadge').classList.remove('hidden');
            document.getElementById('vizName').textContent = this.dataset.name;
        };
    });
})();
