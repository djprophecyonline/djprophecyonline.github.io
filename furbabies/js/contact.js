document.addEventListener('DOMContentLoaded', function() {
  // Select the form element
  const form = document.getElementById('contactForm');

  // Add submit event listener to the form
  form.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get form data
    const contactName = document.getElementById('contactName').value;
    // const contactEmail = document.getElementById('contactEmail').value;
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value;

    // Construct the email body
    const emailBody = `Name: ${contactName}\nSubject: ${contactSubject}\nMessage: ${contactMessage}`;

    // Construct the mailto link
    const mailtoLink = `mailto:linda@durbanfurbabies.co.za?subject=Fur Babies - Contact&body=${emailBody}`;

    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
  });
});