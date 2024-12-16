const popup = document.getElementById('popup');

        function openPopup() {
            popup.style.display = 'flex';
        }

        function closePopup() {
            popup.style.display = 'none';
        }

        // Lógica del Slideshow
        let slideIndex = 1;
        showSlides(slideIndex);

        function changeSlide(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            const slides = document.querySelectorAll('.slides');
            const dots = document.querySelectorAll('.dot');

            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            slides.forEach(slide => slide.style.display = 'none');
            dots.forEach(dot => dot.classList.remove('active'));

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('active');
        }