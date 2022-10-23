const srcFrame = document.querySelector("#srcFrame");
const projectLinks = document.querySelector(".flexbox-projectHeadings-right");
const header = document.querySelector(".bounce-label");

const siteInfo = new Map();

siteInfo.set("ticTacLink", {
  link: "https://tic-tac-toe-clintin.netlify.app",
});
siteInfo.set("typingLink", {
  link: "https://typing-game-clintin.netlify.app",
});
siteInfo.set("bankistLink", {
  link: "https://bankist-clintin.netlify.app",
});
siteInfo.set("bankistWebLink", {
  link: "https://bankist-marketing-clintin.netlify.app",
});
siteInfo.set("forkifyLink", {
  link: "https://forkify-clintin.netlify.app",
});
siteInfo.set("maptyLink", {
  link: "https://mapty-clintin.netlify.app",
});
siteInfo.set("dinoLink", {
  link: "https://clintin-dino-game.netlify.app",
});
siteInfo.set("flappyLink", {
  link: "https://flappy-bird-flaps.netlify.app",
});

projectLinks.addEventListener("click", function (e) {
  const element = e.target.closest("p");
  if (element === null) return;

  const info = siteInfo.get(element.classList[0]);
  srcFrame.src = info.link;
});

header.addEventListener("mouseover", (e) => {
  let letter = e.target.closest("span");
  if (letter !== null) {
    letter.classList.add("animated");
    letter.classList.add("bubble");
    setTimeout(() => {
      letter.classList.remove("animated");
      letter.classList.remove("bubble");
    }, 1000);
  }
});
