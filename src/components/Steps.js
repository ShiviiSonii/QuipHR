class StepsComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="steps">
        <iframe class="thumbnail" width="900px" height="500px" src="https://www.youtube.com/embed/mVtUlRpoCzs?si=D4AFjGbAOZ7Vwrts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="steps-container">
            <div class="steps-container-1">
                <h2 class="steps-heading">Easy steps for <span class="steps-heading-span">easy hiring</span></h2>
                <img src="../../public/assets/images/steps-img.png" alt="steps-img" class="steps-img"/>
            </div>
            <div class="steps-container-2">
                <div>
                    <h3 class="steps-container-heading">Tell us who you need</h3>
                    <p class="steps-container-description">Provide your job descriptions and specific skills requirements.</p>
                </div>
                <div>
                    <h3 class="steps-container-heading">We Find the Best Candidates</h3>
                    <p class="steps-container-description">Our advanced algorithms identify top-tier candidates that match your criteria.</p>
                </div>
                <div>
                    <h3 class="steps-container-heading">Meet Your Match</h3>
                    <p class="steps-container-description">We introduce you to pre-screened candidate ready to impress.</p>
                </div>
                <div>
                    <h3 class="steps-container-heading">Hire and Celebrate</h3>
                    <p class="steps-container-description">No more endless interviews. Once you’ve found the right candidate, it’s time to welcome them to your team.</p>
                </div>
            </div>
        </div>
      </div>`;
  }
}

customElements.define("steps-component", StepsComponent);

// ${this.getAttribute("text")}
