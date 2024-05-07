document.addEventListener('DOMContentLoaded', function() {
  // Initialize datetimepicker for departure and return date inputs
  $('#departureDate').datetimepicker();
  $('#returnDate').datetimepicker();

  // Select the submit button
  const submitBtn = document.getElementById('submitBtn');

  // Add click event listener to the submit button
  submitBtn.addEventListener('click', function() {
    
    // Get the name and address 
    const userName = document.getElementById('userName').value;
    const userAddress = document.getElementById('userAddress').value;
    
    // Get the selected departure and return dates from datetimepicker
    const departureDate = $('#departureDate').datetimepicker('viewDate').toDate();
    const returnDate = $('#returnDate').datetimepicker('viewDate').toDate();

    // Format the dates as needed
    const formattedDepartureDate = formatDate(departureDate);
    const formattedReturnDate = formatDate(returnDate);

    // Get other form values
    const petType = document.getElementById('petType').value;
    const numPets = document.getElementById('numPets').value;

    // Construct the email body with booking details
    const emailBody = `Hi Linda\n\nI am interested in making a booking for the following dates:\n\nDeparture Date: ${formattedDepartureDate}\nReturn Date: ${formattedReturnDate}\n\nI reside at ${userAddress} and I have ${numPets} ${petType} that need taking care of while we travel.\n\nI look forward to hearing from you.\n\nRegards\n\n${userName}`;
    
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