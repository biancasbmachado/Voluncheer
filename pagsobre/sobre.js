const hamburgerBtn = document.getElementById('hamburgerBtn');
const menuContent = document.getElementById('menuContent');

hamburgerBtn.addEventListener('click', () => {

    menuContent.classList.toggle('active');
        
    const icon = hamburgerBtn.querySelector('i');
    if (menuContent.classList.contains('active')) {
        icon.classList.remove('bi-list');
        icon.classList.add('bi-x-lg');
    } else {
        icon.classList.remove('bi-x-lg');
        icon.classList.add('bi-list');
    }
});