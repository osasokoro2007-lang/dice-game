var player_1 = Math.ceil(Math.random() * 6);
var player_2 = Math.ceil(Math.random() * 6);
var dice_img_one = document.getElementById("dice_img_one");
var dice_img_two = document.getElementById("dice_img_two");
//first player
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
