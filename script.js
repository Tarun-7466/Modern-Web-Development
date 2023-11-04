let circle = document.querySelector('#circle');
let icon = document.querySelector('#icon')
window.addEventListener('mousemove', function (details) {
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function () {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 150);

});

// WITHOUT Timelines (only using tweens with delays):
gsap.from("#wrapper", { duration: 3, opacity: 0, scale: .6, ease: "expo.easeInOut" });

gsap.from("#elemstrip", { x: 250, opacity: 0, duration: 2, delay: 1., ease: "expo.easeInOut" }); //wait 1 second

gsap.from("#elemstrip".line, { opacity: 0, duration: 2, delay: 1., ease: "expo.easeInOut" }); //wait 1 second

gsap.from("#elemcard", { x: .2, opacity: 0, duration: 1, delay: 2, ease: "expo.easeInOut" }); //wait 2 seconds

gsap.from("#elemcard p", { y: 50, opacity: 0, duration: 1, delay: 3.5, ease: "expo.easeInOut" }); //wait 2 seconds

gsap.from(".line", { scale: 0, opacity: 0, duration: 3, delay: 1.5, ease: "expo.easeInOut" }); //wait 2 seconds

gsap.from("#background > h5", { scale: 0, opacity: 0, duration: 3, delay: 1.5, ease: "expo.easeInOut" }); //wait 2 seconds


icon.addEventListener('click', function () {
    gsap.to("#wrapper", { duration: 3, opacity: 0, scale: 1, ease: "expo.easeInOut", delay:1 });

    gsap.to("#elemstrip", { x: 250, opacity: 0, duration: 2, delay: 1., ease: "expo.easeInOut" }); //wait 1 second

    gsap.to("#elemstrip".line, { opacity: 0, duration: 2, delay: 1., ease: "expo.easeInOut" }); //wait 1 second

    gsap.to("#elemcard", { x: .2, opacity: 0, duration: 1, delay: 2, ease: "expo.easeInOut" }); //wait 2 seconds

    gsap.to("#elemcard p", { y: 50, opacity: 0, duration: 1, delay: 3.5, ease: "expo.easeInOut" }); //wait 2 seconds

    gsap.to(".line", { scale: 1, opacity: 0, duration: 3, delay: 1.5, ease: "expo.easeInOut" }); //wait 2 seconds

    gsap.to("#background > h5", { scale: 1, opacity: 0, duration: 1, delay: 1.5, ease: "expo.easeInOut" }); //wait 2 seconds
});