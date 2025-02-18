class ChooseUsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="">
      <h4 class="choose-us-heading"><span class="choose-us-span">Choose us,</span> but why?</h4>
      <div class="choose-us-grid">
        <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus1.png" alt="icon"/>
          <h5 class="choose-us-div-heading">AI-Powered Smart Hiring</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus2.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Quality Matches</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus3.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Simple and Fun</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus4.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Full Support</h5>
        </div>
        <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus5.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Smart and Automated</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus6.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Complete Customization</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus7.png" alt="icon"/>
          <h5 class="choose-us-div-heading">No More Hiring Headaches</h5>
        </div>
         <div class="choose-us-div">
          <img src="../../public/assets/images/icons/chooseus8.png" alt="icon"/>
          <h5 class="choose-us-div-heading">Less Effort, More Results</h5>
        </div>
      </div>
      </div>`;
  }
}

customElements.define("choose-us-component", ChooseUsComponent);
