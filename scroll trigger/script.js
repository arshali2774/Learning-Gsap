const brown = document.querySelectorAll('.brown');
const green = document.querySelectorAll('.green');
const cream = document.querySelectorAll('.cream');
const box = document.querySelectorAll('.box');
const container = document.getElementById('container');
const mousePos = document.querySelector('.mousePos');
const container1 = document.getElementById('container-1');
const container2 = document.getElementById('container-2');
const container3 = document.getElementById('container-3');

gsap.registerPlugin(ScrollTrigger);

// gsap.to(brown, {
//   y: -200,
//   duration: 2,
//   scrollTrigger: {
//     trigger: container1,
//     toggleActions: 'pause none none none',
//   },
// });
// gsap.to(green, {
//   y: 200,
//   duration: 2,
//   scrollTrigger: {
//     trigger: container2,
//     toggleActions: 'play none none none',
//   },
// });
// gsap.to(cream, {
//   y: -200,
//   duration: 2,
//   scrollTrigger: {
//     trigger: container3,
//     toggleActions: 'play none none none',
//   },
// });
// gsap.to(brown, {
//   y: -200,
//   duration: 2,
//   scrollTrigger: {
//     trigger: container3,
//     toggleActions: 'play none none none',
//   },
// });

// * toggleActions Keyword: play, pause, resume, reverse, restart, reset, complete

gsap.to(box, {
  y: -200,
  rotate: 300,
  duration: 2,
  scrollTrigger: {
    trigger: container2,
    start: 'top center',
    end: '+=300',
    markers: true,
    toggleActions: 'play pause reverse reset',
  },
});
