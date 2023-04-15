//initially colorize each box and position in a row
gsap.set('.box', {
  x: (i) => i * 50,
});

gsap.to('.box', {
  duration: 10,
  ease: 'none',
  x: '+=500', //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % 500), //force x value to be between 0 and 500 using modulus
  },
  repeat: -1,
});
