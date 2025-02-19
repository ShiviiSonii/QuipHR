class AboveFooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="">
          <p class="above-footer-para">Transform your hiring process today with <span class="above-footer-span">QuipHire!</span></p>
          </div>`;
  }
}

customElements.define("above-footer-component", AboveFooterComponent);
