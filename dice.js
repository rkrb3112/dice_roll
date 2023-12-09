var path = '';

function generateRandomNumber() {
  return Math.floor(Math.random() * 6) + 1;
}

function defineImgPath(result) {
  switch (result) {
    case 1:
      path = "https://openclipart.org/download/96079/dado-";
      break;
    case 2:
      path = "https://openclipart.org/download/96085/dado-";
      break;
    case 3:
      path = "https://openclipart.org/download/96091/dado-";
      break;
    case 4:
      path = "https://openclipart.org/download/96097/dado-";
      break;
    case 5:
      path = "https://openclipart.org/download/96103/dado-";
      break;
    case 6:
      path = "https://openclipart.org/download/96109/dado-";
      break;
  }
}

function changeDiceFace(result) {
  var dice = document.querySelector('#dice');
  dice.setAttribute("src", path + result + ".png");
}

function rollDice() {
  var result = generateRandomNumber();
  defineImgPath(result);
  changeDiceFace(result);

  return false;
}
