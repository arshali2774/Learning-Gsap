gsap.registerPlugin(ScrollTrigger);

let tween = gsap.to('.box', {
  x: 500,
  rotate: 360,
});

ScrollTrigger.create({
  animation: tween,
  trigger: '#section-2',
  start: 'top center',
  end: 'center center',
  pinSpacing: true,
  markers: true,
  scrub: true,
});
