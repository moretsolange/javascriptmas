/**
 * 🎄 Challenge:
 * 1. The Christmas tree's lights should switch
 *    on and off every 800 miliseconds.
 *
 * Stretch Goal:
 *    Make the blue and red lights flash alternately.
 **/
setInterval(() => {
  for (light of document.getElementsByClassName("red")) {
    light.classList.toggle("lights-on");
  }
}, 800);

setTimeout(() => {
  setInterval(() => {
    for (light of document.getElementsByClassName("blue")) {
      light.classList.toggle("lights-on");
    }
  }, 800);
}, 800);
