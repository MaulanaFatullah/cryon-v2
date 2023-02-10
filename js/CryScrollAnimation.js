const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('elementShow');
        } else {
            entry.target.classList.remove('elementShow');
        }
    });
})

const hiddenElements = document.querySelectorAll('.elementHidden');
hiddenElements.forEach((element) => observer.observe(element));