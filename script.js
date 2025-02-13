// ✅ Play background music when page loads
window.onload = function() {
    const bgMusic = document.getElementById("bg-music");

    // ✅ Lower the volume for a soft effect
    bgMusic.volume = 0.4;

    // ✅ Play after user interaction (fixes autoplay block)
    document.body.addEventListener("click", function() {
        bgMusic.play().catch(() => console.log("Autoplay blocked by browser"));
    });
};

// ✅ Apology Message Animation
document.getElementById('read-apology').addEventListener('click', function() {
    const message = "Sky, I am sorry for what I said. I didn't mean to offend you, and I regret what I said. Please forgive me.";
    const apologyMessage = document.getElementById('apology-message');
    const title = document.querySelector('h1');

    let i = 0;
    apologyMessage.innerHTML = "";
    apologyMessage.classList.add("fade-in");

    // ✅ Hide the title when the button is clicked
    title.style.display = 'none';

    function typeWriter() {
        if (i < message.length) {
            apologyMessage.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            document.getElementById('forgive-me').style.display = 'block';
        }
    }

    typeWriter();
    this.style.display = 'none';
});

// ✅ When "Forgive Me?" is clicked
document.getElementById('forgive-me').addEventListener('click', function() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.classList.add('button');

    const orText = document.createElement('p');
    orText.textContent = 'Or';
    orText.classList.add('or-text');

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.classList.add('button');

    // ✅ Order: Yes - Or - No
    buttonContainer.appendChild(yesButton);
    buttonContainer.appendChild(orText);
    buttonContainer.appendChild(noButton);

    container.appendChild(buttonContainer);

    yesButton.addEventListener('click', thankYouMessage);
    noButton.addEventListener('click', prettyPlease);
});

// ✅ "Pretty Please" Function
function prettyPlease() {
    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    const prettyPleaseParagraph = document.createElement('p');
    prettyPleaseParagraph.textContent = 'Pretty please 💜';
    prettyPleaseParagraph.classList.add('love-letter');

    const yesResponseButton = document.createElement('button');
    yesResponseButton.textContent = 'Yes';
    yesResponseButton.classList.add('button');

    container.appendChild(prettyPleaseParagraph);
    container.appendChild(yesResponseButton);

    yesResponseButton.addEventListener('click', thankYouMessage);
}

// ✅ Floating Hearts & Fireworks Start When "Yes" is Clicked
function thankYouMessage(event) {
    const container = document.querySelector('.container');

    // ✅ Apply only the glow effect before changing the screen
    if (event) {
        event.target.classList.add('yes-button-glow');

        // ✅ Remove glow effect after 2 seconds for a smooth transition
        setTimeout(() => {
            event.target.classList.remove("yes-button-glow");
        }, 2000);
    }

    // ✅ Transition to thank you message
    setTimeout(() => {
        container.innerHTML = ''; 
        const thankYouParagraph = document.createElement('p');

        // ✅ Fixed space for the heart to prevent text shifting
        thankYouParagraph.innerHTML = `Thank you for forgiving me <span class="flying-heart">💜</span>`;
        thankYouParagraph.classList.add('love-letter');

        container.appendChild(thankYouParagraph);

        // ✅ Start heart animation after 2 seconds
        setTimeout(() => {
            const flyingHeart = document.querySelector('.flying-heart');
            flyingHeart.classList.add('fly-away');

            // ✅ Remove the heart smoothly but keep space occupied
            setTimeout(() => {
                flyingHeart.style.opacity = "0"; // Fade out instead of full removal
            }, 4000);
        }, 2000);

        // ✅ Reduced the number of floating hearts
        let heartCount = 0;
        const heartInterval = setInterval(() => {
            if (heartCount < 10) { // ✅ Limited to 10 hearts
                createHeart();
                heartCount++;
            } else {
                clearInterval(heartInterval); // ✅ Stop after 10 hearts
            }
        }, 800); // ✅ Slightly slower rate

        // ✅ Fireworks for a grand effect
        let fireworkCount = 0;
        const fireworkInterval = setInterval(() => {
            if (fireworkCount < 12) { // ✅ Launch up to 12 fireworks
                createFirework();
                fireworkCount++;
            } else {
                clearInterval(fireworkInterval);
            }
        }, 200);

    }, 1000); // Delay for smooth transition
}

// ✅ Create Floating Hearts
function createHeart() {
    const heart = document.createElement('span');
    heart.textContent = '💜';
    heart.classList.add('heart');

    // ✅ Randomize horizontal position
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.bottom = "-50px"; 

    // ✅ Random animation speed for variation
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;

    document.body.appendChild(heart);

    // ✅ Remove heart after animation completes
    setTimeout(() => {
        heart.remove();
    }, 8000);
}

// ✅ Create Fireworks Effect at Random Positions
function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // ✅ Randomize firework position (higher & more visible)
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 40 + 20}%`; // Centered explosion

    document.body.appendChild(firework);

    // ✅ Remove firework after animation completes
    setTimeout(() => {
        firework.remove();
    }, 1500);
}

// ✅ Ensure "Yes" button glows when clicked
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("button") && event.target.textContent.trim() === "Yes") {
        event.target.classList.add("yes-button-glow");
        
        // ✅ Remove glow effect after 2 seconds for a smooth transition
        setTimeout(() => {
            event.target.classList.remove("yes-button-glow");
        }, 2000);
    }
});
