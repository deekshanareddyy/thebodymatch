document.addEventListener('DOMContentLoaded', function() {
  // DOM Elements
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const closeBtn = document.querySelector('.close-btn');
  const sendOtpBtn = document.getElementById('sendOtpBtn');
  const verifyOtpBtn = document.getElementById('verifyOtpBtn');
  const otpSection = document.getElementById('otpSection');
  const phoneInput = document.getElementById('phoneNumber');
  const otpInput = document.getElementById('otpInput');
  const countryCode = document.getElementById('countryCode');

  // Open Modal
  loginBtn.addEventListener('click', function() {
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  // Close Modal
  function closeModal() {
    loginModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    resetForm();
  }

  closeBtn.addEventListener('click', closeModal);
  loginModal.addEventListener('click', function(e) {
    if (e.target === loginModal) closeModal();
  });

  // Send OTP
  sendOtpBtn.addEventListener('click', function() {
    const phoneNumber = countryCode.value + phoneInput.value.trim();
    
    if (!phoneInput.value.trim()) {
      alert('Please enter a valid phone number');
      return;
    }
    
    console.log('Sending OTP to:', phoneNumber);
    // Replace with actual Twilio API call
    
    // Simulate OTP sent
    setTimeout(() => {
      sendOtpBtn.style.display = 'none';
      otpSection.style.display = 'block';
    }, 1000);
  });

  // Verify OTP
  verifyOtpBtn.addEventListener('click', function() {
    const otp = otpInput.value.trim();
    
    if (!otp) {
      alert('Please enter the OTP you received');
      return;
    }
    
    console.log('Verifying OTP:', otp);
    // Replace with actual OTP verification
    
    // Simulate successful verification
    setTimeout(() => {
      alert('Login successful! Redirecting...');
      closeModal();
    }, 1000);
  });

  // Reset form
  function resetForm() {
    phoneInput.value = '';
    otpInput.value = '';
    otpSection.style.display = 'none';
    sendOtpBtn.style.display = 'block';
  }
});