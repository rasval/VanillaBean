// Grab the form and thank you message from the page
const form = document.getElementById("order-form");
const thankYou = document.getElementById("thank-you");

// Your Google Apps Script web address
// Replace the URL below with your own deployment URL
const scriptURL = "https://script.google.com/macros/s/AKfycbzm57UUeyb6y6DBgpHkIgqJKBltEtll2vfI8c65gWZs0-gFCYS2bvR677ZqhZzUg2fi1g/exec";

// Listen for when the customer clicks Submit
form.addEventListener("submit", function(e) {

  // Stops the page from refreshing on submit
  e.preventDefault();

  // Read what the customer typed into each field
  const orderData = {
    name:      document.getElementById("name").value,
    phone:     document.getElementById("phone").value,
    eventType: document.getElementById("event-type").value,
    eventDate: document.getElementById("event-date").value,
    servings:  document.getElementById("servings").value,
    flavour:   document.getElementById("flavour").value,
    design:    document.getElementById("design").value
  };

  // Change the button text so customer knows something is happening
  const btn = document.querySelector("button[type='submit']");
  btn.textContent = "Sending...";
  btn.disabled = true;

  // Send the data to Google Apps Script
  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(orderData)
  })
  .then(function(response) {
    // It worked — hide form, show thank you message
    form.style.display = "none";
    thankYou.style.display = "block";
  })
  .catch(function(error) {
    // Something went wrong — tell the customer
    btn.textContent = "Submit Order Request";
    btn.disabled = false;
    alert("Something went wrong. Please try again or contact us directly.");
    console.error("Error:", error);
  });

});