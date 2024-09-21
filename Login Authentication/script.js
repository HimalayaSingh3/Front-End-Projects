//toggle

const register=document.getElementById("register");
const login=document.getElementById("login");

function loginToggle(){
    document.getElementById("login").style.display="block";
    document.getElementById("register").style.display="none";
}

function registerToggle(){
    document.getElementById("login").style.display="none";
    document.getElementById("register").style.display="block";
}





document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (username && password) {
        localStorage.setItem(username, password);
        alert("Registration successful! You can now login.");
        document.getElementById("registerForm").reset();
    } else {
        alert("Please fill in both fields.");
    }
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const storedPassword = localStorage.getItem(username);

    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username);  
        window.location.href = "secured.html";  
    } else {
        alert("Invalid credentials. Please try again.");
    }
});

// Secured Page: Check if user is logged in
if (window.location.href.includes("secured.html")) {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (!loggedInUser) {
        alert("You need to log in first!");
        window.location.href = "index.html";  
    }

    document.getElementById("logout").addEventListener("click", function() {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out!");
        window.location.href = "index.html";
    });
}
