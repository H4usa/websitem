const loveButton = document.querySelector("#love-button");
const buttonLabel = document.querySelector("#button-label");
const buttonHint = document.querySelector("#button-hint");
const celebrationLayer = document.querySelector("#celebration-layer");

function sendLoveIntoTheAir() {
  document.body.classList.add("is-loved");
  buttonLabel.textContent = "Ben de seni çok seviyorum!";
  buttonHint.textContent = "bak, bahçedeki herkes bunu duydu ♡";
  loveButton.setAttribute("aria-pressed", "true");

  // A fresh handful of roses follows every tap, even while the previous shower fades.
  for (let index = 0; index < 58; index += 1) {
    const rose = document.createElement("span");
    rose.className = "celebration-piece rose-piece";
    rose.textContent = "🌹";
    rose.style.setProperty("--x", `${Math.random() * 100}%`);
    rose.style.setProperty("--size", `${1.7 + Math.random() * 2.8}rem`);
    rose.style.setProperty("--drift", `${Math.round(Math.random() * 260 - 130)}px`);
    rose.style.setProperty("--spin", `${Math.round(Math.random() * 1000 - 500)}deg`);
    rose.style.setProperty("--duration", `${3.6 + Math.random() * 1.5}s`);
    rose.style.setProperty("--delay", `${Math.random() * 650}ms`);
    rose.style.setProperty("--start", `${-12 - Math.random() * 95}vh`);
    celebrationLayer.append(rose);
    rose.addEventListener("animationend", () => rose.remove(), { once: true });
  }
}

loveButton?.addEventListener("click", sendLoveIntoTheAir);
