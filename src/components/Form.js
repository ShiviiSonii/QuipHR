class FormComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="form">
      <p class="form-para">Please fill your information so we can get in touch with you.</p>
      <div class="form-fields">
        <div class="form-field">
            <div class="form-data">
            <span class="form-span">Name</span>
            <input type="text" placeholder="Your Name" class="form-input"/>
            </div>
            <div class="form-data">
            <span class="form-span">Name</span>
            <input type="text" placeholder="Your Name" class="form-input"/>
            </div>
        </div>
        <div class="form-field">
            <div class="form-data">
            <span class="form-span">Name</span>
            <input type="text" placeholder="Your Name" class="form-input"/>
            </div>
            <div class="form-data">
            <span class="form-span">Name</span>
            <input type="text" placeholder="Your Name" class="form-input"/>
            </div>
        </div>
      </div>
      <button class="form-btn">Submit</button>
      </div>`;
  }
}

customElements.define("form-component", FormComponent);
