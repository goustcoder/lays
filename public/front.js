const btn = document.querySelector("#btn");
 const form = document.querySelector(".login-main");
const cross = document.querySelector(".cross");
const about = document.querySelector(".about");
const credit = document.querySelector(".credits");
const video = document.querySelector(".back-video");
btn.addEventListener("click", () => {
    form.classList.remove('hide');
    video.classList.add('blurred');
})
cross.addEventListener("click", () => {
    form.classList.add('hide');
    video.classList.remove('blurred');
})
about.addEventListener("mouseover", () => {
    credit.id = '';

})
about.addEventListener("mouseout", () => {
    credit.id = 'hide';
})
