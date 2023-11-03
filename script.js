let circle = document.querySelector('#circle');

window.addEventListener('mousemove', function (details) {
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function () {
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 150);

});


// WITHOUT Timelines (only using tweens with delays):
gsap.from("#wrapper", { duration: 3, opacity: 0, scale: .6, ease: "expo.easeInOut"});
gsap.from("#elemstrip", { x:500, opacity:0, duration: 2, delay:1., ease: "expo.easeInOut" }); //wait 1 second
gsap.from("#elemcard", { x:50,opacity: 0, duration: 1.7, delay: 3, ease: "expo.easeInOut" }); //wait 2 seconds
gsap.from("#elemcard p" , {  y:200, opacity: 0, duration: 1, delay: 3.8, ease: "expo.easeInOut" }); //wait 2 seconds
gsap.from(".line", {scale:0, opacity:0, duration: 2, delay:1.8, ease: "expo.easeInOut" }); //wait 2 seconds