class MenuBarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      
    `;
  }
}

customElements.define("menu-bar-component", MenuBarComponent);
