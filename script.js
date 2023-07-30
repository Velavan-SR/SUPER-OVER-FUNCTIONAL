let batBtn = document.getElementById("bat");
let resetBtn = document.getElementById("reset");

let numBall = 0;

let inds = 0;
let paks = 0;

let indw = 0;
let pakw = 0;

function updateValue(type, no, score) {
 if (type == "wicket") {
 const teamSc = document.getElementById(`team${no}-wickets`);
 teamSc.innerHTML = score;
 } else {
 const teamSc = document.getElementById(`team${no}-score`);
 teamSc.innerHTML = score;
 }
}

batBtn.addEventListener("click", () => {
 let randomNumber = Math.floor(Math.random() * 7) + 1;

 let ball = document.querySelectorAll(".balls");
 let scoreP = document.createElement("p");

 if (numBall>= 12) {
  if (inds > paks) {
 alert("IND Won");
 } else if (inds == paks) {
 alert("Match is draw!");
 } else {
 alert("PAK Won");
 }
 } else {
 if (randomNumber == 7) {
 scoreP.innerText = "W";
 if (numBall < 6) {
 indw = indw + 1;
 updateValue("wicket", 1, indw);
 } else {
 pakw = pakw + 1;
 updateValue("wicket", 2, pakw);
 }
 } else {
 scoreP.innerText = randomNumber;
 if (numBall < 6) {
 inds = inds + randomNumber;
 updateValue("score", 1, inds);
 } else {
 paks = paks + randomNumber;
 updateValue("score", 2, paks);
 }
 }

 ball[numBall].appendChild(scoreP);
 }

 numBall = numBall + 1;
});

resetBtn.addEventListener("click", () => {
 window.location.reload();
});