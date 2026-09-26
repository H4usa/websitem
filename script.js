const loveButton = document.querySelector("#love-button");
const buttonLabel = document.querySelector("#button-label");
const buttonHint = document.querySelector("#button-hint");
const celebrationLayer = document.querySelector("#celebration-layer");

const littleSurprises = ["🌸", "🌷", "🌼", "🦋", "🐝", "🐞", "♡", "✿"];

function sendLoveIntoTheAir() {
  document.body.classList.add("is-loved");
  buttonLabel.textContent = "Ben de seni çok seviyorum!";
  buttonHint.textContent = "bak, bahçedeki herkes bunu duydu ♡";
  loveButton.setAttribute("aria-pressed", "true");

  littleSurprises.forEach((symbol, index) => {
    const piece = document.createElement("span");
    piece.className = "celebration-piece";
    piece.textContent = symbol;
    piece.style.setProperty("--x", `${8 + Math.random() * 84}%`);
    piece.style.setProperty("--size", `${1.05 + Math.random() * 1.15}rem`);
    piece.style.setProperty("--drift", `${Math.round(Math.random() * 150 - 75)}px`);
    piece.style.setProperty("--spin", `${Math.round(Math.random() * 90 - 45)}deg`);
    piece.style.setProperty("--duration", `${3.2 + Math.random() * 1.8}s`);
    piece.style.setProperty("--delay", `${index * 90}ms`);
    celebrationLayer.append(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  });
}

loveButton?.addEventListener("click", sendLoveIntoTheAir);
