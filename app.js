import { auth, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "./firebase.js";

const submitBtn = document.getElementById("registerBtn");
const userName = document.getElementById("user_name");
const userEmail = document.getElementById("user_email");
const userPassword = document.getElementById("user_password");

submitBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  let isValid = true;
  if (userName.value.trim() === "") {
    let errorMes = document.getElementById("userName_error");
    errorMes.style.color = "red";
    errorMes.innerHTML = "Please enter your name.";
    isValid = false;
  } else {
    document.getElementById("userName_error").innerHTML = "";
  }

  // Email validation
  if (userEmail.value.trim() === "") {
    let errorEmail = document.getElementById("userEmail_error");
    errorEmail.style.color = "red";
    errorEmail.innerHTML = "Please enter your email.";
    isValid = false;
  } else {
    document.getElementById("userEmail_error").innerHTML = "";
  }
  if (!isValid) return;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value);
    const user = userCredential.user;
    console.log("User Registered:", user);
    localStorage.setItem("userName", userName.value);
    Swal.fire("Success!", "User registered successfully!", "success");
    setTimeout(() => {
      window.location.href = "./login.html";

    }, 2000)

  } catch (error) {
    console.error("Registration Error:", error.code, error.message);
    alert(`Error: ${error.message}`);
  }
});

const blogName = document.getElementById("blogName");
const blogEmail = document.getElementById("BlogEmail");
let logoutBtn = document.getElementById("logout");
const logout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    localStorage.removeItem("userName");
    Swal.fire("Logged Out!", "You have been logged out.", "success");
    setTimeout(() => {
      window.location.href = "./index.html";
    }, 2000)
  }).catch((error) => {
    // An error happened.
    console.log(error);

  });
}
logoutBtn?.addEventListener("click", logout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user----->", user);
    if (window.location.pathname !== "/blog.html") {
      window.location.href = "/blog.html"; // Redirect to blog page if logged in
    }
    loader.style.display = "none";
    main.style.display = "block";
    blogName.innerHTML = user.email.slice(0, user.email.indexOf("@"));
    blogEmail.innerHTML = user.email;
  } else {
    console.log("user not login");
    if (location.pathname !== "/login.html") {
      window.location.href = "/login.html"; // Redirect to login page if not logged in
    }
  }
});



