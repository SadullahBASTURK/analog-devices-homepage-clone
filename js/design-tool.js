document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-design');
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active-slide');
            } else {
                slide.classList.remove('active-slide');
            }
        });

        buttons.forEach((btn, i) => {
            btn.classList.remove('active');
            if (i === index) {
                btn.classList.add('active');
            }
        });
    }

    function goToSlide(index) {
        showSlide(index);
    }

    // Başlangıçta ilk slaytı göster
    showSlide(0);

    // Butonlara tıklama olayları ekleme
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => goToSlide(index));
    });
});
