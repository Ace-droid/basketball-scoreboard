let homePoints = document.getElementById("home-pts");
let guestPoints = document.getElementById("guest-pts");

let homeCount = 0;
let guestCount = 0;

function onePts() {
   homeCount += 1;
   homePoints.textContent = homeCount;
}
function twoPts() {
   homeCount += 2;
   homePoints.textContent = homeCount;
}
function threePts() {
   homeCount += 3;
   homePoints.textContent = homeCount;
}


function onePoints() {
   guestCount += 1;
   guestPoints.textContent = guestCount;

}
function twoPoints() {
   guestCount += 2;
   guestPoints.textContent = guestCount;
   
}
function threePoints() {
   guestCount += 3;
   guestPoints.textContent = guestCount;
}

function reset() {
   homeCount = 0;
   guestCount = 0;
   homePoints.textContent = homeCount;
   guestPoints.textContent = guestCount;
  
}