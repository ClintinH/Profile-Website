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
              <li class="linkstyle">2. The displayed sentence character will change color to green if you type correctly.</li>
              <li class="linkstyle">3. The displayed sentence character will change color to red if you type incorrectly.</li>
              <li class="linkstyle">4. A new line of text will appear if you finished the sentence correctly or if the timer runs out.</li>
            </ul>                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. Whilts testing I noticed that I can type more characters than which was required. The first challenge was how to prevent players from typing more letters than the displayed sentence.</li>
              <li class="linkstyle">2. I needed a way to inform users whether they are typing correctly or incorrectly. The second challenge was to write a function that informs a player whether the letter typed is correct or incorrect. correct - green | incorrect - red</li>
              <li class="linkstyle">3. Whilst testing I realised that I had too much time to write the sentences. This preventing a urge for urgency and lowered the difficulty of the game. The third challenge was to writing a function to give a player just enough time to complete the challenge</li>
          </ul>            
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
              <li class="linkstyle">1. There is only 2 user accounts for now: username: js, password: 1111, username: jd, password: 2222.</li>
              <li class="linkstyle">2. You can send funds, make withdrawals, loan money, check balances.</li>
              <li class="linkstyle">3. You can sort your movement on the account. Only newest to oldest or oldest to newest</li>
              <li class="linkstyle">4. The user accounts log out automatically after user is idle for a set amount of time</li></li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. I didn't know how to to work out the interest on loans, research.research.research. First challenge writing a function with logic to work out the interest rate of loan amount.</li>
              <li class="linkstyle">2. I needed a method to see whether the user are qualified to loan any money or not. Second challenge writing a function to check whether user meets the requirements to make loans</li>
              <li class="linkstyle">2. I wanted the users to beable to transfer funds to other like a real bank. Third challenge writing a function to transer amounts to others and add funds to transfered user and subtract funds from accounst that did the transfer</li>
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
              <li class="linkstyle">1. This is a website build for marketing of the bankist app.</li>
              <li class="linkstyle">2. Show casing what the benefits are of using the bankist app ...</li>
            </ul>
            ${disclaimer}             
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. Challenging myself to creating lazy loading images and content for better performance. First challenge writing a scroll method to check percentages of window view before loading next content.</li>
            <li class="linkstyle">2. Trying to make the website as appealing and approachable as possible. Second challenge how to create a website people will actually see as an authentic banking website</li>
            <li class="linkstyle">3. We had to create a slider with testemonial for authentisy of the user experiences. As I have never created a slider before it was back to research. third challenge creating a slider.</li>
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
              <li class="linkstyle">1. A recipe website for viewing recipes of food of all different kinds. Yum!</li>
              <li class="linkstyle">2. You can search or load your own recipes that you like.</li>
              <li class="linkstyle">3. If you find a reciper you like you can bookmark it for easy access to you favorite recipes.</li>
              <li class="linkstyle">4. Every recipe has a foto to view what the final product should look like and has an option to increase the number of servings which then increases the amount of incredient you need for completion.</li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. My first challenge was to write the pagination method to load the recipes and correspond the right amount of pages to scroll throught so that we can load more recipes without have to make the information too small.</li>
            <li class="linkstyle">2. My second challenge was getting the ingredients to multiply correctly according to the amount of servings.</li>
            <li class="linkstyle">3. I wanted to store the bookmarked recipes and users loaded recipes so that they can access this features when the visit the webpage again which means storing this information on the local storage. Third challenge was to writing a function to store data in the local API so that the information will load automatically every time a user uses the website (example bookmarks).</li>
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
              <li class="linkstyle">1. You can create a workout plan for either running or cycling or both.</li>
              <li class="linkstyle">2. You can adjust the pace/tempo/time of any route as you would like.</li>
              <li class="linkstyle">3. Plot markers on the geomap to mark your favorite workouts locations.</li>
              <li class="linkstyle">4. Color coded in orange or green to help differentiate between running or cycling.</li>
              <li class="linkstyle">5. You can set your workouts from any location in the word.</li>
              <li class="linkstyle">6. The app will zero in on your location when you open the app for easy use</li>
            </ul>
            ${disclaimer}            
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. I wanted the user to pin location on the map to set their routes for their exercise plans. First challenge getting the location markers to plot on the geomap with information that the user can set (running, cycling, pace, tempo, time).</li>
            <li class="linkstyle">2. I wanted the markers placed by the users to stay there when they use the app again. Second challenge storing the user workout information on a local API so that the information will load whenever the user uses the application.</li>
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
              <li class="linkstyle">1. Press any key to start game</li>
              <li class="linkstyle">2. Press space bar to make the dinosaur character jump</li>
              <li class="linkstyle">3. Jump over as many cactus obstacles as you can to get the highest score</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. I wanted the background to move and different speeds so that the user will get the feeling that the dino character is running in the desert. First challenge getting the backgrounds to move at different speeds to create look and feel</li>
            <li class="linkstyle">2. I need to create a way to make the dino character move smoothly when the user jumps. Second challenge adjusting the right values for the gravity and speed so that the dino character can jump over the cactus obstacles with smooth movements</li>
            to be Continued on the next page            
          </ul>            
      </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">            
            <li class="linkstyle">3. When I was testing the game I realised that some of the images wasn't loading properly. Third challenge creating a loading bar so that all the information on the webpage can load before the user starts playing</li>
            <li class="linkstyle">4. My mentor challenged me to make the game responsive on other platforms as well. Fourth challenge adding methods and css styling so that the game will be playable on other platforms, example cellphones.</li>
          </ul>            
      </div>
    </div>

    <div class="slide slide--3">
      <div class="information-block">
        <h5 class="information__header">Planning</h5>
        <img src="images/dinogamePlanning.svg" alt="" class="planning-image" />        
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
              <li class="linkstyle">1. Press any key to start game</li>
              <li class="linkstyle">2. Press space bar repeatedly to make the bird fly up and release the space bar to make the bird glyde downwards</li>
              <li class="linkstyle">3. Move through as many pillars as possible to see who can fly the longest</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
            <li class="linkstyle">1. The First challenge was to creating a method to create the gaps in the pillars for the bird to fly through.</li>
            <li class="linkstyle">2. When testing the game I realised that the gaps of the pillars was a little small and the bird could not fly through. Second challenge adjusting the pillar gap just big enough for the bird to fly through.</li>
            <li class="linkstyle">3. I was struggling to get the bird to move fluently and not to make it fall downwards to fast and upwards to slow. This decreased the user experience. Third challenge was to get the values of the gravity to be just the right amount so that the bird fly as fluent as possible.</li>
            to be Continued on the next page
          </ul>            
      </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">                        
            <li class="linkstyle">4. When I was testing the game I realised that some of the images wasn't loading properly. Third challenge creating a loading bar so that all the information on the webpage can load before the user starts playing</li>
            <li class="linkstyle">5. My mentor challenged me to make the game responsive on other platforms as well. Fourth challenge adding methods and css styling so that the game will be playable on other platforms, example cellphones.</li>
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
              <li class="linkstyle">1. Type in a number as a guess to what the mysterious number behind the question mark could be.</li>
              <li class="linkstyle">2. The mysterious number will be a random number ranging from 1 to 20.</li>
              <li class="linkstyle">3. Once you have submitted your guess the message will prompt whether your guess is correct, too low or too high.</li>
            </ul>
            ${disclaimer}            
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
              <li class="linkstyle">1. Add, subtract, multiply and divide like a normal house hold calculator.</li>
              <li class="linkstyle">2. You can reset the total amount of operations or just the current operation.</li>
              <li class="linkstyle">3. You must press the equal button to finalize you operation before a next operation can begin.</li>
            </ul>
                      
        </div>
    </div>

    <div class="slide slide--2">
      <div class="information-block">
        <h5 class="information__header">Challenges I had whilst design / coding</h5>
          <ul class="information__text">
              <li class="linkstyle">1. My first challenge was to write a method to know on which button the user click so that the corresponding action could be taken on the application</li>
              <li class="linkstyle">2. My second challenge was to write a function to select whether the user Added, subtracted, multiplied or divided so that the correct calculation could be displayed on the calculator screen</li>
          </ul>            
      </div>
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
              <li class="linkstyle">1. Each player will be given a change to roll the dice when can land from number 1 to 6.</li>
              <li class="linkstyle">2. Everytime the dice stops the corresponding number it landed on will be added to the players current total.</li>
              <li class="linkstyle">3. A players has to press the hold button to add the current total to their total score. If the player rolls a 1 on the dice then their current total will be reset to an amount of 0.</li>
              <li class="linkstyle">4. The player with the first total score to reach 100 wins</li>
            </ul>
                      
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
