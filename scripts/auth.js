// signup

const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // sign up user
  fAuth.createUserWithEmailAndPassword(email, password).then((cred) => {
    signupForm.reset();
  });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  fAuth.signOut().then(() => {
    console.log("user logged out");
  });
});

// login

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  fAuth.signInWithEmailAndPassword(email, password).then((cred) => {
    console.log(cred.user);
    loginForm.reset();
  });
});
