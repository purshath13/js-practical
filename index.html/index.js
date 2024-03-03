  function generateCaptcha() {
    var captcha = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return captcha;
  }

  function displayCaptcha() {
    var captchaText = generateCaptcha();
    var captchaImage = document.getElementById('captcha-image');
    captchaImage.innerHTML = captchaText;
  }
  function validateCaptcha() {
    var userInput = document.getElementById('captcha-input').value;
    var captchaText = document.getElementById('captcha-image').innerHTML;

    if (userInput === captchaText) {
      alert('CAPTCHA verification successful!');

    } else {
      alert('CAPTCHA verification failed. Please try again.');
      
    }
  }
  window.onload = function() {
    displayCaptcha();
  };


