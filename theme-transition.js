(function() {
  var dark = { bg: [10,10,10], text: [255,255,255], muted: [170,170,170], accent: [196,30,42], card: [26,26,26], border: [34,34,34], alt: [17,17,17], input: [26,26,26], inputBorder: [51,51,51] };
  var pink = { bg: [255,240,243], text: [51,51,51], muted: [100,80,85], accent: [233,30,99], card: [255,255,255], border: [240,210,215], alt: [255,245,248], input: [255,255,255], inputBorder: [220,180,190] };

  function lerp(a, b, t) {
    return a.map(function(v, i) { return Math.round(v + (b[i] - v) * t); });
  }
  function rgb(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }

  function update() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var threshold = 200; // fully pink after just 200px of scrolling
    var t = Math.min(scrollTop / threshold, 1);
    var s = document.documentElement.style;
    s.setProperty('--bg-color', rgb(lerp(dark.bg, pink.bg, t)));
    s.setProperty('--text-color', rgb(lerp(dark.text, pink.text, t)));
    s.setProperty('--text-muted', rgb(lerp(dark.muted, pink.muted, t)));
    s.setProperty('--accent-color', rgb(lerp(dark.accent, pink.accent, t)));
    s.setProperty('--card-bg', rgb(lerp(dark.card, pink.card, t)));
    s.setProperty('--card-border', rgb(lerp(dark.border, pink.border, t)));
    s.setProperty('--section-alt-bg', rgb(lerp(dark.alt, pink.alt, t)));
    s.setProperty('--input-bg', rgb(lerp(dark.input, pink.input, t)));
    s.setProperty('--input-border', rgb(lerp(dark.inputBorder, pink.inputBorder, t)));
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
})();
