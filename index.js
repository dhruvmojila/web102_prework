/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
 */

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from "./games.js";

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA);

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
 */

// 11seafoamGAMES_JSON

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {
  // loop over each item in the data

  games.map((game) => {
    let gamediv = document.createElement("div");

    gamediv.innerHTML = `
        <h3>${game.name}</h3>
        <p>${game.description}</p>
        <img src="${game.img}" alt="${game.name}" class="game-img" />
    `;

    gamediv.classList.add("game-card");

    gamesContainer.appendChild(gamediv);
  });

  // create a new div element, which will become the game card

  // add the class game-card to the list

  // set the inner HTML using a template literal to display some info
  // about each game
  // TIP: if your images are not displaying, make sure there is space
  // between the end of the src attribute and the end of the tag ("/>")

  // append the game to the games-container
}

// call the function we just defined using the correct variable
addGamesToPage(GAMES_JSON);

// later, we'll call this function using a different list of games

/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
 */

// grab the contributions card element
// 19187800268BRAIN

const contributionsCard = document.getElementById("num-contributions");

let indContri = GAMES_JSON.reduce((a, b) => {
  return a + b.backers;
}, 0);

contributionsCard.innerHTML = indContri;
// use reduce() to count the number of total contributions by summing the backers

// set the inner HTML using a template literal and toLocaleString to get a number with commas

// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

let money = GAMES_JSON.reduce((a, b) => {
  return a + b.pledged;
}, 0);

raisedCard.innerHTML = money;

// set inner HTML using template literal

// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");

gamesCard.innerHTML = GAMES_JSON.length;

/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
 */

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have not yet met their goal

  let newarr = GAMES_JSON.filter((game) => {
    return game.pledged < game.goal;
  });

  addGamesToPage(newarr);

  // use the function we previously created to add the unfunded games to the DOM
}

// show only games that are fully funded
function filterFundedOnly() {
  deleteChildElements(gamesContainer);

  // use filter() to get a list of games that have met or exceeded their goal
  let newarr = GAMES_JSON.filter((game) => {
    return game.pledged >= game.goal;
  });

  addGamesToPage(newarr);
  // use the function we previously created to add unfunded games to the DOM
}

// show all games
function showAllGames() {
  deleteChildElements(gamesContainer);
  addGamesToPage(GAMES_JSON);
  // add all games from the JSON data to the DOM
}

// 74FLANNELclick

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

unfundedBtn.addEventListener("click", filterUnfundedOnly);
fundedBtn.addEventListener("click", filterFundedOnly);
allBtn.addEventListener("click", showAllGames);

// add event listeners with the correct functions to each button

/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
 */

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
let unfunded = GAMES_JSON.filter((game) => {
  return game.pledged < game.goal;
});
let funded = GAMES_JSON.filter((game) => {
  return game.pledged >= game.goal;
});

let fundedMoney = GAMES_JSON.reduce((a, b) => {
  return a + b.pledged;
}, 0);

// toLocaleString<div>1IVY

const displayStr = `A total of $${fundedMoney.toLocaleString()} has been raised for ${
  GAMES_JSON.length
} ${GAMES_JSON.length > 1 ? "games" : "game"}. Currently, ${unfunded.length} ${
  unfunded.length > 1 ? "games remain" : "game remains"
} unfunded. We need your help to fund these amazing games!`;

let deDiv = document.createElement("p");

deDiv.innerHTML = displayStr;

descriptionContainer.appendChild(deDiv);

// create a new DOM element containing the template string and append it to the description container

/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames = GAMES_JSON.sort((item1, item2) => {
  return item2.pledged - item1.pledged;
});

// ZooHowCEDAR

let [first, second, ...remain] = sortedGames;

let firstDiv = document.createElement("p");

firstDiv.innerHTML = first.name;

firstGameContainer.appendChild(firstDiv);

let seondDiv = document.createElement("p");

seondDiv.innerHTML = second.name;

secondGameContainer.appendChild(seondDiv);

// use destructuring and the spread operator to grab the first and second games

// create a new element to hold the name of the top pledge game, then append it to the correct element

// do the same for the runner up item
