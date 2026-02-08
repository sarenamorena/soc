document.addEventListener('DOMContentLoaded', () => {
    
    const overlay = document.getElementById('popup-overlay');
    const popupBox = document.querySelector('.popup-box');
    const closeBtn = document.querySelector('.close-btn');
    const itemLinks = document.querySelectorAll('.item-link');
    const allContents = document.querySelectorAll('.popup-content');

    // Function to Open Popup
    function openPopup(contentId, color) {
        // 1. Hide all contents
        allContents.forEach(el => el.classList.add('hidden'));

        // 2. Show specific content
        const targetContent = document.getElementById(contentId);
        if (targetContent) {
            targetContent.classList.remove('hidden');
        }

        // 3. Set background color
        popupBox.style.backgroundColor = color || '#fff';

        // 4. Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scroll
    }

    // Function to Close Popup
    function closePopup() {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Resume background scroll
    }

    // Event Listeners for Items
    itemLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('data-popup');
            const color = link.getAttribute('data-color');
            openPopup(targetId, color);
        });
    });

    // Close logic
    closeBtn.addEventListener('click', closePopup);
    
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closePopup();
        }
    });
});