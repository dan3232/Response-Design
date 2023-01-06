let emailCollector = document.getElementById("Email-Collector"),
    mainContent = document.getElementById("Main-Content");

emailCollector.addEventListener("submit", event => {
    event.preventDefault();

    let ourFormData = new FormData (event.target);

    let userFirstName = ourFormData.get("firstName");
    
    let updatedHtml = `
    <h2>Congratulations, ${userFirstName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>

    <p class="fine-print">We'll never share your informatio without your permission</p>
    `

    mainContent.innerHTML = updatedHtml;
})