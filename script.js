
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Display validation feedback using CSS classes.
function showResponse(message, type) {
    formResponse.classList.remove("error", "success");
    formResponse.classList.add(type);
    formResponse.textContent = message;
}

// Check that all required DOM elements exist.
if (
    contactForm &&
    formResponse &&
    nameInput &&
    emailInput &&
    subjectInput &&
    messageInput
) {
    contactForm.addEventListener("input", function () {
        formResponse.textContent = "";
        formResponse.classList.remove("error", "success");
    });

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        // Check for empty or whitespace-only fields.
        if (!name || !email || !subject || !message) {
            showResponse("Please fill in all fields.", "error");
            return;
        }

        // Validate the email address format.
        if (!emailPattern.test(email)) {
            showResponse(
                "Please enter a valid email address.",
                "error"
            );
            return;
        }

        // Display success feedback.
        showResponse("Form validated successfully!", "success");

        // Clear the form after successful validation.
        contactForm.reset();
    });
}
