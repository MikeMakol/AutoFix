// Initialize and add the map
let map;

async function initMap() {
  // The location of Nairobi
  const position = { lat: 1.2921, lng: 36.8219 }; 

  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

  // The map, centered at Nairobi
  map = new Map(document.getElementById("mapDiv"), {
    zoom: 13,
    center: position,
    mapId: "hybrid",
  });

  // The marker, positioned at Nairobi
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Nairobi",
  });
}

initMap();

// open menu page
document.getElementById('menuBtn').addEventListener("click", openMenu)

function openMenu() {
  document.getElementById("menuPage").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// close menu and overlay page
document.getElementById("paIcon").addEventListener("click", closeMenu)

function closeMenu() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// open user sign up page when 'User Circle' is clicked
document.getElementById("userBtn").addEventListener("click", displayUserSignUpPage)
function displayUserSignUpPage() {
  document.getElementById("user").style.display = "block";
  document.getElementById("choseAcct").style.display = "none";
}

// open mechanic sign up page when 'User Mechanic' is clicked
document.getElementById("mechanicBtn").addEventListener("click", displayMechanicSignUpPage)
function displayMechanicSignUpPage() {
  document.getElementById("mechanic").style.display = "block";
  document.getElementById("choseAcct").style.display = "none";
}

// open log in page when a 'Login' link is clicked
document.getElementById("lica").addEventListener("click", displayLogInPage)
function displayLogInPage() {
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
  document.getElementById("choseAcct").style.display = "block";
}

// open a log in page when the 'Log In' button is clicked on the menu
document.getElementById("libtn").addEventListener("click", openLogIn)
function openLogIn() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
}

//cancel log in page
document.getElementById("liArrow").addEventListener("click", () =>
  document.getElementById("logIn").style.display = "none"
)

//cancel chose account page
document.getElementById("caArrow").addEventListener("click", () =>
  document.getElementById("choseAcct").style.display = "none"
)

//cancel mechanic sign up page
document.getElementById("sumArrow").addEventListener("click", () =>
  document.getElementById("mechanic").style.display = "none"
)

//cancel user sign up page
document.getElementById("suuArrow").addEventListener("click", () =>
  document.getElementById("user").style.display = "none"
)

// open a sign up page when the 'Sign up' button is clicked on the menu
document.getElementById("subtn").addEventListener("click", openSignUp)
function openSignUp() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("choseAcct").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
}

//backward arrow on user page
document.getElementById("arrow1").addEventListener("click", arrowBackUser)
function arrowBackUser(){
  const choseAcct = document.getElementById("choseAcct")
  const user = document.getElementById("user")
  if(user.style.display === "block") {
    user.style.display = "none";
  } else {
    choseAcct.style.display = "block";
  }
}

//backward arrow on mechanic page
document.getElementById("arrow2").addEventListener("click", arrowBackMechanic)
function arrowBackMechanic(){
  const choseAcct = document.getElementById("choseAcct")
  const mechanic = document.getElementById("mechanic")
  if(mechanic.style.display === "block") {
    mechanic.style.display = "none";
  } else {
    choseAcct.style.display = "block";
  }
}

// show add details page
document.getElementById('smLocate').addEventListener("click", showDetails)

function showDetails() {
  // document.getElementById("locate").style.display = "block";
  document.getElementById("lgLocate").style.display = "block";
  // document.getElementById("smLocate").style.display = "none";
}

// close add details page
document.getElementById("map").addEventListener("click", closeDetails)

function closeDetails() {
  document.getElementById("lgLocate").style.display = "none";
}
