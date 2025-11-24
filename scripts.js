
document.addEventListener("DOMContentLoaded", function() {
    
    // Select the form element and the message display div
    var form = document.querySelector(".newsletter form");
    var messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        // Prevent the default form submission which causes page reload
        event.preventDefault();

        // Get the value typed into the email input field
        var emailInput = document.getElementById("email");
        var email = emailInput.value;

        // Check if the email field is empty
        if (email.trim() === "") {
            messageDiv.textContent = "Please enter a valid email address.";
        } else {
            // Display success message with the user's email
            messageDiv.textContent = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
    });
});