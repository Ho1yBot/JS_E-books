'use strict';

function timePizza(ms) {
  const option = {
    second: "numeric",
    minute: "numeric"
  }

  const interval = setInterval(() => {
    if (ms > 0) {
      console.log(new Intl.DateTimeFormat(navigator.language, option)
        .format(ms));
      ms = ms - 1000
    }

  }, 1000);

  setTimeout(() => {
    clearInterval(interval)
    console.log("PIZZA");
  }, ms + 1000);
}

timePizza(5000)


