const navBtn = document.getElementById('nav-mobile-btn');
const nameTag = document.getElementById('name-tag');

navBtn.addEventListener('click', () => {
    navBtn.classList.toggle('active');
    nameTag.classList.toggle('active');
});