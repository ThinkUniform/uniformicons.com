// Initialize AlpineJS
document.addEventListener('alpine:init', () => {
  // Main
  Alpine.data('main', () => ({
    dialogs: {
      iconControls: false,
      iconDetails: false,
    },
    iconDetails: {
      name: 'Clone 01',
      slug: 'clone-01',
      url: '/assets/icons/line/normal/clone-01.svg',
      id: 'line-normal-clone-01',
      copyText: 'Copy SVG',
    },
    iconSettings: {
      cornerRadiusSliderValue: 1,
      cornerRadius: 2,
      strokeWidthSliderValue: 10,
      strokeWidth: 2,
      styles: {
        line: true,
        solid: false,
      },
    },

    explorerSettings: {
      gridSize: 'is-md',
    },

    // Icon Search Component
    icons: [],
    searchTerm: '',
    filteredIcons: [],

    init() {},
    openIconDetail(name, slug, id, url) {
      this.iconDetails.name = name;
      this.iconDetails.slug = slug;
      this.iconDetails.url = url;
      this.iconDetails.id = id;

      document.getElementById('iconDetailPreview').innerHTML =
        '<img src="' + url + '" class="w-56 h-56" onload="SVGInject(this)">';
      document.querySelectorAll('#iconDetailPreview path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
      document.getElementById('iconDetailPreviewSmall').innerHTML =
        '<img src="' + url + '" class="w-32 h-32" onload="SVGInject(this)">';
      document.querySelectorAll('#iconDetailPreviewSmall path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
    },
    copySlug() {
      navigator.clipboard.writeText(this.iconDetails.slug);
    },
    copySVG() {
      let svgElement = document.querySelector('#' + this.iconDetails.id + ' svg');
      let svgString = new XMLSerializer().serializeToString(svgElement);
      navigator.clipboard.writeText(svgString).then(() => {
        console.log('SVG copied to clipboard');
        this.iconDetails.copyText = 'Copied!';
      });
    },
    filterIcons() {
      console.log(this.searchTerm);
      let searchTerm = this.searchTerm.toLowerCase();
      let icons = document.querySelectorAll('.grid-icon');
      console.log(icons.length);
      for (let i = 0; i < icons.length; i++) {
        let searchContent = icons[i]
          .getAttribute('data-keywords')
          .toLowerCase();
        console.log(searchContent);
        icons[i].style.display = searchContent.includes(searchTerm)
          ? 'flex'
          : 'none';
        console.log('hello');
      }
    },
    roundTo(n, place) {
      return +(Math.round(n + 'e+' + place) + 'e-' + place);
    },
    changeStrokeWidth(event) {
      this.iconSettings.strokeWidth = this.roundTo(
        Number(this.iconSettings.strokeWidthSliderValue) * 0.1 + 1,
        2
      );
      document.querySelectorAll('.grid-icon path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
      document.querySelectorAll('#iconDetailPreview path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
      document.querySelectorAll('#iconDetailPreviewSmall path').forEach((el, i) => {
        el.setAttribute('stroke-width', this.iconSettings.strokeWidth);
      });
    },
    changeCornerRadius(event) {
      this.iconSettings.cornerRadius =
        Number(this.iconSettings.cornerRadiusSliderValue) * 2;
    },
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
