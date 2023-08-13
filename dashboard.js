const registeredUsername = localStorage.getItem("registeredUsername");

const usernamePlaceholder = document.getElementById("usernamePlaceholder");
usernamePlaceholder.textContent = registeredUsername;

document.addEventListener("DOMContentLoaded", function () {
  const donateButton = document.querySelector(".btn");
  const donateForm = document.getElementById("donateForm");
  const donationTable = document.getElementById("donationTable");

  donateButton.addEventListener("click", showDonationOptions);

  donateForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const donor = document.getElementById("donor").value;
    const address = document.getElementById("address").value;
    const amount = document.getElementById("amount").value;
    const date = document.getElementById("date").value;
    const phone = document.getElementById("phone").value;

    const newRow = donationTable.insertRow(-1);
    newRow.innerHTML = `<td>${donor}</td><td>${address}</td><td>${amount}</td><td>${date}</td><td>${phone}</td>`;

    donateForm.reset();
  });
});

function showDonationOptions() {
  const donationOptions = ["GCash", "Credit Card", "Debit Card"];
  const selectedOption = prompt("Select mode of donation:\n" + donationOptions.join("\n"));

  if (selectedOption === null) return;

  if (selectedOption === "GCash") {
    const donorName = prompt("Enter your name:");
    const amount = prompt("Enter the donation amount:");
    const phoneNumber = prompt("Enter your phone number:");

  
    alert(`Thank you, ${donorName}, for your generous donation of ${amount} via GCash!`);

  } else if (selectedOption === "Credit Card" || selectedOption === "Debit Card") {
    const cardNumber = prompt("Enter your card number:");
    const cardName = prompt("Enter the name on the card:");
    const cardExpiry = prompt("Enter card expiry date (MM/YY):");
    const cardCVC = prompt("Enter the CVC/CVV code:");
    alert(`Thank you, ${cardName}, for your generous donation via ${selectedOption}!`);

  } else {
    alert("Invalid option selected.");
  }
}
