// JavaScript untuk animasi confetti
const confetti = document.querySelector('.confetti');

function confettiAnimation() {
  const confettiElements = confetti.querySelectorAll('.confetti-piece');
  for (const confettiElement of confettiElements) {
    confettiElement.style.animation = 'confetti-fall 3s ease-in-out infinite';
    confettiElement.style.transform = `translateX(${Math.random() * 200 - 100}px)`;
  }
}

confettiAnimation();

// // JavaScript untuk animasi confetti
// const confetti = document.getElementById('confetti');

// function generateConfetti() {
//   for (let i = 0; i < 100; i++) {
//     const confettiPiece = document.createElement('div');
//     confettiPiece.classList.add('confetti-piece');
//     confettiPiece.style.left = `${Math.random() * 100}%`;
//     confettiPiece.style.top = `${Math.random() * 100}%`;
//     confetti.appendChild(confettiPiece);
//   }
// }

// generateConfetti();
