document.querySelectorAll('.navigation__link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navigation__checkbox').click();
  });
});
