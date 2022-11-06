import { slideInnerHtml } from "./slider.js";

const srcFrame = document.querySelector("#srcFrame");
const projectLinks = document.querySelector(".flexbox-projectHeadings-right");
const header = document.querySelector(".bounce-label");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const sliderInfo = document.querySelector(".slider");
const webButton = document.querySelector(".webLink");
const codeButton = document.querySelector(".codeLink");

const siteInfo = new Map();

const disclaimer = `
<div class = "disclaimer">
    <i><b>Disclaimer:</b>
    </i> I am using this site for portfolio purpose only all rights of creativity belong to Jonas 
    <i><b>© Copyright</b>
    </i> by Jonas Schmedtmann. Use for learning or your portfolio. Don't use to teach. Don't claim as your own.
</div>
`;

siteInfo.set("ticTacLink", {
  link: "https://tic-tac-toe-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Tic-Tak-Toe is a game with 2 players.<br />
              Player 1 with a symbol 'X' & Player2 with a symbol 'O'.</li>
              <li class="linkstyle">2. The first player to get 3 of their symbols in a row wins.</li>
              <li v>3. A Row combination can be horizontal, vertical or diagonally.</li>
              <li class="linkstyle">4. A draw is when there is no players with a winning comination (3 symbols in a row) and all the spaces are filled with symbols.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Write a function to prevent players from adding symbols on top of each other.</li>
              <li class="linkstyle">2. Writing logic to recognize a winning combination and if no combination exist then its a draw.</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  
  `,
  weblink: "https://tic-tac-toe-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Tic-Tac-Toe",
});
siteInfo.set("typingLink", {
  link: "https://typing-game-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Type the sentence that appears as fast as you can before the timer runs out.</li>
              <li class="linkstyle">2. If you type correctly the words will change color to green.</li>
              <li class="linkstyle">3. If you type incorrectly the words will change color to red.</li>
              <li class="linkstyle">4. A new line of text will appear if you finished the sentence correctly or if the timer runs out.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Write a function to prevent players from typing more letters than in the sentence.</li>
              <li class="linkstyle">2. Writing a function to let the player know whether the letter typed is correct or incorrect</li>
              <li class="linkstyle">2. Writing a function to give a player just enough time to complete the challenge</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://typing-game-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Speed-Typing",
});
siteInfo.set("bankistLink", {
  link: "https://bankist-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. 2 user accounts  js - 1111, jd - 2222.</li>
              <li class="linkstyle">2. Can send funds, make withdrawals, loan money, check balances and more.</li>
              <li class="linkstyle">3. You can sort your movement on the account.</li>
              <li class="linkstyle">4. Accounts log out automatically after user is idle for a set amount of time</li></li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Writing a function with logic to work out the interest rate of loan amount.</li>
              <li class="linkstyle">2. Writing a function to check whether user meats the requirements to make loans</li>
              <li class="linkstyle">2. Writing a function to transer amounts and add / subtract amounts from accounst</li>
          </ul>            
      </div>
    </div>
  `,
  weblink: "https://bankist-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Bankist-Course",
});
siteInfo.set("bankistWebLink", {
  link: "https://bankist-marketing-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Marketing website for Bankist app.</li>
              <li class="linkstyle">2. Show casing what the benefits are of using the bankist app.</li>
            </ul>
            ${disclaimer}             
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Writing a scroll method to check percentages of window view before loading next content.</li>
            <li class="linkstyle">2. Writing an loading the testimonials gallery.</li>
          </ul>            
      </div>
    </div>
  `,
  weblink: "https://bankist-marketing-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Bankist-Course-Marketing",
});
siteInfo.set("forkifyLink", {
  link: "https://forkify-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Marketing website viewing recipes of food.</li>
              <li class="linkstyle">2. Can load your own recipes that you like.</li>
              <li class="linkstyle">3. Bookmark function for easy access to you favorite recipes.</li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Writing the pagination method to load the recipes and correspond the right amount of pages to scroll throught.</li>
            <li class="linkstyle">2. Getting the ingredients to multiply correctly according to the amount of servings.</li>
            <li class="linkstyle">2. Writing a function to store data in the local API so that the information will load automatically every time a user uses the website (example bookmarks).</li>
          </ul>            
      </div>
    </div>
  `,
  weblink: "https://forkify-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Forkify-Course-Video",
});
siteInfo.set("maptyLink", {
  link: "https://mapty-clintin.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Create a workout plan of either running or cycling.</li>
              <li class="linkstyle">2. You can adjust the pace/tempo/time of a route as you would like.</li>
              <li class="linkstyle">3. Plot markers on the geomap to mark your favorite workouts locations.</li>
              <li class="linkstyle">4. Color coded in orange or green to help differentiate between running / cycling.</li>
              <li class="linkstyle">5. You can set you workouts anywork in the word.</li>
              <li class="linkstyle">6. The app will zero in on your location when you open the app</li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Getting the location markets to plot on the geomap with information set by the user.</li>
            <li class="linkstyle">2. Storing the user workout information on a local API so that the information will load whenever the user uses the application.</li>
          </ul>            
      </div>
    </div>
  `,
  weblink: "https://mapty-clintin.netlify.app",
  codelink: "https://github.com/ClintinH/Mapty-Course",
});
siteInfo.set("dinoLink", {
  link: "https://clintin-dino-game.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Press a key to start game</li>
              <li class="linkstyle">2. Press space bar to make the Dinosaur Character jump</li>
              <li class="linkstyle">3. Jump Over as Many Cactus obstacles as you can you get the highest score</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Getting the backgrounds to move at different speeds to create look and feel</li>
            <li class="linkstyle">2. Adjusting the right values for the gravity and speed so that the Dino character can jump over the cactus obstacles</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://clintin-dino-game.netlify.app",
  codelink: "https://github.com/ClintinH/Dino_Game",
});
siteInfo.set("flappyLink", {
  link: "https://flappy-bird-flaps.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Press a key to start game</li>
              <li class="linkstyle">2. Press space bar to make the bird fly up and release space bar to make the bird glyde down</li>
              <li class="linkstyle">3. Move through as many pillars as possible to reach the furthers and fly the longest</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Creating a method to create the gaps in the pillars</li>
            <li class="linkstyle">2. Adjusting the pillar gap just big enough for the bird to fly through</li>
            <li class="linkstyle">2. getting the values of the gravity to be just the right amount so that the bird as fluent motions</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://flappy-bird-flaps.netlify.app",
  codelink: "https://github.com/ClintinH/Flappy_Bird",
});
siteInfo.set("guessNumberLink", {
  link: "https://clintin-guess-mynumber.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Tic-Tak-Toe is a game with 2 players. Player 1 with a symbol 'X' & Player2 with a symbol 'O'.</li>
              <li class="linkstyle">2. The first player to get 3 of their symbols in a row wins.</li>
              <li class="linkstyle">3. A Row combination can be horizontal, vertical or diagonally.</li>
              <li class="linkstyle">4. A draw is when there is no players with a winning comination (3 symbols in a row) and all the spaces are filled with symbols.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Write a function to prevent players from adding symbols on top of each other.</li>
              <li class="linkstyle">2. Writing logic to recognize a winning combination and if no combination exist then its a draw.</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://clintin-guess-mynumber.netlify.app",
  codelink: "https://github.com/ClintinH/GuessMyNumber-Course",
});
siteInfo.set("calculatorLink", {
  link: "https://clintin-calculator.netlify.app/",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Tic-Tak-Toe is a game with 2 players. Player 1 with a symbol 'X' & Player2 with a symbol 'O'.</li>
              <li class="linkstyle">2. The first player to get 3 of their symbols in a row wins.</li>
              <li class="linkstyle">3. A Row combination can be horizontal, vertical or diagonally.</li>
              <li class="linkstyle">4. A draw is when there is no players with a winning comination (3 symbols in a row) and all the spaces are filled with symbols.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Write a function to prevent players from adding symbols on top of each other.</li>
              <li class="linkstyle">2. Writing logic to recognize a winning combination and if no combination exist then its a draw.</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://clintin-calculator.netlify.app/",
  codelink: "https://github.com/ClintinH/Calculator",
});
siteInfo.set("pigGameLink", {
  link: "https://clintin-piggame.netlify.app",
  description: `
    <div class="slide slide--1">
      <div class="information-block">
        <h5 class="information__header">How to Play!</h5>
            <ul class="information__text">
              <li class="linkstyle">1. Tic-Tak-Toe is a game with 2 players. Player 1 with a symbol 'X' & Player2 with a symbol 'O'.</li>
              <li class="linkstyle">2. The first player to get 3 of their symbols in a row wins.</li>
              <li class="linkstyle">3. A Row combination can be horizontal, vertical or diagonally.</li>
              <li class="linkstyle">4. A draw is when there is no players with a winning comination (3 symbols in a row) and all the spaces are filled with symbols.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Write a function to prevent players from adding symbols on top of each other.</li>
              <li class="linkstyle">2. Writing logic to recognize a winning combination and if no combination exist then its a draw.</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/tiktaktoPlanning.svg" alt="" class="planning-image" />        
      </div>
    </div>
  `,
  weblink: "https://clintin-piggame.netlify.app",
  codelink: "https://github.com/ClintinH/PigGame-Course",
});

projectLinks.addEventListener("click", function (e) {
  const element = e.target.closest("p");
  if (element === null) return;

  const info = siteInfo.get(element.classList[0]);
  srcFrame.src = info.link;
  webButton.href = info.weblink;
  codeButton.href = info.codelink;

  sliderInfo.innerHTML = `${info.description}`;

  const slides = document.querySelectorAll(".slide");
  slideInnerHtml(slides);

  modal.show();
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

// openModal.addEventListener("click", function () {
//   modal.show();
// });

closeModal.addEventListener("click", function () {
  modal.close();
});

/*
<button type="button" class = "website-link">
<a class = "webLink" href= "https://tic-tac-toe-clintin.netlify.app">GO TO WEBPAGE</a>
</button>
<button type="button" class = "code-link">
<a class = "codeLink" href= "https://github.com/ClintinH/Tic-Tac-Toe">GO TO CODE</a>
</button> 
*/
