/* Open links to other sites in a new tab, leaving links within this one alone.
   Starlight renders its own social icons, so this cannot be set per link in config. */
document.querySelectorAll('a[href^="http"]').forEach(function (a) {
  if (a.host && a.host !== location.host) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});
