var player_1 = Math.floor(Math.random() * 6) + 1;
var player_2 = Math.floor(Math.random() * 6) + 1;
var dice_img_one = document.getElementById("dice_img_one");
var dice_img_two = document.getElementById("dice_img_two");
var winner = document.getElementById("winner_text");
var btn = document.getElementById("btn");

function createRandom() {
  var player_1 = Math.floor(Math.random() * 6) + 1;
  var player_2 = Math.floor(Math.random() * 6) + 1;

  if (player_1 > player_2) {
    winner.textContent = "Player 1 Won!";
  } else if (player_1 < player_2) {
    winner.textContent = "Player 2 Won!";
  } else {
    winner.textContent = "It is a Tie!";
  }
  if (player_1 === 1) {
    dice_img_one.src = "image/dice_six-faces-one.png";
  } else if (player_1 === 2) {
    dice_img_one.src = "image/dice_six_faces_two.png";
  } else if (player_1 === 3) {
    dice_img_one.src = "image/dice_six_faces_three.png";
  } else if (player_1 === 4) {
    dice_img_one.src = "image/dice_six_faces_four.png";
  } else if (player_1 === 5) {
    dice_img_one.src = "image/dice_six_faces_five.png";
  } else if (player_1 === 6) {
    dice_img_one.src = "image/dice_six_faces_six.png";
  }

  //second player
  if (player_2 === 1) {
    dice_img_two.src = "image/dice_six-faces-one.png";
  } else if (player_2 === 2) {
    dice_img_two.src = "image/dice_six_faces_two.png";
  } else if (player_2 === 3) {
    dice_img_two.src = "image/dice_six_faces_three.png";
  } else if (player_2 === 4) {
    dice_img_two.src = "image/dice_six_faces_four.png";
  } else if (player_2 === 5) {
    dice_img_two.src = "image/dice_six_faces_five.png";
  } else if (player_2 === 6) {
    dice_img_two.src = "image/dice_six_faces_six.png";
  }
}

btn.addEventListener("click", createRandom);
