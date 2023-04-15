gsap.registerPlugin(Flip);

const container = document.querySelector('.container');
const box = document.querySelector('.box');

document.addEventListener('click', (e) => {
  let state = Flip.getState('.box');
  container.appendChild(box);
  Flip.from(state, { duration: 1, ease: 'power1.out' });
});

// section 2

function doFlip(el) {
  const imageParent = el.target.closest('.images');
  const allImages = imageParent.querySelectorAll('img');
  const state = Flip.getState(allImages);
  //   console.log(imageParent.classList);
  // stop the parent from collapsing
  // while the children are absolutely positioned.
  imageParent.style.height = `${imageParent.offsetHeight}px`;

  // Make DOM or styling changes
  if (imageParent.classList.contains('state-1')) {
    imageParent.classList.remove('state-1');
    imageParent.classList.add('state-2');
  } else if (imageParent.classList.contains('state-2')) {
    imageParent.classList.remove('state-2');
    imageParent.classList.add('state-3');
  } else {
    imageParent.classList.remove('state-3');
    imageParent.classList.add('state-1');
  }
  console.log(imageParent.classList);
  Flip.from(state, {
    duration: 1.2,
    ease: 'power1.inOut',
    scale: true,
    absolute: true, // take the images out of the document flow during flip
    onComplete: () => {
      imageParent.style.height = 'unset'; // reset container height
    },
  });
}

const allImageZones = document.querySelectorAll('.images');
allImageZones.forEach((zone) => {
  zone.addEventListener('click', doFlip);
});

//section 3
function flip(el) {
  const imageParent = el.target.closest('.images-grid');
  const allImages = imageParent.querySelectorAll('img');
  const img1 = document.getElementById('img-1');
  const img2 = document.getElementById('img-2');
  const img3 = document.getElementById('img-3');
  const state = Flip.getState(allImages);
  //   console.log(imageParent.classList);
  // stop the parent from collapsing
  // while the children are absolutely positioned.
  imageParent.style.height = `${imageParent.offsetHeight}px`;
  // Make DOM or styling changes
  if (el.target.classList.contains('img2')) {
    console.log(el.target.classList);
    imageParent.classList.remove('state-3');
    imageParent.classList.add('state-2');
    img1.classList.remove('img1');
    img1.classList.add('img3');
    img2.classList.remove('img2');
    img2.classList.add('img1');
    img3.classList.remove('img3');
    img3.classList.add('img2');
    // imageParent.classList.remove('state-2');
  } else if (el.target.classList.contains('img3')) {
    console.log(el.target.classList);
    imageParent.classList.remove('state-2');
    imageParent.classList.add('state-3');
    img1.classList.remove('img1');
    img1.classList.add('img2');
    img2.classList.remove('img2');
    img2.classList.add('img3');
    img3.classList.remove('img3');
    img3.classList.add('img1');
    // imageParent.classList.remove('state-3');
  }
  Flip.from(state, {
    duration: 1.2,
    ease: 'power1.inOut',
    scale: true,
    absolute: true, // take the images out of the document flow during flip
    onComplete: () => {
      imageParent.style.height = 'unset'; // reset container height
    },
  });
}

const allImage = document.querySelectorAll('.flip-img');
allImage.forEach((zone) => {
  zone.addEventListener('click', flip);
});
