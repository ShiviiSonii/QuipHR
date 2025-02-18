class TestimonialComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="testimonial-section">
        <div class="carousel-container">
            <div class="testimonial-slide slide-prev">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-text">"The service exceeded my expectations. The team was professional and delivered outstanding results."</p>
                        <p class="testimonial-author">John Smith</p>
                        <p class="testimonial-position">CEO, Tech Corp</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-slide slide-current">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-text">"I couldn't be happier with the outcome. The attention to detail and dedication to quality was impressive."</p>
                        <p class="testimonial-author">Sarah Johnson</p>
                        <p class="testimonial-position">Marketing Director</p>
                    </div>
                </div>
            </div>
            <div class="testimonial-slide slide-next">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        <div class="testimonial-avatar"></div>
                        <p class="testimonial-text">"Working with this team has been a game-changer for our business. Highly recommended!"</p>
                        <p class="testimonial-author">Mike Wilson</p>
                        <p class="testimonial-position">Product Manager</p>
                    </div>
                </div>
            </div>
        </div>
        <button class="carousel-nav prev-button">←</button>
        <button class="carousel-nav next-button">→</button>
    </section>`;
  }
}

customElements.define("testimonial-component", TestimonialComponent);
