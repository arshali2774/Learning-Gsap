const brown = document.querySelector('.brown');
const green = document.querySelector('.green');
const cream = document.querySelector('.cream');
const box = document.querySelectorAll('.box');
const container = document.getElementById('container');
const mousePos = document.querySelector('.mousePos');

// ! Basic tweens

// gsap.to(brown, {
//   rotation: 360,
//   x: 500,
//   duration: 2,
//   borderRadius: '50%',
//   delay: 2,
// });

// gsap.from(green, {
//   rotation: 360,
//   x: 500,
//   duration: 2,
//   borderRadius: '50%',
//   delay: 3,
// });

// gsap.fromTo(
//   cream,
//   {
//     x: 500,
//     y: -200,
//     borderRadius: '50%',
//   },
//   {
//     y: 0,
//     x: 0,
//     rotation: 360,
//     duration: 2,
//     borderRadius: '0%',
//   }
// );

// ! Basic tweens

// ! GSAP timelines

// var tl = gsap.timeline();

// * without label
// tl.to(brown, { duration: 2, x: 500, scale: 2 })
//   .to(green, { duration: 2, y: -200, scale: 3 })
//   .to(cream, { duration: 2, y: 200, scale: 0.5 });
// * without label

// * with label
// tl.addLabel('step2', 3)
//   .to(brown, { duration: 2, x: 500, scale: 2 })
//   .to(green, { duration: 2, y: -200, scale: 3 }, 'step2+=1')
//   .to(cream, { duration: 2, y: 200, scale: 0.5 }, 'step2-=3');

// tl.seek('step2');
// * with label

// * Controlling tweens and timelines
// * pause(), play(), progress(), restart(), resume(), reverse(), seek(), time(), duration(), timeScale(), kill(),
// tl.to(brown, { duration: 2, x: 500, scale: 2 }).to(cream, {
//   duration: 2,
//   y: 200,
//   scale: 0.5,
// });
// var tween = gsap.to(green, { duration: 10, y: -500, scale: 3 });
// tween.pause();
// tween.timeScale(5);
// tween.play();
// tl.seek(3);
// tl.progress(0.5);
// ! GSAP timelines

// ! gsap.effects()

gsap.registerEffect({
  name: 'roundness',
  effect: (targets, config) => {
    return gsap.to(targets, {
      duration: config.duration,
      borderRadius: config.borderRadius,
    });
  },
  defaults: { duration: 2, borderRadius: '50%' },
  extendTimeline: true,
});

// * use effects individually like tweens
// gsap.effects.roundness(brown, {
//   duration: 3,
//   borderRadius: '20px',
// });
// gsap.effects.roundness(green, {
//   duration: 3,
//   borderRadius: '30px',
// });
// * use effects individually like tweens

// * use effects on timeline

// var tl = gsap.timeline();

// tl.roundness(brown)
//   .roundness(green, { duration: 1, borderRadius: '35px' })
//   .to(cream, { duration: 1, x: 500 }, '-=3');

// * use effects on timeline

// * use case of gsap.effects()

box.forEach((dabba) => {
  dabba.addEventListener('mouseenter', function () {
    gsap.effects.roundness(this);
  });
});

// * use case of gsap.effects()

// * use case of gsap.effects()

// ek array banaya jisme effects hai
// const gsapEffects = [
//   {
//     id: 'fadeSlideTo', // effect ka name
//     props: { opacity: 0.5, x: 300, yoyo: true, repeat: -1 }, // effect kya kr rha hai
//   },
//   {
//     id: 'fadeSlideFrom', // effect ka name
//     animate: 'from', // effect 'from' hai ya 'to' ya 'fromTo'
//     props: { opacity: 0.25, x: 300, yoyo: true, repeat: -1 }, // effect kya kr rha hai
//   },
//   {
//     id: 'fadeSlideFromTo', // effect ka name
//     animate: 'fromTo', // effect 'from' hai ya 'to' ya 'fromTo'
//     props: { opacity: 0.1, x: 0 }, // effect kya kr rha hai (from)
//     props2: { opacity: 1, x: 600, yoyo: true, repeat: -1 }, // effect kya kr rha hai (to)
//   },
// ];

//saare effect register kr rahe
// gsapEffects.forEach((effect) => {
//   gsap.registerEffect({
//     name: effect.id, // array se le re
//     defaults: { duration: 1 },
//     extendTimeline: true,
//     effect(targets, config) {
//       if (effect.animate === 'from') {
//         return gsap.from(targets, { ...effect.props, ...config }); // array se le re props and user ke configs
//       } else if (effect.animate === 'fromTo') {
//         return gsap.fromTo(
//           targets,
//           { ...effect.props, ...config },
//           { ...effect.props2 }
//         );
//       } else {
//         return gsap.to(targets, { ...effect.props, ...config });
//       }
//     },
//   });
// });

// let tl = gsap.timeline();
// tl.fadeSlideTo(brown)
//   .fadeSlideFrom(green, { borderRadius: '50%' }, 0)
//   .fadeSlideFromTo(cream, 0);

// * use case of gsap.effects()

// ! gsap.effects()

// ! gsap.globalTimeline()
// affect all animations at once
// gsap.globalTimeline.timeScale(0.5);
// gsap.globalTimeline.pause();
// gsap.globalTimeline.play();
// gsap.globalTimeline.paused(); ///returns a boolean

// ! gsap.globalTimeline()

// ! gsap.utils()
//usually returns a function

let mouseX = undefined;
//mouse ki position on x axis
container.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  onMove(mouseX);
});

// snapEdges variable ki value change ho rahi hai between 0 and container ki width ki and jab bhi wo kisi bhi extreme points ke 200px radius ke aas paas pahunch raha hai to wo seedhe extreme points pr snap ho jara hai
let snapEdges = gsap.utils.snap({
  values: [0, container.clientWidth],
  radius: 200,
});

//hum apni 0 to container width ko 0 se 1 ke beech main map kr rahe hai
let widthToProgress = gsap.utils.mapRange(0, container.clientWidth, 0, 1);

//ye dono color ke rgba value ko change kr raha hai based on mouse move
let interpColor = gsap.utils.interpolate('#c00', '#00c');

function onMove(mouseX) {
  var value = interpColor(widthToProgress(snapEdges(mouseX)));
  display(value);
  container.style.backgroundColor = value;
}

function display(value) {
  mousePos.textContent = `${value}`;
}

// ! gsap.utils()
