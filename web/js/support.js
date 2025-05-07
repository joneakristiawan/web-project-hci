document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitbutton");

    submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const server = document.getElementById("region").value;
    const description = document.getElementById("description").value.trim();
    const agree = document.getElementById("verification").checked;

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!username) {
        alert("Username must filled!");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Email not valid!");
        return;
    }

    if (!server) {
        alert("Must select server!");
        return;
    }

    if (!description) {
        alert("Description must filled!");
        return;
    }

    if (!agree) {
        alert("Must Agree to Receive Email!");
        return;
    }

    window.location.href = "../../lab/webproject/support-land.html";
    });
});
