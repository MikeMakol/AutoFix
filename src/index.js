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

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('menuBtn').addEventListener("click", openMenu)
  document.getElementById("paIcon").addEventListener("click", closeMenu)
  document.getElementById("userBtn").addEventListener("click", displayUserSignUpPage)
  document.getElementById("mechanicBtn").addEventListener("click", displayMechanicSignUpPage)
  document.getElementById("lica").addEventListener("click", displayLogInPage)
  document.getElementById("libtn").addEventListener("click", openLogIn)
  document.getElementById("subtn").addEventListener("click", openSignUp)
  document.getElementById("arrow1").addEventListener("click", arrowBackUser)
  document.getElementById("arrow2").addEventListener("click", arrowBackMechanic)

  //submit search form
  document.getElementById("submit").addEventListener("submit", (e) => {e.preventDefault()})

  //submit log in form
  document.getElementById("submitLi").addEventListener("submit", (e) => {
    e.preventDefault()
    e.reset()
  })

  //submit user form
  document.getElementById("submitUs").addEventListener("submit", (e) => {
    e.preventDefault()
    e.reset()
  })

  //submit mechanic form
  document.getElementById("submitMe").addEventListener("submit", (e) => {
    e.preventDefault()
    e.reset()
  })

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
})

// open menu page
function openMenu() {
  document.getElementById("menuPage").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

// close menu and overlay page
function closeMenu() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

// open user sign up page when 'User Circle' is clicked
function displayUserSignUpPage() {
  document.getElementById("user").style.display = "block";
  document.getElementById("choseAcct").style.display = "none";
}

// open mechanic sign up page when 'User Mechanic' is clicked
function displayMechanicSignUpPage() {
  document.getElementById("mechanic").style.display = "block";
  document.getElementById("choseAcct").style.display = "none";
}

// open log in page when a 'Login' link is clicked
function displayLogInPage() {
  document.getElementById("logIn").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
  document.getElementById("choseAcct").style.display = "block";
}

// open a log in page when the 'Log In' button is clicked on the menu
function openLogIn() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";

  document.getElementById("logIn").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
}

// open a sign up page when the 'Sign up' button is clicked on the menu
function openSignUp() {
  document.getElementById("menuPage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("choseAcct").style.display = "block";
  document.getElementById("signAllDiv").style.display = "block";
}

//backward arrow on user page
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
function arrowBackMechanic(){
  const choseAcct = document.getElementById("choseAcct")
  const mechanic = document.getElementById("mechanic")
  if(mechanic.style.display === "block") {
    mechanic.style.display = "none";
  } else {
    choseAcct.style.display = "block";
  }
}

// login user or mechanic
const form = {
  emailorphonenumber: document.getElementById("#emailorphone"),
  password: document.getElementById("#password"),
  submit: document.querySelector("#submit"),
};
let button = form.submit.addEventListener("click", (e) => {
  e.preventDefault();
  const login = "https://dev-dwqyajyza4vgt1ad.us.auth0.com";

  fetch(login, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: form.emailorphonenumber,
      password: form.password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // on error
      if (data.error) {
        alert("Email and password do not match!"); /*displays error message*/
      } else {
        window.open(
          "index.html"
        ); /*opens the target page while Id & password matches*/
      }
    })
    .catch((err) => {
      console.log(err);
    });
});


// register user
function formValidation(form) {
  let uid = form.user.id
  let username = document.getElementById("username")
  username.innerText = form.user.username
  let email = document.getElementById("email")
  email.innerText = form.user.email
  let phonenumber = document.getElementById("phonenumber")
  phonenumber.innerText = form.user.mobilePhone
  let password = document.getElementById("password")
  password.innerText = form.user.methods.secret
  let ucountry = document.getElementById("country")
  ucountry = form.user.country;
  
  if (username === form.user.username.value) {
    username.value
  } else {
    alert("username is incorrect")
  }
  if (email === form.user.email.value) {
    email.value
  } else {
    alert("email is incorrect")
  }
  if (phonenumber === form.user.mobilePhone.value) {
    phonenumber.value
  } else {
    alert("phone number is invalid")
  }
  if (ucountry  === form.user.country.value) {
    ucountry.value
  } else {
    alert("Select your country from the list")
  }
}
  
fetch("https://dev-dwqyajyza4vgt1ad.us.auth0.com")
.then(res => res.json)
.then(form => form.forEach(form => formValidation(form)))
  
  
