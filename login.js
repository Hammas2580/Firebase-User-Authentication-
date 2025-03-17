
import { auth, signInWithEmailAndPassword } from "./firebase.js";

const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn1");

loginBtn?.addEventListener("click", (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("✅ Login Successful:", user);

            let getUserName = localStorage.getItem("userName").toUpperCase();

            Swal.fire("✅ Login Successful:!", `Welcome ${getUserName}`, "success");
            // window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error("❌ Login Error:", error.message);
            Swal.fire("Error!", error.message, "error");
        });
});
