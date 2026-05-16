function renderNav(activePage) {
  var isRoot = true;
  var root = '';

  var pages = [
    { id: 'home',        label: 'Home',        href: root + 'index.html' },
    { id: 'signals',     label: 'Signal Log',  href: root + 'signal-log.html' },
    { id: 'verifier',    label: 'Verifier',    href: root + 'verifier.html' },
    { id: 'brokers',     label: 'Brokers',     href: root + 'brokers.html' },
    { id: 'methodology', label: 'Methodology', href: root + 'methodology.html' },
    { id: 'manual', label: 'Manual Entry', href: root + 'manual-verifier.html' },
  ];

  var links = pages.map(function(p) {
    return '<li><a href="' + p.href + '" class="' + (activePage === p.id ? 'active' : '') + '">' + p.label + '</a></li>';
  }).join('');

  document.getElementById('nav-placeholder').innerHTML =
    '<nav>' +
    '<a href="' + root + 'index.html" class="nav-logo"><span class="logo-dot"></span>Signal<span>Score</span></a>' +
    '<ul class="nav-links">' + links + '</ul>' +
    '<span class="nav-badge">BETA</span>' +
    '</nav>';
}

function renderFooter() {
  var el = document.getElementById('footer-placeholder');
  if (!el) return;
  el.innerHTML =
    '<footer><div class="footer-inner">' +
    '<span class="footer-text">SignalScore &mdash; Independent signal verification &amp; review</span>' +
    '<span class="footer-text">Not financial advice &mdash; for informational purposes only</span>' +
    '</div></footer>';
}
