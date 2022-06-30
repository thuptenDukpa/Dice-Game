function getRandom() {
  return Math.floor((Math.random() * 6)) + 1;
}

function checkRefresh() {
  if (!sessionStorage.getItem("rollDice")) {
    sessionStorage.setItem("rollDice", "extra")
 
  } else(
    rollTheDice()
  )
 
}

function rollTheDice() {
  var randomNumber1 = getRandom();
  var randomNumber2 = getRandom();

  var randomImage1 = "images/dice" + randomNumber1 + ".png";
  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  var image1 = document.querySelectorAll("img")[0];
  var image2 = document.querySelectorAll("img")[1];

  image1.setAttribute("src", randomImage1);
  image2.setAttribute("src", randomImage2);

  var result = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    result.textContent = "🚩Player1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    result.textContent = "Player2 Wins!🚩";
  }
  else {
    result.textContent = "🚩Its a Draw!🚩";
  }
}

document.querySelector("body").onload = checkRefresh();  