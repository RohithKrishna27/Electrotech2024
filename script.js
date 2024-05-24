// JavaScript to simulate typing effect and repeating text
document.addEventListener("DOMContentLoaded", function() {
    var textElement = document.getElementById('typing-text');
    var text = textElement.innerHTML;
    textElement.innerHTML = '';

    var i = 0;
    var speed = 50; // Adjust typing speed (milliseconds)

    function typeWriter() {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        } else {
            i = 0; // Reset index to repeat typing
            setTimeout(typeWriter, 500); // Wait 2 seconds before repeating
            textElement.innerHTML = ''; // Clear text for the next iteration
        }
    }

    typeWriter(); // Start typing effect
});
