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

// gsap.registerEffect({
//   name: 'roundness',
//   effect: (targets, config) => {
//     return gsap.to(targets, {
//       duration: config.duration,
//       borderRadius: config.borderRadius,
//     });
//   },
//   defaults: { duration: 2, borderRadius: '50%' },
//   extendTimeline: true,
// });

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

// box.forEach((dabba) => {
//   dabba.addEventListener('mouseenter', function () {
//     gsap.effects.roundness(this);
//   });
// });

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
// basically har utility function main fixed number of parameters hote hai jaise ki snap main 3 parameters fixed hote hai agar hum sirf do parameter denge to snap humko ek value nahi function return krega.
// hum niche function snap se ek value return kr rahe hai joki x-axis pr mouse ki position hai jisse hum maprange main as an argument pass kr rahe hai jo ki us value ko 0 - 1 ke beech main convert kr raha hai
// uske baad hum interpolation function main rgba ki value change kr rahe hai depending on mouse position

// let mouseX = undefined;
//mouse ki position on x axis
// container.addEventListener('mousemove', (e) => {
//   mouseX = e.clientX;
//   onMove(mouseX);
// });

// snapEdges variable ki value change ho rahi hai between 0 and container ki width ki and jab bhi wo kisi bhi extreme points ke 200px radius ke aas paas pahunch raha hai to wo seedhe extreme points pr snap ho jara hai
// let snapEdges = gsap.utils.snap({
//   values: [0, container.clientWidth],
//   radius: 200,
// });

//hum apni 0 to container width ko 0 se 1 ke beech main map kr rahe hai
// let widthToProgress = gsap.utils.mapRange(0, container.clientWidth, 0, 1);

//ye dono color ke rgba value ko change kr raha hai based on mouse move
// let interpColor = gsap.utils.interpolate('#c00', '#00c');

// pipe ek function ka result doosre function main daalta hai
// let widthToColor = gsap.utils.pipe(snapEdges, widthToProgress, interpColor);

// function onMove(mouseX) {
//   var value = widthToColor(mouseX);
//   display(value);
//   container.style.backgroundColor = value;
// }

// function display(value) {
//   mousePos.textContent = `${value}`;
// }

// ! gsap.utils()

// ! gsap.defaults()

// agar hume saare animations main kuch properties same rakhni hai to hum iska use kr sakte hai
// gsap.defaults({
//   ease:"power2.in",
//   duration:1
// })
// agar kisi animation main nahi use krna to us animation main hum "inherit:false" set kr sakte hai

// ! gsap.defaults()

// ! gsap.context()

// let ctx = gsap.context(() => {
//   gsap.to(...);
//   gsap.from(...);
//   gsap.timeline().to(...).to(...);
//   ...
//  });

// then later...
//  ctx.revert(); // BOOM! Every GSAP animation created in that function gets reverted!

// * for react and other frameworks
// remember to use gsap animation in useEffect and remember to cleanup
// that is ctx.revert()
// useRefs to target the element

// let ctx = gsap.context(() => {

// gsap.to(".box", {...}) // <- normal selector text, automatically scoped to myRefOrElement
// gsap.from(".circle", {...});

// }, myRefOrElement); // <- scope!!!

// * for react and other frameworks

//a better way to use context is to use it like this
// let ctx = gsap.context((self) => {

// use any arbitrary string as a name; it'll be added to the Context object, so in this case you can call ctx.onClick() later...
// self.add("onClick", (e) => {
// gsap.to(...); // <-- gets added to the Context!
// });

// }, myRefOrElement);

// now the Context has an onClick() method we can tap into and any animations in that function will get added to the Context
// myButton.addEventListener('click', (e) => ctx.onClick(e));

// ! gsap.context()

// ! gsap.matchMedia()

// * we can change animation based on screen width

// ! gsap.matchMedia()

// ! stagger

const container2 = document.getElementById('container-2');

// gsap.to('.box', {
//   y: -300,
//   duration: 1,
//   rotate: 360,
//   borderRadius: '50%',
//   stagger: 0.2,
// });

// gsap.to('.box', {
//   y: -300,
//   duration: 2,
//   rotate: 360,
//   borderRadius: '50%',
//   stagger: {
//     amount: 1,
//   },
// });

gsap.fromTo(
  '.box',
  {
    scale: 0.1,
    duration: 1,
  },
  {
    scale: 1,
    stagger: {
      each: 0.2,
      from: 'center',
      axis: 'x',
    },
  }
);

// let observer = new IntersectionObserver(function (container2, self) {
//   let targets = container2.map((entry) => {
//     if (entry.isIntersecting) {
//       self.unobserve(entry.target);
//       return entry.target;
//     }
//   });
//   gsap.to(targets, {
//     opacity: 1,
//   });
// });

// ! stagger
