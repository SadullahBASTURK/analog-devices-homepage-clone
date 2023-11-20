document.addEventListener('DOMContentLoaded', function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const buttons = document.querySelectorAll('.carousel-btn');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
  
      buttons.forEach((btn, i) => {
        btn.classList.remove('active');
        if (i === index) {
          btn.classList.add('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
  
    function goToSlide(index) {
      currentSlide = index;
      showSlide(currentSlide);
    }
  
    // Başlangıçta ilk slaytı göster
    showSlide(currentSlide);
  
    // Otomatik kaydırma özelliği eklemek istiyorsanız:
      setInterval(nextSlide, 6000); // Her 6 saniyede bir kaydır
  
    // Butonlara tıklama olayları ekleme
    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => goToSlide(index));
    });
  });
  