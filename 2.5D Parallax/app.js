function parallax(element, distance, speed){
    const item = document.querySelector(element);

    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener('scroll', function() {
    parallax('header', window.scrollY, 0.8);
    parallax('.big-rose', window.scrollY, 0.5);
    parallax('.small-rose', window.scrollY, 0.2);
})