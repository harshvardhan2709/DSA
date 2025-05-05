document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = { name, email, password };

        // Save data to Local Storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        // AJAX POST Request (Simulating a backend call)
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        })
        .then(response => response.json())
        .then(data => console.log("Server Response:", data))
        .catch(error => console.error("Error:", error));

        // Redirect to user list page
        window.location.href = "users.html";
    });
});
