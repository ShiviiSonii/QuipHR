class MenuBarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
          <img src="../../public/assets/images/logo.png" alt="logo" class="logo"/>
          <ul class="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
          <button class="menu-toggle" id="menuBtn">
              ☰
          </button>
      </nav>

      <!-- Sidebar -->
      <div class="sidebar" id="sidebar">
          <button class="close-btn" id="closeBtn">&times;</button>
          <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
          </ul>
      </div>
    `;

    document.addEventListener("DOMContentLoaded", function () {
      const menuBtn = document.getElementById("menuBtn");
      const closeBtn = document.getElementById("closeBtn");
      const sidebar = document.getElementById("sidebar");

      // Open Sidebar
      menuBtn.addEventListener("click", function () {
        sidebar.style.left = "0";
      });

      // Close Sidebar
      closeBtn.addEventListener("click", function () {
        sidebar.style.left = "-250px";
      });
    });
  }
}

customElements.define("menu-bar-component", MenuBarComponent);
