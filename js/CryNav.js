const navBtn = document.querySelector('#nav-mobile-btn');
const nameTag = document.querySelector('#name-tag');
const navMenu = document.querySelector('#nav-mobile-menu');

navBtn.addEventListener('click', function animationBtn() {
    if (nameTag.classList.contains('active') === false) {
        // console.log('add')
        navBtn.classList.add('active');
        nameTag.classList.add('active');
        navMenu.classList.add('active');

        navBtn.removeEventListener('click', animationBtn, true);
    } else {
        // console.log('remove')
        navBtn.classList.remove('active');
        nameTag.classList.remove('active');
        navMenu.classList.remove('active');

        navBtn.removeEventListener('click', animationBtn, true);
    }
});