class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="footer">
    <div class="footer-container">
      <div class=" footer-section-1">
        <img src="../../public/assets/images/logo.png" alt="logo" class='footer-logo'/>
      </div>
      <div className=''>
      <div class="footer-address">
        <h3>Address</h3>
          <p>Bengaluru</p>
          <p to="tel:7090492913" class="footer-phone">7090492913</p>
        </div>
      </div>
      <div class="">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="">About</a></li>
          <li><a href="">Services</a></li>
          <li><a href="">Blog</a></li>
          <li><a to={"/contact"}>Contact</a></li>
        </ul>
      </div>
      <div class="">
        <h3>Support</h3>
        <ul>
          <li><a href="">FAQs</a></li>
          <li><a href="">Terms & Conditions</a></li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Help</a></li>
        </ul>
      </div>
      <div class="">
        <h3>Social Links</h3>
        <ul>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
          <li><a href="">Twitter</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2025 QuipHire | All Rights Reserved</p>
    </div>
  </footer>`;
  }
}

customElements.define("footer-component", FooterComponent);
