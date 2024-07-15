const phrases = [
    "I'm A Developer!",
    "I'm A Student!",
    "I'm An Innovator!"
];

let currentIndex = 0;
const heading = document.getElementById('animated-heading');

function changePhrase() {
    currentIndex = (currentIndex + 1) % phrases.length;
    heading.textContent = phrases[currentIndex];
}

setInterval(changePhrase, 4000)