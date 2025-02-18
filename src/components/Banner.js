class BannerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="banner">
    <img src="../../public/assets/images/logo.png" class="logo" alt="logo"/></li>
    <div class="banner-content">
      <h1 class="banner-heading">${this.getAttribute(
        "text"
      )}<span class="span-text"> ${this.getAttribute("span_text")}</span></h1>
      <p class="p-text">${this.getAttribute("p_text")}</p>
      <button class="btn-text">${this.getAttribute("btn_text")}</button>
    </div>
    </div>`;
  }
}

customElements.define("banner-component", BannerComponent);
