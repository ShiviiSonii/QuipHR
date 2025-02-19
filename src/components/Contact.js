class ContactComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="contact">
        <img alt="contact-img" src="../../public/assets/images/contact-img.png" class="contact-img"/>
        <div class="contact-data">
            <div class="email-data">
                <h4>Email us at:</h4>
                <p>contact@uniquehr.in</p>
                <p>partners@uniquehr.in</p>
            </div>
            <div class="phone-data">
                <h4>Call us at:</h4>
                <p>+91-7090492913</p>
                <p>+91-8853790439</p>
            </div>
        </div>
        </div>`;
  }
}

customElements.define("contact-component", ContactComponent);
