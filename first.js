let links = document.querySelectorAll('.image-link');
for (let link of links) {
  link.addEventListener('click', function() {
    for (let l of links) {
      l.classList.remove('active');
    }
    this.classList.add('active');
  });
}