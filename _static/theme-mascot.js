/* Bear's Data Den — browser favicon and theme-control mascot sync. */
(() => {
  const script = document.currentScript || document.querySelector('script[src*="theme-mascot.js"]');
  const base = new URL('_static/', document.baseURI);
  const iconURL = name => script && script.src ? new URL(name,script.src).href : new URL(name,base).href;
  function syncMascot() {
    const night = document.documentElement.getAttribute('data-theme') === 'dark';
    const icon = iconURL(night ? 'panda-icon.svg' : 'bear-icon.svg');
    let links = [...document.querySelectorAll('link[rel="icon"],link[rel="shortcut icon"]')];
    if (!links.length) {
      const el = document.createElement('link'); el.rel='icon'; document.head.appendChild(el); links=[el];
    }
    for (const link of links) {link.href=icon;link.type='image/svg+xml';}
    // Title attribute for sighted users; actual mode selection remains controlled by the theme menu.
    for (const button of document.querySelectorAll('.theme-switch-button,.theme-switch')) {
      button.setAttribute('data-mascot-theme', night ? 'panda' : 'bear');
    }
  }
  syncMascot();
  const observer = new MutationObserver(syncMascot);
  observer.observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  window.addEventListener('pageshow',syncMascot);
})();
