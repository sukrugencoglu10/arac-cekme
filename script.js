// Sticky Header Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Optional: Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Google Ads Tracking - Fallback Click Listeners (if GTM is not used)
// These can be useful to track specific clicks programmatically.
document.addEventListener('DOMContentLoaded', () => {
    const callBtns = document.querySelectorAll('a[href^="tel:"]');
    const wpBtns = document.querySelectorAll('.whatsapp-btn, #hero-whatsapp-btn');
    const locBtns = document.querySelectorAll('.location-btn');

    callBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Call button clicked - Event can be sent to Google Ads');
            // if (typeof gtag === 'function') {
            //     gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/call_conversion'});
            // }
        });
    });

    wpBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('WhatsApp button clicked - Event can be sent to Google Ads');
            // if (typeof gtag === 'function') {
            //     gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/whatsapp_click'});
            // }
        });
    });

    locBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Location button clicked - Event can be sent to Google Ads');
            // if (typeof gtag === 'function') {
            //     gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/location_click'});
            // }
        });
    });
});
