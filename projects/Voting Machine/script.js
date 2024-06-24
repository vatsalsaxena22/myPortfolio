// Variables
let startBtn = document.querySelector(".start-btn");
let candidate1;
let candidate2;
let voterCount;
let displayCandidate1 = document.getElementById("display-candidate-1");
let displayCandidate2 = document.getElementById("display-candidate-2");
let vote1 = [];
let vote2 = [];
let btnClicked = 0;
let voterID = document.getElementById("voterID");
let voterRadio1 = document.getElementById("radio1");
let voterRadio2 = document.getElementById("radio2");
let resultElement = document.getElementById("result");

// Script for Elements
let [a, b, c, d] = [".step-1", ".step-2", ".step-3", ".step-4"].map((item) =>
  document.querySelector(item)
);

let arr = [a, b, c, d];

arr.map((item) => (item.style.display = "none"));

let openSteps = (step) => {
  step.style.display = "block";
  startBtn.style.display = "none";
};
let closeSteps = (step) => {
  step.style.display = "none";
};

// Script for Voting Machine
let step1 = () => {
  candidate1 = document.getElementById("candidate-1").value;
  candidate2 = document.getElementById("candidate-2").value;

  if (!candidate1 || !candidate2) {
    return alert("Please fill these inputs!");
  }

  closeSteps(a);
  openSteps(b);
  displayCandidate1.innerHTML = candidate1;
  displayCandidate2.innerHTML = candidate2;
};

let step2 = () => {
  voterCount = document.getElementById("voter-count").value;

  if (voterCount % 2 == 0) {
    return alert("No. of Voters can't be even or zero!");
  } else if (voterCount == 1) {
    return alert("No. of Voters can't be one");
  }

  closeSteps(b);
  openSteps(c);
};

let step3 = () => {
  if (!voterRadio1.checked && !voterRadio2.checked) {
    return alert("Please Choose one of these!");
  }

  btnClicked++;

  if (voterRadio1.checked) {
    vote1.push("1");
    voterRadio1.checked = false;
  }

  if (voterRadio2.checked) {
    vote2.push("1");
    voterRadio2.checked = false;
  }

  if (btnClicked == voterCount) {
    closeSteps(c);
    openSteps(d);
    step4();
  }

  voterID.innerHTML = btnClicked + 1;
};

let step4 = () => {
  let votesOfOne = vote1.length;
  let votesOfTwo = vote2.length;

  if (votesOfOne > votesOfTwo) {
    resultElement.innerHTML = candidate1;
  } else {
    resultElement.innerHTML = candidate2;
  }
};
