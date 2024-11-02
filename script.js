const typingText = document.querySelector(".typing-text");
const textArray = ["Frontend Developer", "Web Designer", "UI/UX Enthusiast"];
let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 200);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, 200);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Circular progress animation
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll('.inner-circle');

    circles.forEach(circle => {
        const percent = circle.getAttribute('data-percent');
        let currentValue = 0;
        const interval = setInterval(() => {
            if (currentValue >= percent) {
                clearInterval(interval);
            } else {
                currentValue++;
                circle.textContent = `${currentValue}%`;
            }
        }, 15);
    });
});

