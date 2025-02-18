class ServiceComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="">
        <h4 class="service-heading">You name, we'll <span class="service-heading-span">hire</span><img src="../../public/assets/images/icons/arrow.png" alt="arrow" class="arrow-icon"/></h4>
        <div class="job-titles">
            <ul class="job-list">
                <li>Software Developers</li>
                <li>Web Developers</li>
                <li>Data Scientists</li>
                <li>UX/UI Designers</li>
                <li>Marketing Managers</li>
                <li>Operations Managers</li>
            </ul>
            <ul class="job-list">
                <li>Digital Marketers</li>
                <li>SEO Specialists</li>
                <li>Sales Representatives</li>
                <li>HR Managers</li>
                <li>Recruitment Specialists</li>
                <li>Project Managers</li>
            </ul>
            <ul class="job-list">
                <li>Financial Analysts</li>
                <li>Accountants</li>
                <li>Graphic Designers</li>
                <li>Content Creators</li>
                <li>Customer Service 
Representatives</li>
            </ul>
        </div>
      </section>`;
  }
}

customElements.define("service-component", ServiceComponent);
