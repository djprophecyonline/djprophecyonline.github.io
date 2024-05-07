document.addEventListener('DOMContentLoaded', function() {
  // Initialize datetimepicker for the full departure and return dates
  $('#fullDepartureDate').datetimepicker();
  $('#fullReturnDate').datetimepicker();

  // Select the submit button
  const submitBtn = document.getElementById('fullSubmitBtn');

  // Add click event listener to the submit button
  submitBtn.addEventListener('click', function() {
    // Get the selected full departure and return dates from datetimepicker
    const fullDepartureDate = $('#fullDepartureDate').datetimepicker('viewDate').toDate();
    const fullReturnDate = $('#fullReturnDate').datetimepicker('viewDate').toDate();

    // Format the dates as needed
    const formattedFullDepartureDate = formatDate(fullDepartureDate);
    const formattedFullReturnDate = formatDate(fullReturnDate);

    // Get other form values
    const fullPetType = document.getElementById('fullPetType').value;
    const fullNumPets = document.getElementById('fullNumPets').value;
    const fullName = document.getElementById('fullName').value;
    const fullEmail = document.getElementById('fullEmail').value;
    const fullAddress = document.getElementById('fullAddress').value;
    const fullMessage = document.getElementById('fullMessage').value;

    // Construct the email body with booking details
    const emailBody = `Hi Linda\n\nI am interested in making a booking for the following dates:\n\nDeparture Date: ${formattedFullDepartureDate}\nReturn Date: ${formattedFullReturnDate}\n\nI reside at ${fullAddress} and I have ${fullNumPets} ${fullPetType} that need taking care of while we travel.\n\nI look forward to hearing from you.\n\nRegards\n\n${fullName}\n\nSpecial Needs: ${fullMessage}`;
    
    // Construct the mailto link
    const mailtoLink = `mailto:linda@durbanfurbabies.co.za?subject=Booking Request&body=${emailBody}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  });
});

// Function to format date
function formatDate(date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}`;
  return formattedDate;
}