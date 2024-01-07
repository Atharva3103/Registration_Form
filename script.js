function submitForm() {
    var fullName = document.getElementById('fullName').value;
    if (fullName.trim() === '') {
      alert('Please enter your full name.');
      return;
    }
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
  }
  