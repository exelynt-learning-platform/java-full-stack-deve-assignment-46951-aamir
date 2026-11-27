
const contactForm = document.getElementById("contactForm");
const formResponse = document.getElementById("formResponse");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" ||
        subject === "" || message === "") {

        formResponse.style.color = "red";
        formResponse.textContent = "Please fill in all fields.";
        return;
    }

    formResponse.style.color = "green";
    formResponse.textContent = "Form validated successfully!";

    contactForm.reset();
});
