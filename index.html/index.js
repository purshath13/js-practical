   function generateCaptcha() {
    let captcha = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 6; i++) {
      captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return captcha;
  }

  
  function displayCaptcha() {
    const captchaText = generateCaptcha();
    const captchaImage = document.getElementById('captcha-image');
    captchaImage.innerHTML = captchaText;
  }


  function validateCaptcha() {
    const userInput = document.getElementById('captcha-input').value;
    const captchaText = document.getElementById('captcha-image').innerHTML;

    if (userInput === captchaText) {
      alert('CAPTCHA verification successful!');
      
    } else {
      alert('CAPTCHA verification failed. Please try again.');
      displayCaptcha(); 
      document.getElementById('captcha-input').value = ''; 
    }
  }
  window.onload = function() {
    displayCaptcha();
  };
