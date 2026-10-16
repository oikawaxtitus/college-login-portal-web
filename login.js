function login(event) {
    event.preventDefault(); 
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let savedEmail = localStorage.getItem("email");
    let savedPass = localStorage.getItem("pass");
    let adminEmail = "admin@gmail.com";
    let adminPass = "admin123";
    if (!savedEmail) {
        localStorage.setItem("email", email);
        localStorage.setItem("pass", pass);
        alert("Registration successful");
    }
    
    else if (email === savedEmail && pass === savedPass) {
        alert("Login successful");
        userWeb();
    }
    else if (email === adminEmail && pass === adminPass) {
        alert("Admin login successful");
        adminWeb();
    }
    else {
        alert("Email or password is incorrect");
    }
    function userWeb() {
        document.body.innerHTML = "<h2>This is a user web</h2>";
    }
    function adminWeb() {
        document.body.innerHTML = "<h2>This is an admin web</h2>";
    }
}

  
