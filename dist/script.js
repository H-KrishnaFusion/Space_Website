const data = [
    {
        place:'Milky Way Galaxy',
        title:'MILKY',
        title2:'WAY',
        description:`The Milky Way Galaxy is our home in the vast universe, a sprawling collection of stars, planets, and cosmic wonders. It's a breathtaking barred spiral galaxy filled with nebulae, star clusters, and swirling arms that shine brightly against the darkness of space.`,
        image:'Galaxies/milky-way.png'
    },
    {
        place:'Andromeda Galaxy (M31)',
        title:' Andromeda ',
        title2:'Nebula',
        description:'The Andromeda Galaxy is the nearest major spiral galaxy to the Milky Way, located about 2.5 million light-years away. Identified as Messier 31 (M31) and NGC 224, it spans over 220,000 light-years and contains hundreds of billions of stars, making it one of the most studied galaxies in the universe.',
        image:'Galaxies/Andromeda.jpg'
    },
    {
        place:'Triangulum Galaxy (M33)',
        title:'Pinwheel',
        title2:' Galaxy',
        description:'The Triangulum Galaxy is a beautiful spiral galaxy located around 3 million light-years from Earth and is the third-largest member of the Local Group. Known as Messier 33 (M33) and NGC 598, it features rich star-forming regions, glowing nebulae, and a delicate spiral structure that makes it a favorite target for astronomers.',
        image:'Galaxies/M33.jpg'
    },
    {
        place:'Large Magellanic Cloud (LMC)',
        title:'Magellanic',
        title2:'Spiral',
        description:'The Large Magellanic Cloud is a dwarf irregular galaxy orbiting the Milky Way, located about 163,000 light-years away. Known as the LMC and cataloged as NGC 292, it is rich in star-forming regions, including the famous Tarantula Nebula, and offers astronomers a close-up view of galactic evolution.',
        image:'Galaxies/LMC.jpg'
    },
    {
        place:'Whirlpool Galaxy (M51)',
        title:'Messier 51a',
        title2:'NGC 5194',
        description:'The Whirlpool Galaxy is a striking grand-design spiral galaxy located about 23 million light-years away in the constellation Canes Venatici. Known as Messier 51 (M51) and cataloged as NGC 5194, it is famous for its well-defined spiral arms and its ongoing interaction with its companion galaxy, NGC 5195.',
        image:'Galaxies/M51a.jpg'
    },
    {
        place:'Sombrero Galaxy',
        title:'Messier',
        title2:'Object 104',
        description:'The Sombrero Galaxy is a bright, lenticular galaxy located around 29 million light-years away in the constellation Virgo. Known as Messier 104 (M104) and cataloged as NGC 4594, it is easily recognized by its massive central bulge and prominent dust lane, giving it the appearance of a cosmic wide-brimmed hat.',
        image:'Galaxies/miri.jpg'
    },
    {
        place:'Black Eye Galaxy (M64)',
        title:'Sleeping',
        title2:'Beauty Galaxy',
        description:'The Black Eye Galaxy is a striking spiral galaxy located about 17 million light-years away in the constellation Coma Berenices. Known as Messier 64 (M64) and cataloged as NGC 4826, it is famous for its dark, obscuring dust band near the nucleus, giving it the appearance of a cosmic “black eye.”',
        image:'Galaxies/Black-eye.jpg'
    },
    {
        place:'Pinwheel Galaxy (M101)',
        title:'Messier 101, M101)',
        title2:'NGC 5457',
        description:'The Pinwheel Galaxy is a large, face-on spiral galaxy located about 21 million light-years away in the constellation Ursa Major. Known as Messier 101 (M101) and cataloged as NGC 5457, it features grand spiral arms filled with star-forming regions, making it one of the most detailed and photographed spiral galaxies in the night sky.',
        image:'Galaxies/pin-wheel.jpg'
    },
    {
        place:'Centaurus-A',
        title:'Caldwell 77',
        title2:'NGC 5128',
        description:'Centaurus A is a peculiar lenticular and starburst galaxy located about 12 million light-years away in the constellation Centaurus. Cataloged as NGC 5128, it is known for its striking dark dust lane cutting across a bright elliptical core and for being one of the strongest radio sources in the sky, powered by a supermassive black hole at its center.',
        image:'Galaxies/Centaurus.jpg'
    },
]

const _ = (id)=>document.getElementById(id);
const cards = data.map((i, index)=>`<div class="card" id="card${index}" style="background-image:url(${i.image})"></div>`).join('');

const cardContents = data.map((i, index)=>`<div class="card-content" id="card-content-${index}">
  <div class="content-start"></div>
  <div class="content-place">${i.place}</div>
  <div class="content-title-1">${i.title}</div>
  <div class="content-title-2">${i.title2}</div>
</div>`).join('');

const sildeNumbers = data.map((_, index)=>`<div class="item" id="slide-item-${index}">${index+1}</div>`).join('');
_('demo').innerHTML =  cards + cardContents;
_('slide-numbers').innerHTML =  sildeNumbers;

const range = (n) => Array(n).fill(0).map((i, j) => i + j);
const set = gsap.set;

function getCard(index) { return `#card${index}`; }
function getCardContent(index) { return `#card-content-${index}`; }
function getSliderItem(index) { return `#slide-item-${index}`; }

// animate() was only used by loop(); with autoplay removed, you can delete it.
// function animate(target, duration, properties) { ... }

let order = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
  const [active, ...rest] = order;
  const detailsActive = detailsEven ? "#details-even" : "#details-odd";
  const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
  const { innerHeight: height, innerWidth: width } = window;
  offsetTop = height - 430;
  offsetLeft = width - 830;

  gsap.set("#pagination", { top: offsetTop + 330, left: offsetLeft, y: 200, opacity: 0, zIndex: 60 });
  gsap.set("nav", { y: -200, opacity: 0 });

  gsap.set(getCard(active), { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight });
  gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
  gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
  gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
  gsap.set(`${detailsInactive} .text`, { y: 100 });
  gsap.set(`${detailsInactive} .title-1`, { y: 100 });
  gsap.set(`${detailsInactive} .title-2`, { y: 100 });
  gsap.set(`${detailsInactive} .desc`, { y: 50 });
  gsap.set(`${detailsInactive} .cta`, { y: 60 });

  gsap.set(".progress-sub-foreground", { width: 500 * (1 / order.length) * (active + 1) });

  rest.forEach((i, index) => {
    gsap.set(getCard(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      y: offsetTop,
      width: cardWidth,
      height: cardHeight,
      zIndex: 30,
      borderRadius: 10,
    });
    gsap.set(getCardContent(i), {
      x: offsetLeft + 400 + index * (cardWidth + gap),
      zIndex: 40,
      y: offsetTop + cardHeight - 100,
    });
    gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
  });

  gsap.set(".indicator", { x: -window.innerWidth });

  const startDelay = 0.6;

  // Intro cover slide-out WITHOUT starting autoplay
  gsap.to(".cover", {
    x: width + 400,
    delay: 0.5,
    ease,
    onComplete: () => {
      // Removed autoplay loop(); stays idle until user clicks Next/Prev
    },
  });

  rest.forEach((i, index) => {
    gsap.to(getCard(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 30,
      ease,
      delay: startDelay + 0.05 * index,
    });
    gsap.to(getCardContent(i), {
      x: offsetLeft + index * (cardWidth + gap),
      zIndex: 40,
      ease,
      delay: startDelay + 0.05 * index,
    });
  });
  gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
  gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
  return new Promise((resolve) => {
    order.push(order.shift());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.to(`${detailsActive} .text`, { y: 0, delay: 0.1, duration: 0.7, ease });
    gsap.to(`${detailsActive} .title-1`, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.to(`${detailsActive} .title-2`, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.to(`${detailsActive} .desc`, { y: 0, delay: 0.3, duration: 0.4, ease });
    gsap.to(`${detailsActive} .cta`, { y: 0, delay: 0.35, duration: 0.4, onComplete: resolve, ease });
    gsap.set(detailsInactive, { zIndex: 12 });

    const [active, ...rest] = order;
    const prv = rest[rest.length - 1];

    gsap.set(getCard(prv), { zIndex: 10 });
    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(prv), { scale: 1.5, ease });

    gsap.to(getCardContent(active), {
      y: offsetTop + cardHeight - 10,
      opacity: 0,
      duration: 0.3,
      ease,
    });
    gsap.to(getSliderItem(active), { x: 0, ease });
    gsap.to(getSliderItem(prv), { x: -numberSize, ease });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    gsap.to(getCard(active), {
      x: 0, y: 0, ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
      onComplete: () => {
        const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
        gsap.set(getCard(prv), {
          x: xNew, y: offsetTop, width: cardWidth, height: cardHeight,
          zIndex: 30, borderRadius: 10, scale: 1,
        });

        gsap.set(getCardContent(prv), {
          x: xNew, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40,
        });
        gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

        gsap.set(detailsInactive, { opacity: 0 });
        gsap.set(`${detailsInactive} .text`, { y: 100 });
        gsap.set(`${detailsInactive} .title-1`, { y: 100 });
        gsap.set(`${detailsInactive} .title-2`, { y: 100 });
        gsap.set(`${detailsInactive} .desc`, { y: 50 });
        gsap.set(`${detailsInactive} .cta`, { y: 60 });
        clicks -= 1;
        if (clicks > 0) {
          step();
        }
      },
    });

    rest.forEach((i, index) => {
      if (i !== prv) {
        const xNew = offsetLeft + index * (cardWidth + gap);
        gsap.set(getCard(i), { zIndex: 30 });
        gsap.to(getCard(i), {
          x: xNew, y: offsetTop, width: cardWidth, height: cardHeight,
          ease, delay: 0.1 * (index + 1),
        });

        gsap.to(getCardContent(i), {
          x: xNew, y: offsetTop + cardHeight - 100,
          opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1),
        });
        gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
      }
    });
  });
}

// NEW: previous step (reverse direction)
function stepPrev() {
  return new Promise((resolve) => {
    order.unshift(order.pop());
    detailsEven = !detailsEven;

    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

    document.querySelector(`${detailsActive} .place-box .text`).textContent = data[order[0]].place;
    document.querySelector(`${detailsActive} .title-1`).textContent = data[order[0]].title;
    document.querySelector(`${detailsActive} .title-2`).textContent = data[order[0]].title2;
    document.querySelector(`${detailsActive} .desc`).textContent = data[order[0]].description;

    gsap.set(detailsActive, { zIndex: 22 });
    gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
    gsap.fromTo(`${detailsActive} .text`, { y: 100 }, { y: 0, delay: 0.1, duration: 0.7, ease });
    gsap.fromTo(`${detailsActive} .title-1`, { y: 100 }, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.fromTo(`${detailsActive} .title-2`, { y: 100 }, { y: 0, delay: 0.15, duration: 0.7, ease });
    gsap.fromTo(`${detailsActive} .desc`, { y: 50 }, { y: 0, delay: 0.3, duration: 0.4, ease });
    gsap.fromTo(`${detailsActive} .cta`, { y: 60 }, { y: 0, delay: 0.35, duration: 0.4, ease, onComplete: resolve });
    gsap.set(detailsInactive, { zIndex: 12, opacity: 0 });

    const [active, ...rest] = order;
    const nxtLast = order[order.length - 1];

    gsap.set(getCard(active), { zIndex: 20 });
    gsap.to(getCard(active), {
      x: 0, y: 0, ease,
      width: window.innerWidth,
      height: window.innerHeight,
      borderRadius: 0,
    });

    // Numbers and progress update
    gsap.to(getSliderItem(active), { x: 0, ease });
    rest.forEach((i, index) => {
      gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
    });
    gsap.to(".progress-sub-foreground", {
      width: 500 * (1 / order.length) * (active + 1),
      ease,
    });

    // Thumbnails re-stack across the row
    rest.forEach((i, index) => {
      const xNew = offsetLeft + index * (cardWidth + gap);
      gsap.set(getCard(i), { zIndex: 30 });
      gsap.to(getCard(i), { x: xNew, y: offsetTop, width: cardWidth, height: cardHeight, ease, delay: 0.1 * (index + 1) });
      gsap.to(getCardContent(i), {
        x: xNew, y: offsetTop + cardHeight - 100,
        opacity: 1, zIndex: 40, ease, delay: 0.1 * (index + 1),
      });
    });

    // Ensure the last thumb lands at the rightmost slot
    const rightMostX = offsetLeft + (rest.length - 1) * (cardWidth + gap);
    gsap.set(getCard(nxtLast), { zIndex: 30, scale: 1 });
    gsap.to(getCard(nxtLast), { x: rightMostX, y: offsetTop, width: cardWidth, height: cardHeight, borderRadius: 10, ease });
    gsap.set(getCardContent(nxtLast), { x: rightMostX, y: offsetTop + cardHeight - 100, opacity: 1, zIndex: 40 });

    clicks -= 1;
    if (clicks > 0) stepPrev();
  });
}

// Autoplay loop removed entirely
// async function loop() { ... }  // deleted

async function loadImage(src) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

async function loadImages() {
  const promises = data.map(({ image }) => loadImage(image));
  return Promise.all(promises);
}

async function start() {
  try {
    await loadImages();
    init();
  } catch (error) {
    console.error("One or more images failed to load", error);
  }
}

start();

// Add click navigation with in-flight guard
const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");

nextBtn?.addEventListener("click", () => {
  if (clicks === 0) {
    clicks = 1;
    step();
  }
});

prevBtn?.addEventListener("click", () => {
  if (clicks === 0) {
    clicks = 1;
    stepPrev();
  }
});

// Optional: keyboard support
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn?.click();
  if (e.key === "ArrowLeft") prevBtn?.click();
});