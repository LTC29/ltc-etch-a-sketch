//Box creation section
let finalColor;
let borderColoring;

const blackButton = document.querySelector("#colorBlack");
const whiteButton = document.querySelector("#colorWhite");
const buttonSixteen = document.querySelector("#btn16");
const buttonThirtyTwo = document.querySelector("#btn32");
const buttonSixtyFour = document.querySelector("#btn64");

document.getElementById("colorBlack").addEventListener("click", function () {
  finalColor = "black";
  borderColoring = "#3b3b3b";
  blackButton.classList.add("active");
  whiteButton.classList.remove("active");
});

document.getElementById("colorWhite").addEventListener("click", function () {
  finalColor = "white";
  borderColoring = "#e7e7e7";
  whiteButton.classList.add("active");
  blackButton.classList.remove("active");
});

//Button management

let numBox = 16;
document.documentElement.style.setProperty("--numBox", numBox);

document.getElementById("btn16").addEventListener("click", function () {
  numBox = 16;
  document.documentElement.style.setProperty("--numBox", numBox);
  createBoxes(numBox);
  buttonSixteen.classList.add("active");
  buttonThirtyTwo.classList.remove("active");
  buttonSixtyFour.classList.remove("active");
});

document.getElementById("btn32").addEventListener("click", function () {
  numBox = 32;
  document.documentElement.style.setProperty("--numBox", numBox);
  createBoxes(numBox);
  buttonThirtyTwo.classList.add("active");
  buttonSixteen.classList.remove("active");
  buttonSixtyFour.classList.remove("active");
});

document.getElementById("btn64").addEventListener("click", function () {
  numBox = 64;
  document.documentElement.style.setProperty("--numBox", numBox);
  createBoxes(numBox);
  buttonSixtyFour.classList.add("active");
  buttonThirtyTwo.classList.remove("active");
  buttonSixteen.classList.remove("active");
});
//Creates boxes according to button press
function createBoxes(numBox) {
  container = document.getElementById("box-container");
  container.innerHTML = "";
  for (let i = 0; i < numBox; i++) {
    let row = document.createElement("div"); //creates rows
    row.setAttribute("class", "row");
    for (let j = 0; j < numBox; j++) {
      let box = document.createElement("div");
      box.addEventListener("mouseover", function () {
        box.style.backgroundColor = finalColor;
        box.style.borderColor = borderColoring;
      });
      box.setAttribute("class", "box");
      row.append(box); //appends boxes to row
    }
    container.append(row); //appends rows to full container
  }
}

createBoxes(numBox);

//mouse hover changes background
