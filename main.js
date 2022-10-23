const srcFrame = document.querySelector("#srcFrame");
const framePanel = document.querySelector(".flexbox-leftPanel");
const infoPanel = document.querySelector(".flexbox-rightPanel");

const siteInfo = new Map();

const disclaimer = `<div class = "disclaimer"><i><b>Disclaimer:</b></i> I am using this site for portfolio purpose only all rights of creativity belong to Jonas 
<i><b>© Copyright</b></i> by Jonas Schmedtmann. Use for learning or your portfolio. Don't use to teach. Don't claim as your own.
</div>`;

siteInfo.set("ticTacThumb", {
  link: "https://tic-tac-toe-clintin.netlify.app",
  title: "Tic-Tac-Toe",
  description: `<ul>
                    <h3>Rules</h3>
                    <li>1. Tic-Tak-Toe game with player 1 'X' & player2 'O'.</li>
                    <li>2. First player to get 3 symbols in a row wins.</li>
                    <li>3. rows combination can be horizontal, vertical or diagonally.</li>
                    <li>4. A draw is when there is no player with a winning comination (3 symbols in a row) and all the spaces are filled.</li>
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Write a function to prevent players from adding symbols on top of each other.</li>
                    <li>2. Writing logic to recognize a winning combination and if no combination exist then its a draw.</li>
                </ul><br />
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://tic-tac-toe-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Tic-Tac-Toe">GO TO CODE</a>
                </button>           
                </div>`,
});
siteInfo.set("typingThumb", {
  link: "https://typing-game-clintin.netlify.app",
  title: "Speed Typing",
  description: `<ul>
                    <h3>Rules</h3>
                    <li>1. Type the sentence that appears as fast as you can before the timer runs out.</li>
                    <li>2. If you type correctly the words will change color to green.</li>
                    <li>3. If you type incorrectly the words will change color to red.</li>
                    <li>4. A new line of text will appear if you finished the sentence correctly or if the timer runs out.</li>
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Write a function to prevent players from typing more letters than in the sentence.</li>
                    <li>2. Writing a function to let the player know whether the letter typed is correct or incorrect</li>
                    <li>2. Writing a function to give a player just enough time to complete the challenge</li>
                </ul><br />   
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://typing-game-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Speed-Typing">GO TO CODE</a>
                </button>  
                </div>`,
});
siteInfo.set("bankistThumb", {
  link: "https://bankist-clintin.netlify.app",
  title: "Banking App",
  description: `<ul>
                  <h3>Rules</h3>
                  <li>1. 2 user accounts  js - 1111, jd - 2222.</li>
                  <li>2. Can send funds, make withdrawals, loan money, check balances and more.</li>
                  <li>3. You can sort your movement on the account.</li>
                  <li>4. Accounts log out automatically after user is idle for a set amount of time</li>
                </ul><br />

                <ul>
                  <h3>Challenges</h3>
                  <li>1. Writing a function with logic to work out the interest rate of loan amount.</li>
                  <li>2. Writing a function to check whether user meats the requirements to make loans</li>
                  <li>2. Writing a function to transer amounts and add / subtract amounts from accounst</li>
                </ul><br />  
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://bankist-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Bankist-Course">GO TO CODE</a>
                </button>                  
                ${disclaimer}`,
});
siteInfo.set("bankistWebThumb", {
  link: "https://bankist-marketing-clintin.netlify.app",
  title: "Bankist Webpage",
  description: `<ul>
                    <h3>Information</h3>
                    <li>1. Marketing website for Bankist app.</li>
                    <li>2. Show casing what the benefits are of using the bankist app.</li>
                   
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Writing a scroll method to check percentages of window view before loading next content.</li>
                    <li>2. Writing an loading the testimonials gallery.</li>
                </ul><br />   
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://bankist-marketing-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Bankist-Course-Marketing">GO TO CODE</a>
                </button>       
                ${disclaimer}`,
});
siteInfo.set("forkifyThumb", {
  link: "https://forkify-clintin.netlify.app",
  title: "Forkify Recipe Webpage",
  description: `<ul>
                    <h3>Information</h3>
                    <li>1. Marketing website viewing recipes of food.</li>
                    <li>2. Can load your own recipes that you like.</li>
                    <li>3. Bookmark function for easy access to you favorite recipes.</li>
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Writing the pagination method to load the recipes and correspond the right amount of pages to scroll throught.</li>
                    <li>2. Getting the ingredients to multiply correctly according to the amount of servings.</li>
                    <li>2. Writing a function to store data in the local API so that the information will load automatically every time a user uses the website (example bookmarks).</li>
                </ul><br />   
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://forkify-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Forkify-Course-Video">GO TO CODE</a>
                </button>    
                ${disclaimer}`,
});
siteInfo.set("maptyThumb", {
  link: "https://mapty-clintin.netlify.app",
  title: "Mapty App",
  description: `<ul>
                    <h3>Information</h3>
                    <li>1. Create a workout plan of either running or cycling.</li>
                    <li>2. You can adjust the pace/tempo/time of a route as you would like.</li>
                    <li>3. Plot markers on the geomap to mark your favorite workouts locations.</li>
                    <li>4. Color coded in orange or green to help differentiate between running / cycling.</li>
                    <li>5. You can set you workouts anywork in the word.</li>
                    <li>6. The app will zero in on your location when you open the app</li>
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Getting the location markets to plot on the geomap with information set by the user.</li>
                    <li>2. Storing the user workout information on a local API so that the information will load whenever the user uses the application.</li>
                    
                </ul><br />  
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://mapty-clintin.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Mapty-Course">GO TO CODE</a>
                </button>   
                ${disclaimer}       
                `,
});
siteInfo.set("dinoThumb", {
  link: "https://clintin-dino-game.netlify.app",
  title: "Dino Game",
  description: `<ul>
                    <h3>Information</h3>
                    <li>1. Press a key to start game</li>
                    <li>2. Press space bar to make the Dinosaur Character jump</li>
                    <li>3. Jump Over as Many Cactus obstacles as you can you get the highest score</li>
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Getting the backgrounds to move at different speeds to create look and feel</li>
                    <li>2. Adjusting the right values for the gravity and speed so that the Dino character can jump over the cactus obstacles</li>
                    
                </ul><br />  
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://clintin-dino-game.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Dino_Game">GO TO CODE</a>
                </button>      
                `,
});
siteInfo.set("flappyThumb", {
  link: "https://flappy-bird-flaps.netlify.app",
  title: "Flappy Bird",
  description: `<ul>
                    <h3>Information</h3>
                    <li>1. Press a key to start game</li>
                    <li>2. Press space bar to make the bird fly up and release space bar to make the bird glyde down</li>
                    <li>3. Move through as many pillars as possible to reach the furthers and fly the longest</li>
                  
                </ul><br />

                <ul>
                    <h3>Challenges</h3>
                    <li>1. Creating a method to create the gaps in the pillars</li>
                    <li>2. Adjusting the pillar gap just big enough for the bird to fly through</li>
                    <li>2. getting the values of the gravity to be just the right amount so that the bird as fluent motions</li>
                    
                </ul><br />  
                <button type="button" class = "website-link">
                <a class = "webLink" href= "https://flappy-bird-flaps.netlify.app">GO TO WEB</a>
                </button>
                <button type="button" class = "code-link">
                <a class = "codeLink" href= "https://github.com/ClintinH/Flappy_Bird">GO TO CODE</a>
                </button>         
                `,
});

framePanel.addEventListener("click", function (e) {
  const element = e.target.closest("img");
  if (element === null) return;
  const info = siteInfo.get(element.classList[0]);
  console.log(info);
  // srcFrame.src = info.link;
  // infoPanel.innerHTML = `<h2>${info.title}</h2>
  // ${info.description}`;
});
