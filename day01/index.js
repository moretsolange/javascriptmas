function renderCountdown() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  const christmasDay = new Date("December 25, 2023 00:00:01");

  let differenceSeconds = Math.floor(
    (christmasDay.getTime() - currentDate.getTime()) / 1000
  );

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (currentDay != 25) {
    days = Math.floor(differenceSeconds / (3600 * 24));
    differenceSeconds -= days * 3600 * 24;
    hours = Math.floor(differenceSeconds / 3600);
    differenceSeconds -= hours * 3600;
    minutes = Math.floor(differenceSeconds / 60);
    differenceSeconds -= minutes * 60;
    seconds = differenceSeconds;
  }

  document.getElementById("days").innerHTML = days + " Days ";
  document.getElementById("hours").innerHTML = hours + " Hours ";
  document.getElementById("minutes").innerHTML = minutes + " Minutes ";
  document.getElementById("seconds").innerHTML = seconds + " Seconds ";

  setTimeout(renderCountdown, 1000);
}

renderCountdown();
