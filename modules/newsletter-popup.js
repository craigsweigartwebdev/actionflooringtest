/**
 * ==================== NEWSLETTER POPUP ====================
 * Email capture popup with special offer
 * - Shows after 5 seconds
 * - Exit intent trigger
 * - Session-based (won't repeat)
 * 
 * Usage: <script src="modules/newsletter-popup.js"></script>
 */
(function() {
    // Don't show if already closed this session
    if (sessionStorage.getItem('nl_closed')) return;

    // Create popup HTML
    const html = `
        <div id="nlPopup" class="fixed inset-0 bg-black/60 z-[100] hidden items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-sm w-full shadow-2xl overflow-hidden relative">
                <button onclick="closeNL()" class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl z-10">&times;</button>
                <div class="bg-amber-500 p-6 text-white text-center">
                    <div class="text-4xl mb-2">📧</div>
                    <p class="font-bold text-lg">Stay Updated</p>
                </div>
                <div class="p-6">
                    <span class="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold mb-2">Exclusive Offer</span>
                    <h3 class="text-xl font-bold text-slate-800 mb-2">Get 10% Off Your First Project</h3>
                    <p class="text-gray-600 text-sm mb-4">Join our newsletter for exclusive deals and flooring tips.</p>
                    <form id="nlForm">
                        <input type="text" name="name" placeholder="First Name" required class="w-full px-3 py-2 border rounded-lg mb-2 focus:border-amber-500 focus:outline-none">
                        <input type="email" name="email" placeholder="Email" required class="w-full px-3 py-2 border rounded-lg mb-3 focus:border-amber-500 focus:outline-none">
                        <button type="submit" class="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 rounded-lg transition">
                            Get My 10% Discount
                        </button>
                    </form>
                    <p class="text-xs text-gray-500 mt-3 text-center">We respect your privacy. Unsubscribe anytime.</p>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);

    // Open popup
    window.openNL = () => {
        document.getElementById('nlPopup').classList.remove('hidden');
        document.getElementById('nlPopup').classList.add('flex');
        document.body.style.overflow = 'hidden';
    };

    // Close popup
    window.closeNL = () => {
        document.getElementById('nlPopup').classList.add('hidden');
        document.getElementById('nlPopup').classList.remove('flex');
        document.body.style.overflow = '';
        sessionStorage.setItem('nl_closed', '1');
    };

    // Form submission
    document.getElementById('nlForm').onsubmit = (e) => {
        e.preventDefault();
        alert('Thanks! Check your email for your 10% discount code.');
        closeNL();
    };

    // Close on backdrop click
    document.getElementById('nlPopup').onclick = (e) => {
        if (e.target.id === 'nlPopup') closeNL();
    };

    // Show after 5 seconds
    setTimeout(openNL, 5000);

    // Exit intent trigger
    document.addEventListener('mouseout', (e) => {
        if (e.clientY < 10 && !sessionStorage.getItem('nl_closed')) {
            openNL();
        }
    }, { once: true });
})();
