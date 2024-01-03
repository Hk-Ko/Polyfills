//Debouncing and throtlling in Javascript
//Q1 - Create a button UI and add debounce as follow =>
//   --->show 'button pressed <x> times" every time button is pressed
//   --->increase "triggered" <y> times" count after 800ms of debounce

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggered = 0;

// const debouncedCount = _.debounce(() => {
//   count.innerHTML = ++triggered;
// }, 800);

// const throttledCount = _.throttle(() => {
//   count.innerHTML = ++triggered;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });

//Q2 - Pollyfill for debouncing

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggered = 0;

// const myDebounce = (cb, d) => {
//   let timer;

//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       cb(...args);
//     }, d);
//   };
// };

// const debouncedCount = myDebounce(() => {
//   triggered += 1;
//   count.innerHTML = triggered;
// }, 800);

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   debouncedCount();
// });

//Q3-pollyfill for throttling

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggered = 0;

const start = new Date().getTime();

const myThrottle = (cb, d) => {
  let last = 0;

  return (...args) => {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

const throttled = myThrottle(() => {
  triggered += 1;
  count.innerHTML = triggered;
}, 1000);

btn.addEventListener("click", () => {
  btnPress.innerHTML = pressedCount++;
  const now = new Date().getTime();
  const seconds = (now - start) / 1000;
  console.log(seconds.toFixed());
  throttled();
});
