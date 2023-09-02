var randomNum1 = Math.floor(Math.random() * 6) + 1; // random number 1-6
var randomNum1Image = "dice" + randomNum1 + ".png"; // dice1.png - dice6.png
var randomImageSource1 = "images/" + randomNum1Image; // images/dice1.png - dice6.png
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins!";
}
else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Equal!";
}