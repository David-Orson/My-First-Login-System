// get data

// listen for auth status changes
fAuth.onAuthStateChanged((user) => {
  if (user) {
    fDb
      .collection("posts")
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs);
      });
  } else {
    setupPosts([]);
  }
});

// create post

const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fDb
    .collection("posts")
    .add({
      title: createForm["title"].value,
      content: createForm["content"].value,
    })
    .then(() => {
      createForm.reset();
    });
});

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
  fAuth.signOut();
});

// login

const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  fAuth.signInWithEmailAndPassword(email, password).then((cred) => {
    loginForm.reset();
  });
});
