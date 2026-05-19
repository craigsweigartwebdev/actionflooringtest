/**
 * ==================== SCHEDULING WIDGET ====================
 * Adds a floating "Book Consultation" button and modal
 * 
 * Usage: <script src="modules/scheduling-widget.js"></script>
 */
(function() {
    // Create modal HTML
    const html = `
        <div id="scheduleModal" class="fixed inset-0 bg-black/50 z-[100] hidden items-center justify-center p-4">
            <div class="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                <div class="p-5 border-b flex justify-between items-center">
                    <h2 class="text-xl font-bold">📅 Book a Consultation</h2>
                    <button onclick="closeSchedule()" class="text-2xl text-gray-400 hover:text-gray-600">&times;</button>
                </div>
                <form id="scheduleForm" class="p-5 space-y-4">
                    <div>
                        <label class="block text-sm font-bold mb-1">Service Type *</label>
                        <select name="service" required class="w-full px-3 py-2 border rounded-lg bg-gray-50">
                            <option value="">Select...</option>
                            <option>Hardwood</option>
                            <option>Engineered Flooring</option>
                            <option>LVP/LVT</option>
                            <option>Laminate</option>
                            <option>Carpet</option>
                            <option>Sheet Vinyl</option>
                            <option>Refinishing</option>
                        </select>
                    </div>
                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-sm font-bold mb-1">Date *</label>
                            <input type="date" name="date" required class="w-full px-3 py-2 border rounded-lg bg-gray-50">
                        </div>
                        <div>
                            <label class="block text-sm font-bold mb-1">Time *</label>
                            <select name="time" required class="w-full px-3 py-2 border rounded-lg bg-gray-50">
                                <option value="">Select...</option>
                                <option>9:00 AM</option>
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>1:00 PM</option>
                                <option>2:00 PM</option>
                                <option>3:00 PM</option>
                                <option>4:00 PM</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Name *</label>
                        <input type="text" name="name" required class="w-full px-3 py-2 border rounded-lg bg-gray-50" placeholder="Your name">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Phone *</label>
                        <input type="tel" name="phone" required class="w-full px-3 py-2 border rounded-lg bg-gray-50" placeholder="(208) 555-0000">
                    </div>
                    <div>
                        <label class="block text-sm font-bold mb-1">Email *</label>
                        <input type="email" name="email" required class="w-full px-3 py-2 border rounded-lg bg-gray-50" placeholder="email@example.com">
                    </div>
                    <button type="submit" class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg transition">
                        Book Appointment
                    </button>
                    <p class="text-xs text-gray-500 text-center">Available 7 days a week</p>
                </form>
            </div>
        </div>
        <button onclick="openSchedule()" class="fixed bottom-5 right-5 z-50 bg-amber-500 hover:bg-amber-600 text-white px-5 py-3 rounded-full shadow-xl font-bold flex items-center gap-2 transition">
            📅 Book Consultation
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', html);
    
    // Set minimum date to today
    const dateInput = document.querySelector('#scheduleModal input[name="date"]');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];
    
    // Modal open/close functions
    window.openSchedule = () => {
        document.getElementById('scheduleModal').classList.remove('hidden');
        document.getElementById('scheduleModal').classList.add('flex');
        document.body.style.overflow = 'hidden';
    };
    
    window.closeSchedule = () => {
        document.getElementById('scheduleModal').classList.add('hidden');
        document.getElementById('scheduleModal').classList.remove('flex');
        document.body.style.overflow = '';
    };
    
    // Form submission
    document.getElementById('scheduleForm').onsubmit = (e) => {
        e.preventDefault();
        alert('Appointment requested! We will contact you to confirm.');
        closeSchedule();
        e.target.reset();
    };
    
    // Close on backdrop click
    document.getElementById('scheduleModal').onclick = (e) => {
        if (e.target.id === 'scheduleModal') closeSchedule();
    };
})();
