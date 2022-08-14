function sendMail(contactForm) {
    emailjs.send("service_y4v5x18", "template_lce1owa", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed!", error);
        }
    );
    return false; // to block from loading a new page
}