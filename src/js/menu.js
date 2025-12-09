const burguerIcon = document.getElementById('burguer-icon');
const menuOptions = document.getElementById('menu-options');

burguerIcon.addEventListener('click', () => {
    burguerIcon.classList.toggle('active');
    menuOptions.classList.toggle('active');
})