document
  .getElementById('registrationForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Here you can perform validation or send data to the backend
    // For simplicity, let's log the data
    console.log('Nama: ' + name);
    console.log('Email: ' + email);
    console.log('Telepon: ' + phone);

    // You can add code here to send the data to your backend using fetch or AJAX

    // Simulate a successful registration
    // For demonstration purposes, we'll display a message
    var successMessage = document.createElement('p');
    successMessage.textContent =
      'Pendaftaran berhasil untuk ' + name + '! Terima kasih.';
    successMessage.style.color = 'green';

    // Clear form fields after successful registration
    document.getElementById('registrationForm').reset();

    // Append success message to the form
    var form = document.getElementById('registrationForm');
    form.parentNode.insertBefore(successMessage, form.nextSibling);

    // Automatically hide the success message after 5 seconds (optional)
    setTimeout(function () {
      successMessage.style.display = 'none';
    }, 5000); // 5000 milliseconds = 5 seconds
  });
