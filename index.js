let Home = document.getElementById("Home");
let Trainers = document.getElementById("Trainers");
let Members = document.getElementById("Members");
let Programs = document.getElementById("Programs");
let Connects = document.getElementById("Connects");

Home.addEventListener("click", function(){
  Home.style.color="#04b208";
  Trainers.style.color="none";
  Members.style.color="none";
  Programs.style.color="none";
  Connects.style.color="none";

})
Trainers.addEventListener("click", function(){
  Trainers.style.color="#04b208";
  Home.style.color="white";
  Members.style.color="white";
  Programs.style.color="white";
  Connects.style.color="white";

})
Members.addEventListener("click", function(){
  Members.style.color="#04b208";
  Trainers.style.color="white";
  Home.style.color="white";
  Programs.style.color="white";
  Connects.style.color="white";

})
Programs.addEventListener("click", function(){
  Programs.style.color="#04b208";
  Members.style.color="white";
  Trainers.style.color="white";
  Home.style.color="white";
  Connects.style.color="white";

})
Connects.addEventListener("click", function(){
  Connects.style.color="#04b208";
  Trainers.style.color="white";
  Home.style.color="white";
  Programs.style.color="white";
  // Connects.style.color="white";

})

// ---------------------------------form JoinNow 

let JoinNow = document.getElementById("JoinNow");
let Join = document.getElementById("Join");

let inptName = document.getElementById("inptName");
let inptPass = document.getElementById("inptPass");

JoinNow.addEventListener("click", function(){
  let JoinForm = document.querySelector(".Join-form");
  JoinForm.classList.toggle("ShowHide");
  Join.addEventListener("click", function(){
    if(inptName.value == "" && inptPass.value == ""){
      alert("Plase Fill The Form");
    }else{
      alert(inptName.value + " Your Response Recorded");
      inptName.innerHTML=""
      inptPass.innerHTML=""
    }
  })
})

// ---------------------------------Images Slide 

let SlideImg = document.querySelectorAll(".moving");
let count = 0;

SlideImg.forEach(function (val, ind) {
  val.style.left = `${ind * 100}%`;
});

function myfun() {
  SlideImg.forEach(function (img) {
    img.style.transform = `translatex(-${count * 100}%)`;
  });
}
function Next() {
  count++;
  if (count == SlideImg.length) {
    count = 0;
  }
  myfun();
}
function Prev() {
  count--;
  if (count == -1) {
    count = SlideImg.length - 1;
  }
  myfun();
}

// ----------------------------------------Form

let Name = document.getElementById("Name");
let Password = document.getElementById("Password");

let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  if (Name.value == "" && Password.value == "") {
    alert("Please Fill The Form");
  } else {
    alert("Your Response Recorded");
  }
});
