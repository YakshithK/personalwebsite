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

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}