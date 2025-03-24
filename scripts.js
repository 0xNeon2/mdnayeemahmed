// Scroll Animation for Cards
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.5 });

cards.forEach(card => {
    observer.observe(card);
});

// Card Click Interaction
cards.forEach(card => {
    const header = card.querySelector('h2');
    header.addEventListener('click', () => {
        card.classList.toggle('expanded');
    });
});

// Floating Navbar Toggle
document.querySelector('.nav-toggle').addEventListener('click', function(e) {
    e.stopPropagation();
    document.querySelector('.floating-nav').classList.toggle('active');
  });
  
  // Auto-close when clicking a link or outside
  document.addEventListener('click', function(e) {
    const nav = document.querySelector('.floating-nav');
    if (!nav.contains(e.target)) {
      nav.classList.remove('active');
    }
  });
  
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
      document.querySelector('.floating-nav').classList.remove('active');
    });
  });