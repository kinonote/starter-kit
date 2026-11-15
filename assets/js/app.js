/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/js/particles.json', function() {
  console.log('callback - particles-js config loaded');
});

/* FAQ accordion */
document.querySelectorAll('.faq-question').forEach(function(q) {
  q.addEventListener('click', function() {
    q.classList.toggle('is-open');
  });
});
