/**
 * ==================== MODULE TESTER ====================
 * A sidebar panel for testing optional modules
 * 
 * TO REMOVE: Simply delete this script tag from your HTML files
 * <script src="modules/module-tester.js"></script>
 */

(function() {
    // Module definitions
    const modules = [
        { id: 'scheduling', name: 'Online Scheduling', file: 'scheduling-widget.js', icon: '📅', desc: 'Book consultations online' },
        { id: 'visualizer', name: 'Flooring Visualizer', file: 'flooring-visualizer.js', icon: '🎨', desc: 'Preview floors in rooms' },
        { id: 'beforeafter', name: 'Before/After Slider', file: 'before-after-slider.js', icon: '↔️', desc: 'Compare transformations' },
        { id: 'newsletter', name: 'Newsletter Popup', file: 'newsletter-popup.js', icon: '📧', desc: 'Email capture popup' },
        { id: 'chatbot', name: 'Chatbot Widget', file: 'chatbot-widget.js', icon: '💬', desc: 'FAQ assistant bot' },
        { id: 'blog', name: 'Blog Section', file: 'blog-section.js', icon: '📝', desc: 'Tips & guides' },
        { id: 'video', name: 'Video Hero', file: 'video-hero.js', icon: '🎬', desc: 'Video background' },
        { id: 'filters', name: 'Product Filters', file: 'product-filters.js', icon: '🔍', desc: 'Filter products' },
        { id: 'multilingual', name: 'Multilingual', file: 'multilingual.js', icon: '🌐', desc: 'Language switcher' }
    ];

    // Track loaded modules
    const loadedModules = new Set();

    // Create tester panel HTML
    const html = `
        <div id="moduleTester" class="fixed top-1/2 -translate-y-1/2 right-0 z-[9999] flex items-center">
            <!-- Toggle Button -->
            <button id="testerToggle" class="bg-slate-800 text-white px-2 py-4 rounded-l-lg shadow-lg hover:bg-slate-700 transition" title="Module Tester">
                <span class="text-lg">🧪</span>
            </button>
            
            <!-- Panel -->
            <div id="testerPanel" class="hidden bg-white w-72 max-h-[80vh] overflow-y-auto shadow-2xl border-l border-gray-200 rounded-l-lg">
                <!-- Header -->
                <div class="bg-slate-800 text-white p-4 sticky top-0">
                    <div class="flex items-center justify-between">
                        <h3 class="font-bold">🧪 Module Tester</h3>
                        <button id="testerClose" class="text-gray-400 hover:text-white text-xl">&times;</button>
                    </div>
                    <p class="text-xs text-gray-400 mt-1">Click to load/unload modules</p>
                </div>
                
                <!-- Module List -->
                <div class="p-3 space-y-2" id="moduleList"></div>
                
                <!-- Footer -->
                <div class="p-3 border-t bg-gray-50 text-xs text-gray-500">
                    <p><strong>To remove tester:</strong></p>
                    <code class="block mt-1 bg-gray-200 p-2 rounded text-[10px] break-all">Delete: modules/module-tester.js</code>
                </div>
            </div>
        </div>
    `;

    // Inject HTML
    document.body.insertAdjacentHTML('beforeend', html);

    // Populate module list
    const moduleList = document.getElementById('moduleList');
    modules.forEach(mod => {
        const item = document.createElement('div');
        item.className = 'module-item flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-amber-50 transition border';
        item.dataset.id = mod.id;
        item.innerHTML = `
            <span class="text-2xl">${mod.icon}</span>
            <div class="flex-1">
                <h4 class="font-semibold text-slate-800 text-sm">${mod.name}</h4>
                <p class="text-xs text-gray-500">${mod.desc}</p>
            </div>
            <div class="status w-3 h-3 rounded-full bg-gray-300"></div>
        `;
        item.onclick = () => toggleModule(mod, item);
        moduleList.appendChild(item);
    });

    // Toggle panel visibility
    document.getElementById('testerToggle').onclick = () => {
        document.getElementById('testerPanel').classList.toggle('hidden');
    };
    document.getElementById('testerClose').onclick = () => {
        document.getElementById('testerPanel').classList.add('hidden');
    };

    // Load/unload module function
    function toggleModule(mod, item) {
        const status = item.querySelector('.status');
        
        if (loadedModules.has(mod.id)) {
            // Can't truly unload JS, but we can indicate it
            alert(`"${mod.name}" is loaded. Refresh the page to unload modules.`);
            return;
        }

        // Load the module
        const script = document.createElement('script');
        script.src = `modules/${mod.file}`;
        script.onload = () => {
            loadedModules.add(mod.id);
            status.classList.remove('bg-gray-300');
            status.classList.add('bg-green-500');
            item.classList.add('border-green-500', 'bg-green-50');
            item.classList.remove('bg-gray-50');
        };
        script.onerror = () => {
            alert(`Failed to load ${mod.name}. Make sure the file exists.`);
        };
        document.body.appendChild(script);
    }

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        #moduleTester { font-family: 'Inter', sans-serif; }
        #testerPanel::-webkit-scrollbar { width: 6px; }
        #testerPanel::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
    `;
    document.head.appendChild(style);
})();
