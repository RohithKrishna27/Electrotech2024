// Set the date we're counting down to
var countDownDate = new Date("Jun 10, 2024 00:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {
  // Get the current date and time
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = pad(days);
  document.getElementById("hours").innerHTML = pad(hours);
  document.getElementById("minutes").innerHTML = pad(minutes);
  document.getElementById("seconds").innerHTML = pad(seconds);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-section").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to pad numbers with leading zeros
function pad(number) {
  return (number < 10 ? "0" : "") + number;
}

document.addEventListener("DOMContentLoaded", function () {
  var textElement = document.getElementById("typing-text");
  var text = textElement.innerHTML;
  textElement.innerHTML = "";

  var i = 0;
  var speed = 100; // Adjust typing speed (milliseconds)

  function typeWriter() {
    if (i < text.length) {
      textElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter(); // Start typing effect

  document.querySelectorAll(".jumble-text").forEach((element) => {
    const originalText = element.textContent;
    const letters = originalText.split("");
    element.innerHTML = letters
      .map((letter) => `<span>${letter}</span>`)
      .join("");

    element.addEventListener("mouseover", () => {
      const spans = Array.from(element.querySelectorAll("span"));
      let i = 0;

      const intervalId = setInterval(() => {
        if (i >= spans.length - 1) {
          clearInterval(intervalId);
          setTimeout(() => {
            resetText(spans);
          }, 100); // Short delay before resetting
        } else {
          const temp = spans[i].textContent;
          spans[i].textContent = spans[i + 1].textContent;
          spans[i + 1].textContent = temp;
          i++;
        }
      }, 200); // Speed of letter swapping

      function resetText(spans) {
        spans.forEach((span, index) => {
          span.textContent = letters[index];
        });
      }
    });

    element.addEventListener("mouseout", () => {
      // No need to reset on mouseout, will reset after complete interchange
    });
  });
});