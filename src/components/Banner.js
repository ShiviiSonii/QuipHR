class BannerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="banner">
    <menu-bar-component></menu-bar-component>
    <div class="banner-content">
      <div class="banner-heading-span">
      <h1 class="banner-heading">${this.getAttribute("text")}
      <div class="animation">
            <div class="first">
                <div>Simple</div>
            </div>
            <div class="second">
                <div>Simple</div>
            </div>
            <div class="third">
                <div>Simple</div>
            </div>
        </div>
      </h1>
      </div>
      <p class="p-text">${this.getAttribute("p_text")}</p>
      <button class="btn-text">${this.getAttribute("btn_text")}</button>
    </div>
    </div>`;
  }
}

customElements.define("banner-component", BannerComponent);
