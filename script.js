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

//WITH Timelines (cleaner, more versatile)
var tl = gsap.timeline({repeat: 0, repeatDelay: 1});
tl.from("#wrapper", {duration: 1.5, opacity: 1, scale: .6, ease: "expo.easeInOut"});
tl.from("#elemstrip", {x: 250, opacity: 0, duration: 1.5, ease: "expo.easeInOut"}, "-=.5");

tl.from("#elemcard", { x:20, opacity: 0, duration:2,   ease: "expo.easeInOut" }); //wait 2 seconds

tl.from(".line", { width:0, opacity: 0, duration: 1.5,   ease: "expo.easeInOut" }); //wait 2 seconds

tl.from("#elemcard p", { y: 50, opacity: 0, duration:1.5,  ease: "expo.easeInOut" }, "-=1.5"); //wait 2 seconds

tl.from("#background > h5", { scale: 0, opacity: 0, duration: 2,  ease: "expo.easeInOut" }, "-=.5"); //wait 2 seconds

    
// then we can control the whole thing easily...
// tl.pause();
// tl.resume();
// tl.seek(1.5);
// tl.reverse();
icon.addEventListener('click', function(){
    tl.reverse();
})

// });