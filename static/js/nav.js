window.addEventListener("scroll", () => {
    const nav = document.querySelector('#nav');

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        nav.classList.remove("nav--inactive");
        nav.classList.add("nav--active");
    } else {
        nav.classList.remove("nav--active");
        nav.classList.add("nav--inactive");
    }
});