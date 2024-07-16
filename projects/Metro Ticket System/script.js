let fullName;
let age;
let gender;
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let genderInput = document.getElementById("gender");
let startBtn = document.querySelector(".start-btn");
let tName = document.getElementById("t-name");
let tAge = document.getElementById("t-age");
let tGender = document.getElementById("t-gender");
const totalPrice = 100;
let discount;
let tPrice = document.getElementById("t-price");
let tDiscount = document.getElementById("t-discount");
let tFinal = document.getElementById("t-final");
let currentDate = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear()
let currentTime = new Date().getHours() + ":" + new Date().getMinutes()  + ":" + new Date().getSeconds()
let dateElement = document.getElementById("date")
let timeElement = document.getElementById("time")

let [a, b, c, d] = ["step-1", "step-2", "step-3", "step-4"].map((item) =>
  document.getElementById(item)
);

let arr = [a, b, c, d];

arr.map((item) => (item.style.display = "none"));

let openStep = (step) => {
  step.style.display = "block";
  startBtn.style.display = "none";
};

let closeStep = (step) => {
  step.style.display = "none";
};

let step1 = () => {
  if (nameInput.value == "") {
    return alert("Please submit your name!");
  }
  fullName = nameInput.value;
  closeStep(a);
  openStep(b);
};

let step2 = () => {
  if (ageInput.value < 0 || ageInput.value > 100) {
    return alert("Don't be Kiding " + fullName);
  }
  if (ageInput.value == "") {
    return alert("Please submit your age " + fullName + "!");
  }
  age = ageInput.value;
  closeStep(b);
  openStep(c);
};

let step3 = () => {
  gender = genderInput.value;
  tName.innerHTML = fullName;
  tAge.innerHTML = age;
  tGender.innerHTML = gender;
  dateElement.innerHTML = currentDate
  timeElement.innerHTML = currentTime

  if (age > 60) {
    discount = 70;
  } else if (gender == "Female") {
    discount = 50;
  } else if (age <= 5) {
    discount = 100;
  } else if (age <= 10) {
    discount = 50;
  } else {
    discount = 0;
  }

  const finalPrice = totalPrice - totalPrice * (discount / 100);

  tPrice.innerHTML = "₹" + totalPrice;
  tDiscount.innerHTML = discount + "%";
  tFinal.innerHTML = "₹" + finalPrice;

  closeStep(c);
  openStep(d);
};


// Get the modal element
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
