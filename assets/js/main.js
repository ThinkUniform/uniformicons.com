// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  // Main
  Alpine.data('main', () => ({
    iconSettings: {
      roundness: 3,
      strokeWidthSliderValue: 10,
      strokeWidth: 2
    },
    roundTo(n, place) {
      return +(Math.round(n + 'e+' + place) + 'e-' + place);
    },
    changeStrokeWidth(event) {

      this.iconSettings.strokeWidth = this.roundTo((this.iconSettings.strokeWidthSliderValue * 0.1) + 1, 2);
      document.querySelectorAll('.grid-icon path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
      console.log(this.iconSettings.strokeWidth);
    }
  }));
});

// GSAP
document.addEventListener(
  'DOMContentLoaded',
  function () {
    gsap.to('.gsap-section-1 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-1 .glass-frame',
        scrub: true,
        // end: '+=2000px',
        // start: '+=-128',
        // end: '0',
        // markers: true,
      },
      x: '-40%',
      // duration: 2,
      // opacity: 0,
    });

    gsap.to('.gsap-section-2 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-2 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });

    gsap.to('.gsap-section-3 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-3 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });

    gsap.to('.gsap-section-4 .glass-keylight', {
      scrollTrigger: {
        trigger: '.gsap-section-4 .glass-frame',
        scrub: true,
      },
      x: '-40%',
    });
  },
  false
);
