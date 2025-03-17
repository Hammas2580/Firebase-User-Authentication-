import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./firebase.js";

const submitBtn = document.getElementById("registerBtn");
const userName = document.getElementById("user_name");
const userEmail = document.getElementById("user_email");
const userPassword = document.getElementById("user_password");

submitBtn?.addEventListener("click", async (e) => {
  e.preventDefault();
  let isValid = true;

  // Name validation
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



  if (!isValid) return; // Agar koi field empty hai, toh aage mat jao

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




