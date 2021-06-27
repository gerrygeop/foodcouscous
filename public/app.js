const btnBurger = document.getElementById('hamburgerButton');
const drawer = document.getElementById('navigationDrawer');
const main = document.querySelector('main');

btnBurger.addEventListener('click', () => {
  drawer.classList.toggle('hidden');
});

main.addEventListener('click', () => {
  drawer.classList.add('hidden');
});