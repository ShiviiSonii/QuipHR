class TestimonialComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="testimonial">
          <div class="carousel-container">
            <div class="testimonial-slide slide-prev">
              <div class="testimonial-card">
                <div class="testimonial-content">
                 <p class="testimonial-text">"The service exceeded my expectations. The team was professional and delivered outstanding results."</p>
                  <p class="testimonial-author">John Smith</p>
                  <p class="testimonial-position">CEO, Tech Corp</p>
                </div>
              </div>
            </div>
            <div class="testimonial-slide slide-current">
              <div class="testimonial-card">
                <div class="testimonial-content">
                 <p class="testimonial-text">"I couldn't be happier with the outcome. The attention to detail and dedication to quality was impressive."</p>
                  <p class="testimonial-author">Sarah Johnson</p>
                  <p class="testimonial-position">Marketing Director</p>
                </div>
              </div>
            </div>
            <div class="testimonial-slide slide-next">
              <div class="testimonial-card">
                <div class="testimonial-content">
                  <p class="testimonial-text">"Working with this team has been a game-changer for our business. Highly recommended!"</p>
                  <p class="testimonial-author">Mike Wilson</p>
                  <p class="testimonial-position">Product Manager</p>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-nav prev-button">←</button>
          <button class="carousel-nav next-button">→</button>
        </div>
      `;

    this.initCarousel();
  }

  initCarousel() {
    const slides = this.querySelectorAll(".testimonial-slide");
    const prevButton = this.querySelector(".prev-button");
    const nextButton = this.querySelector(".next-button");
    const container = this.querySelector(".carousel-container");

    let currentIndex = 1;

    const updateSlides = () => {
      slides.forEach((slide, index) => {
        slide.className = "testimonial-slide";
        if (index === currentIndex) {
          slide.classList.add("slide-current");
        } else if (
          index === currentIndex - 1 ||
          (currentIndex === 0 && index === slides.length - 1)
        ) {
          slide.classList.add("slide-prev");
        } else if (
          index === currentIndex + 1 ||
          (currentIndex === slides.length - 1 && index === 0)
        ) {
          slide.classList.add("slide-next");
        }
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % slides.length;
      updateSlides();
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateSlides();
    };

    if (nextButton) nextButton.addEventListener("click", nextSlide);
    if (prevButton) prevButton.addEventListener("click", prevSlide);

    slides.forEach((slide, index) => {
      slide.addEventListener("click", () => {
        if (index !== currentIndex) {
          currentIndex = index;
          updateSlides();
        }
      });
    });

    let touchStartX = 0;
    let touchEndX = 0;

    if (container) {
      container.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
      });

      container.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
      });
    }

    const handleSwipe = () => {
      const swipeThreshold = 50;
      const difference = touchStartX - touchEndX;

      if (Math.abs(difference) > swipeThreshold) {
        if (difference > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
    };

    updateSlides();
  }
}

customElements.define("testimonial-component", TestimonialComponent);
