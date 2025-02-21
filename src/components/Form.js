class FormComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<form class="form" id="form-section">
      <p class="form-para">Please fill your information so we can get in touch with you.</p>
      <div class="form-fields">
        <div class="form-field">
          <div class="form-data">
            <span class="form-span">Name</span>
            <input type="text" placeholder="Your Name" class="form-input" required/>
          </div>
          <div class="form-data">
            <span class="form-span">Email</span>
            <input type="email" placeholder="Your Email" class="form-input" required/>
          </div>
        </div>
        <div class="form-field">
          <div class="form-data">
            <span class="form-span">Phone</span>
            <input type="tel" placeholder="Your Phone" class="form-input" required/>
          </div>
          <div class="form-data">
            <span class="form-span">Message</span>
            <input type="text" placeholder="Your message" class="form-input" required/>
          </div>
        </div>
      </div>
      <button type="submit" class="form-btn">Submit</button>
    </form>`;
  }
}

customElements.define("form-component", FormComponent);
