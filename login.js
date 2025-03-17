
import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn1");
loginBtn?.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("✅ Login Successful:", user);

            let getUserName = localStorage.getItem("userName");
            console.log("User Name from localStorage:", getUserName);

            if (getUserName) {
                Swal.fire("✅ Login Successful:", `Welcome ${getUserName}`, "success");
                setTimeout(() => {
                    window.location.href = "./blog.html";
                }, 2000);
            } else {
                console.error("User name is missing in localStorage");
                Swal.fire("Error!", "User name not found in localStorage", "error");
            }
        })
        .catch((error) => {
            console.error("❌ Login Error:", error.message);
            Swal.fire("Error!", error.message, "error");
        });
});

