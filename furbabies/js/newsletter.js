document.addEventListener('DOMContentLoaded', function() {
  // Select the form elements
  const emailInput = document.getElementById('newsletterName');
  const submitBtn = document.getElementById('newsletterSubmitBtn');

  // Add click event listener to the submit button
  submitBtn.addEventListener('click', function() {
    // Get the entered email
    const email = emailInput.value;

    // Construct the email body
    const emailBody = `Hi Linda\n\nPlease add me to your mailing list for the monthly Newsletter.\n\nRegards\n\n${newsletterName}`;

    // Construct the mailto link
    const mailtoLink = `mailto:support@durbanfurbabies.co.za?subject=Newsletter&body=${emailBody}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  });
});