/*menu hamburguer*/
const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuContent = document.getElementById('menuContent');
const icon = hamburgerBtn.querySelector('i');

hamburgerBtn.addEventListener('click', () => {
    menuContent.classList.toggle('active');
    if (menuContent.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
        document.body.style.overflow = 'hidden';
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
        document.body.style.overflow = 'auto';
    }
});

document.querySelectorAll('.menu-content a').forEach(link => {
    link.addEventListener('click', () => {
        menuContent.classList.remove('active');
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
        document.body.style.overflow = 'auto';
    });
});