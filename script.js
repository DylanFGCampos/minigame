const starsContainer = document.getElementById('stars-container');
const message = document.getElementById('message');
const numStars = 10;
let clickedStars = 0;

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.addEventListener('click', () => {
        star.classList.add('hidden');
        clickedStars++;
        if (clickedStars === numStars) {
            showInvitation();
        }
    });
    starsContainer.appendChild(star);
}

function showInvitation() {
    message.textContent = "Macaco, Dona Lindalva?";
}

for (let i = 0; i < numStars; i++) {
    createStar();
}
