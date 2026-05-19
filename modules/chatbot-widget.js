/**
 * ==================== CHATBOT WIDGET ====================
 * Floating FAQ chatbot assistant
 * 
 * Usage: <script src="modules/chatbot-widget.js"></script>
 */
(function() {
    // FAQ responses
    const faqs = {
        hours: "We're available 7 days a week to respond to estimate requests!",
        phone: "Call us at 208-995-9186",
        email: "Email: info@actionflooring208.com",
        area: "We serve Treasure Valley, Twin Falls, Cascade, McCall, Sun Valley & surrounding areas.",
        services: "We offer: Hardwood, Engineered, Laminate, LVP, LVT, Sheet Vinyl, Carpet & Refinishing.",
        quote: "Visit our Quote page or call 208-995-9186 for a free estimate!",
        cost: "Pricing varies by flooring type & square footage. We offer free estimates!",
        lvp: "LVP is waterproof, durable, and looks like real wood. Great for any room!",
        hardwood: "We install solid & prefinished hardwood using glue-down or nail-down methods.",
        carpet: "We've been installing carpet for 20+ years. Residential & commercial!",
        experience: "We have 20+ years of flooring installation experience."
    };

    // Create widget HTML
    const html = `
        <button id="chatBtn" onclick="toggleChat()" class="fixed bottom-5 left-5 z-50 bg-slate-800 hover:bg-slate-700 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-2xl transition">
            💬
        </button>
        <div id="chatWidget" class="fixed bottom-20 left-5 z-50 hidden w-80 bg-white rounded-xl shadow-2xl border overflow-hidden">
            <div class="bg-slate-800 text-white p-3 flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-sm font-bold">AF</div>
                    <div>
                        <h4 class="font-bold text-sm">Action Flooring Helper</h4>
                        <p class="text-xs text-slate-400">Online now</p>
                    </div>
                </div>
                <button onclick="toggleChat()" class="text-xl hover:text-amber-400">&times;</button>
            </div>
            <div id="chatMsgs" class="h-64 overflow-y-auto p-3 space-y-3 bg-gray-50 text-sm"></div>
            <div class="p-3 border-t">
                <form id="chatForm" class="flex gap-2">
                    <input type="text" id="chatIn" placeholder="Ask a question..." class="flex-1 px-3 py-2 border rounded-full text-sm focus:outline-none focus:border-amber-500">
                    <button type="submit" class="w-9 h-9 bg-amber-500 hover:bg-amber-600 text-white rounded-full transition">→</button>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
    
    const msgs = document.getElementById('chatMsgs');
    
    // Add message to chat
    function addMsg(text, isUser = false) {
        const msgHtml = isUser 
            ? `<div class="flex justify-end"><div class="bg-amber-500 text-white rounded-xl px-3 py-2 max-w-[80%]">${text}</div></div>`
            : `<div class="flex gap-2"><div class="w-7 h-7 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold">AF</div><div class="bg-white rounded-xl px-3 py-2 shadow-sm max-w-[80%] border">${text}</div></div>`;
        msgs.insertAdjacentHTML('beforeend', msgHtml);
        msgs.scrollTop = msgs.scrollHeight;
    }
    
    // Get chatbot reply
    function getReply(message) {
        const lower = message.toLowerCase();
        for (const [key, value] of Object.entries(faqs)) {
            if (lower.includes(key)) return value;
        }
        if (lower.includes('price') || lower.includes('much')) return faqs.cost;
        if (lower.includes('call') || lower.includes('contact')) return faqs.phone;
        if (lower.includes('where') || lower.includes('location')) return faqs.area;
        if (lower.includes('year')) return faqs.experience;
        return "I can help with services, pricing, areas & quotes. Or call 208-995-9186!";
    }
    
    // Initial greeting
    addMsg("Hi! 👋 How can I help you today?");
    
    // Toggle chat visibility
    window.toggleChat = () => document.getElementById('chatWidget').classList.toggle('hidden');
    
    // Handle form submission
    document.getElementById('chatForm').onsubmit = (e) => {
        e.preventDefault();
        const input = document.getElementById('chatIn');
        const message = input.value.trim();
        if (!message) return;
        addMsg(message, true);
        input.value = '';
        setTimeout(() => addMsg(getReply(message)), 500);
    };
})();
