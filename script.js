// Carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
    
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    });
    
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
    });
    
    // Auto-advance carousel
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
    }, 6000);
    
    // Mobile menu toggle
document.addEventListener('menu-toggle', () => {
  const sidebar = document.querySelector('custom-sidebar');
  const isHidden = sidebar.getAttribute('data-hidden') === 'true';
  sidebar.setAttribute('data-hidden', (!isHidden).toString());
  document.body.style.overflow = isHidden ? 'hidden' : 'auto';
});

    // Close sidebar when clicking on a link (mobile)
    const sidebarLinks = document.querySelectorAll('custom-sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                sidebar.setAttribute('data-hidden', 'true');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Testimonial auto-scroll
    const testimonialSlider = document.querySelector('.testimonial-slider');
    if (testimonialSlider) {
        let scrollAmount = 0;
        const scrollStep = 320;
        const maxScroll = testimonialSlider.scrollWidth - testimonialSlider.clientWidth;
        
        function scrollTestimonials() {
            scrollAmount = (scrollAmount + scrollStep) % (maxScroll + scrollStep);
            testimonialSlider.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
        
        setInterval(scrollTestimonials, 4000);
    }
});