const bins = document.querySelectorAll('.bin');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in-view'); }
    });
  }, { threshold: 0.15 });
  bins.forEach((b, i) => {
    b.style.transitionDelay = (i % 4 * 0.06) + 's';
    io.observe(b);
  });
} else {
  bins.forEach(b => b.classList.add('in-view'));
}
